type ButtonProps = {
  label: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary" | "danger"
  className?: string
}

export default function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"

  const variants: { [key: string]: string } = {
    primary: "bg-primary text-white hover:bg-primary/80",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    danger: "bg-red-600 text-white hover:bg-red-700",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  )
}
