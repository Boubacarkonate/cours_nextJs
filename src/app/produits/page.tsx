import Link from "next/link";
// import ExempleImage from "../ImageLocal/Image";

const Liste_produits = () => {
  return (
    <>
      <h1>Liste de produits</h1>
      <ul>
        <li>
          <Link href="produits/1">Produit 1</Link>
        </li>
        <li>
          <Link href="produits/2">Produit 2</Link>
        </li>
        <li>
          <Link href="produits/3">Produit 3</Link>
        </li>
      </ul>
      {/* <ExempleImage /> */}
    </>
  );
}

export default Liste_produits;
