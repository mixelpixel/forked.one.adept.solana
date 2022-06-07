const {
    getHashedName,
    getNameAccountKey,
    NameRegistryState,
} = require("@solana/spl-name-service");
const {
    Connection,
    PublicKey,
    clusterApiUrl,
} = require("@solana/web3.js");

// name service vulnerability
// what do we need to provide a name lookup service?
// fundamental things - lke, a name to look up!
const accountName = "knoxtrades.sol"; // <-- remove the ".sol"!
// How do I know the website I think I am talking to is legit?
