"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const response = await fetch(
      "https://peaceful-beyond-29579-c8ef4e7fc753.herokuapp.com/send-email",
  // "http://localhost:5000/send-email",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (response.ok) {
      setMessage("Email sent! Check your inbox to start the conversation.");
    } else {
      setMessage("Something went wrong. Please try again.");
    }
    setTimeout(() => setMessage(""),  5000);
    setTimeout(() => setEmail(""),  5000);


  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-black">Welcome to Sarah Academy</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded shadow-md w-full max-w-sm"
      >
        <label className="block mb-4">
          <span className="text-black text-sm font-medium">Enter your email:</span>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 text-black rounded mt-2 bg-white focus:ring focus:ring-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-gray-400 text-black py-2 px-4 rounded hover:bg-gray-500 transition"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-black text-center font-medium">{message}</p>}
    </div>
  );
}