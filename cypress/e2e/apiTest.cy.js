describe('Caramel API - Admin tool ', () => {
  it('Caramel - Valid Log in', () => {
    cy.api({
      method: 'GET',
      url: '/users/login',
      failOnStatusCode: false,
      body: {
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      });
    });
  });