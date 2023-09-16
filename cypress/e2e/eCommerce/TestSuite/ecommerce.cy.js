
import {HomePom} from "../pageObjectModel/HomePom.js"

describe("Ecommerce",()=>{

    beforeEach(()=>{
        cy.visit(Cypress.env("url")+"/angularpractice/")

    })

    let phone;
    before(function(){
        cy.fixture("homedata").then(function(data){
            this.data=data;
        })

        cy.fixture("phoneList").then((mphone)=>{
            phone=mphone;
        })

    })

    it("HomePage",function(){
        const home = new HomePom()
        home.home().click()
        home.name().type(Cypress.env("username"))
        home.email().type(this.data.email)
        home.password().type(Cypress.env("password"))
        home.checkBox().check()
        home.genderMale(this.data.gender)
        home.employmentStatus().check()
        home.dateOfBirth().type(this.data.Dob)
        home.validate().should('have.value',this.data.name)
        home.submit().click()
        home.sucess().should('contain.text',this.data.message)
        
    })


    it("Shop",()=>{
        cy.get("[href='/angularpractice/shop']").click()

        cy.then(()=>{
            phone.phones.forEach((sphone)=>{
                cy.selectProduct(sphone)
                
            })
        })

        cy.get("[class='nav-link btn btn-primary']").click()

        cy.get("h4.media-heading>a").each((model)=>{
           let pmodel =  model.text()
           phone.phones.forEach((dmodel)=>{
            if(pmodel.includes(dmodel)){
                cy.log(dmodel)
            }
           })
        })

        let sum=0;
        cy.get("[class='table table-hover']>tbody>tr>td:nth-child(4)>strong").each((price)=>{
            let value = price.text().substring(3).trim()
            sum=sum+Number(value)
        })

       
            cy.get("h3>strong").then((txt)=>{
                let total = txt.text().substring(3).trim()
                expect(Number(total)).to.eql(sum)
            })
        
       cy.get("[class='btn btn-success']").click()

       cy.get("#country").type("india")
      // cy.pause()
        cy.wait(6000)
        cy.get("[class='suggestions']>ul>li>a").each((loc)=>{

            if(cy.wrap(loc).should('have.text',"India")){
                cy.wrap(loc).click()
            }
        })

        cy.get("#checkbox2").click({force:true})
        cy.get("[type='submit']").click()

        cy.get("div.alert").should('contain.text','Thank you')
    })

 })