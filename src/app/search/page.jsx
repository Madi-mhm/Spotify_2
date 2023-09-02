import SearchCall from '@/components/Search/SearchCall';

import {getSpotifyAuthToken } from '@/api/api';


const SearchPage = async () =>{

    const token = await getSpotifyAuthToken();

   
    return (
        <>
            <SearchCall token={token}/> 
        </>
    )
}

export default SearchPage






