'use client'


import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import {useRouter} from 'next/navigation'

export default function FormRegister(){

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [notEqualPassword, setnotEqualPassword] = useState(false)

    const router = useRouter()


    async function sendData(event){ //Aonde se faz a validação dos campos e o envio dos dados para o backend 

        event.preventDefault()

        
        const data = new FormData(event.target)
        const owner = data.get('owner') 
        const email = data.get('email')
        const establishment = data.get('establishment')



        if(password !== confirmPassword){
            console.log("As senhas não são iguais")
            setnotEqualPassword(true)
            return
        }else{
            console.log("As senhas são iguais")
            setnotEqualPassword(false)

           
        }


        try{
            const response = await fetch('http://localhost:3333/api/register', {
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({owner, email, establishment, password}),
                credentials: 'include'
            })

            if(!response.ok){
                console.log('Erro ao cadastrar usuário')
            }
        }catch(error){
            console.log("Erro!!")
        }
        
        router.push('./dashboard')


    }

    

    return(
        <form className="px-5" onSubmit={sendData}>
            <div className="mb-5">
                <p className="text-2xl font-medium mb-1">Estoquei</p>
                <p className="text-sm font-medium text-gray-400">Registre-se no lugar aonde está a visão do seu negócio</p>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="font-medium">Nome completo do proprietário</label>
                <Input name="owner" className="mt-1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="font-medium">Email</label>
                <Input name="email" className="mt-1" type="email"/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="font-medium">Nome do Estabelecimento</label>
                <Input name="establishment" className="mt-1"/>
            </div>
            {
                notEqualPassword ? (
                    <p className="text-red-500 font-medium text-sm">*As senhas não são iguais</p>
                ) : null
            }
            <div className="mb-5">
                <label htmlFor="" className="font-medium">Senha</label>
                <Input name="password" className="mt-1" type="password" value={password} onChange={(value) => setPassword(value.target.value)}/>
            </div>
            {
                notEqualPassword ? (
                    <p className="text-red-500 font-medium text-sm">*As senhas não são iguais</p>
                ) : null
            }
            <div className="mb-5">
                <label htmlFor=""  className="font-medium">Confirme a senha</label>
                <Input name="passwordc" className="mt-1" type="password" value={confirmPassword} onChange={(value) => setConfirmPassword(value.target.value)}/>
            </div>
            <div className="mb-7">
                <Button variant="outline" className="w-full p-5 text-md">Entrar</Button>
            </div>

        </form>
    )
}