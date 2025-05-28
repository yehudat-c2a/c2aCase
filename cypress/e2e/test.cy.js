import cart from '../src/cart'
import selectItems from '../src/selectItems'
import userLogin  from '../src/userLogin'

describe('Test buy phone and laptop on store', () => {
  before(()=>
  {
    cy.visit('/')
    cy.viewport('macbook-16')
  })
  
  it('login', () => {
    userLogin.login()
    })

  it('select phone', () => {
    selectItems.addCheapestPhone()
  })

  it ('select laptop', () =>{
    selectItems.addExpensiveLaptop()
  })

  it ('select monitor', () =>{
    selectItems.addMonitor()
  })

  it ('delete phone and go to checkout', () => {
    cart.deleteByTitle("Sony xperia z5")
    cart.verifyDeleteByTitle("Sony xperia z5")
  })

  it ('go to checkout', () => {
    cart.placeOrder()
    cart.verifyPurchase()
  })
})

      