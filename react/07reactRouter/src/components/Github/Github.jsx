import React, { useEffect , useState} from 'react'

import { useLoaderData } from 'react-router'

function Github() {
 const data =  useLoaderData() ; 
  // const[data , setData] = useState({}) 
  // useEffect(()=> {
  //   fetch('https://api.github.com/users/PrinceS45').then(response=>response.json()).then(data => {
  //     setData(data); 
  //   })
  // } , [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white
    p-4 text-3xl'>
      Github followers: {data.followers}
      <img className='text-center m-4' src={data.avatar_url} alt='Git picture' width={300} /> 
    </div>
  )
}

export default Github

export const gihubInfoLoder = async () => {
  const response = await fetch('https://api.github.com/users/PrinceS45')

  return response.json() ;
}
