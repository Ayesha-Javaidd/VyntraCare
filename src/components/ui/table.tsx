type TableProps = {
    headers: string[]
    rows: any[]
    renderRow: (row: any, index: number) => React.ReactNode
    className?: string
}

export default function Table({
    headers,
    rows,
    renderRow,
    className = "",
}: TableProps) {
    return (
        <div className={`overflow-x-auto ${className}`}>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-border">
                        {headers.map((header) => (
                            <th
                                key={header}
                                className="pb-4 pt-0 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr
                            key={index}
                            className="border-b border-border/50 hover:bg-secondary/30 transition-colors duration-150 last:border-0"
                        >
                            {renderRow(row, index)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
