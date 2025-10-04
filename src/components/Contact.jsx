import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Loading state add

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      // ✅ Formspree endpoint
      const res = await axios.post(
        "https://formspree.io/f/xzzjgnge",
        formData,
        {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json", // ✅ Required
          },
        }
      );

      if (res.data.ok || res.status === 200) {
        setResponse("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponse("⚠️ Something went wrong. Please try again.");
      }
    } catch (err) {
      if (err.response) {
        setResponse("❌ Error: " + err.response.data.error);
      } else {
        setResponse("❌ Network Error: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 p-6"
    >
      <motion.div
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 ring-5 ring-black transition"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          ✨ Contact Us
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-500 text-black rounded-xl outline-none focus:ring-2 focus:ring-pink-500 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-500 text-black rounded-xl outline-none focus:ring-2 focus:ring-purple-500 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            name="message"
            placeholder="Write Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-500 text-black rounded-xl outline-none focus:ring-2 focus:ring-red-400 transition min-h-[120px]"
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            disabled={loading} // ✅ disable when loading
            className={`w-full py-3 rounded-xl shadow-lg font-semibold cursor-pointer transition 
              ${
                loading
                  ? "bg-gray-400 text-white"
                  : "bg-gradient-to-r from-orange-500 to-red-600 text-white hover:opacity-70"
              }`}
            whileHover={!loading ? { scale: 1.05 } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
          >
            {loading ? "⏳ Sending..." : "🚀 Submit"}
          </motion.button>
        </form>

        {response && (
          <motion.p
            className={`mt-4 text-center font-semibold ${
              response.startsWith("✅")
                ? "text-green-600"
                : response.startsWith("⚠️")
                ? "text-yellow-600"
                : "text-red-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {response}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

export default App;
