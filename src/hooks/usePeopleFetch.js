import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers(nationalities, page = 1) {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?${nationalities && "nat=" + nationalities.toString() + "&" || ""}results=5&page=${page}`);
    setIsLoading(false);
    setUsers(page === 1 ? response.data.results : [...users, ...response.data.results]);

  }

  return { users, isLoading, fetchUsers };
};
