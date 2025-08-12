import { json, urlencoded } from "express";
import cors from "cors";
import { requestLogger } from "./requests-logger";

export const middlewares = [
	json(),
	urlencoded({extended: false}),
	cors(),
	requestLogger
]
