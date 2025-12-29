"use client";

import { useState } from "react";
import { ShieldCheck, ShieldAlert, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const CHECKS = [
    { id: "2fa", text: "I use Two-Factor Authentication (2FA) on my email", weight: 20 },
    { id: "reuse", text: "I do NOT reuse passwords across important sites", weight: 20 },
    { id: "manager", text: "I use a Password Manager", weight: 15 },
    { id: "vpn", text: "I use a VPN on public Wi-Fi", weight: 10 },
    { id: "social", text: "My social media profiles are set to 'Private'", weight: 10 },
    { id: "phishing", text: "I know how to inspect a URL before clicking", weight: 15 },
    { id: "updates", text: "My OS and browser are set to auto-update", weight: 10 },
];

export default function PrivacyChecklist() {
    const [checked, setChecked] = useState<Record<string, boolean>>({});

    const toggle = (id: string) => {
        setChecked(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const score = CHECKS.reduce((acc, item) => checked[item.id] ? acc + item.weight : acc, 0);

    const getRating = (s: number) => {
        if (s >= 90) return { label: "Fortress", color: "text-green-500" };
        if (s >= 70) return { label: "Secure", color: "text-blue-500" };
        if (s >= 50) return { label: "Vulnerable", color: "text-orange-500" };
        return { label: "High Risk", color: "text-red-500" };
    };

    const rating = getRating(score);

    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Self-Assessment Checklist</h3>
                {CHECKS.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => toggle(item.id)}
                        className={cn(
                            "p-4 rounded-lg border cursor-pointer transition-all flex items-center space-x-3 select-none",
                            checked[item.id] ? "bg-primary/20 border-primary/50" : "bg-white/5 border-white/10 hover:bg-white/10"
                        )}
                    >
                        <div className={cn("w-6 h-6 rounded border flex items-center justify-center shrink-0", checked[item.id] ? "bg-primary border-primary text-black" : "border-gray-500")}>
                            {checked[item.id] && <ShieldCheck className="w-4 h-4" />}
                        </div>
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center justify-center p-8 bg-black/20 rounded-xl border border-white/5">
                <div className="relative mb-6">
                    <Shield className={cn("w-32 h-32 opacity-20", rating.color)} />
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold font-mono">
                        {score}%
                    </div>
                </div>

                <h2 className={cn("text-3xl font-bold mb-2", rating.color)}>{rating.label}</h2>
                <p className="text-center text-muted-foreground text-sm max-w-xs">
                    {score < 50 ? "Your digital footprint is exposed. Start by enabling 2FA immediately." :
                        score < 90 ? "Good start! Look at the unchecked items to improve further." :
                            "Excellent cyber hygiene! Keep it up."}
                </p>
            </div>
        </div>
    );
}
