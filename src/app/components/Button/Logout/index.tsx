/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   Full Stack Engineer
 */
'use client'
import { signOut, useSession } from "next-auth/react";



function LogOutButton() {
    const { data: session } = useSession();
    const onLogOut = async () => {
        await signOut();
    }
    return (
        <div>
            {session && session.user ? (
                <button onClick={onLogOut}
                    className="block text-md px-4  ml-2 py-2 rounded text-white font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">
                    Logout
                </button>
            ) : (<></>)}

        </div>
    );
}
export default LogOutButton;