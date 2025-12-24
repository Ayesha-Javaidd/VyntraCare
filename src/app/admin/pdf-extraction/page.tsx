"use client"

import { useState } from "react"
import Card from "@/components/ui/card"
import Button from "@/components/ui/button"
import Table from "@/components/ui/table"
import {
    FileUp,
    FileText,
    CheckCircle2,
    AlertCircle,
    Download,
    Loader2,
    Trash2,
    ChevronRight,
    Database,
    ShieldCheck
} from "lucide-react"

export default function PDFExtractionPage() {
    const [file, setFile] = useState<File | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [results, setResults] = useState<any[] | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleProcess = () => {
        setIsProcessing(true)
        // Simulate extraction delay
        setTimeout(() => {
            setResults([
                { date: "Oct 20, 2023", patient: "Alice J.", cpt: "99213", description: "Oxygen Visit (In-home)", count: 1 },
                { date: "Oct 21, 2023", patient: "Bob S.", cpt: "94060", description: "Bronchodilation Response", count: 2 },
                { date: "Oct 21, 2023", patient: "Charlie M.", cpt: "99213", description: "Oxygen Visit (In-home)", count: 1 },
                { date: "Oct 22, 2023", patient: "Diana K.", cpt: "G0237", description: "Therapeutic Procedure", count: 1 },
            ])
            setIsProcessing(false)
        }, 2500)
    }

    return (
        <div className="space-y-8 max-w-5xl mx-auto pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">PDF → CPT Extraction</h1>
                    <p className="text-muted-foreground mt-1">Upload EMAR PDFs to automatically extract medical billing CPT codes.</p>
                </div>

                {results && (
                    <Button
                        label="Export as CSV"
                        variant="outline"
                        icon={<Download className="w-5 h-5" />}
                    />
                )}
            </div>

            {!results ? (
                <Card className="p-16 text-center bg-white border-dashed border-2 border-border flex flex-col items-center gap-6">
                    <div className="w-20 h-20 bg-primary/5 rounded-[2.5rem] flex items-center justify-center text-primary mb-2 shadow-inner">
                        {isProcessing ? <Loader2 className="w-10 h-10 animate-spin" /> : <FileUp className="w-10 h-10" />}
                    </div>

                    <div className="space-y-2 max-w-sm">
                        <h2 className="text-2xl font-bold text-foreground">{isProcessing ? "Processing EMAR Data..." : "Upload Medical Record"}</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Drag and drop your EMAR PDF here, or click to browse. We support standard hospital and subacute formats.
                        </p>
                    </div>

                    {!isProcessing && (
                        <div className="flex flex-col items-center gap-4">
                            <label className="relative cursor-pointer">
                                <span className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all block">
                                    {file ? file.name : "Select PDF File"}
                                </span>
                                <input type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
                            </label>

                            {file && (
                                <Button
                                    label="Start Extraction"
                                    className="bg-medical-green text-white hover:bg-medical-green/90 shadow-medical-green/20"
                                    onClick={handleProcess}
                                    icon={<Database className="w-4 h-4" />}
                                />
                            )}
                        </div>
                    )}

                    {isProcessing && (
                        <div className="w-full max-w-xs space-y-3">
                            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                                <div className="h-full bg-primary animate-[shimmer_2s_infinite] w-full origin-left" />
                            </div>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] animate-pulse">Running AI OCR Engine</p>
                        </div>
                    )}
                </Card>
            ) : (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="bg-medical-green/5 border-medical-green/10">
                            <p className="text-xs font-bold text-medical-green uppercase tracking-widest mb-1">Total Codes</p>
                            <h3 className="text-3xl font-bold text-foreground">5 CPTs</h3>
                        </Card>
                        <Card className="bg-medical-blue/5 border-medical-blue/10">
                            <p className="text-xs font-bold text-medical-blue uppercase tracking-widest mb-1">Accuracy</p>
                            <h3 className="text-3xl font-bold text-foreground">99.8%</h3>
                        </Card>
                        <Card className="bg-primary/5 border-primary/10">
                            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Time Saved</p>
                            <h3 className="text-3xl font-bold text-foreground">~45 mins</h3>
                        </Card>
                    </div>

                    <Card title="Extraction Results" description="Extracted CPT counts per patient visit.">
                        <Table
                            headers={["Date", "Patient", "CPT Code", "Description", "Qty", "Action"]}
                            rows={results}
                            renderRow={(row, i) => (
                                <>
                                    <td className="px-4 py-4 text-sm font-medium text-muted-foreground">{row.date}</td>
                                    <td className="px-4 py-4 text-sm font-bold text-foreground">{row.patient}</td>
                                    <td className="px-4 py-4">
                                        <span className="px-2.5 py-1 rounded-lg bg-secondary text-foreground text-xs font-black ring-1 ring-border/50">
                                            {row.cpt}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-muted-foreground">{row.description}</td>
                                    <td className="px-4 py-4 text-sm font-black text-foreground">{row.count}</td>
                                    <td className="px-4 py-4">
                                        <button className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </td>
                                </>
                            )}
                        />

                        <div className="mt-8 pt-6 border-t border-border flex justify-between items-center">
                            <div className="flex items-center gap-2 text-medical-green">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="text-sm font-bold">Verification complete. Ready for billing.</span>
                            </div>
                            <div className="flex gap-4">
                                <Button label="Reset" variant="ghost" onClick={() => { setFile(null); setResults(null); }} />
                                <Button label="Upload To Billing System" icon={<ChevronRight className="w-4 h-4" />} />
                            </div>
                        </div>
                    </Card>
                </div>
            )}

            {/* Trust & Compliance */}
            <div className="flex items-center justify-center gap-10 opacity-40 grayscale pointer-events-none">
                <div className="flex items-center gap-2 text-sm font-bold"><ShieldCheck className="w-5 h-5" /> SOC2 COMPLIANT</div>
                <div className="flex items-center gap-2 text-sm font-bold"><ShieldCheck className="w-5 h-5" /> AES-256 ENCRYPTION</div>
                <div className="flex items-center gap-2 text-sm font-bold"><AlertCircle className="w-5 h-5" /> HIPAA PROTECT</div>
            </div>
        </div>
    )
}
