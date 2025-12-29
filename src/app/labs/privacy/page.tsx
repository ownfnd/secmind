import LabShell from "@/components/labs/LabShell";
import PrivacyChecklist from "@/components/labs/PrivacyChecklist";

export default function PrivacyLabPage() {
    return (
        <LabShell
            title="Personal Privacy Risk Audit"
            description="Assess your personal cyber hygiene score and identify gaps in your defense."
            warning="This data is stored only in your browser's temporary memory and is not sent to any server."
        >
            <PrivacyChecklist />
        </LabShell>
    );
}
