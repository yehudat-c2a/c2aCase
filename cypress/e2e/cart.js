class cart{
    #userData = {
        Name:"alexander",
        Country:"Israel",
        City:"Nahalat Tzvi",
        CreditCard:"1040205010402050",
        Month:"12",
        Year:"25",
    }
    #elements ={
        deleteBtn: (title) =>{return cy.get(".success").contains(title).parent().find("a")},
        placeOrderBtn:() =>{return cy.get("button").contains(this.#strings.placeOrderBtn)}
    }
    #strings = {
        cartNav:"Cart",
        productRow:".success",
        placeOrderBtn:"Place Order",
        purchaseBtn:"Purchase",
        thankYou:"Thank you for"
    }
    #ids = {
        nav:".nav-link",
        name:"#name",
        country:"#country",
        city:"#city",
        creditCard:"#card",
        month:"#month",
        year:"#year",
        thankYouAlert:".sweet-alert"

    }
#fillOrderForm()
{
    cy.get(this.#ids.name).type(this.#userData.Name)
    cy.get(this.#ids.country).type(this.#userData.Country)
    cy.get(this.#ids.city).type(this.#userData.City)
    cy.get(this.#ids.creditCard).type(this.#userData.CreditCard)
    cy.get(this.#ids.month).type(this.#userData.Month)
    cy.get(this.#ids.year).type(this.#userData.Year)
    cy.get("button").contains(this.#strings.purchaseBtn).click()
}
#enterCart()
{
    cy.get(this.#ids.nav).contains(this.#strings.cartNav).click()
}
deleteByTitle(title)
{
    this.#enterCart()
    this.#elements.deleteBtn(title).click()
}
verifyDeleteByTitle(title)
{
    cy.get("body").contains(title).should("not.exist")
}
verifyPurchase()
{
    cy.get(this.#ids.thankYouAlert).contains(this.#strings.thankYou)
}
placeOrder()
{
    
    this.#elements.placeOrderBtn().scrollIntoView().click()
    this.#fillOrderForm()
}
}
module.exports = new cart()