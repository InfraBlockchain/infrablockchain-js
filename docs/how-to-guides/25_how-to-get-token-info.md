To get a specific token's information call `get_token_info` on the rpc object passing in the token id as a function argument.
```javascript
(async () => {
  await rpc.get_token_info('systoken.a');
})();
```

The account info is returned as JSON.
```json
{
   "token_id":"systoken.a",
   "sym":"4,DUSD",
   "total_supply":"31700.0000 DUSD",
   "url":"http://sysdepo-a.org",
   "desc":"system depository a"
}
```