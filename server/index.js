import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());

import chance from 'chance';

const chances = new chance();

const animals = [...Array(1050).keys()].map(id =>{
    return{
        id, 
        type: chances.animal(),
        age: chances.age(),
        name: chances.name(),
    }
});


app.get('', (req, res)=>{

    const q = req.query.q?.toLocaleLowerCase()  || '';
    const results = animals.filter(animal => animal.type.toLocaleLowerCase().includes(q));

    res.send(results);
    
});

app.listen(8901, ()=>{
    console.log(`App running on port 8901`);
});