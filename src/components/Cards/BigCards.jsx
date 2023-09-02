import Link from 'next/link'
import './bigCards.scss'

const BigCards = ({name, imageUrl, type, date, albumId, }) => {
    return(
        <Link href={`/details/${albumId}`} className='cardLinkContainer'>
        <div className='cardContainer'>
            <div className='cardImageContainer'>
                <div className='cardImage'>
                    <img src={imageUrl} className='cardImageItem' />
                </div>
            </div>
            <div className='cardsInfoContainer'>
                <div className='cardsInfo'>
                <h4>{name}</h4>
                <p>{type} . {date} </p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default BigCards