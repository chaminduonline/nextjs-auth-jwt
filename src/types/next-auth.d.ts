/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   Full Stack Engineer
 */
import NextAuth from "next-auth"
import { User } from "./interface";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user:User
    }
}