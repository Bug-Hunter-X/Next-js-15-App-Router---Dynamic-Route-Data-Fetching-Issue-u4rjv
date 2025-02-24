```javascript
// pages/product/[productId].js

import { Suspense } from 'react';

export default async function ProductPage({params}) {
  const productId = params.productId;

  const res = await fetch(`https://api.example.com/products/${productId}`);
  const product = await res.json();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
```