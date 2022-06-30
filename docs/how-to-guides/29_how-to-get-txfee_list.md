To get a action's transaction fee list call `get_txfee_list` on the rpc object passing in the code_lower_bound,code_upper_bound, limit as a function argument.

if call function without arguments return with default value `code_lower_bound = '', code_upper_bound = '', limit = 100`

```javascript
(async () => {
  await rpc.get_txfee_list();
})();
```

The account info is returned as JSON.
```json
{
   "tx_fee_list":[
      {
         "code":"",
         "action":"",
         "value":1000,
         "fee_type":1
      },
      {
         "code":"",
         "action":"issue",
         "value":50,
         "fee_type":1
      },
      {
         "code":"",
         "action":"retire",
         "value":200,
         "fee_type":1
      },
      {
         "code":"",
         "action":"transfer",
         "value":100,
         "fee_type":1
      },
      {
         "code":"eosio",
         "action":"linkauth",
         "value":1500,
         "fee_type":1
      },
      {
         "code":"eosio",
         "action":"newaccount",
         "value":500,
         "fee_type":1
      },
      {
         "code":"eosio",
         "action":"updateauth",
         "value":1000,
         "fee_type":1
      }
   ],
   "more":false
}
```