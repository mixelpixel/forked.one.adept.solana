const {
    Connection,
    PublicKey,
    clusterApiUrl,
    LAMPORTS_PER_SOL,
} = require("@solana/web3.js");
const TOKEN_PROGRAM = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
const request = require('request')

const getTokens = async () => {
    try {
        const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
        const tokenAccts = await connection.getParsedTokenAccountsByOwner(new PublicKey("DxKc73eJX5J1kY5ND69hnLs7ox64Q2exN3BVUWxBtBjo"), // <-- Knox Hutchinson's wallet
        // const tokenAccts = await connection.getParsedTokenAccountsByOwner(new PublicKey("6MoX4kcNrC75Rihp6xfB36Zv5ePp4xKg7Lr3ka6TfefX"), // <-- my wallet
            {
                programId: new PublicKey(TOKEN_PROGRAM),
            }
        );
        // console.log(tokenAccts)

        let nonZeroAccounts = tokenAccts?.value?.filter(
            (obj) => obj.account.data.parsed.info.tokenAmount.uiAmount > 0
        );
        // console.log(nonZeroAccounts.length)
        // console.log(nonZeroAccounts[0]) // getAccountInfo obj
        // console.log(nonZeroAccounts[0].account.data.parsed) // getAccountInfo obj

        /* Explore the object */
        // let mapAccountData = nonZeroAccounts.map(obj => obj.account.data.parsed.info.tokenAmount.uiAmount)
        // let mapAccountData = nonZeroAccounts.map(obj => obj.account.data.parsed.info.mint)
        // console.log(mapAccountData)

        // Lookup Mint public key https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json
        const url = "https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json"
        request.get({
            url: url,
            json: true
        }, (err, res, data) => {
            if (err) {
                console.log("Error:", err)
            } else if (res.statusCode!== 200) {
                console.log("Status:", res.statusCode)
            } else {
                // data is already parsed as JSON
                for (address of data.tokens) {
                    for (acct of nonZeroAccounts) {
                        if (address.address == acct.account.data.parsed.info.mint) {
                            console.log(`The token ${address.symbol} exists and has a balance ${acct.account.data.parsed.info.tokenAmount.uiAmount}`)
                        }
                    }
                }
            }
        }
        )
        for (let acct of nonZeroAccounts) {
            if (acct.account.data.parsed.info.mint == "8o66EVAf4u2Hr21m2tuRrPtEXFPLr8G8aL1ETStP8fDu") { // <-- SPL $VIBE token address
                console.log(`VIBE token balance is ${acct.account.data.parsed.info.tokenAmount.amount / LAMPORTS_PER_SOL}`)
            }
        }
    } catch (err) {
        console.log(err)
    }
}

getTokens();
