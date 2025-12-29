import LabShell from "@/components/labs/LabShell";
import PasswordStrengthTester from "@/components/labs/PasswordStrengthTester";

export default function PasswordLabPage() {
    return (
        <LabShell
            title="Password Security Lab"
            description="Understand how password length and complexity affect security against brute-force attacks."
            warning="This simulation runs entirely in your browser. Do not enter your actual real passwords."
        >
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <PasswordStrengthTester />
                </div>

                <div className="space-y-6">
                    <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-lg">
                        <h3 className="font-bold text-blue-400 mb-2">What is Entropy?</h3>
                        <p className="text-sm text-blue-100/80">
                            Entropy is a measure of randomness or unpredictability. In passwords, it represents how many possible combinations an attacker needs to guess.
                            <br /><br />
                            <strong>Formula:</strong> <code className="bg-black/30 px-1 rounded">E = L × log₂(R)</code>
                            <br />
                            Where <em>L</em> is length and <em>R</em> is the pool of characters.
                        </p>
                    </div>

                    <div className="bg-purple-500/10 border border-purple-500/20 p-6 rounded-lg">
                        <h3 className="font-bold text-purple-400 mb-2">Key Takeaways</h3>
                        <ul className="list-disc list-inside text-sm text-purple-100/80 space-y-2">
                            <li>Length beats complexity.</li>
                            <li>Passphrases (4+ random words) are easier to remember and very strong.</li>
                            <li>Never reuse passwords across sites.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </LabShell>
    );
}
