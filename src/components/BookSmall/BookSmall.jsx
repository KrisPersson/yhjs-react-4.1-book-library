import './BookSmall.css'

import { Link } from 'react-router-dom'

function BookSmall({title, author, color, id, clickHandler}) {

    return (
        <section id={ id } onClick={ clickHandler } className='book book--small' style={{background: `${ color }`}}>
            <section className='book__inner-container'>

                <h2>{ title }</h2>
                <p>{ author }</p>
            </section>
        </section>
    )
}

export default BookSmall