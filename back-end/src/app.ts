import Fastify from "fastify"
import loggerInstance from "./config/logger";

const fastify = Fastify({ loggerInstance });

export default fastify;