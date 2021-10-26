import axios, { CancelTokenSource } from 'axios'
import { useEffect, useRef, useState } from 'react'
import { RecipeApi } from '../../api'


import { useGlobalSearchContext, useGlobalSearchResultsActionsContext } from '../../providers/SearchProvider'
import theme from '../../styles/theme'


const MIN_CHARS = 2

export interface Props {
  placeholder: string
  defaultValue?: string
}

export const Input = ({ placeholder }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null)
  const [value, setValue] = useState('')
  const setGlobalSearchResults = useGlobalSearchResultsActionsContext()
  const isSearching = useGlobalSearchContext()


  useEffect(() => {
    if (isSearching) {
      inputRef.current?.focus()
    } else {
      setValue('')
      setGlobalSearchResults([])
    }
  }, [isSearching])

  useEffect(() => {
    const currentSource = cancelTokenSourceRef.current
    if (currentSource) {
      currentSource.cancel('New recipe search.')
    }

    const source = axios.CancelToken.source()
    cancelTokenSourceRef.current = source

    const search = async () => {
      try {
        const results = await RecipeApi.searcRecipeByName(value, {
          cancelToken: source.token,
        })

        setGlobalSearchResults(results)
      } catch (error: any) {
        if (axios.isCancel(error)) {
          console.log('New recipe search.', error.message)
        } else {
          console.error(error)
        }
      }
    }

    if (value.length >= MIN_CHARS && isSearching) {
      search()
    } else {
      setGlobalSearchResults([])
    }

    return () => {
      source.cancel('axios request cancelled')
    }
  }, [value])

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <style jsx>{`
        input {
          background-color: transparent;
          border: none;
          caret-color: currentcolor;
          color: ${theme.colors.white};
          font-family: ${theme.fonts.body};
          font-size: ${theme.fontSizes.h3}px;
          font-weight: 300;
        }

        input::placeholder {
          color: ${theme.colors.white};
        }
        `}</style>
    </>
  )
}
