import { Inter } from "next/font/google";
import ProcessFlow from "@/components/ProcessFlow/ProcessFlow";
import MiddleProcessFlow from "@/components/ProcessFlow/MIddleProgressFlow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ProcessFlow />
      <ProcessFlow />
      <ProcessFlow />
      <MiddleProcessFlow/>
      <ProcessFlow />
      <ProcessFlow />
    </>
  );
}
