// Make an API request to any external URL
export function apiRequestExternal(
  url: string,
  method: string = "GET",
  data?: any
): Promise<any> {
  return fetch(url, {
    method: method,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  }).then((response) => response.json());
}
