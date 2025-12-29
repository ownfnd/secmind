"use client";

import { useState } from "react";
import { Check, X, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PasswordStrengthTester() {
    const [password, setPassword] = useState("");

    const calculateEntropy = (pwd: string) => {
        let poolSize = 0;
        if (/[a-z]/.test(pwd)) poolSize += 26;
        if (/[A-Z]/.test(pwd)) poolSize += 26;
        if (/[0-9]/.test(pwd)) poolSize += 10;
        if (/[^a-zA-Z0-9]/.test(pwd)) poolSize += 32;

        if (poolSize === 0) return 0;
        return Math.floor(Math.log2(Math.pow(poolSize, pwd.length)));
    };

    const entropy = calculateEntropy(password);

    const getCrackTime = (bits: number) => {
        // Assumptions: 100 billion guesses per second (high-end GPU cluster)
        const guesses = Math.pow(2, bits);
        const seconds = guesses / 100000000000;

        if (seconds < 1) return "Instantly";
        if (seconds < 60) return `${Math.round(seconds)} seconds`;
        if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
        if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
        if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
        if (seconds < 3153600000) return `${Math.round(seconds / 31536000)} years`;
        return "Centuries";
    };

    const checks = [
        { label: "At least 12 characters", valid: password.length >= 12 },
        { label: "Contains uppercase", valid: /[A-Z]/.test(password) },
        { label: "Contains lowercase", valid: /[a-z]/.test(password) },
        { label: "Contains number", valid: /[0-9]/.test(password) },
        { label: "Contains special char", valid: /[^a-zA-Z0-9]/.test(password) },
    ];

    return (
        <div className="space-y-8">
            <div>
                <label className="block text-sm font-medium mb-2">Test a Password</label>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Type here..."
                    className="w-full bg-background border border-white/20 rounded-md px-4 py-3 text-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                />
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                    <Info className="h-3 w-3 mr-1" />
                    Passwords are processed locally in your browser. Nothing is sent to a server.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="font-semibold text-white">Requirements</h3>
                    <ul className="space-y-2">
                        {checks.map((check, i) => (
                            <li key={i} className={cn("flex items-center text-sm", check.valid ? "text-accent" : "text-muted-foreground")}>
                                {check.valid ? <Check className="h-4 w-4 mr-2" /> : <X className="h-4 w-4 mr-2" />}
                                {check.label}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h3 className="font-semibold text-white mb-4">Security Analysis</h3>

                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Entropy</span>
                                <span className="font-mono text-primary">{entropy} bits</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                    className={cn("h-full transition-all duration-500",
                                        entropy < 40 ? "bg-red-500" :
                                            entropy < 60 ? "bg-orange-500" :
                                                entropy < 80 ? "bg-yellow-500" : "bg-green-500"
                                    )}
                                    style={{ width: `${Math.min(entropy, 100)}%` }}
                                />
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <p className="text-sm text-gray-400">Estimated time to crack:</p>
                            <p className="text-2xl font-bold text-white">{getCrackTime(entropy)}</p>
                            <p className="text-xs text-gray-500 mt-1">Assuming 100 billion guesses/sec</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
