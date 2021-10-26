import axios, { AxiosRequestConfig } from "axios"
import { geIidFromSlug, recipeFormatting } from "./utils"
import { Endpoints, Recipe, ResponseApi } from "./recipe.types"

const SECONDS = 5
const timeout = SECONDS * 1000 // multiply by 1000 to change to seconds

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

export const searcRecipeByName = async (
  name: string,
  config?: AxiosRequestConfig
): Promise<Recipe[]> => {
  const response = await requestClient.get<ResponseApi>(`${Endpoints.Search}`, {
    params: { s: name },
    ...config,
  })

  if (response.data.meals === null) return []

  return response.data.meals.map(recipeFormatting)
}

export const getRecipeBySlug = async (
  slug: string,
  config?: AxiosRequestConfig
): Promise<Recipe | null> => {
  const { id: i } = geIidFromSlug(slug)

  const response = await requestClient.get<ResponseApi>(`${Endpoints.Lookup}`, {
    params: { i },
    ...config,
  })

  const recipe = response.data.meals?.[0]

  if (!recipe) throw new Error("No Recipe matching.")

  return recipeFormatting(recipe)
}
