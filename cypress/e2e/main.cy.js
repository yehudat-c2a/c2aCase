import cart from './cart'
import selectItems from './selectItems'
import userLogin  from './userLogin'
import { assert, expect } from 'chai'
describe('Test buy phone and laptop on store', () => {
  before(()=>
  {
    cy.visit('/')
    cy.viewport('macbook-16')
  })
  it ('everything together', () => {
      cy.log("started")
      selectItems.addCheapestPhone()
      selectItems.addExpensiveLaptop()
      selectItems.addMonitor()
      //I didnt success to do transfer the data between the functions and class because synchronc problems and i haven't enough time. so i use Const parameter
      //Also using those commands one after seconds immediatly may cause problems, i didn't success to exolve the synchronic problems in the time so i leave it that way
      cart.deleteByTitle("Sony xperia z5")
      cart.verifyDeleteByTitle("Sony xperia z5")
      cart.placeOrder()
      cart.verifyPurchase()
  })
  
  it('login', () => {
    cy.visit('/')
    userLogin.login()
    })
/*
    when i switch it to difference "its", it goes to blank page between them, and if i visit ('/) the cart and selections disappear, i havnt enough time so i choose to 
    do all the shopping test in one "it"
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
    cart.deleteByTitle("Samsung galaxy s6")
    cart.placeOrder()
  })*/
})
