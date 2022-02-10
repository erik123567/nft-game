

  ////////////////////////////
  const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    
    const gameContract = await gameContractFactory.deploy(
        ["turtle", "bunny", "fox"],       // Names
        ["https://i.imgur.com/8M9lCFe.jpg", // Images
        "https://i.imgur.com/FrRkese.jpg", 
        "https://i.imgur.com/f75kD52.jpg"],
        [100, 200, 300],                    // HP values
        [100, 50, 25],
        "Elon Musk", // Boss name
        "https://i.imgur.com/AksR0tt.png", // Boss image
        10000, // Boss hp
        50 // Boss attack damage                       // Attack damage values
      );
  
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
  
    txn = await gameContract.attackBoss();
    await txn.wait();
  
    txn = await gameContract.attackBoss();
    await txn.wait();
  
    console.log("Done!");
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();