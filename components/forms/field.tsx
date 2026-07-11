import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-xl border border-navy-950/10 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-900/35 transition-colors focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20";

export function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-ui text-sm font-medium text-navy-950"
      >
        {label}
        {required ? <span className="text-electric-600"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={inputClasses}
      />
    </div>
  );
}

export function TextArea({
  label,
  name,
  required = false,
  placeholder,
  rows = 5,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-ui text-sm font-medium text-navy-950"
      >
        {label}
        {required ? <span className="text-electric-600"> *</span> : null}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className={cn(inputClasses, "resize-y")}
      />
    </div>
  );
}

export function Select({
  label,
  name,
  required = false,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-ui text-sm font-medium text-navy-950"
      >
        {label}
        {required ? <span className="text-electric-600"> *</span> : null}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className={cn(inputClasses, "appearance-none bg-white")}
      >
        <option value="" disabled>
          Sélectionnez…
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
