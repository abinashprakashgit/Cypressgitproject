export class HomePom {

    home() {
        return cy.contains("Home")
    }

    name(){
        return cy.get("[class='form-group']>input[name='name']")
    }

    email(){
        return cy.get("[name='email']")
    }

    password(){
        return cy.get("#exampleInputPassword1")
    }

    checkBox(){
        return cy.get("#exampleCheck1")
    }

    genderMale(gender){
        return cy.get("#exampleFormControlSelect1").select(gender)
    }

    employmentStatus(){
        return cy.get("#inlineRadio1")
    }


    dateOfBirth(){
       return cy.get("[name='bday']")
    }

    submit(){
        return cy.get("[type='submit']")
    }

    validate(){
       return cy.get("h4>input[name='name']")
    }

    sucess(){
        return cy.get(".alert")
    }

}