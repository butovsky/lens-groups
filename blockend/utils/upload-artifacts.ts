import * as artifact from '@actions/artifact';
import * as fs from 'fs';
import * as path from 'path';
import { ARTIFACTS_GITHUB_FOLDER, ARTIFACT_NAME } from '../constants';

async function uploadArtifacts() {
    const artifactClient = artifact.create();
    const filenames: string[] = fs.readdirSync(ARTIFACTS_GITHUB_FOLDER).map(file => path.resolve(ARTIFACTS_GITHUB_FOLDER, file))

    const uploadResult = await artifactClient.uploadArtifact(ARTIFACT_NAME, filenames, ARTIFACTS_GITHUB_FOLDER, { continueOnError: true })
    console.log(uploadResult);
}

uploadArtifacts();