import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import CommentBox from './components/comment-box.js'

import { createClient } from '@commercetools/sdk-client';
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth';
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http';

// import { createQueueMiddleware } from '@commercetools/sdk-middleware-queue'
// import { createUserAgentMiddleware } from '@commercetools/sdk-middleware-user-agent'
// import { createRequestBuilder } from '@commercetools/api-request-builder'
// import { createSyncProducts } from '@commercetools/sync-actions'

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
  uri:'/down-under/product-projections?token=GSy9xD4iy41w1wPOR2LiHNlgbwJQG8I5',
  method: 'GET',
  headers: {Authorization: 'Bearer GSy9xD4iy41w1wPOR2LiHNlgbwJQG8I5'},
}

client.execute(request)
      .then((response) => {
        const products = response.body.results;
        console.log(products);
        console.log(products[0].name.en);

      }
);

jQuery(function() {
  ReactDOM.render(
    // <ProductBox />,
    <CommentBox />,
    document.getElementById('comment-box'),
    function() {
      console.timeEnd('react-app')
    }
  );
})
