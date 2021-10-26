import { kebabCase, range } from "lodash"

import { Ingredient, Recipe, ResponseObject } from "./recipe.types"

export const recipeFormatting = (recipe: ResponseObject): Recipe => ({
  id: recipe.idMeal,

  image: recipe.strMealThumb,
  ingredients: extractIngredients(recipe),
  instructions: recipe.strInstructions,
  name: recipe.strMeal,
  slug: generateSlug(recipe),
})

const generateSlug = (recipe: ResponseObject) =>
  `${kebabCase(recipe.strMeal)}-${recipe.idMeal}`

/**
 * Based on the APi response that returns 20 ingredients
 */
const PREFIX_INGRIDENT = "strIngredient"
const PREFIX_MEASURE = "strMeasure"
export const extractIngredients = (recipe: ResponseObject): Ingredient[] => {
  const result: Ingredient[] = []
  return range(1, 21).reduce((total, current) => {
    const name = recipe[`${PREFIX_INGRIDENT}${current}` as keyof typeof recipe]
    if (name) {
      total.push({
        name,
        measure: recipe[`${PREFIX_MEASURE}${current}` as keyof typeof recipe],
      })
    }
    return total
  }, result)
}
