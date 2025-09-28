import { ReactNode } from "react";
import clsx from "clsx"; // ✅ default import

export default function Container({
  children,
  className,
}: { children: ReactNode; className?: string }) {
  return <div className={clsx("mx-auto w-full max-w-6xl px-4", className)}>{children}</div>;
}
