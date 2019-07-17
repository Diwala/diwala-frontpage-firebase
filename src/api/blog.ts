import pullBlog from '../service/blog';
import { SanityData } from './sanity';

export default function getBlog(dispatch: any, action: any) {
  return pullBlog(dispatch, action);
}

export interface BlogData extends SanityData {
  title: string;
  author: string;
  date: string;
  menuphoto: 'image';
  body: any;
  type: 'array';
  of: [{type: 'block'}];
  path: string;
}
