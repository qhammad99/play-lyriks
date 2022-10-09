import { Link } from "react-router-dom";

const DetailsHeader = ({artistId, artistData, songData}) => {
  
  // string for artist becoming too long that why we declared start common here
  const artists = artistData?.artists[artistId]?.attributes;
  
  return(
    <div className="relative w-full flex flex-col">
    
    {/* background */}
    <div className="w-full bg-gradient-to-l from-transparent to-black rounded-l-full sm:h-48 h-28" />

    {/* image and text container */}
    <div className="absolute inset-0 flex items-center">
      <img
        alt = "art"
        // replace is used to replace width and height inside url
        src = {
          artistId ? 
          artists?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
          : songData?.images?.coverart
        }
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />

      {/* text */}
      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">
          {artistId ? artists?.name : songData?.title}
        </p>
        {!artistId &&(
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
          <p className="text-base text-gray-400 mt-2">
            {songData?.subtitle}
          </p>
          </Link>
        )}
        <p className="text-base text-gray-400 mt-2">
          {artistId
            ? artists?.genreNames[0]
            : songData?.genres?.primary
          }
        </p>
      </div>
    </div>


    {/* <div className="w-full sm:h-44 h-24 bg-white" /> */}
  </div>
  );
}

export default DetailsHeader;
