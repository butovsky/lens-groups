import * as artifact from "@actions/artifact";
import { ARTIFACTS_GITHUB_FOLDER, ARTIFACT_NAME } from "../constants";

async function downloadArtifacts() {
  const artifactClient = artifact.create();
  const downloadResult = await artifactClient.downloadArtifact(
    ARTIFACT_NAME,
    ARTIFACTS_GITHUB_FOLDER,
    { createArtifactFolder: true }
  );
  console.log(downloadResult);
}
/* eslint-disable unicorn/prefer-top-level-await */
downloadArtifacts().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
