import * as path from "node:path";

/* eslint-disable unicorn/prefer-module */
export const BLOCKEND_FOLDER = __dirname;
export const ARTIFACTS_FOLDER = path.resolve(BLOCKEND_FOLDER, "artifacts");
export const ARTIFACTS_GITHUB_FOLDER = path.resolve(ARTIFACTS_FOLDER, "github");

export const ARTIFACT_NAME = "testArtifact";
