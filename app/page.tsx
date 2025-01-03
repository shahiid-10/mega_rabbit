"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import useLoading from "./hooks/useLoading";
import Loading from "./Loading";
import Footer from "@/components/Footer";

export default function Home() {
  const isLoading = useLoading(3000);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className=" min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </Suspense>
  );
}
