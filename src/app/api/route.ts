import { NextResponse } from "next/server";

export async function GET(req: Request){
    return NextResponse.json({ message: 'je suis la méthode GET', 
        data: [
            {
                name: 'Bob'
            }
        ]
    });
}