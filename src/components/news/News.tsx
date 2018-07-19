import * as React from 'react';
import MediaSlider from '../media_slider/MediaSlider';
import { NewsData } from '../../api/news';

export default function News(props: {news: NewsData[]}) {

  return (
    <div className="news-container">
      <h2 className="news__title--h1 title">
        Media <span className="news__title-wrap">&amp; Press</span>
      </h2>
      <MediaSlider news={props.news}/>
    </div>
  );

}
