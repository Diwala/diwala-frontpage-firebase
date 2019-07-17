import { LOAD_BLOG } from '../reducers/blog';

export const loadBlog = (blog: any) => {
  return {
    type: LOAD_BLOG,
    blog
  };
};
