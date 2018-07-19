import * as React from 'react';
import Slider from 'react-slick';
import NewsItem from '../news_item/NewsItem';
import { NewsData } from '../../api/news';

export default function MediaSlider(props: {news: NewsData[]}) {

    var settings = {
      dots: true,
      dotsClass: 'slick-dots',
      centerMode: true,
      // centerPadding: '20px',
      speed: 200,
      slidesToShow: 3,
      // if there are less than 5 slides, the infinite scroll
      // doesnt function the way we want, so the slides in <Slider>
      // are doubled to prevent that.  5 or more works normally.
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true,
      multipleItems: true,
      focusOnSelect: true,
      focusOnChange: true,
      accessibility: true,
      draggable: true,
      touchMove: true,
      mobileFirst: true
    };

    const newsItems = props.news.map((newsItem, index) => {
            return (<NewsItem news={newsItem} key={index} />);
    });

    return (
      <Slider className="media-slider" {...settings}>
          {newsItems}
          {(newsItems.length < 5) ? newsItems : null}
      </Slider>
    );

}
