var braintree = require("braintree");

//environment configure
var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "z3xz6dncq9ypzymf",
  publicKey: "pnhhgg9zd5tgq34h",
  privateKey: "37b776215d3f17638c1a5190c4296827"
});

//send a client token
app.get("/client_token", function (req, res) {
    gateway.clientToken.generate({}, function (err, response) {
      res.send(response.clientToken);
    });
  });

//receive payment
app.post("/checkout", function (req, res) {
    var nonceFromTheClient = req.body.payment_method_nonce;
    // Use payment method nonce here
  });

//creates a transaction
gateway.transaction.sale({
    amount: "10.00",
    paymentMethodNonce: fake-valid-no-billing-address-nonce,
    options: {
      submitForSettlement: true
    }
  }, function (err, result) {
  });

  