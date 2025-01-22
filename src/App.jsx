import './App.css'
import {HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { AppRouter } from './router/AppRouter'
import {NavBar, WspButton, Footer} from './ui/'

function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <CartProvider>
      <NavBar/> 
      <div className="contain">
        <AppRouter />
      </div>
      <WspButton/>
      <Footer/>
      </CartProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
