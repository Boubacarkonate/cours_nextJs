// app/produit/[id].tsx

const Detail_produit = ({
  params,
}: {
  params: { id: string };
}) => {
  return (
    <div>
      <h1>Détails du produit {params.id}</h1>
      <p>Voici les informations sur le produit avec ID {params.id}.</p>
    </div>
  );
};

export default Detail_produit;
