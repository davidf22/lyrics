import SongBar from './SongBar';

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handPlayClick, artistId }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3x1 text-white">Related Songs:</h1>

    <div className="mt-6 w-full flex flex-col">
      {data.map((song, i) => (
        <SongBar
          key={`${song.key}-${artistId}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePlayClick={handPlayClick}
          handlePauseClick={handlePauseClick}

        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;

