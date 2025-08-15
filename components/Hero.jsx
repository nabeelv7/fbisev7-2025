import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
    return (
        <section className="flex flex-col gap-5 justify-center items-center text-center md:py-30 py-20 px-5">
            <h1 className="text-5xl font-bold">FBISE Model Papers</h1>
            <p className="opacity-85 text-balance">A collection of all the updated fbise board model papers</p>
            <ClassDropdown />
        </section>
    )
}

export function ClassDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="select" className="w-50">Select class <ChevronDown /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-50">
                <DropdownMenuItem asChild>
                    <Link href="/9">9</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/10">10</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/11">11</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/">12</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}