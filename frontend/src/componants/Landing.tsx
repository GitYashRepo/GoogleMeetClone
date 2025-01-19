import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { Room } from "./Room";

export const Landing = ()=>{
    const [name,setName] = useState("");
    const [localVideoTrack, setLocalVideoTrack] = useState<MediaStreamTrack | null>(null);
    const [localAudioTrack, setLocalAudioTrack] = useState<MediaStreamTrack | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [joined, setJoined] = useState(false);

    const getCam = async () => {
        const streams = await window.navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        });
        // MediaStream
        const audioTrack = streams.getAudioTracks()[0];
        const videoTrack = streams.getVideoTracks()[0];
        setLocalAudioTrack(audioTrack);
        setLocalVideoTrack(videoTrack);
        if(!videoRef.current) {
            return;
        }
        videoRef.current.srcObject = new MediaStream([videoTrack]);
        videoRef.current.play();

        // MediaStream
    }
    useEffect(()=>{
        if (videoRef && videoRef.current){
            getCam();
        }
    },[videoRef]);

    if(!joined){
        return(
            <div className="bg-neutral-400 w-full h-screen flex flex-col items-center justify-center">
                <video autoPlay ref={videoRef}></video>
                <div className="flex items-center mt-4 gap-4">
                    <input className="rounded-md p-2 w-full" type="text" placeholder="Enter Your Name" onChange={(e)=>{
                        setName(e.target.value);
                    }}/>
                    <button className="bg-blue-500 text-white p-2 rounded-md" onClick={()=> setJoined(true)}>Join</button>
                </div>
            </div>
        )
    }

    return <Room name={name} localAudioTrack={localAudioTrack} localVideoTrack={localVideoTrack}/>

}
