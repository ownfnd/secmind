import LabShell from "@/components/labs/LabShell";
import XSSPlayground from "@/components/labs/XSSPlayground";

export default function XSSLabPage() {
    return (
        <LabShell
            title="XSS Playground"
            description="Experience Cross-Site Scripting in a safe sandbox. Toggle protections to see how sanitization works."
            warning="This simulation visualizes the vulnerability. We prevent actual arbitrary JS execution for safety reasons."
        >
            <XSSPlayground />
        </LabShell>
    );
}
