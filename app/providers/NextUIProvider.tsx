"use client";

import { NextUIProvider } from "@nextui-org/react";

export function UIProviders({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="flex flex-col h-full w-full">
      {children}
    </NextUIProvider>
  );
}
