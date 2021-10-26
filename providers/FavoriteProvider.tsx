import React, {
  FC,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import omit from 'lodash/omit'

import { useContextFactory } from './ContextFactory'
import { RecipeApi, Recipe } from '../api'


const FAVORITES_KEY = 'favorites'

type State = Record<string, Recipe> | undefined
const FavoritesContext = createContext<State>(undefined)
export const useFavoritesContext = useContextFactory(
  'FavoritesContext',
  FavoritesContext
)

type Dispatch = (recipe: Recipe) => void | undefined
const FavoritesDispatchContext = createContext<Dispatch>(undefined)
export const useFavoritesDispatchContext = useContextFactory(
  'FavoritesDispatchContext',
  FavoritesDispatchContext
)

export const FavoritesContextProvider: FC = ({ children }) => {
  const [isHydrated, setHidrated] = useState(false)
  const [favorites, setFavorites] = useState<State>({})

  useEffect(() => {
    const cacheFavorites = JSON.parse(
      localStorage.getItem(FAVORITES_KEY) || '{}'
    )

    setFavorites(cacheFavorites)
    setHidrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
    }
  }, [favorites, isHydrated])

  const toggle = useCallback(
    (recipe: Recipe) => {
      if (favorites[recipe.id]) {
        setFavorites(omit(favorites, recipe.id))
      } else {
        setFavorites(Object.assign({}, favorites, { [recipe.id]: recipe }))
      }
    },
    [favorites, setFavorites]
  )

  return (
    <FavoritesContext.Provider value={favorites}>
      <FavoritesDispatchContext.Provider value={toggle}>
        {children}
      </FavoritesDispatchContext.Provider>
    </FavoritesContext.Provider>
  )
}

