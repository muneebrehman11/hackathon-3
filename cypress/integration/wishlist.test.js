describe('Wishlist Functionality', () => {
    it('should add a product to the wishlist', () => {
      cy.visit('/product/1')
      cy.get('.add-to-wishlist').click() // Click the add-to-wishlist button
      cy.get('.wishlist').click() // Open the wishlist
      cy.get('.wishlist-item').should('have.length', 1) // Check if the product is added to the wishlist
    })
  
    it('should remove a product from the wishlist', () => {
      cy.visit('/product/1')
      cy.get('.add-to-wishlist').click()
      cy.get('.wishlist').click()
      cy.get('.remove-from-wishlist').click() // Remove product from wishlist
      cy.get('.wishlist-item').should('have.length', 0) // Ensure the wishlist is empty
    })
  })
  