// Small utility helpers used across components.
// `cn` is a minimal `className` helper similar to `clsx` for composing class strings.
export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

export default cn;
