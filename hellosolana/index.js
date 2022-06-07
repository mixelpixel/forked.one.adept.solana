const {
    Keypair,          // https://solana-labs.github.io/solana-web3.js/classes/Keypair.html
    PublicKey,        // a PublicKey is the string version of the public key (the Uint8Array (32)) -  https://solana-labs.github.io/solana-web3.js/classes/PublicKey.html
    Connection,       // a connection to a JSPN RPC Node - https://solana-labs.github.io/solana-web3.js/classes/Connection.html
    clusterApiUrl,    // https://solana-labs.github.io/solana-web3.js/modules.html#clusterApiUrl
    LAMPORTS_PER_SOL, // https://solana-labs.github.io/solana-web3.js/modules.html#LAMPORTS_PER_SOL
    Transaction,      // https://solana-labs.github.io/solana-web3.js/classes/Transaction.html
    Account,          // https://solana-labs.github.io/solana-web3.js/classes/Account.html
} = require("@solana/web3.js");

// const {Buffer} = require('buffer');
// const Base58 = require('Base58');
const bs58 = require('bs58');
require('dotenv').config(); // https://www.npmjs.com/package/dotenv
// console.log(process.env); // Object w/all it's key:value pairs
// console.log(process.env.PRIVATE_KEY); // if no variable, `undefined`
// console.log(process.env.PRIVATE_KEY ?? ""); // if the value of the left side of the null coalescing operator is null (i.e. the key at .procerss.env isn't in the env file - there's no match), then print and empty string (?? is the null coalescing operator)

const devKeys = new Keypair();
console.log(`devKeys = `, devKeys);
// console.log(`devKeys typeof is`, typeof devKeys);
// console.log(`is devKeys an Array?`, Array.isArray(devKeys));
/* Keypair generates a public and private keypair. A `new Keypair()` is an
instance of the Keypair class - a class object.  The instance is of the property, "_keypair."
Once instantiated into an object, _keypair contains a single key:value member,
"_keypair."  _keypair's value is an object containing two keys, a "publicKey"
and a "secretKey."  Both keys have values of "Uint8" arrays, i.e. arrays of
8-bit unsigned integers.  Each item on the list is a random number, 0 through 255.
The publicKey has 32 such integers, and the secretKey 64. */
console.log('0', devKeys.publicKey);
console.log('0', devKeys._keypair.publicKey);

const pubKeyRaw = new PublicKey(devKeys.publicKey);
console.log('1', pubKeyRaw._bn)
console.log('2', pubKeyRaw.toString())
console.log('3', pubKeyRaw.toBuffer())
console.log('4', pubKeyRaw.toBytes())
console.log('5', pubKeyRaw.toBase58())
console.log('6', pubKeyRaw.toJSON())
// console.log('7', Base58.int_to_base58(6857269519)); // 'brXijP'
// console.log('8', Base58.base58_to_int('brXijP'));   // 6857269519
// console.log('9', bs58.encode(devKeys.publicKey));
console.log('7', bs58.encode(devKeys._keypair.publicKey));
console.log('8', bs58.decode(pubKeyRaw.toString()));
// console.log('10', Base58.base58_to_int(pubKeyRaw));

const pubKey = new PublicKey(devKeys._keypair.publicKey).toString();
console.log('1', new PublicKey(devKeys._keypair.publicKey).toString());
console.log('2', new PublicKey(devKeys._keypair.publicKey));
const secretKey = devKeys._keypair.secretKey

console.log('pubKey:', pubKey); // e.g. Tiis9LdEqnoTokTjsoYxhADS2eyP1f1nmvoGkCT8WFX
console.log('pubKey typeof is:', typeof pubKey); // string
console.log('secretKey:', secretKey);



/* From Solana lessons: https://github.com/Unboxed-Software/solana-course/blob/main/content/intro-to-writing-data.md */
const ownerKeypair = Keypair.generate();
console.log('ownerKeypair = ', ownerKeypair);
// console.log(ownerKeypair.publicKey);
// console.log(ownerKeypair._keypair.publicKey);
//
const publicKey = ownerKeypair._keypair.publicKey
const secretKey2 = ownerKeypair._keypair.secretKey

/* Working with .env files */
// const secret = JSON.parse(process.env.PRIVATE_KEY ?? "") as number[] // I thini number[] is Typescript?
const secret = JSON.parse(process.env.PRIVATE_KEY ?? "") // ?? "" - defaults to an empty string, see nullish coalescing operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
// const secret = JSON.parse(process.env.PRIVATE_KEY)
console.log('env secret', secret);
console.log(typeof secret);
console.log(Array.isArray(secret));
const secretKey3 = Uint8Array.from(secret)
// // const keypairFromSecretKey = Keypair.fromSecretKey(secretKey3)

/* Interacting with wallers using the Connection class*/
const getWalletBalance = async () => {
    try {
        // put the connection in place
        const connection = new Connection(clusterApiUrl('devnet'), "confirmed")
        // use the public key address (so we can get the balance)
        const myWallet = await Keypair.fromSecretKey(secretKey3)
        const walletBalance = await connection.getBalance(new PublicKey(myWallet.publicKey))
        console.log(
            `Wallet address is ${myWallet.publicKey.toString()} and balance is ${walletBalance}`
        )
    } catch (err) {
        console.log(err)
    }
}

const airDropSol = async () => {
    try {
        // put the connection in place
        const connection = new Connection(clusterApiUrl('devnet'), "confirmed")
        // use the public key address (so we can get the balance)
        const myWallet = await Keypair.fromSecretKey(secretKey3)

        // request an airdrop of devnet SOL
        // const airDropSignatureResult = await connection.requestAirdrop(new PublicKey(myWallet.publicKey), 2 * LAMPORTS_PER_SOL)
        // await connection.confirmTransaction(airDropSignatureResult) // <-- OLD STYLE, USE BELOW INSTEAD:
        const fromAirDropSignature = await connection.requestAirdrop(new PublicKey(myWallet.publicKey), 2 * LAMPORTS_PER_SOL);
        const latestBlockHash = await connection.getLatestBlockhash();
        await connection.confirmTransaction({
            blockhash: latestBlockHash.blockhash,
            lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
            signature: fromAirDropSignature,
        });
    } catch (err) {
        console.log(err)
    }
}

const main = async () => {
    await getWalletBalance();
    await airDropSol();
    await getWalletBalance();
}

main();
