import './Home.css'

import { useNavigate } from 'react-router-dom'

import books from '../assets/childrensbooks.json'
import BookSmall from '../components/BookSmall/BookSmall'


function Home({ setBookIndex }) {

    const navigate = useNavigate()

    function clickHandler(event) {
        const target = event.currentTarget.id

        setBookIndex(Number(target) - 1)
        navigate('/bookview')
    }

    const bookElements = books.map(book => {
        return (
            <BookSmall 
            clickHandler={ clickHandler } 
            id={ book.id } 
            key={ book.id } 
            title={ book.title } 
            author={ book.author } 
            color={ book.color } />
        )
    })

    return (
        <section className='view view--home'>
            <h1>8 Classic Children's Books</h1>
            <section className='books-container'>
                { bookElements }
            </section>
        </section>
    )
}


export default Home