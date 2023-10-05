export async function fetchApi(url, config?: RequestInit) {
  const response = await fetch(url, {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export const minsToMiliseconds = (min: number) => min * 1000 * 60;