To import `infrablockchain-js` using [ES module syntax](https://en.wikipedia.org/wiki/ECMAScript) the following code is provided.
```javascript
import { Api, JsonRpc } from 'infrablockchain-js';
import { JsSignatureProvider } from 'infrablockchain-js/dist/infrablockchain-js-jssig';  // development only

const privateKeys = [privateKey1];

const signatureProvider = new JsSignatureProvider(privateKeys);
const rpc = new JsonRpc('http://127.0.0.1:8888'); //required to read blockchain state
const api = new Api({ rpc, signatureProvider }); //required to submit transactions
```