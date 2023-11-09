describe('Post - Test scenarios ', () => {
  it('Create a Hello World', () => {
    cy.api({
      method: 'POST',
      url: 'https://postman-echo.com/post',
      failOnStatusCode: false,
      body: {
        message: "Hello, World !"
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.json.message).to.eq("Hello, World !");
      expect(response.body.url).to.eq('https://postman-echo.com/post');

      });
    });
  });

  describe('Get - Test scenarios ', () => {
    it('Get a Pokemon list ', () => {
      cy.api({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/?limit=151',
        failOnStatusCode: false,

      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.count).to.be.a('number');
        expect(response.body.count).to.eq(1292);
        expect(response.body.next).to.eq('https://pokeapi.co/api/v2/pokemon/?offset=151&limit=151');
        expect(response.body.previous).to.eq(null);
  
        });
      });

      it('Get the first Pokemon ', () => {
        cy.api({
          method: 'GET',
          url: 'https://pokeapi.co/api/v2/pokemon/1',
          failOnStatusCode: false,
  
        }).then((response) => {
          expect(response.status).to.eq(200);
    
          });
        });

    // Test if the API handles requests for non-existing Pokemon correctly

    it('Get a non-existing Pokemon ', () => {
      cy.api({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/9999',
        failOnStatusCode: false,

      }).then((response) => {
        expect(response.status).to.eq(404);

        });
      });

    });