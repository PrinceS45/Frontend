import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

function MyApp() {
   return (
      <div>
        <h1>Custom App !</h1>
      </div>
   )
}

// const reactElement = {
//   type: 'a' , 
//   props : {
//          href: 'https://www.google.com' ,
//          target: 'blank' , 
//     } ,
//     children : 'Click me to visite google'
// }

const anotherElement = (
   <a href="https://google.com" target='blank'> Visit Google</a>
)



const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google'
);


createRoot(document.getElementById('root')).render(
  
    <App/>

)
