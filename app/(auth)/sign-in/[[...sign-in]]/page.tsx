"use client";

import { SignIn } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark, light } from "@clerk/themes";

export default function Page() {
  const { theme } = useTheme(); // "light" | "dark" | "system"

  return (
    <SignIn
      appearance={{
        baseTheme: theme === "dark" ? dark : light,
        variables: {
          colorBackground: "hsl(var(--background))",
          colorText: "hsl(var(--foreground))",
          colorPrimary: "oklch(0.6724 0.1308 38.7559)",
          colorInputBackground: "hsl(var(--muted))",
          colorInputText: "hsl(var(--foreground))",
          colorShimmer: "hsl(var(--muted-foreground))",
        },
        elements: {
          formButtonPrimary: "bg-primary",
          card: "bg-background border border-border shadow-lg",
          headerTitle: "text-2xl font-semibold",
          headerSubtitle: "text-muted-foreground",
        },
      }}
    />
  );
}
