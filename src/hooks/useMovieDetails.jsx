import { useQuery } from '@tanstack/react-query';

const fetchMovieDetails = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3771efb40f404195a09f8fa7b7e00d8a`);
  const data = await response.json();
  return data;
};

const useMovieDetails = (id) => {
  return useQuery({
    queryKey: ['movie', id],
    queryFn: () => fetchMovieDetails(id),
    enabled: !!id,
  });
};

export default useMovieDetails;
