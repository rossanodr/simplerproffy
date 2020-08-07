const { pageLanding,
    pageStudy,
    pageGiveClasses, saveClasses } = require('./pages')

//servidor
const express = require('express')
const server = express()

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//inicio de fonig do servidor
server
//receber os dados do req. body
.use(express.urlencoded({ extended: true}))
//configurar arquivos estaticos (css, scripts, img)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

.listen(5500)

//console.log(__dirname)