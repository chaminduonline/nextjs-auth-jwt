'use client'
import { useSession } from "next-auth/react";

/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   Full Stack Engineer
 */
export default function LoginName() {
    const { data: session } = useSession();
    return (
        <h1 className="text-black font-semibold from-stone-800">Hi {session && session.user ? (session.user.name) : (<></>)}</h1>
    );
}