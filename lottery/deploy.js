const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'turtle pole couch anchor purse maximum favorite blade rely sand journey walnut',
    'https://rinkeby.infura.io/v3/eb7efbe0b19648b4ad6993714bfaf3e7'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode})
        .send({gas: '1000000', from: accounts[0]});
    console.log(interface);
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
};
deploy();
