import Link from "next/link";
import prisma from "../../../lib/db";

export default async function characterList(){

    const persos = await prisma.character.findMany();
    return(
        <div>
            <h1>Liste des personnages</h1>
            {persos.map((el)=>
                <li key={el.id}>{el.name}
                    <Link href={`/character/${el.id}`}>voir les stats</Link>
                </li>
            )}
        </div>
    )
}