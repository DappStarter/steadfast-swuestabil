const DappStateContract = artifacts.require("DappState");
const DappContract = artifacts.require("Dapp");
const fs = require('fs');

module.exports = function(deployer, network) {

    let httpUri = deployer.networks[network].uri;
    let wsUri = '';
    if (httpUri) {
        wsUri = httpUri.replace('http', 'ws');
    }
    deployer
        .deploy(DappStateContract)
        .then(() => {
            return deployer.deploy(DappContract, DappStateContract.address);
        })
        .then(() => {
            let config = {
                httpUri: httpUri,
                wsUri: wsUri,
                dappStateContractAddress: DappStateContract.address,
                dappContractAddress: DappContract.address
                ,sia: {
                    host: 'siasky.net',
                    protocol: 'https',
                    port: 443
                }
                
            }

            // On each deployment, a configuration file is created so dapp and API can access the latest contract code
            fs.writeFileSync(__dirname + '/../src/dapp-config.json',JSON.stringify(config, null, '\t'), 'utf-8');
        });

}