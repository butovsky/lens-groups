import * as fs from "node:fs";
import * as path from "node:path";

import { ARTIFACTS_FOLDER } from "../constants";

interface Artifacts {
  "contractAddress.txt": string;
}

const saveArtifact = <Key extends keyof Artifacts>(
  fileName: Key,
  value: Artifacts[Key]
) => {
  fs.mkdir(
    path.resolve(ARTIFACTS_FOLDER, "github"),
    { recursive: true },
    (error) => {
      if (error) throw error;
    }
  );
  fs.writeFile(path.resolve(ARTIFACTS_FOLDER, fileName), value, (error) => {
    if (error) throw error;
  });
};

export default saveArtifact;
