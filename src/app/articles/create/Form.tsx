"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
    titre: string;
    contenu: string;
    auteur: string;
    date: string;

}


const Form = () => {
    
    const [titre, setTitre] = useState<string>("");
    const [contenu, setContenu] = useState<string>("");
    const [auteur, setAuteur] = useState<string>("");
    const [date, setDate] = useState<string>("");
    
    const router = useRouter();
 
    const envoyer = async (e) => {
        e.preventDefault();

    const addArticle: Props = {
        titre,
        contenu,
        auteur,
        date
    
    }
    try {
        // const response = await fetch('http://localhost:4000/articles', {      json server
        const response = await fetch('http://localhost:3000/api/articles', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(addArticle)
        });

        if (response.ok) {
            alert('Article ajouté avec succès');
            router.push("/articles/")
        } else {
            alert('Article non ajouté');
        }
    } catch (error) {
        console.error("Erreur :", error);
      alert("Une erreur est survenue.");
    }
    }

  return (
    <div>
        <form onSubmit={envoyer}>
            <label htmlFor="titre" className="m-12">Titre de l'article</label>
            <br />
            <input type="text" 
              placeholder="Titre"
              value={titre}
              onChange={(e)=>{setTitre(e.target.value)}}
              required
            />
            <br /> <br />
            <label htmlFor="auteur" className="m-12">Nom de l'auteur/autrice</label>
            <br />
            <input type="text"
            placeholder="Nom"
            value={auteur}
            onChange={(e)=>{setAuteur(e.target.value)}}
            required
            />
            <br /> <br />
            <label htmlFor="contenu" className="m-12">Contenu</label>
            <br />
            <input type="text"
            value={contenu}
            placeholder="Contenu de l'article"
            onChange={(e)=>{setContenu(e.target.value)}}
            required
            />
            <br /> <br />
            <label htmlFor="date" className="m-12">Date de création</label>
            <br />
            <input type="date" 
            placeholder="date de création"
            required
            value={date}
            onChange={(e)=>{setDate(e.target.value)}}
            />
             <br /> <br />
            <button type="submit">ajouter l'article</button>
        </form>
    </div>
  )
}

export default Form