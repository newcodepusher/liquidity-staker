const Factory = artifacts.require("StakingRewardsFactory");

module.exports = function (deployer) {
  const rewardsTokenAddress = "0xc1609fdcfede5a095b5f7db6e87b0e6e84e046aa"
  const timeEpochForGenesis = Date.now() + 60 * 100;
  deployer.deploy(Factory, rewardsTokenAddress, timeEpochForGenesis);
};
