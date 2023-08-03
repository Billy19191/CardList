import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import data from '../test.json'
const App = () => {
  const [count, setCount] = useState(0)
  // const data = [
  //   {
  //     id: 1,
  //     title: 'Item 1',
  //     detail: 'Test item 1',
  //   },
  //   {
  //     id: 2,
  //     title: 'Item 2',
  //     detail: 'Test item 2',
  //   },
  // ]
  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <p className="bg-sky-200 underline">Hello world!</p>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  return (
    <div>
      <h1 className="text-center mb-3 font-bold underline">
        Welcome to forum!
      </h1>
      <div className=" flex flex-row flex-wrap">
        {data.map((item) => (
          <Card data={item}></Card>
        ))}
      </div>
    </div>
  )
}

export default App
