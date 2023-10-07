/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   Full Stack Engineer
 */
"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function LayoutSessionProvider({ children }: Props) {

  return <SessionProvider>{children}</SessionProvider>;
}

export default LayoutSessionProvider;