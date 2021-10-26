import { IconButton } from './BaseButton'

import { useGlobalSearchActionsContext } from '../../providers/SearchProvider'


export const SearchButton = () => {
  const setGlobalSearchOn = useGlobalSearchActionsContext()

  return (
    <IconButton
      color="red"
      icon="search"
      aria-label="search a recipe"
      onClick={() => setGlobalSearchOn(true)}
    />
  )
}
