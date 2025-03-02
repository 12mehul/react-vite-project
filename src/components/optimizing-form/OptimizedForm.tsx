import { useState, useRef, useCallback } from "react";

const useDebounce = (callback: any, delay: any) => {
  const debounceRef: any = useRef(null);

  return useCallback(
    (...args: any) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};

const OptimizedForm = () => {
  const [formData, setFormData] = useState({ name: "" });
  const inputRef: any = useRef(null);

  const debouncedLog = useDebounce(() => {
    console.log("Debounced Input Value:", inputRef.current.value);
  }, 500); // 500ms delay

  const handleInputChange = useCallback(() => {
    debouncedLog(); // Log after debounce delay
  }, [debouncedLog]);

  const handleSubmit = useCallback((e: any) => {
    e.preventDefault();
    setFormData({ name: inputRef.current.value });
    console.log("Form Submitted:", inputRef.current.value);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <label className="block text-gray-700 font-semibold mb-2">
        Optimized Input:
      </label>
      <input
        ref={inputRef}
        type="text"
        className="border rounded p-2 w-full"
        onChange={handleInputChange} // Debounced input change handler
      />
      <button
        type="submit"
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
      <p className="mt-2">Submitted Value: {formData.name}</p>
    </form>
  );
};

export default OptimizedForm;
