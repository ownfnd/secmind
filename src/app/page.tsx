import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Shield, Lock, Cpu, Eye } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground bg-cyber-grid bg-[size:50px_50px]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Next-Gen Cybersecurity Education
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-300 to-gray-600">
          Secure Your Future in <br />
          <span className="text-primary">AI & Cyber Safety</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10">
          Master the art of digital defense interactive labs.
          Learn to identify phishing, secure your data, and understand AI threats in a safe, sandboxed environment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/labs" className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_-5px_rgba(14,165,233,0.5)]">
            Start Training
          </Link>
          <Link href="/learn" className="px-8 py-4 rounded-lg border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lock, title: "Password Security", desc: "Test strength & entropy" },
              { icon: Shield, title: "Phishing Defense", desc: "Simulation & Detection" },
              { icon: Cpu, title: "AI Threats", desc: "Deepfake & Scam Awareness" },
              { icon: Eye, title: "Privacy Audit", desc: "Data exposure checks" },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group">
                <feature.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
