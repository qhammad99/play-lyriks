import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div style = {{position: 'absolute', width:'100%', overflowY:'hidden', top:0, bottom:0}}>
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] flex xl:flex-row flex-col-reverse hide-scrollbar testingJustSmall">
          <div className="flex-1 h-[100%] pb-40 hide-scrollbar xl:overflow-y-scroll testingInnerScroll">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>

          <div className="xl:sticky relative xl:bg-gradient-to-l from-transparent to-[#333369] xl:-mt-[72px] -mt-0 xl:pt-5 pt-0 ">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        // <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
        <div className="absolute h-28 bottom-0 left-0 right-0 flex bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
    </div>
  );
};

export default App;
