import axios, { AxiosRequestConfig } from "axios"
import { recipeFormatting } from "./utils"
import { Endpoints, Recipe, ResponseApi } from "./recipe.types"

const SECONDS = 5
const timeout = SECONDS * 1000 // multiply by 1000 to change to seconds

console.log(
  "TCL ~ file: endpoints.ts ~ line 8 ~ process.env.BASE_URL",
  process.env.NEXT_PUBLIC_BASE_URL
)
const requestClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout,
})

export const getRandomRecipe = async (
  config?: AxiosRequestConfig
): Promise<Recipe> => {
  const response = await requestClient.get<ResponseApi>(
    `${Endpoints.Random}`,
    config
  )

  if (response.data.meals === null) {
    throw Error("random endpoint not working")
  }
  const recipe = response.data.meals[0]

  return recipeFormatting(recipe)
}
