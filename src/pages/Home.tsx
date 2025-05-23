// import React, { useEffect, useRef } from "react";

// const Home: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     function resizeCanvas() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     const particles: any[] = [];
//     const numParticles = 100;

//     class Particle {
//       x: number;
//       y: number;
//       radius: number;
//       speed: number;
//       angle: number;

//       constructor(x: number, y: number, radius: number, speed: number) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.speed = speed;
//         this.angle = Math.random() * Math.PI * 2;
//       }

//       update() {
//         this.x += Math.cos(this.angle) * this.speed;
//         this.y += Math.sin(this.angle) * this.speed;

//         if (this.x < 0 || this.x > canvas.width)
//           this.angle = Math.PI - this.angle;
//         if (this.y < 0 || this.y > canvas.height) this.angle = -this.angle;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
//         ctx.fill();
//       }
//     }

//     for (let i = 0; i < numParticles; i++) {
//       particles.push(
//         new Particle(
//           Math.random() * canvas.width,
//           Math.random() * canvas.height,
//           Math.random() * 4 + 1,
//           Math.random() * 0.5 + 0.2
//         )
//       );
//     }

//     function connectParticles() {
//       for (let a = 0; a < particles.length; a++) {
//         for (let b = a + 1; b < particles.length; b++) {
//           const dist = Math.hypot(
//             particles[a].x - particles[b].x,
//             particles[a].y - particles[b].y
//           );

//           if (dist < 120) {
//             ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 120})`;
//             ctx.lineWidth = 0.7;
//             ctx.beginPath();
//             ctx.moveTo(particles[a].x, particles[a].y);
//             ctx.lineTo(particles[b].x, particles[b].y);
//             ctx.stroke();
//           }
//         }
//       }
//     }

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((p) => {
//         p.update();
//         p.draw();
//       });
//       connectParticles();
//       requestAnimationFrame(animate);
//     }

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//     };
//   }, []);

//   return (
//     <main className="relative overflow-hidden h-screen bg-gradient-to-b from-[#1b2735] to-[#090a0f]">
//       {/* Canvas Background */}
//       <canvas
//         ref={canvasRef}
//         className="absolute top-0 left-0 w-full h-full z-0"
//       ></canvas>

//       {/* Hero Section */}
//       <div className="relative z-10 flex items-center justify-center h-full px-6">
//         <div className="container mx-auto flex flex-col md:flex-row items-center py-16">
//           {/* Left Content */}
//           <div className="sm:w-2/3 lg:w-2/5 text-white">
//             <span className="w-20 h-2 bg-white mb-12 block"></span>
//             <h1 className="font-bold uppercase text-6xl sm:text-8xl leading-none">
//               Be on
//               <span className="text-5xl sm:text-7xl block">Time</span>
//             </h1>
//             <p className="text-sm sm:text-base mt-4">
//               Dimension of reality that makes change possible and
//               understandable. An indefinite and homogeneous environment in which
//               natural events and human existence take place.
//             </p>
//             <div className="flex mt-8">
//               <a
//                 href="#"
//                 className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400 transition duration-300"
//               >
//                 Get started
//               </a>
//               <a
//                 href="#"
//                 className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-md transition duration-300"
//               >
//                 Read more
//               </a>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="hidden sm:block sm:w-1/3 lg:w-3/5">
//             <img
//               src="https://www.tailwind-kit.com/images/object/10.png"
//               alt="Hero"
//               className="max-w-xs md:max-w-sm m-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;

import React, { useState } from "react";

const Home: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const isValidEmail = (email: string) => {
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailRegex = /\S+@\S+\.\S+/;

    return emailRegex.test(email);
  };

  const isValidPassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const checkForm = () => {
    const newErrors: string[] = [];

    if (!username) newErrors.push("Username is required");
    else if (username.length < 3)
      newErrors.push("Username must be at least 3 characters");

    if (!email) newErrors.push("Email is required");
    else if (!isValidEmail(email)) newErrors.push("Email is invalid");

    if (!password) newErrors.push("Password is required");
    else if (!isValidPassword(password)) {
      newErrors.push(
        "Password must be at least 8 characters, include an uppercase and lowercase letter"
      );
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      console.log("Form Submitted:", { username, email, password });
      alert("Login successful!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <input
        type="text"
        placeholder="Username"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={checkForm}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>

      {errors.length > 0 && (
        <div className="mt-4 bg-red-100 border border-red-400 text-red-700 p-3 rounded-md">
          <ul className="list-disc list-inside">
            {errors.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
