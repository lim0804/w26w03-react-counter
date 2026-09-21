import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  /*const plusOne = (prev:number) => prev +1 이방식은 typescript에서만 사용가능 */

  return (
    <>
      <h1>{count}</h1>
      <button 
        onClick={ () => {
          setCount(prev => prev +1)
      } }>
        1씩 증가
      </button>
      <button
        onClick={()=> {
          setCount(prev => prev +1)
          setCount(prev => prev +1)
        }}>
          2씩 증가
      </button>
      <button
        onClick={()=> {
          setCount(prev => prev -1)
          
        }}>
          1씩 감소
      </button>
      <button
        onClick={()=> {
          setCount(prev => prev -1)
          setCount(prev => prev -1)
          
        }}>
          2씩 감소
      </button>
    </>
  )
}

export default App

