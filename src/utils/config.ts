import { v4 as uuidv4 } from "uuid";
export const backendPort = process.env.PORT || 8080;
export const genId = () => uuidv4();
