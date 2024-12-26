const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTA1MDI4NWFjYzRhMTBlNjkyNGUxMjlkMDQwYzhkZCIsIm5iZiI6MTczNDE3MDcyNy43MzgsInN1YiI6IjY3NWQ1ODY3ZTI2OWM2ODIyMzBmZjc4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wbaKpxkQR2NwkE-g4FP2LP29aF0tj3iXbvSKtSQ_VFY",
    },
};

export async function fetchData({ type, query = '', page = 1 }) {
  const baseUrl = 'https://api.themoviedb.org/3';
  let endpoint = '';

  // Define endpoints based on the type
  switch (type) {
    case 'trending':
      endpoint = `/trending/all/day?language=en-US`;
      break;
    case 'movies':
      endpoint = `/movie/now_playing?language=en-US&page=${page}`;
      break;
    case 'tv':
      endpoint = `/tv/airing_today?language=en-US&page=${page}`;
      break;
    case 'search':
      endpoint = `/search/multi?query=${query}&language=en-US&include_adult=false`;
      break;
    default:
      throw new Error(`Invalid fetch type: ${type}`);
  }

  try {
    const res = await fetch(`${baseUrl}${endpoint}`, options);
    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error(`Failed to fetch ${type}`, error);
    return [];
  }
}



