'use client';

export default function ProductCard({ product, addToCart}) {
    const disabled = product.stock <= 0;
    return (
        <li className="p-3 border rounded mb-2 flex items-center gap-3">
            <div className="flex-1">
                <div className="font-medium">{product.name}</div>
                <div>${product.price}. {product.category} . Stock: {product.stock}</div>
                </div>
                <button
                    disabled={disabled}
                    onClick={() => addToCart(product)}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    {disabled ? 'Out of Stock' : 'Add'}
                </button>
            </li>
    ); 
}

      