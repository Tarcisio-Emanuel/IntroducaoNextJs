import styles from "@/components/header/header.module.css";
import Link from "next/link";

export default function Headerr() {
    return (
        <header className={styles.header}>

            <h1>Meu site</h1>

            <Link href="/"> Home </Link>
            <Link href="/contatos" >Contatos</Link>
            <Link href="/repositorios" >RepositorioS</Link>
            <Link href="/dashboard" >Painel</Link>


            <br /><br />
            <hr />

        </header>
    )
}