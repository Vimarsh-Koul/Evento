import { twMerge } from "tailwind-merge";

type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={twMerge(
        "animate-pulse h-4 w-[550px] rounded-md bg-white/5",
        className
      )}
    />
  );
}
