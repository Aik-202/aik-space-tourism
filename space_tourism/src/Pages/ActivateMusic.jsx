import React from 'react'
import { Song } from '../Data'
import { useNavigate } from 'react-router-dom'

export default function ActivateMusic(){ 
    const [music, setMusic] = React.useState("");
    const [status, setStatus]= React.useState("false");

    React.useEffect(() => {
        const data = window.localStorage.getItem('status');
        if ( data !== null ) setStatus(JSON.parse(data));
    }, []);

    React.useEffect(() => {
        window.localStorage.setItem('status', JSON.stringify(status));
    }, [status]);
    
    const ok = (e) => {
        setMusic("ok");
        setStatus("true");
        setTimeout(() => {
            // window.location.replace("http://localhost:5173/home");
            window.location.replace("https://aik-space-tourism.vercel.app/home");
        }, 500);
    }
    const no = (e) => {
        setMusic("no");
        setStatus("false")
        setTimeout(() => {
            // window.location.replace("http://localhost:5173/home");
            window.location.replace("https://aik-space-tourism.vercel.app/home");
        }, 500);
    }


    return (
        <section className='flex justify-center align-center items-center flex-wrap bg-[#000] bg-opacity-[0.5] h-screen' onLoad={window.localStorage.setItem('status', JSON.stringify(false))}>
            <div className='flex flex-col justify-center align-center items-center flex-wrap border-2 
            border-solid border-transparent bg-white shadow-lg space-y-5 rounded-md'>
                <div className='flex flex-row space-x-2 pt-5'>
                    <figure className='self-center'>
                        <img src={Song} alt="musical-note" />
                    </figure>
                    <h1 className='text-center font-font-two text-smallest-medium tracking-wider'>Activate Music</h1>
                </div>
                <p className='px-5 font-font-one text-[18px] text-black'>For a feeling of nostalgia, activate music!</p>
                <div className='flex flex-row justify-between space-x-10 font-font-one pb-5 cursor-pointer'>
                    <button className= {`${music == "no" ? 'bg-light-blue text-black' : 'bg-dark-blue text-white' } rounded-lg px-5 py-2`} onClick={no}>NO</button>
                    <button className= {`${music == "ok" ? 'bg-light-blue text-black' : 'bg-dark-blue text-white' } rounded-lg px-5 py-2`} onClick={ok}>OK</button>
                </div>
            </div>
        </section>
    )
}
