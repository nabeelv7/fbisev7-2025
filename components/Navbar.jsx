import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <header>
            <nav className="w-full flex p-5 justify-between items-center">
                <Link href="/" className="md:text-3xl text-2xl font-medium">fbisev7</Link>
                <Button href="/">View Code</Button>
            </nav>
        </header>
    )
}