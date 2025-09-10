import app from "./app.mjs";
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.listen(5000, ()=>{
    console.log("Server listening at 5000")
})

app.get('/home', (req, res) => {
    
    res.render('home')

})
app.get('/about', (req, res) => {
    
    res.render('about')
})
app.get('/gallery', (req, res) => {
    
    res.render('gallery')
})
app.get('/contact', (req, res) => {
    
    res.render('contact')
})