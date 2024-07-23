// import React from 'react'
import { useState, useEffect } from "react";
export default function useDebouce(value, timeout): any {
  const [debouce, setdebouce] = useState(value);
  useEffect(() => {
    setTimeout(() => {
      setdebouce(value);
    }, timeout);
  }, [value]);
  return { debouce };
}
