import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PasswordLearnPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <Link href="/learn" className="inline-flex items-center text-primary mb-8 hover:underline">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Learning Hub
                </Link>

                <h1 className="text-4xl font-bold mb-6">Password Hygiene</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="lead text-xl text-gray-300">
                        Passwords are the first line of defense in your digital life. Using one strong unique password is good, but using a password manager is better.
                    </p>

                    <h3>What makes a password strong?</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-300">
                        <li><strong>Length:</strong> It should be at least 12 characters long. Length matters more than complexity!</li>
                        <li><strong>Complexity:</strong> Mix uppercase, lowercase, numbers, and symbols.</li>
                        <li><strong>Uniqueness:</strong> Never reuse passwords across sites.</li>
                    </ul>

                    <h3 className="mt-8">Common Attacks</h3>
                    <p className="text-gray-300">
                        Hackers use <em>Brute Force</em> (trying every combination) and <em>Credential Stuffing</em> (using leaked passwords from other breaches) to hack accounts.
                    </p>

                    <div className="bg-card p-6 rounded-xl border border-white/10 mt-8">
                        <h4 className="text-lg font-bold mb-2">Try the Lab</h4>
                        <p className="mb-4">Test the strength of your own passwords in our secure, offline lab.</p>
                        <Link href="/labs/password" className="px-4 py-2 bg-primary text-black font-bold rounded">Go to Lab</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
