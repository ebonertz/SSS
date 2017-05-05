import React from 'react';
import { createClient } from '@commercetools/sdk-client';
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth';
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http';
// import jQuery from 'jquery';
// import { createQueueMiddleware } from '@commercetools/sdk-middleware-queue'
// import { createUserAgentMiddleware } from '@commercetools/sdk-middleware-user-agent'
// import { createRequestBuilder } from '@commercetools/api-request-builder'
// import { createSyncProducts } from '@commercetools/sync-actions'

export default class ProductBox extends React.Component {

  constructor() {
    super();

    this.state = {
      showProducts: true,
      description: []
    };
  }

  componentWillMount() {
    this._getProducts ();
  }

  render() {
    const products = this._getProducts();
    return(
      <div className="products-container">
        <h2 className="product-title"> The Gems </h2>
        <div> {products} </div>
      </div>
    )
  }

  _getProducts() {
    const client = createClient({
      middlewares: [
        createAuthMiddlewareForClientCredentialsFlow({
          host: 'https://auth.sphere.io',
          projectKey: 'down-under',
          credentials: {
            clientId: 'mKPAWp0Yy2-CMnXTGCykFbqr',
            clientSecret: 'DjItbv4ZQvMiSQG5PqWOQCL9uTGh4pSZ',
          },
        }),
          createHttpMiddleware({ host: 'https://api.sphere.io' }),
      ],
    });

    const request = {
      uri:'/down-under/product-projections?token=bWW5xYFWY4MgK9Afgq5qNKJ48cFQfcf-',
      method: 'GET',
      headers: {Authorization: 'Bearer bWW5xYFWY4MgK9Afgq5qNKJ48cFQfcf-'},
    }

    client.execute(request)
          .then((response) => {
            const products = response.body.results;
            console.log(products);
            console.log(products[0].name.en);
            // this.setState({ products })
          }
    );
  }
}

// _getProducts() {
//   return this.state.products.map((product) => {
//     return <Product
//             {...product} />
//             //  name={product.name.en}
//             //  id={product.id}
//             //  description={product.description}
//             //  body={product.body}
//   });
// }
