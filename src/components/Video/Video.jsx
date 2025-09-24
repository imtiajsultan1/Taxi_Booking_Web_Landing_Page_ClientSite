import React from 'react';

const Video = () => {
    return (
        <div className="bg-white px-40 py-40">
            <div>
                <h1 className="text-5xl text-black font-bold block text-center pb-20">Watch Our Video</h1>
            </div>
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                {/* 16:9 ratio → 9/16 = 0.5625 = 56.25% */}
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/lvEfP2BZAiA?si=E33wyKKk1KCCa99G"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>

    );
};

export default Video;