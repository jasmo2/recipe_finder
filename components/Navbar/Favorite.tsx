import { useRouter } from 'next/dist/client/router'
import { Recipe } from '../../api'
import { IconButton } from '../IconButton/BaseButton'

export interface Props {
  recipe?: Recipe
}

export const Favorite = ({ recipe }: Props) => {
  console.log("TCL ~ file: Favorite.tsx ~ line 10 ~ Favorite ~ recipe", recipe)
  const router = useRouter()
  return (
    <nav>

      <IconButton icon="back-arrow" aria-label="go back" onClick={router.back} />

      {
        recipe &&
        <IconButton
          aria-label="add to favorites"
          icon='heart'
          onClick={() => { /** TODO implement ADD to favorites */ }}
        />
      }
    </nav>
  )
}
