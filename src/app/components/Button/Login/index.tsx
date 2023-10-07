/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   Full Stack Engineer
 */
'use client'

import { useSession } from "next-auth/react";
import Link from "next/link";

function LoginButton() {
    const { data: session } = useSession();
    return (
        <div>
            {session && session.user ? (
                <span className="block text-md px-4 py-2 rounded">{session.user.name}</span>
            ) : (
                <Link href={'/login'}
                    className="block text-md px-4 py-2 rounded text-white ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">
                    Login
                </Link>
            )}

        </div>
    );
}
export default LoginButton;