import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Lock, Mail, Eye, ShieldAlert, Cpu, Database, Code } from "lucide-react";

export default function LabsPage() {
    const labs = [
        {
            id: "password",
            title: "Password Cracking Sim",
            desc: "Experience how fast weak passwords are broken and learn about entropy.",
            icon: Lock,
            color: "text-blue-400",
            href: "/labs/password",
            expert: false,
        },
        {
            id: "phishing",
            title: "Phishing Detective",
            desc: "Analyze simulated emails to spot red flags before you click.",
            icon: Mail,
            color: "text-red-400",
            href: "/labs/phishing",
            expert: false,
        },
        {
            id: "encryption",
            title: "Encryption Visualizer",
            desc: "See how data is scrambled using AES and RSA algorithms.",
            icon: ShieldAlert,
            color: "text-green-400",
            href: "/labs/encryption",
            expert: true,
        },
        {
            id: "deepfake",
            title: "AI Deepfake Spotter",
            desc: "Train your eyes to detect AI-generated media manipulation.",
            icon: Cpu,
            color: "text-purple-400",
            href: "/labs/deepfake",
            expert: true,
        },
        {
            id: "sqli",
            title: "SQL Injection",
            desc: "Visualize how attackers manipulate database queries.",
            icon: Database,
            color: "text-orange-400",
            href: "/labs/sqli",
            expert: true,
        },
        {
            id: "xss",
            title: "XSS Playground",
            desc: "Understand Cross-Site Scripting vulnerabilities.",
            icon: Code,
            color: "text-yellow-400",
            href: "/labs/xss",
            expert: true,
        },
    ];

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">Interactive Cyber Labs</h1>
                    <p className="text-xl text-muted-foreground">
                        Hands-on simulations to master security concepts. Safe, isolated, and educational.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {labs.map((lab) => (
                        <Link key={lab.id} href={lab.href} className="group relative block h-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative h-full bg-card border border-white/10 p-8 rounded-2xl flex flex-col hover:translate-y-1 transition-transform duration-200">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-lg bg-white/5 ${lab.color}`}>
                                        <lab.icon className="h-8 w-8" />
                                    </div>
                                    {lab.expert && (
                                        <span className="px-2 py-1 rounded text-xs font-bold bg-secondary/10 text-secondary border border-secondary/20">
                                            ADVANCED
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {lab.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    {lab.desc}
                                </p>

                                <div className="text-sm font-medium text-primary flex items-center">
                                    Start Simulation <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
