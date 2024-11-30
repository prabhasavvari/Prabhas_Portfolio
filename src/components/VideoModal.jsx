import React , {useEffect} from 'react';
import ReactDom from 'react-dom';
import {Card} from './Projects';
import '../styles/videoModal.css';

const VideoModal = ({isOpen, videoSrc, onClose}) => {

  

  if (!isOpen) return null;

  // Check if the video source is a YouTube link
  const isYouTubeLink = videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be');


  return(
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal">
        <button className="close-button" onClick={onClose}>&times;</button>
        {isYouTubeLink ? (
          <iframe
            width="100%"
            height="400"
            src={videoSrc.replace('watch?v=', 'embed/')} // Converts YouTube URL to embed format
            title="Project Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <video controls autoPlay>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default VideoModal
