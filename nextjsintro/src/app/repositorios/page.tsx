"use client"
import { useEffect, useState } from "react";

interface DataProps {
    id: number;
    name: string;
    full_name: string;

    owner: {
        login: string;
        id: number;
        avatar_url: string;
        url: string
    }
}

export default function Repositorios() {
    const [repos, setRepos] = useState<DataProps[]>([])

    useEffect(() => {

        function getData() {
            fetch("https://api.github.com/users/Tarcisio-Emanuel/repos")
                .then(res => res.json())
                .then((data: DataProps[]) => { 
                    
                    setTimeout(()=>{

                        setRepos(data)
                    }, 1000)
                })

        }




        getData()
    }, [])

    return (

        <main>
            <h1>Repositorios</h1>
            <span>bemvindo a Repositorios</span>

            <h3>Meus Repositorios</h3>
            {repos.map((item) => (
                <div key={item.id}>

                    <strong>Repositorio:::</strong><a href="###">{item.name}</a><br /><br />
                </div>
            ))}




        </main>
    );


}
