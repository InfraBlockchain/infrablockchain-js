To import `infrablockchain-js` using commonjs syntax follow the code below.
```javascript
const { Api, JsonRpc } = require('infrablockchain-js');
const { JsSignatureProvider } = require('infrablockchain-js/dist/infrablockchain-js-jssig');  // development only
const fetch = require('node-fetch'); //node only
const { TextDecoder, TextEncoder } = require('util'); //node only

const privateKeys = [privateKey1];

const signatureProvider = new JsSignatureProvider(privateKeys);
const rpc = new JsonRpc('http://127.0.0.1:8888', { fetch }); //required to read blockchain state
const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() }); //required to submit transactions
```