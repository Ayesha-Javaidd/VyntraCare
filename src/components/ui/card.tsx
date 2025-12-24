type CardProps = {
    children: React.ReactNode
    title?: string
    description?: string
    className?: string
    headerAction?: React.ReactNode
}

export default function Card({
    children,
    title,
    description,
    className = "",
    headerAction,
}: CardProps) {
    return (
        <div className={`apple-card p-6 ${className}`}>
            {(title || description || headerAction) && (
                <div className="flex items-center justify-between mb-6">
                    <div>
                        {title && (
                            <h3 className="text-lg font-semibold tracking-tight text-foreground">
                                {title}
                            </h3>
                        )}
                        {description && (
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
                        )}
                    </div>
                    {headerAction && <div>{headerAction}</div>}
                </div>
            )}
            <div>{children}</div>
        </div>
    )
}
