import './ArtistProfileSection.scss'
import ArtistProfile from '../Cards/ArtistProfile/ArtistProfile'
import fetchSpotifyApi from '@/api/api'

const ArtistProfileSection = async () =>{
    const data = await fetchSpotifyApi('artists?ids=7dGJo4pcD2V6oG8kP0tJRR%2C1Xyo4u8uXC1ZmMpatF05PJ%2C66CXWjxzNUsdJxJ2JdwvnR%2C4dpARuHxo51G3z768sgnrY%2C7DUTsWY3RBd64vh8UtgtYA%2C72482nIO3fujPgLNJQWuCy')    


    return (
        <>

            {data.artists.map(item => {
                return( 
                    <div className='artistsProfile' >
                        <ArtistProfile  name={item.name} image={item.images[1].url}/>
                    </div>
                )
            })}

            
        </>
    )
}

export default ArtistProfileSection