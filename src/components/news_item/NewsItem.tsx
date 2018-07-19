import * as React from 'react';
import { urlFor } from '../../core/utilities/image-builder.functions';

export default function NewsItem(props: any) {

  const logoUrl = urlFor(props.news.logo).url();

  return (
  <li key={props.news.key} className="newsItem newsItem__list-item">
      <div className="newsItem__section">
        <a href={props.news.url} target="_blank">
          <img className="newsItem__logo" src={logoUrl}/>
        </a>
      </div>
      <div className="newsItem__section">
        <a href={props.news.url} target="_blank">
          <blockquote className="newsItem__quote">{props.news.quote}</blockquote>
        </a>
      </div>
  </li>
  );

}
