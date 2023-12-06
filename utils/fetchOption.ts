export async function fetchGET({
  token,
  path,
  cache,
  revalidate,
}: {
  revalidate?: false | undefined | number;
  token?: string;
  path: string;
  cache?: RequestCache | undefined;
}) {
  const config: RequestInit | undefined = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
    cache: cache,
    next: { revalidate },
  };

  const response = await fetch(path, config);

  if (!response.ok) throw new Error(JSON.stringify((await response.json()).error));

  return await response.json();
}

export async function fetchPOST({
  data,
  token,
  path,
  headers,
  cache = 'default',
  revalidate = false,
}: {
  data: {};
  token?: string;
  path: string;
  headers?: {};
  cache?: RequestCache | undefined;
  revalidate?: false | undefined | number;
}) {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
      ...headers,
    },
    body: JSON.stringify(data),
    cache: cache,
    next: { revalidate },
  };

  const response = await fetch(path, config as any);

  if (!response.ok) throw new Error(JSON.stringify((await response.json()).error));

  return await response.json();
}

export async function fetchPATCH({
  data,
  token,
  path,
  headers,
}: {
  data: {};
  token?: string;
  path: string;
  headers?: {};
}) {
  const config = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
      ...headers,
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(path, config);

  if (!response.ok) throw new Error(JSON.stringify((await response.json()).error));

  return await response.json();
}

export async function fetchDelete({ token, path }: { token?: string; path: string }) {
  const config = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(path, config);

  if (!response.ok) throw new Error(JSON.stringify((await response.json()).error));

  return await response.json();
}

//#region Forms
export async function fetchFormPOST({
  data,
  token,
  path,
  headers,
}: {
  data: {};
  token?: string;
  path: string;
  headers?: {};
}) {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...headers,
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(path, config);

  if (!response.ok) throw new Error(JSON.stringify((await response.json()).error));

  return await response.json();
}
//#endregion
