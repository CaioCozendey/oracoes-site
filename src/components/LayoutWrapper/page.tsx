'use client';

import RootLayout from "@/app/layout";

export const MinimalLayout = ({ children }: { children: React.ReactNode }) => (
  <RootLayout noLayout>
    {children}
  </RootLayout>
);