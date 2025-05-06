import { useState } from 'react'

import './App.css'

function App() {
  const [menu, setmenu] = useState(false)

  return (
    <>
      <div className='container'>
       <button onClick={()=>setmenu(!menu)} className='micon'>
        {menu ? <span>&times;</span>
            : <span>&#9776;</span>  
        }
        
        </button>
        <div className= {`Menu ${menu ? 'active' : ''}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Course</li>
            <li>Gallary</li>
            <li>Price</li>
            <li>Contact Us</li>
          </ul>
        </div>
        </div>

    </>
  )
}

export default App
