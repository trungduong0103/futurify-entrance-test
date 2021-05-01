import { useState, useEffect } from "react";

function useDebounce<T>(
  initialValue: T,
  delay: number,
): [T, T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(debounce);
    };
  }, [value, delay]);

  return [debouncedValue, value, setValue];
}

export default useDebounce;
