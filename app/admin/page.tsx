"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const getWaitTime = (attempts: number) => {
    if (attempts === 1) return 60 * 1000;
    if (attempts === 2) return 2 * 60 * 1000;
    if (attempts === 3) return 5 * 60 * 1000;
    if (attempts === 4) return 60 * 60 * 1000;
    return 24 * 60 * 60 * 1000;
  };

  // ⏱️ Countdown
  useEffect(() => {
    const interval = setInterval(() => {
      const lockUntil = Number(localStorage.getItem("lockUntil") || 0);
      const now = Date.now();

      if (lockUntil > now) {
        setTimeLeft(lockUntil - now);
      } else {
        setTimeLeft(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const attempts = Number(localStorage.getItem("loginAttempts") || 0);
    const lockUntil = Number(localStorage.getItem("lockUntil") || 0);
    const now = Date.now();

    // ⛔ Locked
    if (now < lockUntil) return;

    // ✅ ORIGINAL LOGIN LOGIC (UNCHANGED)
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAdmin", "true");

      localStorage.removeItem("loginAttempts");
      localStorage.removeItem("lockUntil");

      setError("");
      setSuccess(true);

      // redirect after short delay (for UX)
      setTimeout(() => {
        window.location.href = "/admin/dashboard";
      }, 1000);
    } else {
      setError("❌ Invalid username or password");
      setSuccess(false);

      const newAttempts = attempts + 1;
      const waitTime = getWaitTime(newAttempts);

      localStorage.setItem("loginAttempts", String(newAttempts));
      localStorage.setItem("lockUntil", String(now + waitTime));
    }
  };

  // ⏱️ Format time
  const formatTime = (ms: number) => {
    const totalSeconds = Math.ceil(ms / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    if (h > 0) return `${h}h ${m}m ${s}s`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/bg-login.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm" />
      </div>

      {/* LOGIN CARD */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl overflow-hidden">

        {/* SHINE */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="shine" />
        </div>

        {/* LOGO */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
            Ahsan’s Story
          </h1>
          <p className="text-sm text-gray-300 mt-1">Admin Panel</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* ❌ ERROR */}
          {error && (
            <p className="text-xs text-red-400 text-center">
              {error}
            </p>
          )}

          {/* ⏱️ TIMER */}
          {timeLeft > 0 && (
            <p className="text-xs text-yellow-300 text-center">
              Try again in {formatTime(timeLeft)}
            </p>
          )}

          {/* ✅ SUCCESS */}
          {success && (
            <p className="text-xs text-green-300 text-center">
              ✅ Login successful! Redirecting...
            </p>
          )}

          <button
            disabled={timeLeft > 0}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              timeLeft > 0
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-white text-blue-900 hover:scale-105"
            }`}
          >
            {timeLeft > 0
              ? "Locked"
              : success
              ? "Success"
              : "Sign In"}
          </button>

        </form>
      </div>

      {/* SHINE STYLE */}
      <style jsx>{`
        .shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            120deg,
            transparent 40%,
            rgba(255, 255, 255, 0.2),
            transparent 60%
          );
          transform: rotate(25deg);
          animation: shineMove 6s infinite;
        }

        @keyframes shineMove {
          0% {
            transform: translateX(-100%) rotate(25deg);
          }
          100% {
            transform: translateX(100%) rotate(25deg);
          }
        }
      `}</style>
    </main>
  );
}