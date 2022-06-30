To get a specific account's system token balance call `get_system_token_balance` on the rpc object passing in the account name as a function argument.
```javascript
(async () => {
  await rpc.get_system_token_balance('alice');
})();
```

The account info is returned as JSON.
```json
{
  "total": "487.8550 SYS",
  "sys_tokens": [ { "t": "systoken.a", "qty": "487.8550 DUSD" } ]
}
```