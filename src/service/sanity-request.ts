import sanityRequest from './sanity';

export default async function (dispatch: any, action: any, type: string) {
  try {
    const result = await sanityRequest(type);
    dispatch(action(result));
  } catch (error) {
    // tslint:disable-next-line
    console.log('error', error);
  }
}
