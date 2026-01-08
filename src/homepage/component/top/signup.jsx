  import { useState } from "react";
  import { useNavigate } from "react-router-dom";

  function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const API = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
      e.preventDefault();

      console.log("SIGNUP SUBMITTED");

      const base = API.endsWith("/") ? API.slice(0, -1) : API;

      try {
        const res = await fetch(`${base}/api/auth/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
          console.log("Signup error:", data);
          alert(data.message || "Signup failed");
          return;
        }

        localStorage.setItem("token", data.token);
        navigate("/welcome");
      } catch (err) {
        console.error("Network error:", err);
        alert("Network error");
      }
    };


      return (
    <div className="h-screen w-screen flex items-center justify-center  bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700">

      <div className="w-[900px] h-[480px] bg-white rounded-3xl shadow-2xl overflow-hidden flex">



        <div className="w-1/2 p-12  bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700  ">


          <h1 className="text-3xl font-bold mb-4">Welcome to website</h1>

          <p className="text-white/90 text-sm leading-relaxed ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>

        </div>


        <div className="w-1/2 p-12 flex flex-col justify-center">

          <h2 className="text-xl font-semibold text-center mb-6 text-sky-600 underline">Sign Up Now</h2>

<form className="space-y-4" onSubmit={handleSubmit}>


    <input
      className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />

    <input
      className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <input
      className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />

    <button
      type="submit"
      className="w-full py-2 rounded-full cursor-pointer bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700 text-white font-semibold hover:opacity-90 transition"
    >
      SignUp
    </button>
    <div className="flex justify-between">
      <p>Already User?</p>
      <span onClick={()=>navigate("/login")} className="text-blue-500 underline cursor-pointer">Login</span>

    </div>

  </form>


        </div>

      </div>

    </div>


      );
    }

    export default Signup;
