import * as fs from "node:fs";
import * as path from "node:path";

import { ARTIFACTS_GITHUB_FOLDER } from "../constants";

export interface Artifacts {
  "contractAddress.txt": string;
}

const createArtifact = <Key extends keyof Artifacts>(
  fileName: Key,
  value: Artifacts[Key]
) => {
  fs.mkdirSync(ARTIFACTS_GITHUB_FOLDER, { recursive: true });
  fs.writeFileSync(path.resolve(ARTIFACTS_GITHUB_FOLDER, fileName), value);
};

export default createArtifact;
