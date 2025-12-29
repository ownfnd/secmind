import Navbar from "@/components/Navbar";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">About SecureMind AI</h1>

                <div className="prose prose-invert prose-lg">
                    <p className="text-xl text-muted-foreground mb-8">
                        Our mission is to democratize cybersecurity education through interactive, safe, and engaging simulation labs.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Core Values</h2>
                    <ul className="space-y-4 list-none pl-0">
                        {[
                            "Safety First: No dangerous tools, only simulations.",
                            "Privacy by Design: We practice what we preach.",
                            "Accessible Education: Complex topics made simple.",
                            "Transparency: Open source methodologies."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-accent mr-3 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-2">Contact Us</h3>
                        <p className="text-muted-foreground mb-4">
                            Have questions or want to collaborate? Reach out to our security team.
                        </p>
                        <a href="mailto:security@securemind.ai" className="text-white hover:text-primary underline">
                            security@securemind.ai
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
