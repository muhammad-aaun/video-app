"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Toggle } from "./toggle"; // adjust path

export function NavActions() {
  return (
    <div className="flex flex-1 items-center justify-end gap-2">
      {/* Desktop Buttons */}
      <div className="flex gap-2 max-sm:hidden">
        <Button
          asChild
          variant="outline"
          className="w-24 h-10 font-bold text-[16px]"
        >
          <a href="#">Sign in</a>
        </Button>
        <Button asChild className="w-24 h-10 font-bold text-[16px]">
          <a href="#">Sign up</a>
        </Button>
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
              <a href="#">
                <Button variant="outline" className="w-32">
                  Sign In
                </Button>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="#">
                <Button className="w-32">Sign Up</Button>
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Always visible Toggle (both desktop + mobile) */}
      <Toggle />
    </div>
  );
}
