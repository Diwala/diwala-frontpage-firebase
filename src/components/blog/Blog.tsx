import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadBlog } from '../../actions/blog';
import BlogItem from '../blog-item/BlogItem';
import BlogPost from '../blog-post/BlogPost';
import getBlog from '../../api/blog';
import { SanityBlogData } from '../../api/sanity';

interface PropsFromState {
    blog?: SanityBlogData[];
}

interface State {
    blogPost?: string;
    cardClicked: boolean;
}

class Blog extends React.Component<PropsFromState, State> {

  constructor(props: any) {
    super(props);
    props.getBlog(loadBlog);
    this.state = {
      blogPost: '',
      cardClicked: false
    };
  }

  public showBlogPost(e: any, blogInfo: any) {
    e.preventDefault();
    console.log('showBlogPost', blogInfo);
    this.setState({
      blogPost: blogInfo,
      cardClicked: true,
    });
  }

  public render() {
    const parentClass = 'Blog';
    const blogList = this.props.blog.map((postInfo, index) => {
            return (
              <Link className="blog-link" key={index} to={`/blog/${postInfo.path}`} >
                <BlogItem {...postInfo} key={index} onClick={(e: Event) => this.showBlogPost(e, postInfo)} />
              </Link>);
    });

    return (
      <div className={parentClass}>
        <div className="blog-container">
          {this.state.cardClicked ? <BlogPost {...this.state.blogPost} /> : blogList}
          {this.state.cardClicked ? <BlogPost {...this.state.blogPost} /> : blogList}
        </div>
      </div>
    );
  }
}

const mapApiToState = (dispatch: any) => {
  return {
    getBlog: (action: any) => getBlog(dispatch, action),
  };
};

const ConnectedBlog = connect(
  state => state,
  mapApiToState
)(Blog);

export default ConnectedBlog;
