interface PageDetailProps{
    params: {
        id: string;
    }
}


// async function getData(id: string) {
//     console.log(id)
//     const response = await fetch("https://api.github.com/users/Tarcisio-Emanuel/repos")
//     return response.json();
//   }


export default async function RepositorioId({params}: PageDetailProps) {

    // const data = await getData(params.id);
    
    return(
        <div>
            <h1>ID: {params.id}</h1>
        </div>
    )
    
}