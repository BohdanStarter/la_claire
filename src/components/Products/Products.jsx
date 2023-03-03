import React from 'react';
import Grid from '@material-ui/core';
import Product from './Product/Product';

const products = [
    { id: 1, name: 'bra1', description: 'Everyday bra.', price: '1000₴'},
    { id: 2, name: 'bra2', description: 'Weekly bra.', price: '1500₴'},
];

const Products = () => {
  <main>
    <Grid container justify = "center" spacing={4}>
        {products.map((product) => (
            <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
            </Grid>
        ))}
    </Grid>
  </main>
}

export default Products;
