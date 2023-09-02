"use client"

import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from 'react';
import { fetchClientSpotifyApi, getSpotifyAuthToken } from '@/api/api';
import './search.scss'
import ArtistProfile from "../Cards/ArtistProfile/ArtistProfile";
import BigCards from "../Cards/BigCards";
import SmallCards from "../Cards/SmallCards";


const SearchCall = ({token}) =>{
    const [search, setSearch] = useState("")
    const [searchedData, setSearchedData] = useState();
    const [artistsTopTracks, setArtistsTopTracks] = useState();

    const handleSearchInput = (event)=>{
        setSearch(event.target.value)
    }

    const handleKeyDown = (event) => {
        if(search !== "" && event.keyCode === 13){
            handleSearchButton();
        }
    }

    const handleSearchButton = async () =>{

        // get albums and aritists
        const data = async () =>{
            const searchData = await fetchClientSpotifyApi(`search?q=${search}&type=album%2Cplaylist%2Cartist&market=fr&limit=25&offset=0`, token);
            return searchData
        };
        const searchedData = await data()
        setSearchedData(searchedData)

        // Get artists top tracks
        const getTrack = async () =>{
            const artistsID = searchedData.artists.items[0].id 
            const getArtistTopTrack = await fetchClientSpotifyApi(`artists/${artistsID}/top-tracks?market=us`, token)
            return getArtistTopTrack
        };
        const artistsTopTrack = await getTrack()
        setArtistsTopTracks(artistsTopTrack)
    }

    return (
        <main className='searchMainPage'>
            <div className="searchPage">
                <div className="searchSection">
                    <a href='./'><AiOutlineArrowLeft/></a>
                    <input type="text" placeholder="search your artist..." onChange={handleSearchInput} onKeyDown={handleKeyDown}/>
                    <span onClick={handleSearchButton}><BiSearch/></span>

                </div>
            </div>
            {searchedData && searchedData.artists.items.length > 0 && (
                <ArtistProfile name={searchedData?.artists.items[0].name} image={searchedData?.artists.items[0].images[2].url} />
            )}  
            
            <div className='homePageContainer'>
                <div className='homePageCarouselContainer'>
                  <div className='homePageCarousel'>
                    {searchedData && searchedData.albums.items.length > 0 && searchedData.albums.items.map(item =>( 
                        <BigCards 
                            name={item.name} 
                            type={item.type} 
                            imageUrl={item.images[1].url} 
                            date={item.release_date}
                            key={item.id}
                            albumId={item.id}
                        />
                    ))}  
                  </div>
                </div>
            </div> 

            <div className="ArtistsTracksContinaire">

                {artistsTopTracks && artistsTopTracks.tracks.map(item =>( 
                    <SmallCards 
                        key={item.id} 
                        songsName={item.album && item.album.name} 
                        artistsName={item.artists[0] && item.artists[0].name} 
                        image={item.album && item.album.images[1] && item.album.images[1].url}
                    />
                ))}

            </div>
            


     
            
        </main>
    )
}

export default SearchCall






