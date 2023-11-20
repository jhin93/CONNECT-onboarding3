// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

export default async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    if (req.method === "GET") {
        const AZUKI_CONTRACT_ADDRESS = '0xed5af388653567af2f388e6224dc7c4b3241c544';
        const SERVERTYPE = 'ETHEREUM';

        // Get wallet address from request
        const {start: _start, count: _count} = req.query;
        let start = 0;
        let count = 20;
        if (_start !== undefined) {
            if (Array.isArray(_start)) {
                start = Number(_start[0]);
            } else {
                start = Number(_start);
            }
        }
        if (_count !== undefined) {
            if (Array.isArray(_count)) {
                count = Number(_count[0]);
            } else {
                count = Number(_count);
            }
        }

        // @ts-ignore
        const sdk = new ThirdwebSDK(SERVERTYPE);
        // @ts-ignore
        const contract = await sdk.getContract(AZUKI_CONTRACT_ADDRESS);
        const listings = await contract.erc721.getAll({start, count});
        // console.log("(itemListFetch.ts)Item Listings Data : ", listings)
        res.status(200).json({listings});
    } else if (req.method === "POST") {
        res.status(200).json({message: "POST"});
    } else {
        res.status(500).json({message: "wrong connection"});
    }
}
