import LabShell from "@/components/labs/LabShell";
import DeepfakeQuiz from "@/components/labs/DeepfakeQuiz";

export default function DeepfakeLabPage() {
    return (
        <LabShell
            title="AI Threat Awareness"
            description="Learn to spot the tell-tale signs of AI-generated content used in scams and misinformation."
            warning="AI technology evolves rapidly. Signs valid today might be fixed in tomorrow's models."
        >
            <DeepfakeQuiz />
        </LabShell>
    );
}
