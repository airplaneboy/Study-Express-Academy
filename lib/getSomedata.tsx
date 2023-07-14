export default async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) throw new Error('There was an error fetching users');
  console.log(await res.json());
  return res.json();
}
