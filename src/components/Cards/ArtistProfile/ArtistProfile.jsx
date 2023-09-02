import './artistProfile.scss'

const ArtistProfile = ({name, image}) => {

   return (
    <> 
          
      <div className="artistProfile">
        <div className="artistprofilePic">
          <img src={image}/>
        </div>
        <div className="artistProfileInofs">
            <h5>{name}</h5>
            <p>See Profile</p>
        </div>
      </div>
      
    </>
   )
}

export default ArtistProfile