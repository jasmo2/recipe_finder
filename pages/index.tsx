import { NextPage } from 'next'
import Home from '../components/home'
import { SearchContextProvider } from '../providers/SearchProvider'

const App: NextPage = () => <SearchContextProvider><Home /></SearchContextProvider>
export default App
