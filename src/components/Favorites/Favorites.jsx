"use client"

import ArtistProfile from "../Cards/ArtistProfile/ArtistProfile";
import BigCards from "../Cards/BigCards";
import SmallCards from "../Cards/SmallCards";
import Header from "../Header/Header";
import "./favorites.scss"
import { Fragment, useEffect, useState } from "react";

const Favorites = () =>{


    // Get data saved data from localStorage for creating big cards
    const [getAlbumData, setGetAlbumData] = useState()
    useEffect(()=>{
        if(typeof window !== 'undefined'){
            const albumData = localStorage.getItem('songDetailsData')
            const parseData = albumData ? JSON.parse(albumData) : []
            setGetAlbumData(parseData)
        }
    }, [])

    // Get data saved data from localStorage for creating small cards
    const [getSmallCardsData, setGetSmallCardsData] = useState()
    useEffect(()=>{
        if(typeof window !== 'undefined'){
            const cardData = localStorage.getItem('singleSongData')
            const parseData = cardData ? JSON.parse(cardData) : []
            setGetSmallCardsData(parseData)
        }
    },[])


   
    
    return (
        <>
        <Header/>
        <div className="favoritesPageContainer">
            <div className="privatProfile">
                <ArtistProfile
                    name={"your Account name"}
                />
            </div>

            <div className="favoritesItems">
                <div className="bigCardsFavoriteItems">
                    {getAlbumData &&
                      getAlbumData.map((item, index) => (
                        <Fragment key={index}>
                            <BigCards
                            date={item.releaseDate}
                            imageUrl={item.imageUrl}
                            name={item.title}
                            albumId={item.albumId}
                            type={item.type}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
            <div>
            <div className="smallCardsFavoriteItems">
                    {getSmallCardsData && getSmallCardsData.map((item, index) =>{
                        return (
                            <Fragment key={index}>
                                <SmallCards 
                                    artistsName={item.artistsName}
                                    image={item.image}
                                    songsName={item.songsName}
                                />
                            </Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
        </>

    )
}

export default Favorites