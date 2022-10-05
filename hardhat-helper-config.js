const networkConfig = {
    31337: {
        name: "localhost",
    },
    42: {
        name: "kovan",
        VERIFICATION_BLOCK_CONFIRMATIONS: 5
    },
    4: {
        name: "rinkeby",
        VERIFICATION_BLOCK_CONFIRMATIONS: 5
    },
}

const VERIFICATION_BLOCK_CONFIRMATIONS = 6;

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}