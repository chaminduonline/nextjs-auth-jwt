/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   Full Stack Engineer
 */

import ApiServerConfiguration from "@/util/ApiServerConfiguration";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";



export async function POST(nextRequest: NextRequest) {

    const reqBody = await nextRequest.json()
    const { email, password } = reqBody;
    try {
        const response = await fetch(`${ApiServerConfiguration.apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        const {status} = response;

        if (response && status == HttpStatusCode.Ok) {

            const { token } = data;

            const response = NextResponse.json({
                message: "Login successful",
                success: true,
                errors: []
            })

            response.cookies.set("token", token, {
                httpOnly: true,
                maxAge: data.expires_at
            })

            return response;

        } else if (response && status == HttpStatusCode.BadRequest) {

            const response = NextResponse.json({
                message: "Login Failed",
                success: false,
                errors: data
            })

            return response;
        }

    } catch (error) {
        console.error('Error:', error);
    }
}