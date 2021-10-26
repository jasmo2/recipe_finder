import { Recipe } from '../../api'
import theme from '../../styles/theme'
import { Card } from './Card'

export interface Props {
  recipes: Recipe[]
}

export const RecipesGrid = ({ recipes }: Props) => {
  return (
    <>
      <div>
        {recipes.map((recipe) => {
          return (
            <Card
              key={recipe.id}

              title={recipe.name}
              src={recipe.image}
              url={`/${recipe.slug}`}
            />
          )
        })}
      </div>
      <style jsx>{`
      div {
        display: grid;
        grid-template-columns: auto;
      }
      @media screen and (min-width: ${theme.breakpoints.md}px) {
        div{
          grid-template-columns: auto auto;
          column-gap: ${theme.space.sm}px;
          row-gap: ${theme.space.md}px;
        }
      }
      `}</style>
    </>
  )
}
