require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn purpose jazz private fresh truck'; 
let testAccounts = [
"0xdf94c98fb15d259931968f4850ecc3b57243c9a44db5f573ec914afd117043f7",
"0xc966a4a2a9fcd21751c44c7d0f2f07d4ae07f83a4fcdfa159abdbd1b78fce6d8",
"0xdea9f7ecd22fb7690b9e471f3d9a14ea576b696db7e656d62e9c5dad3be359ad",
"0x723676e75eab4bb8f4605d15d75359bd887e0c3dd234060ac220d11a5f01ebd8",
"0x54df240d82f653048d00019ee6b6fe7538158543f885606f2b9c81ed607fa866",
"0xfc2105c8912ad67c6258eae7f46efd7972256f4155a2c455b336801185d0b7e5",
"0x254771cd21f08dff8167199567cc65015890df457d76aeec4ce922e9239315a3",
"0xe47eb29c8160cb9cd31532274ea224d42219b705842d9cff9b39fa51256b77bf",
"0x1e07a521041010bf3e0abf258bf1526e5bfcee796775df4424c8aa141da8240c",
"0x9f61cdd24d7af0552aace3e13c17cf2d496a2bfe7de981da14a2515879a2d003"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
