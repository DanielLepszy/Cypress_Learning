import BaseFactory from "./baseFactory";

class TestBase extends BaseFactory {
    
    visit() {
        cy.visit('http://localhost:3000/')
    }
    open(choosenElementExample) {
        cy.get(choosenElementExample).click()
    }
    // constructor() {
    //     this.mainPage = new MainPage()
    //     this.example1Page = new Example1Page()
    // }
}
export default TestBase