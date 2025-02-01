"use client";

import useContactForm from "@/hooks/useContactForm";

export default function FormSection() {
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <section className="snap-start flex flex-col md:flex-row justify-around items-center flex-wrap px-4 md:px-8 lg:px-24 py-14 lg:min-h-screen">
      <div className="w-full md:w-4/12 mb-8 md:mb-0 flex justify-center">
        <img
          src="/images/SideImage.png"
          alt="side image"
          className="w-3/4 md:w-full h-auto"
        />
      </div>
      <div className="flex flex-col w-full md:w-5/12 px-4">
        <h2 className="self-center md:self-end text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          We&apos;d love to hear from you
        </h2>
        <form className="flex flex-col gap-y-8" onSubmit={handleSubmit}>
          <input
            className="border-2 border-inputBorder h-16 sm:h-20 p-4 text-base"
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name*"
            onChange={handleChange}
          />
          <input
            className="border-2 border-inputBorder h-16 sm:h-20 p-4 text-base"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email*"
            onChange={handleChange}
          />
          <input
            className="border-2 border-inputBorder h-16 sm:h-20 p-4 text-base"
            type="url"
            name="url"
            value={formData.url}
            placeholder="Website URL*"
            onChange={handleChange}
          />
          <textarea
            className="border-2 border-inputBorder h-32 sm:h-40 p-4 text-base"
            name="details"
            value={formData.details}
            placeholder="Project Details*"
            onChange={handleChange}
          />
          <button
            className="bg-black text-white mt-4 h-16 sm:h-20 text-base font-semibold"
            type="submit"
          >
            Send Proposal
          </button>
        </form>
      </div>
    </section>
  );
}
