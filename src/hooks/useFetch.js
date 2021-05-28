const useFetch = (url, fetchTry) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useFetch(() => {
    const fetchDataFromApi = async (url, fetchTry) => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        setData(response.json());
      } catch (err) {
        if (fetchTry === 1) {
          setError(error);
        }
        fetchDataFromApi(url, fetchTry - 1);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataFromApi(url);
  }, [url]);

  return {
    isLoading,
    data,
    error,
  };
};
