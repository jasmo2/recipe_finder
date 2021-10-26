import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../components/Container'
import { Hero } from '../components/home/Hero'
import { SearchButton } from '../components/IconButton'
import { RecipesGrid } from '../components/Recipe/Grid'

import { RecipesOfTheDayContexState, useRandomRecipesContext } from '../providers/RandomRecipeProvider'
import { SearchContextProvider } from '../providers/SearchProvider'
import theme from '../styles/theme'


const App: NextPage = () => {
  const state = useRandomRecipesContext()
  const isVisible = true

  return (
    <SearchContextProvider>
      <Head>
        <title>Home</title>
        <meta name="description" content="Checkout today's recipes" />
      </Head>

      <Container>
        <Hero text={getState(state)} />
        <RecipesGrid recipes={state.recipes} />
      </Container>

      <div className='action-buttons'>
        <SearchButton />
      </div>

      <style jsx>{`
        .action-buttons {
          bottom: 50px;
          position: fixed;
          right: 50px;
          transform: ${isVisible ? `translate3d(0, 0, 0)` : `translate3d(200px, 0, 0)`};
          transition: 150ms ease-in-out; 
          visibility: ${isVisible ? `visible` : `hidden`};
        }

        .action-buttons button {
          margin - bottom: ${theme.space.sm}px;
        }
      `}</style>
    </  SearchContextProvider>
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
