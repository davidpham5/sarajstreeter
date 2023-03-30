import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '1mp4xhhv',
  dataset: 'published-work',
  useCdn: false, // Set to `false` if you want to use the authenticated API
  apiVersion: '2022-10-21', // use current date (YYYY-MM-DD) to target the latest API version
});

export default client;
