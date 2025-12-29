import LabShell from "@/components/labs/LabShell";
import SQLInjectionSim from "@/components/labs/SQLInjectionSim";

export default function SQLInjectionLabPage() {
    return (
        <LabShell
            title="SQL Injection Visualizer"
            description="See how unsanitized input can break database queries and expose sensitive data."
            warning="This is a safe, client-side simulation. No real database is connected or at risk."
        >
            <SQLInjectionSim />
        </LabShell>
    );
}
