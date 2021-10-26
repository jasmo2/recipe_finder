import { AppProps } from 'next/app'
import '../styles/reset.css'
import { RandomRecipesContextProvider } from '../providers/RandomRecipeProvider'


const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <RandomRecipesContextProvider>
            <Component {...pageProps} />
        </RandomRecipesContextProvider>
    )
}

export default MyApp
