require("@nomiclabs/hardhat-waffle");

const PRIV_KEY = '42c0b6182b3fffd830040e2ab01219bc8722a61cc19f85c7cec4aba16bce1c20'
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    ropsten: {
      url: "https://ropsten.infura.io/v3/7aceb87780b7465e87c0de7ab1c36040",
      accounts: [PRIV_KEY]
    }
  }
};
