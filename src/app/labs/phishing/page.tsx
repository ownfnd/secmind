import LabShell from "@/components/labs/LabShell";
import PhishingSim from "@/components/labs/PhishingSim";

export default function PhishingLabPage() {
    return (
        <LabShell
            title="Phishing Awareness Lab"
            description="Learn to identify common red flags in fraudulent emails. Stop attacks before they start."
            warning="These are simulated emails. Clicking links here is safe, but never click unknown links in real life."
        >
            <PhishingSim />
        </LabShell>
    );
}
