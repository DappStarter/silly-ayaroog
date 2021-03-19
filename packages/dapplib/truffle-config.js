require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict enter brand venture stock royal magic evil hunt define army giggle'; 
let testAccounts = [
"0x1634861ea054e88971b0e3b76b0ac8f2bc1b25e3657e19416bf98b2dbb7edc48",
"0x329cbbc9e41656ca1c7b262f076521831407cd943aa709f64dbb6072c8932a93",
"0x0b74028e79637e776dae35965192dbdf7a64c8b5353d55a92739d959e8391617",
"0x87d9b1d75c1bfbc9da042900137827f55c48fc70dd10b3a7ccbf6acc473e7300",
"0x6fbaaf2dddef0b1196eeab58387304c8ab4324c4d618d33bac58d9a17d88ec1b",
"0x032da3fa571986038fdb45dcf3212741d0ad851a0296b8c2a3b12c355315d192",
"0xa56c9dbcb73b838b377bec9d8500bf961c9ba46987b3aec95e6e09ea0c5e82b8",
"0xfb9942c184961ac0c8d0ba490959e804f230c63bd4b0a20f7a86e7e6dc5a7d58",
"0x260a8e147c4e9339a0e3c46164d9f912661c7249c75a88966000f87f7bf41402",
"0x68641cd90d7cf278a9df0ee0cec9d95494779198631194f867932806639c8a98"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

