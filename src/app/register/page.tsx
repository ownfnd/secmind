"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();
            if (!res.ok) {
                // Flatten Zod errors if array
                if (Array.isArray(data.error)) {
                    throw new Error(data.error.map((e: any) => e.message).join(", "));
                }
                throw new Error(data.error || "Registration failed");
            }

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
                    <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

                    {error && (
                        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-background border border-white/20 rounded px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
                                placeholder="John Doe"
                                required
                            />
                        </div>
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
                            <div className="text-xs text-gray-500 mb-1">Abc123! (Min 12 chars)</div>
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
                            Register
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-500">
                        Already have an account? <Link href="/login" className="text-primary hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
