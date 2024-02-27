const express = require ("express")
const bodyParser = require ("body-parser")

const app = express();

const data = [
    {
        id: 1,
        title: "Healthy Breakfast Ideas",
        content: "Start your day right with these healthy breakfast ideas: oatmeal with fruits, Greek yogurt with granola, avocado toast, or a smoothie bowl."
    },
    {
        id: 2,
        title: "10-Minute Workouts",
        content: "Short on time? Try these quick 10-minute workouts: jumping jacks, squats, push-ups, lunges, and planks. Repeat each exercise for 1 minute."
    },
    {
        id: 3,
        title: "Stress Management Techniques",
        content: "Feeling stressed? Take a deep breath, go for a walk, practice mindfulness, or listen to calming music to reduce stress and promote relaxation."
    }
];

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/blog-api/posts',(req, res)=>{
    res.send(data)
    res.json(data)

})

app.get('/blog-api/posts/:id',(req, res)=>{
    console.log(req.params);
    const { id } = req.params;
    const post = data.find((item)=> item.id == id);

    if(!post){
        res.status(404).json({msg:"product not found"})
    }
    res.send(post)
    res.json(post)
})

app.post('/blog-api/posts',(req, res)=>{
console.log(req.body);

    const {title, content }= req.body

    const newPost ={
        id : data.length +1,
        title,
        content
    } ;    
    data.push(newPost);
    res.json(data)

})

app.put('/blog-api/posts/:id',(req, res)=>{
    console.log(req.params);
    const {title, content }= req.body

    const { id } = req.params;
    const indx = data.findIndex(item=> item.id == id);

    data[indx] ={
        id: indx +1,
        title,
        content
    } ;    

    if(indx === -1){
        res.status(404).json({msg:"product not found"})
    }
    res.send(data)
    res.json(data)
})

app.delete('/blog-api/posts/:id',(req, res)=>{
    console.log(req.params);

    const { id } = req.params;
    const indx = data.findIndex(item=> item.id == id);

    if(indx === -1){
        res.status(404).json({msg:"product not found"})
    }
    data.splice(indx, 1)

    res.send(data)
    res.json(data)
})


app.listen(3005);

