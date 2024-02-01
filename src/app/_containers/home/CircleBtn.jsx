"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/app/_components/Buttons/Button";

const CircleBtn = ({ btnTitle }) => {
  const router = useRouter();
  function handleRouting() {
    router.push("/make-your-burger");
  }
  return (
    <Button
      color="hero"
      size="hero"
      className="absolute right-1/2 top-[60%] aspect-square translate-x-1/2 xl:translate-x-0"
      handleClick={handleRouting}
    >
      <span className="inline-block max-w-min">{btnTitle}</span>
    </Button>
  );
};

export default CircleBtn;
