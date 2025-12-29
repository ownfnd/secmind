import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SocialEngineeringLearnPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <Link href="/learn" className="inline-flex items-center text-primary mb-8 hover:underline">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Learning Hub
                </Link>

                <h1 className="text-4xl font-bold mb-6">Social Engineering</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="lead text-xl text-gray-300">
                        Hacking the human. Why break encryption when you can just ask someone for their password?
                    </p>

                    <h3>What is it?</h3>
                    <p className="text-gray-300">
                        Social engineering involves manipulating people into performing actions or divulging confidential information. It relies on human psychology rather than technical hacking techniques.
                    </p>

                    <h3 className="mt-8">Types of Social Engineering</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-300">
                        <li><strong>Phishing:</strong> Fraudulent emails appearing to be from reputable sources.</li>
                        <li><strong>Pretexting:</strong> Creating a fabricated scenario to steal information (e.g., "I'm from IT support").</li>
                        <li><strong>Baiting:</strong> Leaving a malware-infected USB drive in a parking lot.</li>
                    </ul>

                    <div className="bg-card p-6 rounded-xl border border-white/10 mt-8">
                        <h4 className="text-lg font-bold mb-2">Test Your Skills</h4>
                        <p className="mb-4">Can you spot a phishing email from a real one?</p>
                        <Link href="/labs/phishing" className="px-4 py-2 bg-primary text-black font-bold rounded">Go to Phishing Lab</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
