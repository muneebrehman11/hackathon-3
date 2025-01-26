describe('Cart Functionality', () => {
    it('should add a product to the cart', () => {
      cy.visit('/product/1') // Visit a product page
      cy.get('.add-to-cart').click() // Click the add-to-cart button
      cy.get('.cart').click() // Open the cart
      cy.get('.cart-item').should('have.length', 1) // Check that the cart contains one item
    })
  
    it('should remove a product from the cart', () => {
      cy.visit('/product/1')
      cy.get('.add-to-cart').click()
      cy.get('.cart').click()
      cy.get('.remove-from-cart').click() // Remove the product from the cart
      cy.get('.cart-item').should('have.length', 0) // Ensure the cart is empty
    })
  })
  