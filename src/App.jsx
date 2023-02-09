import { useState } from 'react'
import './App.css'

import Home from './views/Home'
import BookView from './views/BookView'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import books from './assets/childrensbooks.json'



function App({ view }) {

  const [bookIndex, setBookIndex] = useState(1)

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Home setBookIndex={ setBookIndex }  />
    },
    {
        path: '/bookview',
        element: <BookView bookIndex={ bookIndex }  />
    },
  ])
  

  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  )
}

export default App
