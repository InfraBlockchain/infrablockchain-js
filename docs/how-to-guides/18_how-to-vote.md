To vote for a block produder, [submit a transaction](01_how-to-submit-a-transaction.md) with `transaction_extensions` parameter

In the example shown below `useraaaaaaaa` votes for producers `userbbbbbbbb`
```javascript
(async () => {
  await api.transact({
    transaction_extensions: [
      [
        11, // trx-vote
        encodeName("userbbbbbbbb")
      ]
    ],
    actions: [{
      account: 'useraaaaaaaa',
      name: 'transfer',
      authorization: [{
        actor: 'useraaaaaaaa',
        permission: 'active',
      }],
      data: {
        from: 'useraaaaaaaa',
        to: 'eosio',
        quantity: '0.0001 DUSD',
        memo: "?"
      },
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
    broadcast: true,
    sign: true
  });
})();
```