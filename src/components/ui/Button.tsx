type ButtonProps = {
  label: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary" | "danger" | "ghost"
  className?: string
}

export default function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  className = "cursor-pointer",
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"

  const variants: Record<string, string> = {
    primary: "bg-primary text-white hover:bg-primary/80",
    secondary:
      "bg-gray-800 text-gray-100 border border-gray-700 hover:bg-gray-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    ghost:
      "bg-transparent text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-700",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}` }
    >
      {label}
    </button>
  )
}
