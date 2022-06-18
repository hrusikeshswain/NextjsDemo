//api/new-meetup
import {MongoClient} from 'mongodb'

//mongodb nosql db works with collections(tables in sqlite) full of documents(entries in tables)

async function handler(req,res){
    if(req.method === 'POST'){
       const data = req.body;
       console.log("api POST request"+data);
       const client = await MongoClient.connect('mongodb+srv://hrusikesh:89MZ5N3uL4YZJiGg@cluster0.x0hfv.mongodb.net/meetups?retryWrites=true&w=majority');
       const db = client.db();
       const meetupcollections  = db.collection('meetups');
       const result =  await meetupcollections.insertOne(data);
       console.log(result);
       client.close();
       res.status(201).json({message:'meetup inserted successfully!'});
    }

}

export default handler