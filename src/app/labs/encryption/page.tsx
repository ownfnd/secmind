import LabShell from "@/components/labs/LabShell";
import EncryptionVisualizer from "@/components/labs/EncryptionVisualizer";

export default function EncryptionLabPage() {
    return (
        <LabShell
            title="Encryption Visualizer"
            description="See how your data is transformed into unreadable ciphertext using a key."
            warning="This simulation shifts characters visually. Real AES encryption generates random-looking noise."
        >
            <EncryptionVisualizer />
        </LabShell>
    );
}
