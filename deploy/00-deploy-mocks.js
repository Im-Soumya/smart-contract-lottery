const { network, ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config.js")

const BASE_FEE = ethers.utils.parseEther("0.25") // It costs 0.25 LINK per request
const GAS_PRICE_LINK = 1e9

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [BASE_FEE, GAS_PRICE_LINK]

    if (developmentChains.includes(network.name)) {
        log("Local network detected")
        log("Deploying Mock VRFCoordinatorV2...")
        // Deploy mock vrfCoordinator contract
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            logs: true,
            args: args,
        })
        log("Deployed Mock VRFCoordinatorV2")
        log("----------------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
