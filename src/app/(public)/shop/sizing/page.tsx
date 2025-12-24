"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import {
  ScanFace,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Info,
  ChevronRight,
  Camera,
  RefreshCw,
} from "lucide-react";

export default function AISizingPage() {
  const [step, setStep] = useState(1); // 1: Intro/Permission, 2: Scanning, 3: Results
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step === 2) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep(3), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Mini Header */}
      <header className="py-6 px-10 flex items-center justify-between border-b border-border bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/shop" className="flex items-center gap-2 group">
          <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">
            Back to Shop
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <ScanFace className="w-5 h-5 text-primary" />
          <span className="text-sm font-bold tracking-tight">
            Vyntra AI Sizer
          </span>
        </div>
        <div className="w-20" /> {/* Spacer */}
      </header>

      <main className="flex-1 flex items-center justify-center p-6 bg-[radial-gradient(circle_at_top,_var(--medical-blue)_0%,_transparent_40%)] opacity-20 absolute inset-0 -z-10" />

      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Scanner */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[3/4] bg-[#0A1A33] rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden group">
              {/* Step 1: Camera Permission */}
              {step === 1 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center space-y-6 animate-fade-in">
                  <div className="w-28 h-28 bg-slate-300 rounded-full flex items-center justify-center text-primary animate-bounce">
                    <Camera className="w-14 h-14" />
                  </div>
                  <h2 className="text-2xl text-white font-bold">
                    Camera Access Required
                  </h2>
                  <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                    We need temporary access to your camera to measure your
                    facial features. No images are stored.
                  </p>
                  <Button
                    label="Enable Camera"
                    className="px-10 py-3 bg-primary hover:bg-primary/80 text-white shadow-lg shadow-primary/40"
                    onClick={() => setStep(2)}
                  />
                </div>
              )}

              {/* Step 2: Scanning */}
              {step === 2 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="relative w-full h-full p-8 flex flex-col items-center justify-center">
                    <div className="w-full max-w-[250px] aspect-[4/5] border-2 border-primary/30 rounded-[4rem] relative overflow-hidden shadow-inner">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.1)_0%,_transparent_70%)] animate-pulse-slow" />
                      <div
                        className="absolute left-0 right-0 h-1 bg-primary shadow-[0_0_15px_rgba(56,189,248,0.6)] z-20"
                        style={{ top: `${progress}%` }}
                      />
                    </div>
                    <div className="mt-8 text-center space-y-2">
                      <p className="text-sm font-bold text-primary animate-pulse uppercase tracking-widest">
                        Scanning Anatomy...
                      </p>
                      <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Results */}
              {step === 3 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center space-y-6 animate-fade-in scale-in duration-700">
                  <div className="w-28 h-28 bg-slate-300 rounded-full flex items-center justify-center shadow-2xl shadow-medical-green animate-bounce">
                    <CheckCircle2 className="w-12 h-12 text-medical-green" />
                  </div>
                  <h2 className="text-4xl font-extrabold text-white animate-pulse">
                    Perfect Fit Found
                  </h2>
                  <div className="bg-[#1E3A8A]/50 rounded-2xl p-6 w-full space-y-1 text-white/90">
                    <p className="text-xs font-bold uppercase tracking-widest">
                      Recommended Size
                    </p>
                    <p className="text-5xl font-black">MEDIUM</p>
                    <p className="text-xs font-bold mt-2 text-medical-green">
                      98.4% Match Accuracy
                    </p>
                  </div>
                  <Button
                    label="Scan Again"
                    variant="ghost"
                    className="text-xs font-bold text-white hover:text-slate-300"
                    icon={<RefreshCw className="w-3 h-3" />}
                    onClick={() => {
                      setStep(2);
                      setProgress(0);
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Content/Benefits */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/10">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Clinically Validated
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Precision Sizing <br />
                Powered by AI.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Avoid the frustration of returns. Our advanced computer vision
                algorithm measures over 45 facial landmarks to find your ideal
                mask fit.
              </p>
            </div>

            <div className="space-y-6">
              {[
                "No data is sent to the cloud. All processing happens on your device.",
                "Optimized for all lighting conditions and facial hair.",
                "Cross-referenced with manufacturer sizing templates.",
              ].map((text, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 border border-border">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground leading-snug">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {step === 3 && (
              <div className="pt-6 animate-in slide-in-from-bottom-4 duration-700">
                <Button
                  label="See Recommended Products"
                  className="w-full py-4 text-lg shadow-xl shadow-primary/20"
                  icon={<ChevronRight className="w-5 h-5" />}
                />
              </div>
            )}

            <div className="p-4 bg-secondary/30 rounded-2xl border border-border flex gap-3">
              <Info className="w-5 h-5 text-primary shrink-0" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                For the best results, ensure you are in a well-lit area and
                looking directly at the camera. Remove glasses or hats before
                starting the scan.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
