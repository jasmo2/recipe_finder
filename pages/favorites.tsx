import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../components/Container'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { RecipesGrid } from '../components/Recipe/Grid'

import { useFavoritesContext } from '../providers/FavoriteProvider'

const Home: NextPage = () => {
  const favorites = useFavoritesContext()

  return (
    <>
      <Head>
        <title>Recipe Finder | My Favorites</title>
        <meta name="description" content="Favorites recipes" />
      </Head>
      <Navbar variant='back' />

      <Container>
        <Hero title="Favorite Recipes" />
        <RecipesGrid recipes={Object.values(favorites)} />
      </Container>

    </>
  )
}

export default Home
