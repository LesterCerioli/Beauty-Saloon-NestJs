import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const formData = req.body;

        
        const apiResponse = await fetch("https://api.backend.net8/savePageConfig", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",


            },
            body: JSON.stringify(formData),
        });
        if (apiResponse.ok) {
            res.status(200).json({ message: "Configuration saved successfully."});
        } else {
            res.status(500).json({message: "Error saving configuration."});
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }

}