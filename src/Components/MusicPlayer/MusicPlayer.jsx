import React, { Fragment, useState } from 'react';
import './MusicPlayer.css'
import { BiSolidSkipPreviousCircle, BiSolidSkipNextCircle, BiPlayCircle, BiPauseCircle } from "react-icons/bi";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";




function change() {
    var songval = document.getElementById("song");
    var prog = document.getElementById("progress");
    songval.currentTime = prog.value;
    setIsPlaying(true)
    songval.play()
}
const MusicPlayer = () => {

    const [isPlaying, setIsPlaying] = useState(false)

    function playPause() {
        var songval = document.getElementById("song");
        var icon = document.getElementById("Icons");

        if(isPlaying) {
            songval.pause()
            setIsPlaying(false)
        } else {
            songval.play()
            setIsPlaying(true)
        }
    }

    function songProgress() {
        var prog = document.getElementById("progress");
        var songval = document.getElementById("song");
        prog.max = songval.duration;
        if (songval.play) {
            setInterval(() => {
                prog.value = songval.currentTime;
            }, 0);
        }

    }


    return (
        <div className="container">
            <div className="music-player">
                <nav>
                    <div className="circle">
                        <IoArrowBackSharp />
                    </div>
                    <div className="circle">
                        <FaBars />
                    </div>
                </nav>
                <img src="https://i.scdn.co/image/ab67616d0000b273a889537541bd2b9f767c697c" className='song-img' />
                <h1>Kadhaippoma</h1>
                <p>Leon James, Sid Sriram - Oh My Kadavule</p>
                <audio id="song" onLoadedMetadata={songProgress}>
                    <source src="src/Components/MusicPlayer/Kadhaippoma.mp3"  ></source>
                </audio>
                <input type="range" className='progress' id="progress" onVolumeChange={songProgress} onChange={change} />
                <div className="control">
                    <div className="icon">
                        <BiSolidSkipPreviousCircle className='Icons' />
                    </div>
                    <div className="icon" >
                        {
                            isPlaying ? <BiPauseCircle className="Icons" id="ctrlIcon" onClick={playPause} /> :  <BiPlayCircle className='Icons' id="ctrlIcon" onClick={playPause} />
                        }
                    </div>
                    <div className="icon">
                        <BiSolidSkipNextCircle className='Icons' />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MusicPlayer;