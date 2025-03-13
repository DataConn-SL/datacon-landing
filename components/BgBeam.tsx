"use client";
import React from "react";
import { BackgroundBeams } from "./ui/bg-beams";

export function BgBeams({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[40rem] w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">{children}</div>
      <BackgroundBeams />
    </div>
  );
}
