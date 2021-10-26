import { Ingredient } from '../../api'
import theme from '../../styles/theme'

export interface Props {
  ingredients: Ingredient[]
}

export const Ingredients = ({ ingredients }: Props) => {
  return (
    <>
      <ul>
        {ingredients.map(({ name, measure }, index) => {
          return (
            <li key={`${name}-${index}`}>
              {measure} {name}
            </li>
          )
        })}
      </ul>

      <style jsx>{`
        li {
          padding-bottom: ${theme.space.xs}px;
        }
    `}</style>
    </>
  )
}
