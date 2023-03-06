const { ethers, network } = require("hardhat")

async function enterLottery() {
    const lottery = await ethers.getContract("Lottery")
    const entranceFee = await lottery.getEntranceFee()
    await lottery.enterLottery({ value: entranceFee + 1 })
    console.log("Entered the lottery!")
}

enterLottery()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
