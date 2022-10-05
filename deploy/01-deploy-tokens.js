const {network, ethers, deployments, getNamedAccounts} = require("hardhat")
const {VERIFICATION_BLOCK_CONFIRMATIONS} = require("../hardhat-helper-config")
const {verify} = require("../utils/verify");

module.exports = async({deployments, getNamedAccounts}) => {
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();
    chainId = network.config.chainId

    const waitBlockConfirmations = (chainId === 31337)
    ? 1
    : VERIFICATION_BLOCK_CONFIRMATIONS

    const cnt = await deploy("CryptoNaukriToken", {
        from: deployer,
        log: true,
        args:[],
        waitConfirmations: waitBlockConfirmations
    })
    console.log(`contract deployed at ${cnt.address}!`)
    console.log("------------------------------------------------")
    
    if(chainId !== 31337){
        console.log("verifying contract....")
        await verify(cnt.address, []);
        console.log("contracts verified!")
        conaole.log("---------------------------------------------")
    }
}

module.exports.tags = ["all", "tokens"]