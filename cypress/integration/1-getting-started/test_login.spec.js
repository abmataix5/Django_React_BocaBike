describe('Login Tests', function () {
    it('Successfull login', function () {

        /* Para acceder a la pagina de login del proyecto */

        cy.visit('http://localhost:3000/login')

        /* Para buscar los inputs del login e introducit la información necesaria */

        cy.get('input[id="inputEmail"]')
        .type('admin@gmail.com')

        cy.get('input[id="inputPassword"]')
        .type('ola123')

        /* Click boton login */

        cy.get('button[id="btn"]')
        .click().should(() =>{

            expect(localStorage.getItem('id_token'))

        })


        /* Comprovar que se ha generado el item que verifica el inicio de sesion */

        cy.get('ul[id="userLoguedItem"]')


        /* Log Out */

        cy.get('button[id="logOut"]') .click()
       



    })
})