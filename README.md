# infrablockchain-js
[![Build Status](https://github.com/InfraBlockchain/infrablockchain-js/workflows/CI/badge.svg?branch=master)](https://github.com/InfraBlockchain/infrablockchain-js/actions)  [![npm version](https://badge.fury.io/js/infrablockchain-js.svg)](https://badge.fury.io/js/infrablockchain-js)  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  ![npm](https://img.shields.io/npm/dw/infrablockchain-js.svg)

Javascript API for integration with EOSIO-based blockchains using [EOSIO RPC API](https://developers.eos.io/eosio-nodeos/reference).

Documentation can be found [here](https://eosio.github.io/eosjs)

## Installation

### NPM

The official distribution package can be found at [npm](https://www.npmjs.com/package/infrablockchain-js).

### Add dependency to your project

`yarn add infrablockchain-js`

### Using with Typescript

In order to get access to the `TextEncoding` and `TextDecoding` types, you need to add `@types/text-encoding` as a dev dependency:
`yarn add --dev @types/text-encoding`

If you're using Node (not a browser) then you'll also need to make sure the `dom` lib is referenced in your `tsconfig.json`:

```
{
	"compilerOptions": {
		"lib": [..., "dom"]
	}
}
```

### Browser Distribution

Clone this repository locally then run `yarn build-web`.  The browser distribution will be located in `dist-web` and can be directly copied into your project repository. The `dist-web` folder contains minified bundles ready for production, along with source mapped versions of the library for debugging.  For full browser usage examples, [see the documentation](https://eosio.github.io/eosjs/guides/1.-Browsers.html).

## Import

### ES Modules

Importing using ESM syntax is supported using TypeScript, [webpack](https://webpack.js.org/api/module-methods), or  [Node.js with `--experimental-modules` flag](https://nodejs.org/api/esm.html)
```js
import { Api, JsonRpc, RpcError } from 'infrablockchain-js';
import { JsSignatureProvider } from 'infrablockchain-js/dist/infrablockchain-js-jssig';           // development only
```

### CommonJS

Importing using commonJS syntax is supported by Node.js out of the box.
```js
const { Api, JsonRpc, RpcError } = require('infrablockchain-js');
const { JsSignatureProvider } = require('infrablockchain-js/dist/infrablockchain-js-jssig');      // development only
const fetch = require('node-fetch');                                    // node only; not needed in browsers
const { TextEncoder, TextDecoder } = require('util');                   // node only; native TextEncoder/Decoder
```

## Basic Usage

### Signature Provider

The Signature Provider holds private keys and is responsible for signing transactions.

***Using the JsSignatureProvider in the browser is not secure and should only be used for development purposes. Use a secure vault outside of the context of the webpage to ensure security when signing transactions in production***

```js
const defaultPrivateKey = "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"; // bob
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
```

### JSON-RPC

Open a connection to JSON-RPC, include `fetch` when on Node.js.
```js
const rpc = new JsonRpc('http://127.0.0.1:8888', { fetch });
```

A new chain API that infrablockchain has is also implemented in `infrablockchain-js`.
```js
    const systemTokenBalance = await rpc.get_system_token_balance("systoken.a");
    const systemTokenList = await rpc.get_system_token_list(true);
    const tokenBalance = await rpc.get_token_balance("systoken.a", "systoken.a");
    const tokenInfo = await rpc.get_token_info("systoken.a");
    const txVoteReceiverList = await rpc.get_top_tx_vote_receiver_list();
    const txVoteStat = await rpc.get_tx_vote_stat_for_account("producer.a");
    const txFeeItem = await rpc.get_txfee_item("", "");
    const txFeeList = await rpc.get_txfee_list();
```


### API

Include textDecoder and textEncoder when using in Node. You may exclude these when running in a browser since most modern browsers now natively support these. If your browser does not support these (https://caniuse.com/#feat=textencoder), then you can import them as a dependency through the following deprecated npm package: https://www.npmjs.com/package/text-encoding
```js
const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
```

### Sending a transaction

`transact()` is used to sign and push transactions onto the blockchain with an optional configuration object parameter.  This parameter can override the default value of `broadcast: true`, and can be used to fill TAPOS fields given `expireSeconds` and either `blocksBehind` or `useLastIrreversible`.  Given no configuration options, transactions are expected to be unpacked with TAPOS fields (`expiration`, `ref_block_num`, `ref_block_prefix`) and will automatically be broadcast onto the chain.

also with `transaction_extensions` parameter can be set txfee-payer or trx-votes

```js
(async () => {
  const result = await api.transact({
    transaction_extensions: [
      [
        10, // txfee-payer
        encodeName("systoken.b")
      ],
      [
        11, // trx-vote
        encodeName("systoken.b")
      ]
    ],
    actions: [{
      account: 'eosio.token',
      name: 'transfer',
      authorization: [{
        actor: 'useraaaaaaaa',
        permission: 'active',
      }],
      data: {
        from: 'useraaaaaaaa',
        to: 'useraaaaaaab',
        quantity: '0.0001 SYS',
        memo: '',
      },
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  });
  console.dir(result);
})();
```

### Error handling

use `RpcError` for handling RPC Errors
```js
...
try {
  const result = await api.transact({
  ...
} catch (e) {
  console.log('\nCaught exception: ' + e);
  if (e instanceof RpcError)
    console.log(JSON.stringify(e.json, null, 2));
}
...
```

## Contributing

[Contributing Guide](./CONTRIBUTING.md)

[Code of Conduct](./CONTRIBUTING.md#conduct)

## License

[MIT](./LICENSE)

## Important

See [LICENSE](./LICENSE) for copyright and license terms.

All repositories and other materials are provided subject to the terms of this [IMPORTANT](./IMPORTANT.md) notice and you must familiarize yourself with its terms.  The notice contains important information, limitations and restrictions relating to our software, publications, trademarks, third-party resources, and forward-looking statements.  By accessing any of our repositories and other materials, you accept and agree to the terms of the notice.
