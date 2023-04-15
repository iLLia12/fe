export const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbWUxMkBzb21lLmNvbSIsInN1YiI6MTUsImlhdCI6MTY4MDQ0NDgyM30.YIGjCADMX_96YpMCjydco_mWTPufkTgDsmU0JNQfCxU',
    },
  }).then((res) => res.json());
