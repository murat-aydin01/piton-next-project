"use client";

import useContactForm from "@/hooks/useContactForm";

function FormSection() {
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <section className="flex flex-col md:flex-row justify-around items-center flex-wrap px-4 md:px-8 lg:px-24 py-14">
      <div className="w-full md:w-4/12 mb-8 md:mb-0">
        <img src="/images/SideImage.png" alt="side image" className="w-full h-auto" />
      </div>
      <div className="flex flex-col w-full md:w-5/12">
        <h2 className="self-center md:self-end text-4xl font-bold mb-8">
          We&apos;d love to hear from you
        </h2>
        <form className="flex flex-col gap-y-8" onSubmit={handleSubmit}>
          <input
            className="border-2 border-inputBorder h-24 p-4"
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name*"
            onChange={handleChange}
          />
          <input
            className="border-2 border-inputBorder h-24 p-4"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email*"
            onChange={handleChange}
          />
          <input
            className="border-2 border-inputBorder h-24 p-4"
            type="url"
            name="url"
            value={formData.url}
            placeholder="Website URL*"
            onChange={handleChange}
          />
          <input
            className="border-2 border-inputBorder h-48 p-4"
            type="text"
            name="details"
            value={formData.details}
            placeholder="Project Details*"
            onChange={handleChange}
          />
          <button className="bg-black text-white mt-4 h-24" type="submit">
            Send Proposal
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormSection;
