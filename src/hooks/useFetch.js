import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(path){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://api.github.com/users/alison-ribeiro${path}`)
    .then(response => {
      setData(response.data);
    })
    .finally(() => {
      setLoading(false);
    })
  },[path])
  return {data, loading}
}
