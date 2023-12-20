'use client'

import ReactPlayer from "react-player";

export default function VideoPlay(){
    return(
        <div className="w-[100%] flex items-center justify-center py-[50px]">
            <ReactPlayer
                url={"https://youtu.be/Et7TTfwvBFo?si=1R5xj_eS-u-QiVWH"}
                height={500}
                width={1920}
            />
        </div>
    )
}