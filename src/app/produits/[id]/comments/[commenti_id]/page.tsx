// export default function Commentaires({
//     params
// }: { 
//     params: {
//         id: string;
//         commenti_id: string;
//     }
// }){
//     return(
//         <div>
//             <h1>Commentaire</h1>
//             Commentaire {params.commenti_id} for le produit {params.id}
//         </div>
//     );
// }


const Commentaires = ({ params }: { 
    params: {
        id: string;
        commenti_id: string;
    }
}) => {
    return(
                <div>
                    <h1>Commentaire</h1>
                    Commentaire {params.commenti_id} for le produit {params.id}
                </div>
            );
}

export default Commentaires;

// const Commentaires = ({ params }) => {
//     return(
//                 <div>
//                     <h1>Commentaire</h1>
//                     Commentaire {params.commenti_id} for le produit {params.id}
//                 </div>
//             );
// }

// export default Commentaires;