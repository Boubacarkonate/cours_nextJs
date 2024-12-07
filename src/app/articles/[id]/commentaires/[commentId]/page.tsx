
type Props = {
    params : {
      commentId: string;
        id: number;
    }
}

const Commentaire = ({ params } : Props) => {
  return (
    <div>Je suis le commentaire n°{params.commentId} pour l'article n°{params.id}</div>
  )
}

export default Commentaire;