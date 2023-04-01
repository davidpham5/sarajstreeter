import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  useCdn: false, // Set to `false` if you want to use the authenticated API
  apiVersion: '2022-10-21', // use current date (YYYY-MM-DD) to target the latest API version
});

export default client;
