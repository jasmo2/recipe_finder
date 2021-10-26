import React, { useReducer, useEffect, createContext, FC } from 'react'
import { DateTime } from "luxon"

import { range, uniqBy } from 'lodash'

import { Recipe, RecipeApi } from '../api'
import { useContextFactory } from './ContextFactory'

type Action =
    | { type: 'refresh'; payload: { meals: Recipe[] } }
    | { type: 'error'; payload: { message: string } }
    | { type: 'loading' }

export type RecipesOfTheDayContexState = {
    meals: Recipe[]
    loading?: boolean
    error?: string
    timestamp: number | null
}

const RandomRecipesContext = createContext<
    RecipesOfTheDayContexState | undefined
>(undefined)

const TODAY_RECIPES = 'today_recipes'

function recipesReducer(
    state: RecipesOfTheDayContexState,
    action: Action
): RecipesOfTheDayContexState {
    switch (action.type) {
        case 'refresh': {
            return {
                ...state,
                meals: action.payload.meals,
                timestamp: +new Date(),
                error: undefined,
                loading: false,
            }
        }
        case 'loading': {
            return {
                ...state,
                loading: true,
                error: undefined,
            }
        }
        case 'error': {
            return {
                ...state,
                loading: false,
                error: action.payload.message,
            }
        }
        default: {
            throw new Error(`Unhandled action: ${action}`)
        }
    }
}


function isDateDifferenceZero(timestamp: number): boolean {
    const timestampParsed = DateTime.fromJSDate(new Date(timestamp))
    return timestampParsed.diffNow().days === 0
}

export const RandomRecipesContextProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(recipesReducer, {
        meals: [],
        timestamp: null,
    })

    useEffect(() => {
        const {
            error,
            loading,
            meals,
            timestamp,
        } = state
        if (
            loading || error ||
            (timestamp !== null && meals.length && isDateDifferenceZero(timestamp))
        ) {
            return
        }

        const setRecipesOfTheDay = async () => {
            try {
                dispatch({
                    type: 'loading',
                })
                const meals = await fetchTodayRecipes()
                dispatch({
                    type: 'refresh',
                    payload: { meals },
                })
            } catch (error) {
                console.error(error)
                dispatch({
                    type: 'error',
                    payload: { message: 'error fetching the recipes of the day' },
                })
            }
        }

        setRecipesOfTheDay()
    }, [state])

    return (
        <RandomRecipesContext.Provider value={state}>
            {children}
        </RandomRecipesContext.Provider>
    )
}

export const useRandomRecipesContext = useContextFactory(
    'RandomRecipesContext',
    RandomRecipesContext
)

const fetchTodayRecipes = async () => {
    // check if they are already stored
    const cachedValue: { recipe?: Recipe[]; timestamp?: number } = JSON.parse(
        localStorage.getItem(TODAY_RECIPES) || '{}'
    )

    if (
        cachedValue &&
        cachedValue.recipe?.length === 5 &&
        cachedValue.timestamp &&
        isDateDifferenceZero(cachedValue.timestamp)
    ) {
        return cachedValue.recipe
    }

    let numRecipes = 5
    let recipes: Recipe[] = []
    do {
        recipes = recipes.concat(
            await Promise.all(
                range(numRecipes).map(() => RecipeApi.getRandomRecipe())
            )
        )

        recipes = uniqBy(recipes, 'id')
        numRecipes -= recipes.length

    } while (numRecipes > 0)


    localStorage.setItem(
        TODAY_RECIPES,
        JSON.stringify({ recipes, timestamp: +new Date() })
    )

    return recipes
}
