type InputProps = {
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  className?: string
  icon?: React.ReactNode
  dark?: boolean
}

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
  icon,
  dark = false,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange(e)
    }
  }

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-sm font-medium text-muted-foreground px-1">
        {label}
      </label>
      <div className="relative group">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors duration-200">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          className={`w-full h-10 ${icon ? 'pl-10' : 'px-4'
            } py-2 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20
            ${dark
              ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
              : 'bg-secondary border-border text-foreground placeholder-muted-foreground/60'
            }`}
        />
      </div>
    </div>
  )
}