To get a specific action's transaction fee call `get_txfee_item` on the rpc object passing in the code and action as a function argument.
```javascript
(async () => {
  await rpc.get_txfee_item("", "");
})();
```

The account info is returned as JSON.
```json
{
   "value":1000,
   "fee_type":1
}
```