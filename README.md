# Try-Chain!
"Hello world" Solidity project created for the talk at [Try IT!](https://congresotryit.es/) on 18 March 2021.

This project contains a simple Smart Contract written in Solidity, as well as unit tests and a coverage plugin, developed with the [Truffle](https://www.trufflesuite.com/truffle) framework.


## Authors
- [Víctor Nieves](https://www.linkedin.com/in/victor-nieves-s%C3%A1nchez/)
- [Roberto García](https://www.linkedin.com/in/roberto-garc%C3%ADa-%C3%A1lvarez-6bb28a154/)


## Requirements
- Node v14.15.5


## How to install dependencies
Just run the following command.
```bash
npm install
```


## How to set up your development blockchain
You can do it easily with [Ganache](https://www.trufflesuite.com/ganache). You can set up your Ganache with Docker.
```bash
docker run --name ganache-cli -d -p 8545:8545 trufflesuite/ganache-cli:latest
```

## Implemented scripts
- `npm run-script test`: runs the unit tests
- `npm run-script coverage`: runs the unit tests and performs code coverage
- `npm run-script compile`: compiles the Smart Contract
- `npm run-script deploy-develop`: deploys the Smart Contract on the development network
- `npm run-script deploy-quorum`: deploys the Smart Contract on the quorum network