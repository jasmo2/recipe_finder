import { useRouter } from 'next/dist/client/router'
import { Recipe } from '../../api'
import { FavoriteToggleButton } from '../IconButton'
import { IconButton } from '../IconButton/BaseButton'

export interface Props {
  recipe?: Recipe
}

export const BackNFavorite = ({ recipe }: Props) => {
  // console.log("TCL ~ file: Favorite.tsx ~ line 10 ~ Favorite ~ recipe", recipe)
  const router = useRouter()
  return (
    <nav>

      <IconButton icon="back-arrow" aria-label="go back" onClick={router.back} />
      <FavoriteToggleButton recipe={recipe} />

    </nav>
  )
}
