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
        grid-template-columns: 100%;
        row-gap: ${theme.space.md}px;
      }
      @media screen and (min-width: ${theme.breakpoints.md}px) {
        div{
          column-gap: ${theme.space.sm}px;
          grid-template-columns: auto auto;
        }
      }
      `}</style>
    </>
  )
}
