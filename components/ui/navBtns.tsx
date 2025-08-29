"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Toggle } from "./toggle";
import { useTheme } from "next-themes";
import { dark, light } from "@clerk/themes";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export function NavActions() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-1 items-center justify-end gap-2">
      <SignedOut>
        {/* Desktop Buttons */}
        <div className="flex gap-2 max-sm:hidden">
          <SignInButton>
            <Button
              asChild
              variant="outline"
              className="w-24 h-10 font-bold text-[16px]"
            >
              <a href="#">Sign in</a>
            </Button>
          </SignInButton>

          <SignUpButton>
            <Button asChild className="w-24 h-10 font-bold text-[16px]">
              <a href="#">Sign up</a>
            </Button>
          </SignUpButton>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              side="bottom"
              className="bg-background mt-4 w-screen flex items-center flex-col rounded-sm border-t"
            >
              <DropdownMenuItem asChild>
                <SignInButton>
                  <Button variant="outline" className="w-32">
                    Sign In
                  </Button>
                </SignInButton>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <SignUpButton>
                  <Button className="w-32">Sign Up</Button>
                </SignUpButton>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex gap-2 max-sm:hidden">
          <UserButton
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              side="bottom"
              className="bg-background mt-4 w-56 flex g-8 items-center flex-col rounded-sm border-t"
            >
              <DropdownMenuItem asChild>
                <Button variant="outline" className="w-32 m-2">
                  My Videos
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Button className="w-32 mb-2">Upload</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              side="bottom"
              className="bg-background mt-4 w-screen flex items-center flex-col rounded-sm border-t"
            >
              <DropdownMenuItem asChild>
                <Button variant="outline" className="w-32 m-2">
                  My Videos
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Button className="w-32 mb-2">Upload</Button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <UserButton
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
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SignedIn>

      <Toggle />
    </div>
  );
}
