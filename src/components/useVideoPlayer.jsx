import { useState,useRef,useEffect } from "react"

function useVideoPlayer() {
    const [playing, setPlaying] = useState(1);
    const videoRef = useRef(null);
    const handlePlay = (step) => {
        setPlaying(step);
    }
    const videos =[
        "/step1.mp4",
        "/step2.mp4",
        "/step3.mp4",
        "/step4.mp4"
    ]
    const handleAutomaticPlay = () => {
        if(playing<videos.length){
            setPlaying(playing+1);
        }
    }
    useEffect(() => {
        const video = videoRef.current;
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5 
        };
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play(); 
                } else {
                    video.pause(); 
                }
            });
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(video);
        return () => {
            observer.unobserve(video);
        };
    }, [videoRef]);
    return { playing, handlePlay, handleAutomaticPlay, videoRef, videos };
  
}

export default useVideoPlayer