import * as React from 'react';
import { TextData } from '../../api/texts';

export default function Hero(props: { text: TextData, textId: string, tokenVersion?: string }) {
  const tokenTextObj = props.text.value.find((text: any) => {
    return text.label === props.textId;
  });
  const tokenText = tokenTextObj ? tokenTextObj.value : '';
  const videoToken = require('../../graphics/diwala_token.mp4');
  const v = document.getElementsByTagName('video')[0];
  function videoUrl() {
    if (props.tokenVersion === 'purple') {
      return videoToken + '#t=00:00:00.5';
    } else {
      return videoToken;
    }
  }
  async function playVideo() {
    if (v) {
      v.play();
    } else {
      setTimeout(playVideo(), 100);
    }
    console.log(props);
  }
  function stopVideo() {
      v.pause();
  }

  return (
    <div className="website-hero" onMouseOver={() => playVideo()} onMouseOut={() => stopVideo()} >
      <video className="website-hero__video" loop playsInline autoPlay preload="true">
        <source src={videoUrl()} type="video/mp4" />
      </video>
      <div className={`website-hero__logo ${props.tokenVersion}`}>
        <div className="website-hero__text">
          {tokenText}
        </div>
      </div>
    </div>
  );
}
