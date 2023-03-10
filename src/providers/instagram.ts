const token = process.env.NEXT_PUBLIC_INSTA_KEY || '';

const baseURL = 'https://graph.instagram.com/me';
const fields = '/media?fields=media_url';
const tokenURL = `&access_token=${token}`;

const url = `${baseURL}${fields}${tokenURL}`;


async function getFeed(): Promise<void> {
  const response = await fetch(url);
  const data: JSON = await response.json() as JSON;

  console.log(data);
}

// * ---------------------------------------------------------------------- * //

export { getFeed };
