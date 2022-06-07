/*
 * Starter code: https://adept.at/forked/solana-blockchain-development#forked/perform-an-sns-lookup-on-solana-using-javascript
 * https://bonfida.org/#/
 * terminal command: `nslookup` "Name Service Lookup"
 * NPM package: https://www.npmjs.com/package/@solana/spl-name-service `npm i @solana/spl-name-service`
 * Solana Docs: https://spl.solana.com/name-service
 * Bonafida Guide: https://github.com/Bonfida/solana-name-service-guide
 * Codesandbox: https://codesandbox.io/examples/package/@solana/spl-name-service
 *
 *
 * What follows is the starter code from the lesson page
 */

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

// Address of the SOL TLD
const SOL_TLD_AUTHORITY = new PublicKey(
    "58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx"
);

const domain = "nomey.sol"

const getInputKey = async (input) => {
    let hashed_input_name = await getHashedName(input);
    let inputDomainKey = await getNameAccountKey(
        hashed_input_name,
        undefined,
        SOL_TLD_AUTHORITY
    );
    //PDK Added the log:
    console.log({ inputDomainKey: inputDomainKey, hashedInputName: hashed_input_name });
    return { inputDomainKey: inputDomainKey, hashedInputName: hashed_input_name };
};


const main = async () => {
    const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
    const { inputDomainKey } = await getInputKey(domain.replace(".sol", ""));
    const registry = await NameRegistryState.retrieve(
        connection,
        inputDomainKey
    );
    console.log(registry.owner.toBase58())
}

main()
