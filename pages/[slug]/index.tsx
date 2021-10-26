import Head from 'next/head'
import type { NextPage, GetStaticProps } from 'next'
import { Container } from '../../components/Container'
import { Image } from '../../components/Image'

import { Recipe, RecipeApi } from '../../api'
import { Navbar } from '../../components/Navbar'
import { H } from '../../components/Typography/H'
import theme from '../../styles/theme'
import { Ingredients, Instructions } from '../../components/Lists'



export interface DetailPageProps {
  recipe?: Recipe
}

const DetailPage: NextPage<DetailPageProps> = ({ recipe }) => {
  if (!recipe) {
    return null
  }
  const {
    image: src,
    ingredients,
    instructions,
    name,
  } = recipe

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={`Now learn how to prepare ${name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar variant="back&favorite" recipe={recipe} />

      <Container>
        <Image
          title={name}
          src={src}
        />
        <section className='recipe-details'>
          <H variant='h2'>{name}</H>
          <Ingredients ingredients={ingredients} />
          <Instructions title='Directions' instructions={instructions} />
        </section>
      </Container>

      <style jsx>{`
        .recipe-details {
          padding-top: ${theme.space.md}px;
          padding-left: ${theme.space.sm}px;
        }
      `}</style>
      <style jsx global>{`
        .recipe-details h2 {
          text-align: left;
          margin-bottom: ${theme.space.md}px;
        }
      `}</style>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    }
  }
  try {
    const recipe = await RecipeApi.getRecipeBySlug(params.slug as string)

    // Pass post data to the page via props
    return {
      props: { recipe },
      revalidate: 1,
    }
  } catch (error) {
    return {
      props: {},
      notFound: true,
    }
  }
}

export default DetailPage
