To get a system token list call `get_system_token_list` on the rpc object passing in the token_meta as a function argument.
```javascript
(async () => {
  await rpc.get_system_token_list(true) // should return with metadata of token
  await rpc.get_system_token_list(false) // should return without metadata of token
})();
```

The account info is returned as JSON.
```json
// with metadata
{
   "count":2,
   "tokens":[
      {
         "id":"systoken.a",
         "weight":10000,
         "sym":"4,DUSD",
         "total_supply":"31700.0000 DUSD",
         "url":"http://sysdepo-a.org",
         "desc":"system depository a"
      },
      {
         "id":"systoken.b",
         "weight":10000,
         "sym":"4,DUSDB",
         "total_supply":"3000.0000 DUSDB",
         "url":"http://sysdepo-b.org",
         "desc":"system depository b"
      }
   ]
}

// without metadata
{
   "count":2,
   "tokens":[
      {
         "id":"systoken.a",
         "weight":10000
      },
      {
         "id":"systoken.b",
         "weight":10000
      }
   ]
}
```