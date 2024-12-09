import prisma from "../../../../lib/db";

export default async function CharacterStat({ params }: { params: Promise<{ id: string }>}) {
    const { id } = await params;
    const character = await prisma.character.findUnique({
        where: { id}
    })
    console.log(character);
    
    return(
        <div>
            <h1>{character?.name}</h1>
            <ul>
                <li>attak : {character?.attack}</li>
                <li>defense : {character?.defense}</li>
                <li>experience :{character?.experience}</li>
                <li>points de vie : {character?.healthPoints}</li>
            </ul>
        </div>
    )
}