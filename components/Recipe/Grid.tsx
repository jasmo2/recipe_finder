import { Recipe } from '../../api'
import theme from '../../styles/theme'

export interface Props {
  recipes: Recipe[]
}

export const RecipesGrid = ({ recipes }: Props) => {
  console.log("TCL ~ file: RecipesGrid.tsx ~ line 9 ~ RecipesGrid ~ recipes", recipes)
  return (
    <>
      <div>
        {recipes.map((recipe) => {
          return (
            
          )
        })}
      </div>
      <style jsx>{`
      div {
        display: grid;
        grid-template-columns: auto;
      }
      @media screen and (max-width: ${theme.breakpoints.md}px) {
        div{
          grid-template-columns: auto auto;
          column-gap: ${theme.space.sm}px;
        }
      }
      `}</style>
    </>
  )
}
