import React, { useReducer, useEffect, createContext, FC } from 'react'
import { DateTime } from "luxon"

import { range, uniqBy } from 'lodash'

import { Recipe, RecipeApi } from '../api'
import { useContextFactory } from './ContextFactory'

type Action =
    | { type: 'refresh'; payload: { recipes: Recipe[] } }
    | { type: 'error'; payload: { message: string } }
    | { type: 'loading' }

export type RecipesOfTheDayContexState = {
    recipes: Recipe[]
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
                recipes: action.payload.recipes,
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
    console.log("TCL ~ file: RandomRecipeProvider.tsx ~ line 64 ~ isDateDifferenceZero ~ timestampParsed", timestampParsed)
    return timestampParsed.diffNow().days === 0
}

export const RandomRecipesContextProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(recipesReducer, {
        recipes: [],
        timestamp: null,
    })

    useEffect(() => {
        const {
            error,
            loading,
            recipes,
            timestamp,
        } = state
        if (
            loading || error ||
            (timestamp !== null && recipes.length && isDateDifferenceZero(timestamp))
        ) {
            return
        }

        const setTodayRecipes = async () => {
            try {
                dispatch({
                    type: 'loading',
                })
                const recipes = await fetchTodayRecipes()
                dispatch({
                    type: 'refresh',
                    payload: { recipes },
                })
            } catch (error) {
                console.error(error)
                dispatch({
                    type: 'error',
                    payload: { message: 'error fetching the recipes of the day' },
                })
            }
        }

        setTodayRecipes()
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
    const cachedValue: { recipes?: Recipe[]; timestamp?: number } = JSON.parse(
        localStorage.getItem(TODAY_RECIPES) || '{}'
    )

    let numRecipes = 5

    if (
        cachedValue &&
        cachedValue.recipes?.length === numRecipes &&
        cachedValue.timestamp &&
        isDateDifferenceZero(cachedValue.timestamp)
    ) {
        return cachedValue.recipes
    }

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
