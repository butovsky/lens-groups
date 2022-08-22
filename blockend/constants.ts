import * as path from "node:path";
import { fileURLToPath } from "node:url";

export const BLOCKEND_FOLDER = path.dirname(fileURLToPath(import.meta.url));
export const ARTIFACTS_FOLDER = path.resolve(BLOCKEND_FOLDER, "artifacts");
