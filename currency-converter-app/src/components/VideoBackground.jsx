    import React from 'react';
    // If your video is in src/assets, import it like this:
    // import MyVideo from '../assets/myvideo.mp4'; 

    const VideoBackground = ({ children }) => {
      return (
        <div className="relative h-screen w-screen overflow-hidden">
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover z-0" 
            src="../assets/bgvideo.mp4" // Use the correct path to your video
            autoPlay 
            loop 
            muted 
            playsInline // Recommended for mobile compatibility
          />
          <div className="relative z-10">
            {children}
          </div>
        </div>
      );
    };

    export default VideoBackground;