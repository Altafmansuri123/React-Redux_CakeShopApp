import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './Components/CakeContainer'
import HooksCakeContainer from './Components/HooksCakeContainer'
import store from './redux/store'




function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CakeContainer />
                <HooksCakeContainer />
            </div>
        </Provider>
    )
}

export default App
