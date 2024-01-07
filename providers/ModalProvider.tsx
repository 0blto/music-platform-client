"use client";


import AddToPlaylistModal from "@/components/AddToPlaylistModal";
import AuthModal from "@/components/AuthModal";
import NewPlaylistModal from "@/components/NewPlaylistModal";
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
        <NewPlaylistModal/>
        <AddToPlaylistModal/>
    </>
  );
}

export default ModalProvider;