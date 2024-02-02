"use client"
import YouTube, { YouTubeProps } from 'react-youtube'



const YouTubeVid = () => {

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    const options = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
      };

    return (
            <YouTube videoId='XvB1RUyCvMM' opts={options} onReady={onPlayerReady}/>
    )
}

export default YouTubeVid