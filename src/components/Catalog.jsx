'use client'; 
import { useState, useEffect } from 'react'; 
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import CartSummary from './CartSummary'; 
import StatusMessage from './StatusMessage'; 

export default function Catalog() {
    const [products, setProducts] = useState([]); 
    const [filters, setFilters] = useState({ category: '', price: ''});
    const [cart, setCart] = useState([]);
    const [status, setStatus] = useState('loading'); 

    // Fetch Product from API 
    useEffect(() => {
        fetch('/api/products')
            .then(r => r.json())
            .then(data => {
                setProducts(data);
                setStatus('success');
            })
            .catch(() => setStatus('error'));
    }, []); }

    // Simulate stock updates 
useEffect(() => {
    const interval = setInterval(() => {
        setProducts(prev =>
            prev.map(p =>
                p.stock > 0 ? { ...p, stock: p.stock - 1 } : p 
            )
        );
    } , 10000); 
    return () => clearInterval(interval); 
}, []);  

const updateFilter = (k, v) => setFilters(prev => ({...prev, [k]: v})); 
const addToCart = product => setCart(prev => [...prev, product]); 


return ( 
    <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Mini Storefront</h1>

    <div className= "flex gap-4 mb-6">
        <CategoryFilter value={filters.category} onChange={v => updateFilter('category', v)} />
        <PriceFilter value={filters.price} onChange={v => updateFilter('price', v)} /> 
    </div> 

    <CartSummary cart={cart}/> 
    {status === 'loading' && <StatusMessage text="Loading products..." />}
    {status === 'error' && <StatusMessage text="Error loading products" />}

{status === 'success' && (
    <ProductList products={products} filters={filters} addToCart={addToCart} />
)}
</div>
);

