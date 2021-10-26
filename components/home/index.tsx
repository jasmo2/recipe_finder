import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../Container'
import { Hero } from './Hero'
import { RecipesGrid } from '../Recipe/Grid'
import { SearchButton } from '../IconButton'

import {
  RecipesOfTheDayContexState,
  useRandomRecipesContext
} from '../../providers/RandomRecipeProvider'
import {
  useGlobalSearchContext,
  useGlobalSearchResultsContext
} from '../../providers/SearchProvider'

import theme from '../../styles/theme'
import { Navbar } from '../Navbar'

type SearchingProps = {
  areNoRecipies: boolean,
  isSearching: boolean,
  state: RecipesOfTheDayContexState,
}

const Home: NextPage = () => {
  const state = useRandomRecipesContext()
  const results = useGlobalSearchResultsContext()
  const isSearching = useGlobalSearchContext()

  const isVisible = !isSearching
  const recipes = isSearching ? results : state.recipes

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Checkout today's recipes" />
      </Head>
      <Navbar variant='search' />
      <Container>

        <SearchingContainer
          areNoRecipies={areRecipes(recipes)}
          isSearching={isSearching}
          state={state}
        />

        <RecipesGrid recipes={recipes} />
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
    </  >
  )
}

function SearchingContainer({ isSearching, state, areNoRecipies }: SearchingProps) {
  return (<>
    {!isSearching &&
      <Hero text={getState(state)} />
    }
    {
      isSearching && areNoRecipies && (
        <h2>no results</h2>
      )
    }
  </>)
}

function areRecipes(recipes) {
  return recipes.length === 0
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


export default Home
