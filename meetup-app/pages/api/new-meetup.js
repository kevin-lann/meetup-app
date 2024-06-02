// name of this file acts as the api route name
// /api/new-meetup

// This code will always run on server. Will not be exposed to user.

import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const data = req.body
        const { title, image, address, description } = data
        
        // this NEVER shows up on the clientside. Secure place for credentials.
        const client = await MongoClient.connect("mongodb+srv://kevinlan416:Lan000000@cluster0.sd7qiud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)
        console.log(result)

        client.close()

        res.status(201).json({ message: "Meetup inserted!" })
    }
}

export default handler