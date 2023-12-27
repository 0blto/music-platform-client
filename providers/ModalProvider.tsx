"use client";


import AuthModal from "@/components/AuthModal";
import NewReleaseModal from "@/components/NewReleaseModal";
import NewSongModal from "@/components/NewSongModal";
import RegisterModal from "@/components/RegisterModal";
import { useEffect, useState } from "react";




const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
        <AuthModal/>
        <RegisterModal/>
        <NewReleaseModal/>
        <NewSongModal/>
    </>
  );
}

export default ModalProvider;