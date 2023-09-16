///<reference types="cypress"/>



describe("Practice all the element",()=>{

    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
    })


    it("RadioButtom",()=>{

       cy.get("#radio-btn-example>fieldset>legend").should("contain","Radio")

       cy.get("#radio-btn-example>fieldset>label[for='radio1']>input").check()

       cy.wait(2000)

       cy.get("#radio-btn-example>fieldset>label>input").check()
       
    })


    it("dropDown",()=>{
        cy.get("#dropdown-class-example").select("option1")
        cy.get("#dropdown-class-example").select("Option3")

        cy.get("input#autocomplete").type("ind")
        cy.get("#ui-id-1>li>div").each(($el,index,$list)=>{
            if($el.text()=='India'){
                cy.wrap($el).click()
            }
        })
    })


    it("Checkbox",()=>{
        cy.get("#checkBoxOption1").check()
        cy.get("#checkbox-example>fieldset>label>input").check()

        cy.wait(5000)

        cy.get("#checkbox-example>fieldset>label>input").uncheck()
    })


    it("switchingWindow",()=>{
        cy.get("#opentab").invoke("removeAttr","target").click()
        cy.origin("https://www.qaclickacademy.com/",()=>{
            cy.get("[class='button float-left']>a").should("contain.text","Access")
        })
        
    })

    it("Alert",()=>{
        cy.get("[placeholder='Enter Your Name']").type("Abinash")
        cy.get("#alertbtn").click()
        cy.on("window:alert",(x)=>{
           expect(x).contains("Abinash")
        })

        cy.wait(5000)

        cy.get("[placeholder='Enter Your Name']").type("Abinash")
        cy.get("#confirmbtn").click()
        cy.on("window:alert",()=>false)

    })


    it("isDisplayed",()=>{
        cy.get("#displayed-text").should('be.enabled')
    })



    it("MouseAction",()=>{
        cy.get("div.mouse-hover-content").invoke('show')
       // cy.get("div.mouse-hover-content").trigger('mouseover')
        cy.contains("Top").click()
        cy.url().should('include','top')
        
    })

    

    
    it("Table",()=>{
        cy.get("[name='courses']>tbody>tr>td:nth-child(2)").each(($el,index,$list)=>{
           if($el.text().includes("REST API")){
          let result = cy.get("[name='courses']>tbody>tr>td:nth-child(2)").eq(index).next().then((x)=>{
            let result =x.text()
            cy.log(result)
          })
            
           }
        })
    })


    it("Table2",()=>{
        cy.get("[name='courses']>tbody>tr").then((el)=>{
           let length1 = el.length
           
           for(let i=2;i<length1;i++){

            cy.get("[name='courses']>tbody>tr:nth-child("+i+")").within(()=>{
               cy.get("td").then((data)=>{
                    cy.log(data.text())
                })

            })
            
           }

        })

    })


    it("AddTable",()=>{
        let totalnumber=0;

        cy.get("[class='tableFixHead']>table>tbody>tr>td:nth-child(4)").each((rate)=>{
            totalnumber =totalnumber+parseInt(rate.text()) 
        })

        cy.then(()=>{
            cy.log(totalnumber)
        })
        
    })



    it("IsDisplayed",()=>{
        //cy.get("#hide-textbox").click()
       

        cy.get("#displayed-text").should("be.enabled")
            cy.get("#displayed-text").type("Hello world")
        
    })


    it("frameDemo",()=>{
        cy.frameLoaded("#courses-iframe")
        cy.iframe().contains("Mentorship").first().click()
    })









})