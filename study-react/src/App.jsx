import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button className="red-button">Click</button>
      <button className='blue-button'>Test2</button>

      {/* TODO yellow-buttonで黄色のボタンを作ってみる */}
      {/* TODO 高さ200px 横幅200pxのボタンを作ってみる。cssのwidth, heightを調べてみる */}
    </div>
  )
}

export default App
