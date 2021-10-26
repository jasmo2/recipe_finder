import type { NextPage } from 'next'
import { useRandomRecipesContext } from '../providers/RandomRecipeProvider'


const App: NextPage = () => {
    const state = useRandomRecipesContext()
    console.log("TCL ~ file: index.tsx ~ line 7 ~ state", state)
    return (
        <h1>Home Page</h1>
    )
}

export default App
