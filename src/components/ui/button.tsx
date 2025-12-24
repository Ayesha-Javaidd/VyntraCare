type ButtonProps = {
  label: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary" | "danger" | "ghost" | "outline"
  className?: string
  icon?: React.ReactNode
}

export default function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed gap-2"

  const variants: Record<string, string> = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-sm",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "bg-transparent border border-border text-foreground hover:bg-secondary/50",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
    ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon}
      {label}
    </button>
  )
}