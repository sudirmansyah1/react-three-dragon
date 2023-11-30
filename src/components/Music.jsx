import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import music from "../assets/music.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IconContext } from "react-icons";

const MusicPlay = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);

    const [play, { pause, volume: setSoundVolume }] = useSound(music, {
        volume,
    });

    useEffect(() => {
        if (isPlaying) {
            play();
        } else {
            pause();
        }
    }, [isPlaying, play, pause]);

    useEffect(() => {
        setIsPlaying(true);
    }, [play]);

    const playingButton = () => {
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        setSoundVolume(newVolume);
    };

    return (
        <div className="absolute bottom-0 left-0 px-1.5 sm:px-20 py-2 sm:py-5 flex items-center">
            <button className="sm:rounded-lg bg-pink-700 p-2 sm:p-5 h-14" onClick={playingButton}>
                {!isPlaying ? (
                    <IconContext.Provider value={{ size: "1em", color: "#fff" }}>
                        <FaPlay />
                    </IconContext.Provider>
                ) : (
                    <IconContext.Provider value={{ size: "1em", color: "#fff" }}>
                        <FaPause />
                    </IconContext.Provider>
                )}
            </button>
            <div className="sm:rounded-lg bg-pink-700 p-2 sm:p-3 h-14 ml-0 sm:ml-2">
                <h1 className="text-lg text-white">Grand_Project - British Historical Drama</h1>
                <SliderInput value={volume} onChange={handleVolumeChange} />
            </div>
        </div>
    );
};

const SliderInput = ({ value, onChange }) => {
    return (
        <div className="w-full max-w-xs">
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={value}
                    onChange={onChange}
                    className="block w-full h-1 bg-gray-300 rounded-md focus:outline-none appearance-none"
                />
            </div>
        </div>
    );
};

export default MusicPlay;