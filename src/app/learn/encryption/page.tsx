import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EncryptionLearnPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <Link href="/learn" className="inline-flex items-center text-primary mb-8 hover:underline">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Learning Hub
                </Link>

                <h1 className="text-4xl font-bold mb-6">Encryption 101</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="lead text-xl text-gray-300">
                        Scrambling data so only authorized parties can understand it. It is the backbone of internet privacy.
                    </p>

                    <h3>Symmetric vs Asymmetric</h3>
                    <p className="text-gray-300">
                        <strong>Symmetric Encryption:</strong> Uses the SAME key to lock and unlock data. Faster, but hard to share the key securely. (e.g., AES)
                    </p>
                    <p className="text-gray-300 mt-4">
                        <strong>Asymmetric Encryption:</strong> Uses a PUBLIC key to lock and a PRIVATE key to unlock. This powers HTTPS and secure messaging. (e.g., RSA)
                    </p>

                    <div className="bg-card p-6 rounded-xl border border-white/10 mt-8">
                        <h4 className="text-lg font-bold mb-2">See it in Action</h4>
                        <p className="mb-4">Type a message and watch it get scrambled.</p>
                        <Link href="/labs/encryption" className="px-4 py-2 bg-primary text-black font-bold rounded">Go to Encryption Lab</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
