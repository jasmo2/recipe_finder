import '../styles/reset.css'

import { AppProps } from 'next/app'
import { RandomRecipesContextProvider } from '../providers/RandomRecipeProvider'
import { FavoritesContextProvider } from '../providers/FavoriteProvider'


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RandomRecipesContextProvider>
      <FavoritesContextProvider>
        <Component {...pageProps} />
      </FavoritesContextProvider>
    </RandomRecipesContextProvider>
  )
}

export default MyApp
