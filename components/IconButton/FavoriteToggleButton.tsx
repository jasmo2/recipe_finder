import isUndefined from 'lodash/isUndefined'
import { Recipe } from '../../api'
import { IconButton } from './BaseButton'

import {
  useFavoritesContext,
  useFavoritesDispatchContext
} from '../../providers/FavoriteProvider'

type Props = {
  recipe: Recipe
}

export const FavoriteToggleButton = ({ recipe }: Props) => {
  const favorites = useFavoritesContext()
  const toogleFavorite = useFavoritesDispatchContext()

  if (isUndefined(recipe)) return null

  const variant = favorites[recipe.id] ? 'heart-filled' : 'heart'

  return (
    <IconButton
      aria-label="add to favorites"
      icon={variant}
      onClick={() => toogleFavorite(recipe)}
    />
  )
}
