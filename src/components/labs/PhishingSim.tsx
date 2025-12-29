"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle, Flag, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const EMAILS = [
    {
        id: 1,
        sender: "Security Team <security@gogle-support.com>",
        subject: "Urgent: Unusual Activity Detected",
        body: "We noticed a login from Russia. Click here immediately to verify your account or it will be locked.",
        isPhishing: true,
        reason: "Sender domain 'gogle-support.com' is a spoof. Urgency ('immediately') is a red flag.",
    },
    {
        id: 2,
        sender: "HR Department <hr@company.internal>",
        subject: "Updated Holiday Policy",
        body: "Please review the attached PDF for the new holiday carry-over policy for 2024.",
        isPhishing: false,
        reason: "Internal sender, standard business communication, no urgency or threats.",
    },
    {
        id: 3,
        sender: "CEO <ceo.urgent@gmail.com>",
        subject: "Wire Transfer Needed",
        body: "I am in a meeting and can't talk. Please process a wire transfer of $5000 to this vendor ASAP. Discreetly.",
        isPhishing: true,
        reason: "CEO using Gmail address instead of corporate. Requesting unverified financial action 'ASAP'.",
    },
];

export default function PhishingSim() {
    const [selectedEmail, setSelectedEmail] = useState<number | null>(null);
    const [verdict, setVerdict] = useState<{ id: number; correct: boolean } | null>(null);

    const handleVerdict = (isPhishingVote: boolean) => {
        if (selectedEmail === null) return;
        const email = EMAILS.find(e => e.id === selectedEmail);
        if (!email) return;

        const isCorrect = isPhishingVote === email.isPhishing;
        setVerdict({ id: email.id, correct: isCorrect });
    };

    const currentEmail = EMAILS.find(e => e.id === selectedEmail);

    return (
        <div className="grid md:grid-cols-3 gap-6 h-[600px]">
            {/* Sidebar List */}
            <div className="bg-black/20 border-r border-white/10 flex flex-col overflow-y-auto">
                {EMAILS.map((email) => (
                    <button
                        key={email.id}
                        onClick={() => { setSelectedEmail(email.id); setVerdict(null); }}
                        className={cn(
                            "p-4 text-left border-b border-white/5 hover:bg-white/5 transition-colors",
                            selectedEmail === email.id && "bg-white/10 border-l-2 border-l-primary"
                        )}
                    >
                        <div className="font-bold text-sm truncate">{email.sender}</div>
                        <div className="text-xs text-muted-foreground truncate">{email.subject}</div>
                    </button>
                ))}
            </div>

            {/* Email View */}
            <div className="md:col-span-2 p-6 flex flex-col">
                {currentEmail ? (
                    <>
                        <div className="border-b border-white/10 pb-4 mb-4">
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="bg-gray-700 p-2 rounded-full"><Mail className="h-5 w-5" /></div>
                                <div>
                                    <div className="font-bold">{currentEmail.sender}</div>
                                    <div className="text-sm text-gray-400">Subject: {currentEmail.subject}</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow whitespace-pre-wrap font-sans text-gray-300">
                            {currentEmail.body}
                        </div>

                        {verdict && verdict.id === currentEmail.id ? (
                            <div className={cn("mt-6 p-4 rounded-lg border", verdict.correct ? "bg-green-500/10 border-green-500/20" : "bg-red-500/10 border-red-500/20")}>
                                <h4 className={cn("font-bold flex items-center", verdict.correct ? "text-green-400" : "text-red-400")}>
                                    {verdict.correct ? <CheckCircle className="h-5 w-5 mr-2" /> : <AlertCircle className="h-5 w-5 mr-2" />}
                                    {verdict.correct ? "Correct Choice!" : "Incorrect"}
                                </h4>
                                <p className="mt-2 text-sm text-gray-300">
                                    {currentEmail.isPhishing ? "This WAS a phishing attempt." : "This was a legitimate email."}
                                    <br />
                                    <span className="font-semibold text-white">Why:</span> {currentEmail.reason}
                                </p>
                            </div>
                        ) : (
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => handleVerdict(false)}
                                    className="py-3 rounded-lg border border-green-500/30 text-green-400 hover:bg-green-500/10 transition-colors font-semibold"
                                >
                                    Mark as Safe
                                </button>
                                <button
                                    onClick={() => handleVerdict(true)}
                                    className="py-3 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors font-semibold flex justify-center items-center"
                                >
                                    <Flag className="h-4 w-4 mr-2" />
                                    Report Phishing
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                        Select an email to inspect headers and content.
                    </div>
                )}
            </div>
        </div>
    );
}
