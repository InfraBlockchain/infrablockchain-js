To get a specific account's token balance call `get_token_balance` on the rpc object passing in the account name and token id as a function argument.
```javascript
(async () => {
  await rpc.get_token_balance("systoken.a", "systoken.a");
})();
```

The account info is returned as string.
```text
"487.8550 DUSD"
```