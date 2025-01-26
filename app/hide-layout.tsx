'use client'
import "./globals.css";

import Header from "./components/layout/header";

import React from 'react';

import { usePathname } from "next/navigation";

export default function HideLayout() {
  const pathname = usePathname();
  return (

    <>

      {/* <Header/> */}
      {pathname !== "/about" && pathname !== "/about/pricing" && <Header />}

    </>
  );
}

