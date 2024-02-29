"use client";

import { NextUIProvider } from "@nextui-org/react";

export function UIProviders({ children }: { children: React.ReactNode }) {
  return <NextUIProvider className="content">{children}</NextUIProvider>;
}
