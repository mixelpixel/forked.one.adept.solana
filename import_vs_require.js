/* For the import statement to function on packages in the node_modules folder,
it requires that the file extension be changed from .js to .mjs, per: https://stackoverflow.com/a/63589856
having done so, the `require` statement no longer works */

// import * as web3 from '@solana/web3.js';

/* Otherwise, the following warning and error are reported:
(node:67228) Warning: To load an ES module, set "type": "module" in the package.js
on or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
/Users/mixelpix/solana/forked.one/hellosolana/test.js:5
import * as web3 from '@solana/web3.js';
^^^^^^

SyntaxError: Cannot use import statement outside a module ž*/

/* `require` invoked in a file ending .mjs gives a
ReferenceError: require is not defined in ES module scope, you can use import instead */

const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
    Transaction,
    Account
} = require("@solana/web3.js");

/* With the package.json file update with "type": "module" and the file
extension ending with .js, the following error message is reported:
ReferenceError: require is not defined in ES module scope, you can use import
instead

This file is being treated as an ES module because it has a '.js' file extension
and '/Users/mixelpix/solana/forked.one/hellosolana/package.json' contains
"type": "module". To treat it as a CommonJS script, rename it to use the '.cjs'
file extension.

Note that even w/a .cjs extension, the `import` statement above does not work */

const solanaWeb3 = require('@solana/web3.js');
console.log(solanaWeb3); // <--- https://solana-labs.github.io/solana-web3.js/

console.log(Connection)
console.log(PublicKey)
console.log(clusterApiUrl)
console.log(Keypair)
console.log(LAMPORTS_PER_SOL)
console.log(Transaction)
console.log(Account)
