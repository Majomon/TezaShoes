import { CldVideoPlayer } from "next-cloudinary"

export default function VideoPlay(){
    return(
        <div>
            <CldVideoPlayer 
                src={"https://www.youtube.com/watch?v=kSxfpy9aCZU"}
                
            />
        </div>
    )
}