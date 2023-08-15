import dotenv from 'dotenv';
import { parse } from 'querystring';
dotenv.config();

export const handler = async (event) => {
  if (!process.env.FORMCAKE_API) {
    return {
      statusCode: 500,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ success: false, message: 'Missing configuration.' }),
    };
  }
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ success: false, message: 'Method not allowed.' }),
    };
  }
  if (!event.body) {
    return {
      statusCode: 400,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ success: false, message: 'Missing form data.' }),
    };
  }

  const { name, email, subject, message } = parse(event.body);

  if (!name || !email || !subject || !message) {
    return {
      statusCode: 400,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ success: false, message: 'Missing some form data.' }),
    };
  }

  const response = await fetch(process.env.FORMCAKE_API, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
    }),
  });
  const { id } = await response.json();

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ success: true, id }),
  };
};
