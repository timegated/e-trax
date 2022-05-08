// Abstract away http fetching mechanism, useful for custom hooks that fetch api data
export default function fetcher (url: string, data = undefined) {
  // api is mounted on the same domain as the client
  return fetch(`${window.location.origin}/api/${url}`, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status > 299 && res.status < 200) throw new Error();
    return res.json();
  });
}
