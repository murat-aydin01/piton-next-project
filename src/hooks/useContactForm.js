import { useState } from "react";

export default function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    url: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Datas:", formData);
    setFormData({ name: "", email: "", url: "", details: "" });
  };

  return { formData, handleChange, handleSubmit };
}
