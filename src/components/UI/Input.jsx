export default function Input({
  type,
  placeholder,
  value,
  onChangeValue,
  required = false,
  className,
}) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onInput={onChangeValue}
      required={required}
    />
  );
}
