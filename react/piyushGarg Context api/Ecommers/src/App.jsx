import { useState } from 'react'
import './App.css'
import Item from './items.jsx'
import Cart from './Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Item name= "MacBook pro" price={100000} />
     <Item name= "Pendrive" price={1000} />
     <Item name= "Mobile" price={100} />
     <Cart/>
    </div>
  )
}

export default App
