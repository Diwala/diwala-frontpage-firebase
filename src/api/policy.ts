import pullSanityData from '../service/sanity-request';

export default function getPolicy(dispatch: any, action: any) {
  return pullSanityData(dispatch, action, `*[_type == 'privacy-policy']`);
}
