To get a specific account's transaction vote stat call `get_tx_vote_stat_for_account` on the rpc object passing in the account name as a function argument.
```javascript
(async () => {
  await rpc.get_tx_vote_stat_for_account("producer.a");
})();
```

The account info is returned as JSON.
```json
{
   "account":"producer.a",
   "tx_votes_weighted":"6815.59494994622400554",
   "tx_votes":300
}
```