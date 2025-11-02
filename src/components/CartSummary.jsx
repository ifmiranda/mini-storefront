'use client';

export default function CartSummary({cart}) {
    const count = cart.length;
    const total = cart.reduce((sum, p) => sum + Number(p.price || 0), 0); 

    return (
        <div className="p-4 border rounded mb-4">
            <h2 className="font-bold mb-2">Cart</h2>
            <p>Items: {count}</p> 
            <p>Total: ${total.toFixed(2)}</p>
            {/* optional buttons*/}
            {/* <button onClick={...}>Decrement last</button>
            <button onClick{...}>Rest</button> */}
        </div>
    );
}