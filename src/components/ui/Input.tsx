type InputProps = {
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
}

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  )
}
