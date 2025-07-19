import fastify from "./app";

async function startServer() {
  try {
    await fastify.listen({ port: 8080, host: '0.0.0.0' });
  } catch (err: unknown) {
    fastify.log.error(`${err}`);
  }
}

export default startServer;