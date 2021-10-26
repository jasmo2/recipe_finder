import { Ingredient } from '../../api'
import { Li } from './Li'

export interface Props {
  ingredients: Ingredient[]
}

export const Ingredients = ({ ingredients }: Props) => {
  return (
    <>
      <ul>
        {ingredients.map(({ name, measure }, index) => {
          return (
            <Li key={`${name}-${index}`}>
              {measure} {name}
            </Li>
          )
        })}
      </ul>

    </>
  )
}
