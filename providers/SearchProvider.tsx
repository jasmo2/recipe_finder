import React, { useState, createContext, FC } from 'react'

import { Recipe } from '../api'
import { useContextFactory } from './ContextFactory'

type GlobalSearch = boolean | undefined
const GlobalSearchContext = createContext<GlobalSearch>(undefined)
export const useGlobalSearchContext = useContextFactory(
  'GlobalSearchContext',
  GlobalSearchContext
)

type GlobalSearchActions = (arg: boolean) => void | undefined
const GlobalSearchActionsContext = createContext<GlobalSearchActions>(undefined)
export const useGlobalSearchActionsContext = useContextFactory(
  'GlobalSearchActionsContext',
  GlobalSearchActionsContext
)

type GlobalSearchResults = Recipe[] | undefined
const GlobalSearchResultsContext = createContext<GlobalSearchResults>(undefined)
export const useGlobalSearchResultsContext = useContextFactory(
  'GlobalSearchResultsContext',
  GlobalSearchResultsContext
)

type GlobalSearchResultsActions = (results: Recipe[]) => void | undefined
const GlobalSearchResultsActionsContext = createContext<GlobalSearchResultsActions>(undefined)
export const useGlobalSearchResultsActionsContext = useContextFactory(
  'GlobalSearchResultsActionsContext',
  GlobalSearchResultsActionsContext
)

/**
 * The idea is to expose the search ability to and search results on the components
 */
export const SearchContextProvider: FC = ({ children }) => {
  const [isSearching, setSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<Recipe[]>([])

  return (
    <GlobalSearchContext.Provider value={isSearching}>
      <GlobalSearchActionsContext.Provider value={setSearching}>
        <GlobalSearchResultsContext.Provider value={searchResults}>
          <GlobalSearchResultsActionsContext.Provider value={setSearchResults}>
            {children}
          </GlobalSearchResultsActionsContext.Provider>
        </GlobalSearchResultsContext.Provider>
      </GlobalSearchActionsContext.Provider>
    </GlobalSearchContext.Provider>
  )
}
