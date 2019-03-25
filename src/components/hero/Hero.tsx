import * as React from 'react';
import { TextData } from '../../api/texts';
const videoBkgrd = require('../../graphics/Diwala_Token3.png');

export default function Hero(props: { text: TextData, textId: string, tokenVersion?: string }) {
  const tokenTextObj = props.text.value.find((text: any) => {
    return text.label === props.textId;
  });
  const tokenText = tokenTextObj ? tokenTextObj.value : '';
  const videoTokenLg = require('../../graphics/Diwala_Animation_5M.mp4');
  const videoTokenSm = require('../../graphics/Diwala_Animation_1M.mp4');
  function findVideo() {
    document.getElementsByTagName('video');
  }

  let video = document.getElementsByTagName('video')[0];
  let playing = true;

  function videoUrl() {
    let videoToken;
    if (window.innerWidth < 1081) {
      videoToken = videoTokenSm;
    } else {
      videoToken = videoTokenLg;
    }
    return videoToken;
  }

  function playVideo() {
    if (video && (video.readyState > 1)) {
      if (!video) {
        setTimeout((test) => { findVideo(); }, 300);
        video = document.getElementsByTagName('video')[0];
      }
      video.play();
      playing = true;
    }
  }

  function stopVideo() {
    if (video && (video.readyState > 1) && (playing)) {
      video.pause();
      playing = false;
    }
  }

  return (
    <div className={`website-hero ${props.tokenVersion}`} onMouseOver={() => playVideo()} onMouseOut={() => stopVideo()} >
      <video className={`website-hero__video`} loop playsInline autoPlay preload="true">
        <source className="website-hero__video-source" src={videoUrl()} type="video/mp4" />
        <img src={videoBkgrd} title="Your browser does not support the <video> tag"/>
      </video>
      <div className={`website-hero__background-image`}/>
      <div className={`website-hero__logo`}>
        <div className="website-hero__text">
          {tokenText}
        </div>
      </div>
    </div>
  );
}
