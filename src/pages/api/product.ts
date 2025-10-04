// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    status : boolean;
    StatusCode : number;
    data : {
        id : number;
        name : string;
        price : number;
        size : string;   
    }[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const data =[
        {
            id : 1,
            name : "Baju Baru",
            price : 100000,
            size : "L", 
        },
        {
            id : 2,
            name : "Baju Lama",
            price : 50000,
            size : "M",     
        }
    ]

    res.status(200).json({status : true, StatusCode : 200,  data });
}
