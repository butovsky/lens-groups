import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import ENV from "./environment.config";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: ENV("GOERLI_URL"),
      accounts: [ENV("DEPLOYER_PRIVATE_KEY")],
    },
  },
};

export default config;
