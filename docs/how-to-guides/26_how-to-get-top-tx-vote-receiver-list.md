To get a top transaction vote receiver list call `get_top_tx_vote_receiver_list` on the rpc object passing in the offset and limit as a function argument.

if call function without arguments return with default value `offset = 0, limit = 30`

```javascript
(async () => {
  await rpc.get_top_tx_vote_receiver_list();
})();
```

The account info is returned as JSON.
```json
{
   "tx_vote_receiver_list":[
      {
         "account":"producer.c",
         "tx_votes_weighted":"36349.84243691926531028",
         "tx_votes":1600
      },
      {
         "account":"producer.g",
         "tx_votes_weighted":"10223.39017168970167404",
         "tx_votes":450
      },
      {
         "account":"producer.a",
         "tx_votes_weighted":"6815.59494994622400554",
         "tx_votes":300
      },
      {
         "account":"producer.f",
         "tx_votes_weighted":"5679.66100620731231174",
         "tx_votes":250
      },
      {
         "account":"producer.e",
         "tx_votes_weighted":"2271.86370648571210040",
         "tx_votes":100
      },
      {
         "account":"producer.d",
         "tx_votes_weighted":"2271.86368144984771789",
         "tx_votes":100
      },
      {
         "account":"producer.b",
         "tx_votes_weighted":"2271.86368144984771789",
         "tx_votes":100
      },
      {
         "account":"producer.j",
         "tx_votes_weighted":"1135.93184072492363157",
         "tx_votes":50
      },
      {
         "account":"producer.i",
         "tx_votes_weighted":"1135.93184072492363157",
         "tx_votes":50
      },
      {
         "account":"producer.h",
         "tx_votes_weighted":"1135.93184072492363157",
         "tx_votes":50
      }
   ],
   "total_tx_votes_weighted":"69291.87515632268332411",
   "total_tx_votes":3050,
   "more":false
}
```