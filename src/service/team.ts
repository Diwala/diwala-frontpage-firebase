import sanityRequest from './sanity';

export default async function (dispatch: any, action: any) {
  try {
    const result = await sanityRequest(`*[_type == 'teamMember']`);
    dispatch(action(result));
  } catch (error) {
    // tslint:disable-next-line
    console.log('error', error);
  }
}
