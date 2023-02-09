import './BookBig.css'

import { useNavigate } from 'react-router-dom'


function BookBig({title, author, color}) {

    const navigate = useNavigate()


    function btnBackHandler() {
        navigate('/')
    }

    return (
        <article className='book book--big' style={{background: `${ color }`}}>
            <button onClick={ btnBackHandler } className='book-view__back-btn'>Back</button>

            <section className='book__inner-container'>

                <h2>{ title }</h2>
                <p>{ author }</p>
            </section>
        </article>
    )
}

export default BookBig