"use client";

import Navbar from "@/components/Navbar";
import { AlertTriangle, ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface LabShellProps {
    title: string;
    description: string;
    children: ReactNode;
    warning?: string;
}

export default function LabShell({ title, description, children, warning }: LabShellProps) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
                    <Link href="/" className="hover:text-white"><Home className="h-4 w-4" /></Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/labs" className="hover:text-white">Labs</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-white">{title}</span>
                </div>

                <div className="mb-8">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">
                        {title}
                    </h1>
                    <p className="text-xl text-muted-foreground">{description}</p>
                </div>

                {warning && (
                    <div className="mb-8 p-4 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-start">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                        <p className="text-orange-200 text-sm">{warning}</p>
                    </div>
                )}

                <div className="bg-card border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl">
                    {children}
                </div>
            </div>
        </div>
    );
}
