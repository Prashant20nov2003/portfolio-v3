"use client";
import Container from "@/components/ui/Container";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useCallback, useEffect, useRef } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { PiArrowsOutSimpleFill } from "react-icons/pi";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      ref={overlay}
      className="fixed z-20 left-0 right-0 top-0 bottom-0  bg-black/70"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute bg-[#202020] h-screen overflow-y-scroll w-full right-0 lg:w-7/12"
      >
        <div>
          <header className="p-4 flex gap-4 items-center">
            <MdKeyboardDoubleArrowRight
              size={25}
              className="cursor-pointer"
              onClick={onDismiss}
            />
            <PiArrowsOutSimpleFill size={20} className="cursor-pointer" />
          </header>
          <Container>{children}</Container>
        </div>
      </div>
    </div>
  );
}
