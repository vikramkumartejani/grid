"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the default language
    router.push("/en");
  }, [router]);

  return null; // or a loading spinner
};

export default page;
