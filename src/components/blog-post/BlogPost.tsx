import * as React from 'react';
import * as BlockContent from '@sanity/block-content-to-react';
import { projectId, dataset } from '../../service/sanity';
// import { SanityBlogData } from '../../api/sanity';

// interface Blog {
//     blogPost?: SanityBlogData;
//     cardClicked: boolean;
// }

// ( props: Blog )
export default function BlogItem( props: any ) {
  console.log('Blog Data:', props);

  return (
    <div className="blog-post">
      <h1 className="blog-post__title">{props.title}</h1>
      <h2 className="blog-post__author">{props.author}</h2>
      <h2 className="blog-post__date">{props.date}</h2>
      <BlockContent
        blocks={props.body}
        projectId={projectId}
        dataset={dataset}
      />
    </div>
    );

}
