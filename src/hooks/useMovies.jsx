import { useQuery } from '@tanstack/react-query';

const fetchMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=3771efb40f404195a09f8fa7b7e00d8a');
  const data = await response.json();
  return data.results;
};

const useMovies = () => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });
};

export default useMovies;
