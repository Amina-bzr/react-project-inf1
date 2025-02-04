import { useQuery } from '@tanstack/react-query';

const fetchGenres = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzcxZWZiNDBmNDA0MTk1YTA5ZjhmYTdiN2UwMGQ4YSIsIm5iZiI6MTczNDQ3MzY3OS43MjQsInN1YiI6IjY3NjFmN2NmMGI2ZWFjNGQ4ZTA4NGU3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XFH28lABClWe4F9a43tjvgiJ251ayFnN16n0nzU8WdI'
    }
  };
  const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
  const data = await response.json();
  return data.genres;
};

const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
  });
};

export default useGenres;
