import React, { useState } from 'react';

const Video = () => {
    const [videoSrc, setVideoSrc] = useState(''); // Initially empty

    const handlePlayVideo = () => {
        // Set the src with autoplay parameter to start the video when clicked
        setVideoSrc('https://www.youtube.com/embed/88NJP9j-qNo?autoplay=1');
    };

    return (
        <section className="bg-blue-900 font-roboto py-16">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white">
                    See <span className="text-blue-300">Adaptive Learning</span> in Action
                </h1>
                <div className="mt-2">
                    <div className="inline-block w-24 h-6 bg-yellow-500" style={{ borderRadius: '12px' }}></div>
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '800px' }}>
                    <div className="bg-gray-200 flex items-center justify-between px-4 py-2">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Directly show the video and allow click to play */}
                        <iframe
                            className="w-full h-96 cursor-pointer"
                            src={videoSrc || 'https://www.youtube.com/embed/88NJP9j-qNo'} // Default video (without autoplay)
                            frameBorder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            title="Adaptive Learning Video"
                            onClick={handlePlayVideo} // Start video on click
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Video;
