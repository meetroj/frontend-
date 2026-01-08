import { useState } from "react";


import { useNavigate } from "react-router-dom";



function Login() {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


async function handleSubmit(e) {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.message || "Login failed");

    return;
  }


  localStorage.setItem("token", data.token);
  navigate("/welcome");
}


  return (
<div className="h-screen w-screen flex items-center justify-center  bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700">

  <div className="w-[900px] h-[480px] bg-white rounded-3xl shadow-2xl overflow-hidden flex">


    <div className="w-1/2 p-12  bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700 ">

      <h1 className="text-3xl font-bold mb-4 ml-4">Welcome to Shutter </h1>
      <div className="ml-27"><h1 className="text-3xl font-bold mb-4 ">Stock </h1></div>

      <p className="text-white/90 text-sm leading-relaxed ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </p>

    </div>


    <div className="w-1/2 p-12 flex flex-col justify-center">

      <h2 className="text-xl font-semibold text-center mb-6 text-sky-600">LOGIN</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

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

        <div className="flex justify-between items-center ">
          <label className="flex items-center gap-2">

          </label>
          <span className="text-black cursor-pointer">Forgot password?</span>
        </div>

       <button
    type="submit"
    className="w-full py-2 rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700 text-white font-semibold hover:opacity-90 transition"
  >
    SignUp
  </button>
    <div className="flex justify-between">
    <p>Don't have an account?</p>
    <span onClick={()=>navigate("/signup")} className="text-blue-500 underline cursor-pointer">Register</span>

  </div>

      </form>
    </div>

  </div>

</div>


  );
}

export default Login;
