import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="w-full flex items-center justify-center min-h-[500px] bg-white">
      <div className="w-full max-w-6xl mx-auto p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Unlock the Power of Digital Innovation
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Empowering Brands Through Digital Excellence
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="border border-gray-300 px-4 py-2 rounded-lg w-full sm:w-80"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg transition-colors hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
