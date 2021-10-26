import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../components/Container'
import { Hero } from '../components/home/Hero'
import { RecipesGrid } from '../components/Recipe/Grid'

import { RecipesOfTheDayContexState, useRandomRecipesContext } from '../providers/RandomRecipeProvider'


const App: NextPage = () => {
  const state = useRandomRecipesContext()

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Checkout today's recipes" />
      </Head>

      <Container>
        <Hero text={getState(state)} />
        <RecipesGrid recipes={state.recipes} />
      </Container>
    </>
  )
}

function getState({ loading, error }: RecipesOfTheDayContexState) {
  if (loading) {
    return 'Loading recipes of the day...'
  }

  if (error) {
    return 'Oops! we are having some issues loading recipes of the day. Please try later.'
  }
  return 'Recipes of the day'
}


export default App
