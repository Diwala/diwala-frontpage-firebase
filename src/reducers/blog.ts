export const LOAD_BLOG = 'LOAD_BLOG';

const blog = (state = [], action: any) => {
  switch (action.type) {
    case LOAD_BLOG:
      if (!action.blog) {
        return state;
      }
      return action.blog;
    default:
      return state;
  }
};

export default blog;

export const InitialBlogState = [];
