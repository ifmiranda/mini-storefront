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


