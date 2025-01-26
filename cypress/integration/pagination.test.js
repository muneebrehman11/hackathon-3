describe('Pagination Functionality', () => {
    it('should load more products when the next page button is clicked', () => {
      cy.visit('/products') // Visit the products page
      cy.get('.pagination-next').click() // Click the next page button
      cy.url().should('include', 'page=2') // Check if the URL changes to page 2
      cy.get('.product').should('have.length.greaterThan', 0) // Ensure more products are loaded
    })
  
    it('should show the correct number of products per page', () => {
      cy.visit('/products') // Visit the products page
      cy.get('.product').should('have.length', 20) // Check if exactly 20 products are displayed per page (adjust this number as needed)
    })
  })
  