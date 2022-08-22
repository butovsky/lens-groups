import * as fs from 'fs';
import * as path from 'path';

import { ARTIFACTS_FOLDER } from '../constants';

interface Artifacts {
    'contractAddress.txt': string
}

const saveArtifact = <key extends keyof Artifacts> ( fileName: key, value: Artifacts[key] ) => {
    fs.mkdir(path.resolve(ARTIFACTS_FOLDER, 'github'), { recursive: true }, e => {
        if (e) throw e;
    })
    fs.writeFile(path.resolve(ARTIFACTS_FOLDER, fileName), value, (e) => {
        if (e) throw e;
    });
}

export default saveArtifact;