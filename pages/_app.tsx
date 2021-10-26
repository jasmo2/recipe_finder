import { AppProps } from 'next/app'
import '../styles/reset.css'


const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Component {...pageProps} />
    )
}

export default MyApp
