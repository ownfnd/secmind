"use client";

import { useState } from "react";
import { Database, AlertTriangle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SQLInjectionSim() {
    const [username, setUsername] = useState("");
    const [queryLocked, setQueryLocked] = useState(false);

    // Simulated User Database
    const mockDB = [
        { id: 1, user: "admin", pass: "sUp3rS3cr3t", role: "ADMIN" },
        { id: 2, user: "alice", pass: "password123", role: "USER" },
        { id: 3, user: "bob", pass: "qwerty", role: "USER" },
    ];

    // Vulnerable Query Logic
    const generateQuery = (input: string) => {
        return `SELECT * FROM users WHERE username = '${input}';`;
    };

    const executeQuery = () => {
        // Basic simulation of SQLi logic
        // If input contains OR '1'='1 -- it returns all users
        // This is a naive simulation for educational purposes

        if (username.includes("' OR '1'='1")) {
            return { success: true, data: mockDB, exploit: true };
        }

        // Exact match
        const user = mockDB.find(u => u.user === username);
        if (user) return { success: true, data: [user], exploit: false };

        return { success: false, data: [], exploit: false };
    };

    const result = executeQuery();
    const rawQuery = generateQuery(username);

    return (
        <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <label className="block text-sm font-medium mb-2">Login Username</label>
                    <div className="relative">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Try: admin' OR '1'='1"
                            className={cn(
                                "w-full bg-background border rounded-md px-4 py-3 font-mono transition-colors",
                                result.exploit ? "border-red-500 ring-1 ring-red-500" : "border-white/20"
                            )}
                        />
                        {result.exploit && (
                            <AlertTriangle className="absolute right-3 top-3.5 h-5 w-5 text-red-500 animate-pulse" />
                        )}
                    </div>

                    <div className="mt-4 p-4 bg-black/40 rounded border border-white/10 font-mono text-sm">
                        <div className="text-gray-500 mb-2">Backend Query Construction:</div>
                        <div className="break-all">
                            <span className="text-blue-400">SELECT</span> * <span className="text-blue-400">FROM</span> users <span className="text-blue-400">WHERE</span> username = '<span className="text-yellow-400">{username}</span>';
                        </div>
                    </div>
                </div>

                <div className="bg-card border border-white/10 rounded-xl p-6 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold flex items-center">
                            <Database className="h-5 w-5 mr-2" /> Database Result
                        </h3>
                        {result.exploit ? (
                            <span className="text-xs bg-red-500/10 text-red-500 px-2 py-1 rounded border border-red-500/20 font-bold">EXPLOITED</span>
                        ) : (
                            <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded border border-green-500/20">SECURE</span>
                        )}
                    </div>

                    <div className="space-y-2">
                        {result.data.length > 0 ? (
                            result.data.map((row, i) => (
                                <div key={i} className="p-3 bg-white/5 rounded border border-white/5 flex justify-between text-sm font-mono">
                                    <span>ID: {row.id}</span>
                                    <span className="text-primary">{row.user}</span>
                                    <span className="text-gray-500">{row.role}</span>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-gray-500 py-8 italic">No records found</div>
                        )}
                    </div>

                    {result.exploit && (
                        <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded text-xs text-red-300">
                            <strong>Critical Vulnerability:</strong> The query logic was altered to always return TRUE (`'1'='1`), bypassing authentication and dumping the table.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
