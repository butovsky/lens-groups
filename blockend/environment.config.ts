import * as dotenv from "dotenv";
dotenv.config();

const ENVDefinition = {
  GOERLI_URL: process.env.GOERLI_URL as string,
  DEPLOYER_PRIVATE_KEY: process.env.DEPLOYER_PRIVATE_KEY as string,
  GOERLI_API_KEY: process.env.GOERLI_API_KEY as string,
};

const ENV = (type: keyof typeof ENVDefinition): string => {
  return ENVDefinition[type];
};

export default ENV;
