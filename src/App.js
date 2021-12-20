import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './Components/CakeContainer'
import HooksCakeContainer from './Components/HooksCakeContainer'
import IceCreamContainer from './Components/IceCreamContainer'
import ItemContainer from './Components/ItemContainer'
import NewCakeContainer from './Components/NewCakeContainer'
import UserContainer from './Components/UserContainer'
import store from './redux/store'




function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <UserContainer />
                {/* <ItemContainer cake />
                <ItemContainer />
                <CakeContainer />
                <HooksCakeContainer />
                <IceCreamContainer />
                <NewCakeContainer /> */}
            </div>
        </Provider>
    )
}

export default App
