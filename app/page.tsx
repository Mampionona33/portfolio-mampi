import Image from "next/image";
import Introduction from "./components/Introduction";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 dark:text-white dark:bg-neutral-900">
      <Introduction />
    </div>
  );
}
