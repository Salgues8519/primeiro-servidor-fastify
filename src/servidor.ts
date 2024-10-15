import Fastify from 'fastify'

// const servidor = Fastify({})
const servidor = Fastify({
    logger: true
})

servidor.get('/teste', function controlador (requisicao, resposta) {
    const saudacao = 'Bem-vindo ao primeiro servidor Node.js com typescript'
    return resposta.send(saudacao)
})

servidor.listen({
    port:3000
})