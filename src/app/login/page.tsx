"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Login failed");

            // Save token (in real app using secure cookies is better, but local storage for demo)
            localStorage.setItem("token", data.token);
            router.push("/labs");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="w-full max-w-md p-8 bg-card border border-white/10 rounded-2xl shadow-xl">
                    <h2 className="text-3xl font-bold text-center mb-6">Secure Access</h2>

                    {error && (
                        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-background border border-white/20 rounded px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
                                placeholder="user@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-background border border-white/20 rounded px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-primary-foreground font-bold py-2 rounded hover:opacity-90 transition-opacity"
                        >
                            Login
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-500">
                        Don't have an account? <Link href="/register" className="text-primary hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
