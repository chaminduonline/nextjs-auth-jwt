'use client';
import Link from "next/link";

/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   Full Stack Engineer
 */
export default function Register(){
    return (
        <div>
            <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 bg-slate-100 rounded-md shadow-md lg:max-w-sm">
                    <h1 className="text-3xl font-bold text-center text-gray-700">Register</h1>
                    
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Name
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mt-4">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 hover:bg-blue-800 focus:outline-none focus:bg-blue-600">
                                Register here
                            </button>
                        </div>
                    
                    <p className="mt-4 text-sm text-center text-gray-700">
                        Do you have an account?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-blue-800 hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}