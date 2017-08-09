const expect = require('chai').expect
const convToKg = require('..').convToKg
const convToLb = require('..').convToLb


describe('#conversorKgLb', function(){
  it('Convertir Libras a Kilogramos', function() {
    const kg = convToKg(1)
    expect(kg[0]).to.equal("0.454")
  })
  it('Convertir Kilogramo a Libra', function() {
    const lb = convToLb(1)
    expect(lb[0]).to.equal("2.205")
  })
  it('Convertir mas Libras a Kilogramos', function() {
    const kg = convToKg(2, 3)
    const expected = ["0.907", "1.361"]
    kg.forEach((kg, index) => expect(kg).to.equal(expected[index]))
  })
  it('Convertir mas Kilogramos a Libras', function() {
    const lb = convToLb(2, 3)
    const expected = ["4.409", "6.614"]
    lb.forEach((lb, index) => expect(lb).to.equal(expected[index]) )
  })
})
