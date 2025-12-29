import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AiSafetyLearnPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <Link href="/learn" className="inline-flex items-center text-primary mb-8 hover:underline">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Learning Hub
                </Link>

                <h1 className="text-4xl font-bold mb-6">AI & Deepfakes</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="lead text-xl text-gray-300">
                        Artificial Intelligence is changing the threat landscape, allowing bad actors to mimic voices and faces with terrifying accuracy.
                    </p>

                    <h3>What is a Deepfake?</h3>
                    <p className="text-gray-300">
                        A video, image, or audio recording that has been convincingly altered and manipulated to misrepresent someone as doing or saying something that was not actually done or said.
                    </p>

                    <h3 className="mt-8">How to spot them?</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-300">
                        <li><strong>Unnatural Blinking:</strong> Early deepfakes often didn't blink enough (though this is improving).</li>
                        <li><strong>Lip Syncing:</strong> Audio might be slightly out of sync with lip movements.</li>
                        <li><strong>Lighting Issues:</strong> Shadows might not match the environment perfectly.</li>
                        <li><strong>Context:</strong> Is the person saying something completely out of character?</li>
                    </ul>

                    <div className="bg-card p-6 rounded-xl border border-white/10 mt-8">
                        <h4 className="text-lg font-bold mb-2">Can you tell real from fake?</h4>
                        <p className="mb-4">Take the quiz to test your detection skills.</p>
                        <Link href="/labs/deepfake" className="px-4 py-2 bg-primary text-black font-bold rounded">Go to AI Lab</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
