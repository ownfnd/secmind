"use client";

import { useState } from "react";
import { Check, X, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const QUESTIONS = [
    {
        type: "image",
        desc: "Look at the hands in an image. Which is a common sign of AI generation?",
        options: [
            { text: "Perfectly manicured nails", correct: false },
            { text: "Extra fingers or distorted joints", correct: true },
            { text: "Wearing gloves", correct: false },
        ],
        explanation: "Early AI models often struggle with complex geometry like hands, leading to extra fingers or impossible joints."
    },
    {
        type: "text",
        desc: "Which phrase pattern often indicates LLM-generated text (like ChatGPT)?",
        options: [
            { text: "Typos and grammatical errors", correct: false },
            { text: "Overly polite, structured, and repetitive phrases like 'assurance'", correct: true },
            { text: "Slang and colloquialisms", correct: false },
        ],
        explanation: "AI models are trained to be helpful and polite, often resulting in a distinct 'customer service' tone and repetitive sentence structures."
    },
    {
        type: "audio",
        desc: "In an audio deepfake phone call (vishing), what is a key indicator?",
        options: [
            { text: "Background noise of a busy office", correct: false },
            { text: "Unnatural pauses or lack of emotional variation", correct: true },
            { text: "Heavy accent", correct: false },
        ],
        explanation: "While improving, AI voices can sound 'flat' or have unnatural cadence, especially when generating emotional speech."
    }
];

export default function DeepfakeQuiz() {
    const [currentQ, setCurrentQ] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);

    const handleSelect = (idx: number) => {
        if (showResult) return;
        setSelected(idx);
        setShowResult(true);
    };

    const nextQuestion = () => {
        setSelected(null);
        setShowResult(false);
        setCurrentQ((prev) => (prev + 1) % QUESTIONS.length);
    };

    const question = QUESTIONS[currentQ];
    const isCorrect = selected !== null && question.options[selected].correct;

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-4 flex justify-between text-sm text-gray-400">
                <span>Question {currentQ + 1} of {QUESTIONS.length}</span>
                <span>Topic: {question.type.toUpperCase()}</span>
            </div>

            <div className="bg-card border border-white/10 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-6">{question.desc}</h3>

                <div className="space-y-3">
                    {question.options.map((opt, i) => (
                        <button
                            key={i}
                            onClick={() => handleSelect(i)}
                            disabled={showResult}
                            className={cn(
                                "w-full p-4 rounded-lg border text-left transition-all flex justify-between items-center",
                                showResult && opt.correct ? "bg-green-500/20 border-green-500/50" :
                                    showResult && selected === i && !opt.correct ? "bg-red-500/20 border-red-500/50" :
                                        "bg-white/5 border-white/10 hover:bg-white/10"
                            )}
                        >
                            <span>{opt.text}</span>
                            {showResult && opt.correct && <Check className="text-green-400 h-5 w-5" />}
                            {showResult && selected === i && !opt.correct && <X className="text-red-400 h-5 w-5" />}
                        </button>
                    ))}
                </div>
            </div>

            {showResult && (
                <div className={cn("p-6 rounded-xl border mb-6 animate-in slide-in-from-bottom-2", isCorrect ? "bg-green-500/10 border-green-500/20" : "bg-orange-500/10 border-orange-500/20")}>
                    <div className="flex items-start mb-2">
                        <AlertTriangle className={cn("h-5 w-5 mr-2 shrink-0", isCorrect ? "text-green-500" : "text-orange-500")} />
                        <h4 className="font-bold">{isCorrect ? "Correct Observation!" : "Not quite."}</h4>
                    </div>
                    <p className="text-sm text-gray-300 ml-7">{question.explanation}</p>

                    <button
                        onClick={nextQuestion}
                        className="mt-4 ml-7 px-4 py-2 bg-white/10 hover:bg-white/20 rounded text-sm font-medium transition-colors"
                    >
                        {currentQ < QUESTIONS.length - 1 ? "Next Question" : "Restart Quiz"}
                    </button>
                </div>
            )}
        </div>
    );
}
