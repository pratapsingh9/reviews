import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataFetching() {
  const [data, setdata] = useState("");
  const [loading, setloading] = useState<Boolean>(false);
  useEffect(() => {
    setloading(true);
    axios
      .get("https://api.example.com/data")
      //  .then(response => response.json())
      .then((response) => setdata(response.data))
      .then(() => setloading(false));
  }, []);
  return {
    data,
    loading,
  };
}
