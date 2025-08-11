import type { VoteButtonProps } from "../types/vote";

export default function VoteButton({
  label,
  colorClass,
  onClick,
}: VoteButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-60 px-8 py-2 ${colorClass} text-white cursor-pointer shadow transition max-md:mx-auto`}
    >
      {label}
    </button>
  );
}
