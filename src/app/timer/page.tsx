import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TimerWorkspace from "@/components/TimerWorkspace";

export const metadata: Metadata = {
  title: "Focus Timer",
  description: "A multi-mode focus timer by Xenium Suwal.",
};

export default function TimerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <TimerWorkspace />
      </main>
      <Footer />
    </div>
  );
}
