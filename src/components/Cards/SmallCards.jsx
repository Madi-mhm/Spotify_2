"use client"

import './smallCards.scss'
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useState , useEffect  } from 'react';



const SmallCards = ({songsName, artistsName, image }) =>{

    const [isFavorite, setIsFavorite] = useState(false)

    const handleHeartClick = () => {
        const savedData = localStorage.getItem('singleSongData');
        let favoriteData = savedData ? JSON.parse(savedData) : [];

        const isCurrentFavorite = favoriteData.some(item => item.songsName === songsName);        

        // Save the current data of SmallCards to local storage
        if(isCurrentFavorite){
            // Remove the data from favorites
            favoriteData = favoriteData.filter(item => item.songsName !== songsName);
            localStorage.setItem('singleSongData', JSON.stringify(favoriteData));
            setIsFavorite(false);
            window.location.reload()


        }else{
            // Save the current data to favorites
            const singleSongData = {
                songsName: songsName,
                artistsName: artistsName,
                image: image,
            };
            favoriteData.push(singleSongData);
            setIsFavorite(true);
            localStorage.setItem('singleSongData', JSON.stringify(favoriteData));

        }

    }

    // check if the currentData exist in localStorage
    useEffect(()=>{
        const savedData = localStorage.getItem('singleSongData')
        const favoriteData = savedData ? JSON.parse(savedData) : []
        const isCurrentFavorite = favoriteData.some(item => item.songsName === songsName)

        setIsFavorite(isCurrentFavorite)
    })

    return(

        <div className="smallCards">
            <div className='leftSide'>
                <div className="smallCardsImage">
                    <img src={image} />
                </div>
                <div className="smallCardsInfo">
                    <h5>{songsName}</h5>
                    <p>{artistsName}</p>
                </div>
            </div >

            <div className='smallCardsIcons'>
                <div className="playIcon"><AiFillPlayCircle/></div>
                <div className='heartIcon' onClick={handleHeartClick}>
                    {!isFavorite ? (
                        <AiOutlineHeart />
                    ) : (
                        <AiOutlineHeart className='redHeartIcon' />
                    )}
                </div>
            </div>
        </div>
    )
}

export default SmallCards