/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   Full Stack Engineer
 */
export interface User {
    id?: string
    name?: string | null | undefined
    roles?: [] | null
    email?: string | null | undefined
    accessToken?: string
    iat?: string | null | undefined
    exp?: number | null | undefined
    jti?: string | null | undefined
}