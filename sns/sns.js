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
// How do I know the website I think I am talking to is legit for SIGNED TRANSACTIONS?
// Identify in code what the acceptable signature looks like:
// The exact, trusted signature:

// Address of the SOL TLD
const SOL_TLD_AUTHORITY = new PublicKey(
    "58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx" // <-- actually goes with: "nomey.sol"
);

console.log(SOL_TLD_AUTHORITY);
// PublicKey {
//   _bn: <BN: 3d53c24b38360ed3813a23dfb2dfd820ab5821cb7929a38d2eaab252e8382595>
// }

// IF WE SEND accountName, THE SNS SHOULD RETURN THE PUBLICKEY
