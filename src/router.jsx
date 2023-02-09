import { createBrowserRouter } from 'react-router-dom'

import Home from './views/Home'
import BookView from './views/BookView'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home  />
    },
    {
        path: '/bookview',
        element: <BookView  />
    },
])

export default router