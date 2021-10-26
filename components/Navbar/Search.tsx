import { useEffect, useRef } from 'react'

import { useGlobalSearchActionsContext, useGlobalSearchContext } from '../../providers/SearchProvider'
import { IconButton } from '../IconButton/BaseButton'
import { Input } from './Input'

export const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const setGlobalSearchOn = useGlobalSearchActionsContext()
  const isSearching = useGlobalSearchContext()


  useEffect(() => {
    if (isSearching) {
      inputRef.current?.focus()
    }
  }, [inputRef, isSearching])

  return (
    <>
      <nav data-test="search-navbar">
        <div>
          <IconButton
            aria-label="go back"
            icon="back-arrow"
            onClick={() => setGlobalSearchOn(false)}
          />
          <Input placeholder="I'm craving..." defaultValue="pan" />
        </div>
      </nav >

      <style jsx>{`
        div { 
          align-items: center;
          display: flex;
        }
        nav {
          left: 0;
          position: fixed;
          top: 0;
          transform: ${isVisible(isSearching)};
          transition: transform 150ms ease-in-out;
          z-index: 1;
        }
        `}</style>
    </>
  )
}

function isVisible(visible: boolean) {
  return visible ? `translate3d(0, 0, 0)` : `translate3d(0, -200px, 0)`
}