
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

async function getData() {
  const response = await fetch("https://api.github.com/users/Tarcisio-Emanuel/repos")
  return response.json();
}



export default async function Home() {

  const data: DataProps[] = await getData();


  return (

    <main>
      <h1>HOME</h1>
      <span>bemvindo ahome</span>

      <h3>Meus Repositorios</h3>
      {data.map( (item) =>  (
        <div key={item.id}>

          <strong>Repositorio:::</strong><a href="###">{item.name}</a><br /><br />
        </div>
      ))}




    </main>
  );


}
