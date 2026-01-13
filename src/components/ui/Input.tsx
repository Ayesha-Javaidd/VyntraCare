type InputProps = {
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  dark?: boolean
}

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  dark = false,
}: InputProps) {
  const base =
    "px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2"

  const lightStyles =
    "border border-gray-300 bg-white text-gray-900 focus:ring-primary"

  const darkStyles =
    "border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 focus:ring-primary"

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-400">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`${base} ${dark ? darkStyles : lightStyles}`}
      />
    </div>
  )
}
