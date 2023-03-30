import client from '../../lib/sanityClient';

export async function handler(req, res) {
  //const { query } = req.body;
  const data = await client.fetch(`*[_type == "published-work"]{title, url, publishedAt, publication, body}`)
  console.log({data})
  res.status(200).json(data);
  return res;
}
