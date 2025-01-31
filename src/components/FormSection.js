"use client";

import useContactForm from "@/hooks/useContactForm";

function FormSection() {
  const { formData, handleChange, handleSubmit } = useContactForm();
  return (
    <section className="flex flex-row justify-around">
      <div className="w-4/12">
        <img src="/images/SideImage.png" alt="side image" />
      </div>
      <div className="flex flex-col w-5/12">
        <h2 className="self-end">We&apos;d love to hear from you</h2>
        <form className="flex flex-col gap-y-8" onSubmit={handleSubmit}>
          <input
            className="border-2 border-inputBorder "
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name*"
            onChange={handleChange}
          />
          <input
          className="border-2 border-inputBorder"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email*"
            onChange={handleChange}
          />
          <input
          className="border-2 border-inputBorder"
            type="url"
            name="url"
            value={formData.url}
            placeholder="Website URL*"
            onChange={handleChange}
          />
          <input
          className="border-2 border-inputBorder"
            type="text"
            name="details"
            value={formData.details}
            placeholder="Project Details*"
            onChange={handleChange}
          />
          <button className="bg-black text-white mt-4" type="submit">Send Proposal</button>
        </form>
      </div>
    </section>
  );
}

export default FormSection;
