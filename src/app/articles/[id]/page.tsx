
type Props = {
    params: {
        id: number
    }
    
};

const getData = async (id: number ) => {
  const response = await fetch(`http://localhost:4000/articles/${id}`);
  const data = await response.json();
  return data
}

const article = async ({ params } : Props) => {
  const un_article = await getData(params.id);
  // console.log(un_article);
  
  return (
    <div>
      vous êtes sur l'article n°{params.id}
      <div>
        <h3 className="font-extrabold">{un_article.titre}</h3>
        <p className="my-6">{un_article.contenu}</p>
        <p>{un_article.auteur} a créé l'article le {un_article.date}</p>
      </div>
      </div>

  )
}

export default article;