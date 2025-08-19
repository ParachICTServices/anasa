"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function notFound() {
  const router = useRouter();

  return (
    <div className="h-[80vh] flex items-center flex-col justify-center text-gray-600">
      <h1>404</h1>
      <p className="pb-5">The Page Doesn't Exist</p>
      <Button onClick={() => router.push("/")}> Go Back</Button>
    </div>
  );
}
