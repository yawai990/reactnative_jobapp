import { useState, useEffect } from "react";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);

  async function getPosts(limit = 10) {
    setLoading(true);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const posts = await res.json();

    setData(posts);
    setLoading(false);
  }

  useEffect(() => {
    getPosts();
  }, []);

  const refetch = (limit) => {
    getPosts(limit);
  };

  return {
    loading,
    data,
    refetch,
  };
};
