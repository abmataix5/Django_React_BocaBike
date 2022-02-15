describe("Nuestro primer test usando cypress", () => {

    it("Visitar la página principal del proyecto", () =>{

        cy.visit("http://localhost:3000/stations")
        cy.contains("Todas nuestras estaciones")
    })

})