import React from 'react';

const VideoPlayer = ({
    src,
    poster,
    loop = true,
    muted = true,
    width = '100%',
    height = '100%',
    controls = false,
    autoPlay = true,
}) => {
    if (!src) {
        return <p>Video source is required!</p>;
    }

    return (
        <div style={{ objectFit: 'cover', position: 'center', width, height }}>
            <video
                src={src}
                poster={poster}
                controls={controls}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                width="100%"
                height="100%"
                style={{ height: '100%', objectFit: 'cover', position: 'center' }}
            >
                Sorry, your browser doesn't support embedded videos.
            </video>
        </div>
    );
};

export default VideoPlayer;
