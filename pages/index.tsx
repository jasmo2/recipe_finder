import { NextPage } from 'next'
import Home from '../components/Home'
import { SearchContextProvider } from '../providers/SearchProvider'

const App: NextPage = () => <SearchContextProvider><Home /></SearchContextProvider>
export default App
