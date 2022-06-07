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
const domain = "nomey.sol"
// How do I know the website I think I am talking to is legit for SIGNED TRANSACTIONS?
// Identify in code what the acceptable signature looks like:
// The exact, trusted signature:

// Address of the SOL TLD
const SOL_TLD_AUTHORITY = new PublicKey(
    "58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx" // <-- actually goes with: "nomey.sol"
);
console.log("SOL_TLD_AUTHORITY - ", SOL_TLD_AUTHORITY);
// PublicKey {
//   _bn: <BN: 3d53c24b38360ed3813a23dfb2dfd820ab5821cb7929a38d2eaab252e8382595>
// }

// WHEN WE SEND A DOMAIN NAME e.g. "knowtrades.sol, THE SNS SHOULD RETURN A PUBLICKEY/ADDRESS (THE DOMAIN NAME OWNER)
// To do this, we need to get an INPUT KEY (which has the NFT and metadata of the Domain).  Get the Input Key, then Send the input Key to Do The Name Resolution

// resolve the input domain key to the wallet that holds it

// 1. Get the Input Key
const getDomainKey = async (domain) => {
   // Get the hash of the domain name
   let hashedDomain = await getHashedName(domain);
   // Name Parent is the Signing Authority
   let inputDomainKey = await getNameAccountKey(
     hashedDomain,
     undefined,
     SOL_TLD_AUTHORITY // signing autority we want to identify
   )
   return {inputDomainKey: inputDomainKey, hashedInputName: hashedDomain};
 }

const test = async (x) => {
  let aHashedDomain = await getHashedName(x);
  console.log(`test with ${x} - `, aHashedDomain)
}
test('knox', getHashedName('knoxtrades'))
test('nomey', getHashedName('nomey'))
// console.log("getHashedName(accountName)", getHashedName(accountName))
// console.log("getHashedName(domain)", getHashedName(domain))

console.log("getDomainKey(accountName) - ", getDomainKey(accountName));
console.log("getDomainKey(domain) - ", getDomainKey(domain));


// 2. Send the Input Key (to Do The Name Resolution) and find out which wallet!

const main = async () => {
  const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
  const { inputDomainKey } = await getDomainKey(accountName.replace(".sol", ""));
  // next perform name registry lookup:
  const registry = await NameRegistryState.retrieve(connection, inputDomainKey)
  console.log(registry.owner) // <-- encdoed 8bit array
  // PublicKey {
  //   _bn: <BN: c07839819346478004b3b5daf179d95a50f6c640c87ec2546c0800406b013bd2>
  // }
  console.log(registry.owner.toBase58()) // <-- DxKc73eJX5J1kY5ND69hnLs7ox64Q2exN3BVUWxBtBjo
}

main();
