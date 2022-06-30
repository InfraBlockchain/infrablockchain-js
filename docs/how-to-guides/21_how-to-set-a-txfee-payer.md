To set a transaction fee payer, [submit a transaction](01_how-to-submit-a-transaction.md) with `transaction_extensions` parameter

In the example shown below `useraaaaaaaa` submit a transaction with setting fee payer `userbbbbbbbb`

```javascript
(async () => {
  await api.transact({
    transaction_extensions: [
      [
        10, // txfee-payer
        encodeName("userbbbbbbbb")
      ],
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