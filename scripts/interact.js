const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const {ethers} = require('hardhat');
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json")

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten", API_KEY);

// signer - koha
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// constract instance
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);



async function main() {
    const message = await helloWorldContract.message();
    console.log('The message is: ' + message);
    
    console.log("Updating the message...");
    const tx = await helloWorldContract.update("Fairwell Morbius!");
    await tx.wait();
    
    const newMessage = await helloWorldContract.message();
    console.log('The new message is: ' + newMessage);

    //contract.update("Farewell world!")


}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
