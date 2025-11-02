'use client';
import ProductCard from './ProductCard';

export default function ProductList({ products, filters, addToCart }) {
    const filtered = products.filter((p) => 
        (!filters.price || p.price <= Number(filters.price)) &&
        (!filters.category ||p.category === filters.category)
    );

    return (
        <ul>
            {filtered.map((p) => (
                <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
        </ul>
    );
}
                
            


