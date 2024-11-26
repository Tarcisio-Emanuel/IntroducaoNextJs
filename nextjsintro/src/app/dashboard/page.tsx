import Link from "next/link";

export default function dashboard(){
    return(
        <div>

        <h1>Página painel</h1>
        <span>Bem vindo painel do site</span>
        
        <Link href="/dashboard/settings" >Cofig</Link>
        </div>
    )
}