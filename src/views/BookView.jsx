import BookBig from "../components/BookBig/BookBig"
import books from '../assets/childrensbooks.json'

import './BookView.css'


function BookView({ bookIndex }) {

    const book = books[bookIndex]

    return (
        <section className='view view--book-view'>
                <BookBig title={ book.title } author={ book.author } color={ book.color } />
                <section className="book-info">
                    <h2>{ book.title }</h2>
                    <h3>By { book.author }</h3>
                    <p>{ book.plot }</p>
                    <section className="book-info__book-details">
                        <p><span>Audience: </span> { book.audience }</p>
                        <p><span>First published: </span>{ book.year }</p>
                        <p><span>Pages: </span>{ book.pages }</p>
                        <p><span>Publisher: </span>{ book.publisher }</p>
                    </section>
                    <button>Oh, I want to read it!</button>
                </section>
            
        </section>
    )
}


export default BookView