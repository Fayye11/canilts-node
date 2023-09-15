import express, {Response, Request} from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainrouter from './routes/index' 
dotenv.config()

let server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

//server.use((res: Response, req: Request)=>{res.status(404).send('Pagina não encontrada')})
//Rotas

server.use(mainrouter)

server.listen(process.env.PORT)

