"use client";

import { useState } from "react";
import { ArrowRight, Lock, Unlock, RefreshCw } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function EncryptionVisualizer() {
    const [input, setInput] = useState("Hello World");
    const [key, setKey] = useState("SECRET");
    const [isEncrypted, setIsEncrypted] = useState(false);

    // Simple Vigenère cipher for visualization
    const encrypt = (text: string, key: string) => {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            const shift = key.charCodeAt(i % key.length);
            // Visualize shifting by adding key char code (bounded to printable ASCII for demo)
            // This is NOT real secure encryption, just a visualizer
            const newChar = String.fromCharCode(32 + ((charCode + shift) % 95));
            result += newChar;
        }
        return result;
    };

    const encryptedText = encrypt(input, key);
    const display = isEncrypted ? encryptedText : input;

    return (
        <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <label className="block text-sm font-medium mb-2">Plaintext Message</label>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => { setInput(e.target.value); setIsEncrypted(false); }}
                        className="w-full bg-background border border-white/20 rounded-md px-4 py-3 font-mono"
                        placeholder="Enter message..."
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Secret Key</label>
                    <input
                        type="text"
                        value={key}
                        onChange={(e) => { setKey(e.target.value); setIsEncrypted(false); }}
                        className="w-full bg-background border border-white/20 rounded-md px-4 py-3 font-mono"
                        placeholder="Key..."
                    />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center p-8 bg-black/40 rounded-xl border border-white/5 min-h-[200px] relative overflow-hidden">
                <div className="absolute top-4 right-4 text-xs text-gray-500 font-mono">
                    ALGORITHM: SHIFT_VISUALIZER (SIMULATED)
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={isEncrypted ? "enc" : "dec"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-3xl md:text-5xl font-mono font-bold text-center break-all"
                    >
                        {display}
                    </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center space-x-4">
                    <button
                        onClick={() => setIsEncrypted(!isEncrypted)}
                        className="flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform"
                    >
                        {isEncrypted ? (
                            <>
                                <Unlock className="h-5 w-5 mr-2" /> Decrypt
                            </>
                        ) : (
                            <>
                                <Lock className="h-5 w-5 mr-2" /> Encrypt
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="p-4 rounded border border-white/10 bg-white/5">
                    <h4 className="font-bold text-white mb-2">Symmetric</h4>
                    <p className="text-gray-400">Uses the SAME key for encryption and decryption. Fast, but key sharing is risky.</p>
                </div>
                <div className="p-4 rounded border border-white/10 bg-white/5">
                    <h4 className="font-bold text-white mb-2">Asymmetric</h4>
                    <p className="text-gray-400">Uses a PUBLIC key to encrypt and a PRIVATE key to decrypt. Slower, but solves key exchange.</p>
                </div>
                <div className="p-4 rounded border border-white/10 bg-white/5">
                    <h4 className="font-bold text-white mb-2">Hashing</h4>
                    <p className="text-gray-400">One-way transformation. You cannot decrypt a hash. Used for passwords.</p>
                </div>
            </div>
        </div>
    );
}
