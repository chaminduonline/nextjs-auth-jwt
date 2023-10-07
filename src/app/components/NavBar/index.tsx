import LogOutButton from "../Button/Logout";
import LoginButton from "../Button/Login";
import Link from "next/link";

/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   Full Stack Engineer
 */
function NavigationBar() {
    return (
        <div>
            <nav
                className="flex items-center justify-between flex-wrap bg-blue-900 py-1 lg:px-8">
                <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                    <div className="flex items-center flex-shrink-0 text-white mr-16">
                        <span className="font-semibold text-xl tracking-tight">{process.env.APP_NAME}</span>
                    </div>
                </div>

                <div className="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                    <div className="text-md font-bold text-white lg:flex-grow">
                        <Link href={'/profile'}
                            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                            Profile
                        </Link>
                        <Link href={'/users'}
                            className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                            Users
                        </Link>
                    </div>
                    <div className="flex ">
                        <LoginButton></LoginButton>
                        <LogOutButton></LogOutButton>
                    </div>
                </div>

            </nav>
        </div>
    );
}

export default NavigationBar;