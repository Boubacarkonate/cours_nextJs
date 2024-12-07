
type Props = {
    params: {
        id: number
    }
    
};

const article = ({ params } : Props) => {
  return (
    <div>vous êtes sur l'article n°{params.id}</div>
  )
}

export default article;