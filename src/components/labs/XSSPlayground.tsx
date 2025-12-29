"use client";

import { useState, useEffect } from "react";
import { Code, Shield, Bug } from "lucide-react";
import { cn, sanitizeInput } from "@/lib/utils";

export default function XSSPlayground() {
    const [input, setInput] = useState("<script>alert('Hacked!');</script>");
    const [sanitized, setSanitized] = useState(true);
    const [comments, setComments] = useState<string[]>([]);

    const handlePost = () => {
        // In a real app, this would be saved to DB
        // Here we just update local state
        setComments([input, ...comments]);
        setInput("");
    };

    return (
        <div className="space-y-8">
            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm mb-6">
                <p className="font-bold text-blue-400 mb-1">Concept: Stored XSS</p>
                Cross-Site Scripting (XSS) happens when an app displays user input as raw code (HTML/JS) instead of plain text.
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-bold mb-4">Attacker Input</h3>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full h-32 bg-background border border-white/20 rounded-md p-3 font-mono text-sm mb-4"
                        placeholder="Type a comment..."
                    />

                    <div className="flex items-center justify-between mb-4">
                        <label className="flex items-center cursor-pointer select-none">
                            <div className="relative">
                                <input type="checkbox" className="sr-only" checked={sanitized} onChange={() => setSanitized(!sanitized)} />
                                <div className={cn("block w-14 h-8 rounded-full transition-colors", sanitized ? "bg-green-500" : "bg-red-500")}></div>
                                <div className={cn("dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform", sanitized ? "translate-x-6" : "")}></div>
                            </div>
                            <div className="ml-3 font-medium">
                                {sanitized ? (
                                    <span className="flex items-center text-green-400"><Shield className="h-4 w-4 mr-1" /> Protection ON</span>
                                ) : (
                                    <span className="flex items-center text-red-400"><Bug className="h-4 w-4 mr-1" /> Protection OFF</span>
                                )}
                            </div>
                        </label>

                        <button
                            onClick={handlePost}
                            disabled={!input}
                            className="px-6 py-2 bg-primary text-primary-foreground font-bold rounded hover:opacity-90 disabled:opacity-50"
                        >
                            Post Comment
                        </button>
                    </div>

                    <div className="text-xs text-gray-500">
                        Tip: Try <code>&lt;img src=x onerror=alert(1)&gt;</code> or <code>&lt;b&gt;Bold&lt;/b&gt;</code>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 text-black min-h-[300px]">
                    <h3 className="font-bold border-b pb-2 mb-4 text-gray-800">Latest Comments (Browser View)</h3>

                    <div className="space-y-4">
                        {comments.length === 0 && <p className="text-gray-400 italic">No comments yet.</p>}

                        {comments.map((c, i) => (
                            <div key={i} className="p-3 bg-gray-100 rounded border border-gray-200">
                                {sanitized ? (
                                    // Safe Rendering (React default)
                                    <span>{c}</span>
                                ) : (
                                    // Unsafe Rendering (Simulation)
                                    // In real React we'd use dangerouslySetInnerHTML, but for safety in this LAB 
                                    // we actuall will just render it textually but styled to LOOK like it executed 
                                    // OR we actually do execute it for the demo if it's simple HTML
                                    <div className="text-red-600 font-mono text-xs border-l-2 border-red-500 pl-2">
                                        {/* We won't actually exec JS here to avoid breaking the tool view context, 
                                    but we visualize what happened */}
                                        UNSAFE RENDER: {c}
                                        <br />
                                        <span className="italic text-gray-500">The browser would execute this code!</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
