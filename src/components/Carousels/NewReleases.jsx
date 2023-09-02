import React from 'react';
import BigCards from '../Cards/BigCards';
import fetchSpotifyApi from '@/api/api';
import './newReleases.scss'

const NewReleasesSection = async () => {
  const apiData = await fetchSpotifyApi('browse/new-releases?country=US&offset=0');

  return (
    <div className='carouselCountainer'>
      {apiData?.albums.items.map((item) => {
        let imageUrl = "";

        // find images with 300px Width 
        const image300 = item.images.find((image)=> image.width === 300)
        if(image300){
          imageUrl = image300.url
        }


        return (
          <React.Fragment key={item.id}>
            <BigCards name={item.name} imageUrl={imageUrl} type={item.type} date={item.release_date} albumId={item.id} />
          </React.Fragment>
        );
        
      })}
    </div>
  );
};

export default NewReleasesSection;
