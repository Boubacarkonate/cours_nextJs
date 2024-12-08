import Link from "next/link";
import Photo from "./photo/Photo";

const getData = async () => {
  // const response = await fetch("http://localhost:4000/articles", {     //utilasation de json server
  const response = await fetch("http://localhost:3000/api/articles", {
    next: { revalidate: 10 }, // Optionnel : Revalidation ISR => le cache côte se réactulise toutes les 10 secondes
  });
  const data = await response.json();
  return data;
};

type Article = {
        "id": number,
        "titre": string,
        "contenu": string,
        "auteur": string,
        "date": string,
        "user_id": number,
        "photo": string

}

const ListArticles = async () => {
  // const articles = await  getData();   //variable avec json server
  const {dataz: articles }= await  getData();   //destructuration de l'objet retourné par getData() "dataz contient la response de l'api"avec renommage articles pour que cela soit plus claire

  console.log(articles);
  
  return (
    <div>
      <h1>LISTE DES ARTICLES</h1>


      <div>
        {articles.map((element: Article) => (
          <div key={element.id} className="m-5 bg-slate-300">
            <Link href={`articles/${element.id}`} >
           <h3 className="font-bold">{element.titre}</h3>
           {
            element.photo ? (<img src={element.photo} alt="photo" className="w-72 h-36" />) : (<Photo />)
          }
           
           <p>{element.auteur}</p>
           <p>--{element.date}--</p>
          </Link>
          </div>
          
        )

        )}
      </div>

      {/* <ul className="m-2">
        <li><Link href="/articles/1">article 1</Link></li>
        <li><Link href="/articles/2">article 2</Link></li>
        <li><Link href="/articles/3">article 3</Link></li>
      </ul> */}
    </div>
  )
}

export default ListArticles
