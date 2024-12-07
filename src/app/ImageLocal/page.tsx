import Image from 'next/image';
// import img from '../../../public/p.png';

export default function ExempleImage() {
  return (
    <div>
      <h1>Exemple d'Image</h1>
      <Image
     //   src={img}  Chemin de l'image
        src="/p.png" // Chemin de l'image
        alt="Description de l'image" // Texte alternatif pour l'accessibilité
        width={500} // Largeur en pixels
        height={300} // Hauteur en pixels
      />
    </div>
  );
}
