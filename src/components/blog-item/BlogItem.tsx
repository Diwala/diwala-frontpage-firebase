import * as React from 'react';
import { sanityClient } from '../../service/sanity';
import imageUrlBuilder from '@sanity/image-url';

export default function BlogItem(props: any) {
  console.log(props);
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source: any) {
    return builder.image(source);
  }
  const background = {
    backgroundImage: 'url(' + urlFor(props.menuphoto).width(500).url() + ')'
  };
  return (
    <div className="blog-item" style={background} onClick={props.onClick}>
      <div className="blog-item__text">
      <h1 className="blog-item__text--title">{props.title}</h1>
      <h2 className="blog-item__text--author">{props.author}</h2>
      <h2 className="blog-item__text--date"><em>{props.date}</em></h2>
      </div>
    </div>
  );

}
