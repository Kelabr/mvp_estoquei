import Link from "next/link"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function FormLogin(){
    return(
        <form className="px-5">
            <div className="mb-5">
                <p className="text-xl font-medium">Faça seu Login</p>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="font-medium">Email</label>
                <Input name="email"/>
            </div>
            <div className="mb-5">
                <label htmlFor=""  className="font-medium">Senha</label>
                <Input name="senha"/>
            </div>
            <div className="mb-7">
                <Button variant="outline" className="w-full">Entrar</Button>
            </div>
            <div className="flex justify-between">
                <Link href="#" className="underline text-[12px]">Esqueci minha senha</Link>
                <Link href="#" className="underline text-[12px]">Fazer cadastro</Link>
            </div>
        </form>
    )
}