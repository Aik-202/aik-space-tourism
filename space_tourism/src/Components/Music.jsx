import React from 'react';
import { Pause, Play, SpaceMusic } from '../Data';

export default function Music() {
    const data = window.localStorage.getItem('status');
    const status = JSON.parse(data);

    const [button, setButton] = React.useState();
    const audio= React.useRef();

    React.useEffect(() => {
        if (status == "true") {
            audio.current.play();
            setButton(true);
        }
        if (status == false) {
            audio.current.pause();
            setButton(false);
        }
    }, []);

    const pause = (e) => {
        window.localStorage.setItem('status', JSON.stringify(false));
        audio.current.pause();
        setButton(false);
    }
    const play = (e) => {
        window.localStorage.setItem('status', JSON.stringify(true));
        audio.current.play();
        setButton(true);
    }

    return (
        <figure className='absolute bottom-5 right-5 rounded-[100%] px-3 py-3 border-2 border-solid border-transparent bg-white bg-opacity-20'>
            <audio
            ref={audio}
            src={SpaceMusic}
            />
            {!button && <img src={Pause} alt="pause" onClick={play}/>}
            {button && <img src={Play} alt="play" onClick={pause}/>}
        </figure>
    )
}
