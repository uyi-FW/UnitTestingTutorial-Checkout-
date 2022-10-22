const chai = require("chai");
// var expect = chai.expect;
var assert = chai.assert;

const Checkout = require("../checkout");

// testing ASSERT vs EXPECT

//check for string
// it("Is String(Expect)", function () {
//   expect("foo").to.be.a("string");
// });

it("Is String(Assert)", function () {
  assert.typeOf("foo", "string");
});

//check for equality
// it("Is True(Expect)", function () {
//   expect(1).to.equal(1);
// });

it("Is True(Assert)", function () {
  assert.equal(1, 1);
});

//CHECKOUT
// meet the requirements below
// 1 - Can create an instance of the Checkout class
// 2 - Can add an item price
// 3 - Can add an item
// 4 - Can calculate the current total
// 5 - Can add multiple items and get correct total
// 6 - Can add discount rules
// 7 - Can apply discount rules to the total
// 8 - Exception is thrown for item added without price

// REQUIREMENT 1
// it('Can instantiate checkout', function() {
//   var checkout = new Checkout()
// })

// REQUIREMENT 2
// it("Can add item price", function () {
//   checkout.addItemPrice("a", 1);
// });

// REQUIREMENT 3
// it("Can add item", function () {
//   checkout.addItemPrice("a", 1);
//   checkout.addItem("a");
// });

// REQUIREMENT 1, 2 & 3
beforeEach(function () {
  checkout = new Checkout();
  checkout.addItemPrice("a", 1);
  checkout.addItemPrice("b", 2);
});

// REQUIREMENT 4
it("Can calculate the current total", function () {
  checkout.addItem("a");
  assert.equal(checkout.calculateTotal(), 1);
});

// REQUIREMENT 5
it("Can add multiple items and get correct total", function () {
  checkout.addItem("a");
  checkout.addItem("b");
  assert.equal(checkout.calculateTotal(), 3);
  // expect(checkout.calculateTotal()).to.equal(3);
});

// REQUIREMENT 6
it("Can add discount rules", function () {
  checkout.addDiscount("a", 3, 2);
});

// REQUIREMENT 7
it("Can apply discount rules to the total", function () {
  checkout.addDiscount("a", 3, 2);
  checkout.addItem("a");
  checkout.addItem("a");
  checkout.addItem("a");
  assert.equal(checkout.calculateTotal(), 2);
});

// REQUIREMENT 8
it("Exception is thrown for item added without price", function () {
  assert.throws(function() {checkout.addItem('c')})
  // expect(function(){checkout.addItem('c')}).to.throw()
});