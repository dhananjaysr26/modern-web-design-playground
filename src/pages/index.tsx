import { Inter } from "next/font/google";
import ProcessFlow from "@/components/ProcessFlow/ProcessFlow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ProcessFlow />
      <ProcessFlow />
    </>
  );
}
