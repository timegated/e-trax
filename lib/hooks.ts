import useSWR from 'swr'; // guarantees we only make one call.
import fetcher from './fetcher';

// Get the user
export const useMe = () => {
  // handles revalidation of local data/ cache-ing + cache invalidation (hard problems)
  const { data, error } = useSWR('/me', fetcher); // args: cacheKey

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

// Populate the sidebar with playlist data
export const usePlaylist = () => {
  const { data, error } = useSWR('/playlists', fetcher);

  return {
    playLists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
