export async function fetchPOST({ data, token, endpoint }: { data: {}; token?: string; endpoint: string }) {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(endpoint, config);

  if (!response.ok) return console.log('there was an error');

  return response;
}

export async function fetchFormPOST({ data, token, endpoint }: { data: {}; token?: string; endpoint: string }) {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(endpoint, config);

  if (!response.ok) return console.log('there was an error');

  return response;
}
