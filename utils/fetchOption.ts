export async function fetchPOST({ data, token, path }: { data: {}; token?: string; path: string }) {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(path, config);

  if (!response.ok) return console.log('there was an error');

  return response;
}

export async function fetchFormPOST({ data, token, path }: { data: {}; token?: string; path: string }) {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(path, config);

  if (!response.ok) return console.log('there was an error');

  return response;
}
