import  Express  from "express";

// Express app
const app = express();

// Router
const router = express.Router()

//Port
const port = +process.env.PORT || 6000

// Json Url

const dataUrl = 'https://understudystudent.github.io/vueEOMPdata/data/'

// Application Middleware
app.use ( router)

//  /=> home
router.get('^/$|ejd', (req, res) => {
    res.json ({
        status: res.statusCode,
        msg: "You're home"
    })
})

// fetch all education

router.get('/education',async (req, res) => {
    let {education} = await (await fetch(dataUrl)).json();
    res.json({
        status: res.statusCode,
        education
    });
    });

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
    });