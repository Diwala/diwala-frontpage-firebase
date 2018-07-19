import pullNews from '../service/news';
import { SanityImageData, SanityData } from './sanity';

export default function getNews(dispatch: any, action: any) {
  return pullNews(dispatch, action);
}

export interface NewsData extends SanityData {
  source: string;
  logo: SanityImageData;
  url: string;
  quote: string;
}
