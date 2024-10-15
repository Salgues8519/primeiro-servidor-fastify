import Fastify from 'fastify'

// const servidor = Fastify({})
const servidor = Fastify({
    logger: true
})

servidor.get('/teste', function controlador (requisicao, resposta) {
    const saudacao = 'A vida é superestimada'
    return resposta.send(saudacao)
})

servidor.listen({
    port:3000
})