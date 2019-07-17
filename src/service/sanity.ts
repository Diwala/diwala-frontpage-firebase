import SanityClient from '@sanity/client';

export const projectId = 'jgfkj4nx';
export const dataset = 'production';

export const sanityClient = SanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: projectId,
  dataset: dataset
});

export default async function (query: any) {
  return new Promise((resolve, reject) => sanityClient
    .fetch(query)
    .then((data: any) => resolve(data))
    .catch((error: any) => reject(error)));
}
