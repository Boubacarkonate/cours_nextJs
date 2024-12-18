import { NextResponse } from "next/server";

const getData = async () => {
    const response = await fetch("http://localhost:4000/articles");
    const data = await response.json();
    return data
}

//méthode GET
export async function GET(req: Request){
    const dataz = await getData();
    return NextResponse.json({
        message: "données récupérées avec succès de db.json",
        dataz
    });
}

//méthode POST
export async function POST(req: Request) {
    const { titre, contenu, auteur } = await req.json();
    if (!titre || !contenu || !auteur)
      return NextResponse.json({ message: "Veuillez remplir tous les champs" });
  
    const article = {
      id: Math.floor(Math.random() * 1000),
      titre,
      contenu,
      auteur,
      date: new Date(),
    };
  
    await fetch("http://localhost:4000/articles", {
      method: "POST",
      body: JSON.stringify(article),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    return NextResponse.json({
      message: "Article ajouté avec succès",
      data: article,
    });
  }