"use client";
import { MaskEffect } from "./MaskEffect";

export function MaskText() {
  return (
    <div
      className="flex min-h-0 w-full items-center justify-center px-1 py-0 mt-0">
      <MaskEffect
        revealText={
          <p className="mx-auto max-w-3xl text-center text-2xl md:text-4xl font-bold text-slate-800 dark:text-white">
            I reject mediocrity, obsessing over details to build things that are smart, beautiful, and unapologetically innovative.           </p>
        }
        className="w-full max-w-5xl rounded-md border text-white dark:text-black shadow-lg"
      >
        <span className="block text-2xl md:text-4xl font-bold">
        
            My brain whispers <span className="text-orange-500">‘this might go terribly wrong’</span>—but I dive in anyway.
            I've made <span className="text-orange-500">‘terrified but doing it anyway’</span> my personal brand.
        
        </span>
      </MaskEffect>
    </div>
  );
}