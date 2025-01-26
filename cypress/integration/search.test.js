describe('Search Bar Functionality', () => {
    it('should show search results for a valid product', () => {
      cy.visit('/')
      cy.get('.search-bar').type('Laptop') // Type a search query
      cy.get('.search-results').should('have.length.greaterThan', 0) // Check that search results appear
    })
  
    it('should show no results for an invalid product', () => {
      cy.visit('/')
      cy.get('.search-bar').type('NonexistentProduct') // Type an invalid search query
      cy.get('.search-results').should('have.length', 0) // Ensure no search results are shown
    })
  })
  