import Navbar from "@/components/Navbar";
import Link from "next/link";
import { BookOpen, ShieldAlert, Key, Lock } from "lucide-react";

export default function LearnPage() {
    return (
        <main className="min-h-screen bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Cybersecurity Knowledge Base</h1>
                <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
                    Explore the fundamental concepts of digital security and artificial intelligence safety.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Password Hygiene",
                            icon: Key,
                            desc: "Why length and complexity matter using entropy math.",
                            href: "/learn/passwords"
                        },
                        {
                            title: "Social Engineering",
                            icon: ShieldAlert,
                            desc: "Understanding phishing, vishing, and psychological manipulation.",
                            href: "/learn/phishing"
                        },
                        {
                            title: "Encryption 101",
                            icon: Lock,
                            desc: "Symmetric vs Asymmetric encryption explained visually.",
                            href: "/learn/encryption"
                        },
                        {
                            title: "AI & Deepfakes",
                            icon: BookOpen,
                            desc: "How generative AI is changing the threat landscape.",
                            href: "/learn/ai-safety"
                        }
                    ].map((topic, i) => (
                        <Link key={i} href={topic.href} className="block group">
                            <div className="h-full p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1">
                                <topic.icon className="h-8 w-8 text-secondary mb-4 group-hover:text-white transition-colors" />
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{topic.title}</h3>
                                <p className="text-muted-foreground">{topic.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
