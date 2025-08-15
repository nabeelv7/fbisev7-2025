"use client";

import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import { useEffect } from "react";

NProgress.configure({ showSpinner: false })

export default function NprogressProvider() {
    const pathname = usePathname();

    useEffect(() => {
        NProgress.start();

        const timer = setTimeout(() => {
            NProgress.done()
        }, 10)

        return () => clearTimeout(timer)
    }, [pathname])

    return null
}