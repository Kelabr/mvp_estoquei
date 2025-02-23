import Link from "next/link";

export default function Header(){
    return(
        <header className="flex justify-end h-14 border-b-[0.5px] items-center pr-3">
            <Link className="font-[500] border-2 rounded-lg p-0.5 border-gray-300 px-2 text-md" href="./login">Login</Link>
        </header>
    )
}''