const { ethers } = require("hardhat");

async function main() {
    //load the smart contract
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    
    // instantiate the contract with initMessage
    //look up contract constructor method
    const hello_world = await HelloWorld.deploy("Hello Bored!");

    //sanity check
    console.log("Contract Deployed to Address:", hello_world.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });


// Contract Address: 0x857aC7791eE6379292d8109dbb4594488aF9C726