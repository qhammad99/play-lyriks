import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector(state => state.player);
    const { data, isFetching, error} = useGetSongsByCountryQuery(country);

    // get location
    useEffect(()=>{
        axios.get(`https://geo.ipify.org/api/v1?apiKey=at_DN2GU99tI2iSY1fFxs5ysbOhkDyPo`)
        .then(res => setCountry(res?.data?.location?.country))
        .catch(err => console.log("get country error: ", err))
        .finally(()=>setLoading(false));
    }, [country]);

    if(isFetching && loading) return <Loader title="Loading songs around you"/>;
    if(error && country){
        return (
            <>
                <Error />
                {
                    error.status == 422 &&
                    <p className='font-bold text-gray-100 mt-4 text-center' >Not Supported in {country}.</p>
                }   
            </>
        )
    } 

    return(
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white mt-4 mb-10'>Around You</h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song, i) => (
                    <SongCard 
                        key = {song.key}
                        song = {song}
                        isPlaying = {isPlaying}
                        activeSong = {activeSong}
                        data = {data}
                        i = {i}
                    />
                ))}
            </div>
        </div>
    );
}

export default AroundYou;
