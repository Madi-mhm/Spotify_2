"use client"

import './details.scss'
import { BiShareAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import Header from '../Header/Header';
import SmallCards from '../Cards/SmallCards';
import { useEffect, useState } from 'react';


const Details = (
    {title,
    imageUrl,
    artistName,
    releaseDate,
    tracks,
    topTracks,
    type,
    albumId
    }
    ) =>{       
        
    const [songNames, setSongNames] = useState()
    const [isFavorite, setIsFavorite] = useState(false)
    const getTracks = songNames?.tracks || []

    useEffect(()=>{
        if(getTracks){
            setSongNames(topTracks)
        }
    }, [topTracks])

    const tracksData = getTracks.map(item => {
        return item
    })

    // Favorite Icon
    const handleHeartClick = () =>{
        const savedData = localStorage.getItem('songDetailsData');
        let favoriteData = savedData ? JSON.parse(savedData) : [];

        const isCurrentFavorite = favoriteData.some(item => item.title === title);        

        // Save the current data of SmallCards to local storage
        if(isCurrentFavorite){
            // Remove the data from favorites
            
            favoriteData = favoriteData.filter(item => item.title !== title);
            localStorage.setItem('songDetailsData', JSON.stringify(favoriteData));
            setIsFavorite(false);
        }else{
            // Save the current data to favorites
            const songDetailsData = {
                title: title,
                imageUrl: imageUrl,
                artistName: artistName,
                releaseDate: releaseDate,
                tracks: tracks, 
                topTracks: topTracks,
                albumId: albumId,
                type: type
            };
            favoriteData.push(songDetailsData);
            localStorage.setItem('songDetailsData', JSON.stringify(favoriteData));
            setIsFavorite(true);

        }
        
    }

    // check if the currentData exist in localStorage
    useEffect(()=>{
        const savedData = localStorage.getItem('songDetailsData')
        const favoriteData = savedData ? JSON.parse(savedData) : []
        const isCurrentFavorite = favoriteData.some(item => item.title === title)

        setIsFavorite(isCurrentFavorite)
    })
    
    return(
        <>
        <Header/>
        <div className='detailsPageContainer'>
            <div className='detailsIconsContainer'>
                <div className='detailsIcons'><BiShareAlt/></div>
                <div className='detailsIcons' onClick={handleHeartClick} >
                    {!isFavorite ? (
                        <AiOutlineHeart />
                    ) : (
                        <AiOutlineHeart className='heartIcon' />
                    )}
                </div>
            </div>
            <div className='songsDetails'>
                <div className='detailsPageImage'>
                    <img src={imageUrl} />
                </div>
                <div className='detailsPageNameAndDescription'>
                    <h3>{title}</h3>
                    <p>Artist: {artistName}</p>
                    <p>{releaseDate}</p>
                    <p>{type}</p>
                </div>
                <div className='detailsPageLikesAndduration'>
                    <p>{tracks} . Songs</p>
                </div>
                <div className='detailsPagePlayButton'>
                 <AiFillPlayCircle/>
                </div>
            </div>

            <div className='albumsSongs' >
                {tracksData &&
                    tracksData.map((item) => (
                        <SmallCards
                            key={item.id}
                            songsName={item.name}
                            artistsName={item.artists[0].name}
                            image={item.album.images[1].url}
                        />                    
                    ))
                }
            </div>

        </div>
        </>

    )
}

export default Details


