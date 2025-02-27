'use client'

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"


export default function FormLogin(){

    const router = useRouter()
    const [error, setError] = useState('')

    async function sendData(event){
        
        event.preventDefault()

        const formData = new FormData(event.target)
        const email = formData.get('email')
        const password = formData.get('password')

        setError('')

        try{

            const response = await fetch('http://localhost:3333/api/login', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password}),
                credentials: 'include'
            })

            if(!response.ok){
                throw new Error('Erro ao fazer login')
            }

            router.push('/dashboard')

        }catch(error){
            setError('*Usuário ou Senha invalidos')
        }
    }


    return(
        <form className="px-5" onSubmit={sendData}>
            <div className="mb-5 flex items-center">
                <div className="relative h-28 w-28">
                    <Image
                    src='/logo/alinamesa.svg'
                    layout="fill"
                    alt='Logo Alinamesa'
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-2xl font-medium mb-1">Alinamesa</p>
                    <p className="text-sm font-medium text-gray-400">Aonde você tem a visão do seu negócio</p>
                </div>
            </div>
            <div className="mb-3">
                {<p className="text-red-500 font-medium text-sm mb-3">{error}</p>}
                <label htmlFor="" className="font-medium">Email</label>
                <Input name="email" className="mt-1" type="email"/>
            </div>
            <div className="mb-5">
                <label htmlFor=""  className="font-medium">Senha</label>
                <Input name="password" className="mt-1" type="password"/>
            </div>
            <div className="mb-7">
                <Button variant="outline" className="w-full p-5 text-md">Entrar</Button>
            </div>
            <div className="flex justify-between">
                <Link href="#" className="underline text-[12px]">Esqueci minha senha</Link>
                <Link href="./register" className="underline text-[12px]">Fazer cadastro</Link>
            </div>
        </form>
    )
}