import { useState, useRef, useCallback } from "react";

const FormOptimizing = () => {
  console.log("✅ Form Component Rendered"); // Should NOT re-render on every keystroke!

  const [formData, setFormData] = useState({ name: "", email: "" });
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleInputChange = useCallback(
    (_e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Current Input Values:", {
        ...Object.keys(inputRefs.current).reduce((acc: any, key) => {
          acc[key] = inputRefs.current[key]?.value;
          return acc;
        }, {} as Record<string, string>),
      });
    },
    []
  );

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      name: inputRefs.current["name"]?.value || "",
      email: inputRefs.current["email"]?.value || "",
    });
    console.log("Form Submitted:", {
      name: inputRefs.current["name"]?.value,
      email: inputRefs.current["email"]?.value,
    });
  }, []);

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <label className="block text-gray-700 font-semibold mb-2">Name:</label>
      <input
        ref={(el) => (inputRefs.current["name"] = el)}
        type="text"
        name="name"
        className="border rounded p-2 w-full mb-2"
        onChange={handleInputChange} // Doesn't trigger re-renders
      />

      <label className="block text-gray-700 font-semibold mb-2">Email:</label>
      <input
        ref={(el) => (inputRefs.current["email"] = el)}
        type="email"
        name="email"
        className="border rounded p-2 w-full mb-2"
        onChange={handleInputChange} // Doesn't trigger re-renders
      />

      <button
        type="submit"
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>

      <p className="mt-2">Submitted Name: {formData.name}</p>
      <p className="mt-2">Submitted Email: {formData.email}</p>
    </form>
  );
};

export default FormOptimizing;
