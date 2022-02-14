require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remain quality hover knee bottom slim'; 
let testAccounts = [
"0x814daf50960021a193ed2e4153ba34f9f673e7394994c4f17dcd64733cebf746",
"0x4a65aa0c2507e905a170e993753e35383688179c3db6098a69eda3d54726cc48",
"0xa417d12d5fdc35c271cbe63274ce5c7f0c285f2148e57df76a1c825768329551",
"0xc07f8c49c1a38ec56ff95fc96a1ba25742e4d4ca533244f8eea02e7527d59e55",
"0x682bb30b9ec0720475339c0f59926452b206481b763340e0b369a70565445f23",
"0xf8319c5890d2c875bf6effa4c7404c4be2aa22aa5d36a2946e43e6f3ba1232ba",
"0x6455968be25ff69d9a3f7418c8f8e3bcd38adc6258a832064c56adfca4a68503",
"0x7b3690e44a211af31c3c275ffbff06a537220912e0b0f4e094f7833185d20417",
"0xc855804c51596b5baacd7ed640ad82c949a7abd7c48f904d14af84dad162c327",
"0x2c890879d3289cd838a56d5548ed2da536e611db1d79d1e8549ede936aa3527c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


