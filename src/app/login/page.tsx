'use client';

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   Full Stack Engineer
 */
export default function LoginPage() {

    const email = useRef("");
    const pass = useRef("");
    const router = useRouter();
    const [loading, setLoading] = useState(false);



    const onLogin = async () => {
        setLoading(true)
        const result = await signIn("credentials", {
            email: email.current,
            password: pass.current,
            redirect: true,
            callbackUrl: "/dashboard",
        })
        setLoading(false)
    }


    return (
        <div>
            <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 bg-slate-100 rounded-lg shadow-2xl lg:max-w-sm">
                    <h1 className="text-3xl font-bold text-center text-gray-700">Login</h1>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input onChange={(e) => (email.current = e.target.value)}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            onChange={(e) => (pass.current = e.target.value)}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <Link
                        href="/forget"
                        className="text-xs text-blue-600 hover:underline"
                    >
                        Forget Password?
                    </Link>
                    <div className="mt-2">
                        <button disabled={loading} onClick={onLogin} type="button" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 hover:bg-blue-800 focus:outline-none focus:bg-blue-600">
                            {loading ? 'Authenticating...' : 'Login here'}
                            {loading ? (
                                <div
                                    className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status">
                                </div>
                            ) : null}
                        </button>
                    </div>

                    <p className="mt-4 text-sm text-center text-gray-700">
                        Don't have an account?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-blue-800 hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}