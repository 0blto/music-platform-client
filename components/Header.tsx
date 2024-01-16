"use client"

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { clearSession, getAccessToken, getRefreshToken, getSessionUser } from "@/actions/session";
import { useEffect, useState } from "react";
import useUser from "@/hooks/useUser";
import usePlaylists from "@/hooks/usePlaylists";
import { getUserPlaylists } from "@/actions/getUserPlaylists";
import useLiked from "@/hooks/useLiked";
import useGenres from "@/hooks/useGenres";


interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({children, className}) => {

    const {setPlaylists} = usePlaylists();
    const liked = useLiked();
    const {genres, setGenres} = useGenres();
    

    const registerModal = useRegisterModal();
    const artistCreateModal = useAuthModal();
    const {setName, setToken, setRefreshToken, name, token, refreshToken} = useUser();

    useEffect(() => {
        setPlaylists();
        liked.setAlbums();
        liked.setArtists();
        liked.setSongs();
        liked.setPlaylists();
        setGenres();
    }, [])

    const router = useRouter();
    const handleLogout = () => {
        setName('');
        setToken('');
        clearSession();
    }
    return ( 
        <div
            className={twMerge(`
                h-fit
                p-6
            `,
                className
            )}
        >
            <div
                className="
                    w-full
                    mb-4
                    flex
                    items-center
                    justify-between
                "
            >
                <div
                    className="
                        hidden
                        md:flex
                        gap-x-2
                        items-center
                    "
                >
                    <button
                        onClick={() => router.back()}
                        className="
                            rounded-full
                            bg-black
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                        "
                    >
                        <RxCaretLeft size={30}/>
                    </button>
                    <button
                        onClick={() => router.forward()}
                        className="
                            rounded-full
                            bg-black
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                        "
                    >
                        <RxCaretRight size={30}/>
                    </button>
                </div>
                <div
                    className="
                        flex
                        md:hidden
                        gap-x-2
                        items-center
                    "
                >
                    <button
                        className="
                            rounded-full
                            p-2
                            bg-white
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                        "
                    >
                        <HiHome className="text-black" size={20}/>
                    </button>
                    <button
                        className="
                            rounded-full
                            p-2
                            bg-white
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                        "
                    >
                        <BiSearch className="text-black" size={20}/>
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    {name !== '' ? (
                        <div className="flex gap-x-6 items-center justify-between">
                            <button 
                            onClick={() => router.push('/account')}
                            className="
                                flex 
                                flex-2
                                items-center
                                justify-around
                                rounded-md 
                                overflow-hidden 
                                cursor-pointer 
                                w-[120px]
                                bg-neutral-100/10
                                hover:bg-neutral-100/20 
                                hover:scale-105 
                                transition
                                px-2
                                py-4
                            ">
                                <VscAccount size={35}/>
                                {name}
                            </button>
                            <Button 
                                onClick={handleLogout} 
                                className="bg-white px-6 py-2 flex-1"
                            >
                                <MdLogout/>
                            </Button>
                        </div>
                    ) : (
                        <>
                        <div>
                            <Button 
                            onClick={registerModal.onOpen} 
                            className="
                                bg-transparent 
                                text-neutral-300 
                                font-medium
                            "
                            >
                            Sign up
                            </Button>
                        </div>
                        <div>
                            <Button 
                            onClick={artistCreateModal.onOpen} 
                            className="bg-white px-6 py-2"
                            >
                            Log in
                            </Button>
                        </div>
                        </>
                    )}
                    </div>
                </div>
                {children}
                </div>
     );
}
 
export default Header;