import Link from "next/link"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function FormLogin(){
    return(
        <form className="px-5">
            <div className="mb-5">
                <p className="text-2xl font-medium mb-1">Estoquei</p>
                <p className="text-sm font-medium text-gray-400">Aonde você tem a visão do seu negócio</p>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="font-medium">Email</label>
                <Input name="email" className="mt-1"/>
            </div>
            <div className="mb-5">
                <label htmlFor=""  className="font-medium">Senha</label>
                <Input name="senha" className="mt-1"/>
            </div>
            <div className="mb-7">
                <Button variant="outline" className="w-full p-5 text-md">Entrar</Button>
            </div>
            <div className="flex justify-between">
                <Link href="#" className="underline text-[12px]">Esqueci minha senha</Link>
                <Link href="#" className="underline text-[12px]">Fazer cadastro</Link>
            </div>
        </form>
    )
}