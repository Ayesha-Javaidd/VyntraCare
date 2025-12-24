type SelectProps = {
    options: { label: string; value: string }[]
    value: string
    onChange: (value: string) => void
    label?: string
    className?: string
}

export default function Select({
    options,
    value,
    onChange,
    label,
    className = "",
}: SelectProps) {
    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            {label && (
                <label className="text-sm font-medium text-muted-foreground px-1">
                    {label}
                </label>
            )}
            <div className="relative group">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full h-10 px-4 py-2 bg-secondary border border-border rounded-xl text-sm font-medium text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 cursor-pointer"
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}
