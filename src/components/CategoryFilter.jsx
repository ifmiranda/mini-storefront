'use client'; 

export default function CategoryFilter({ value, onChange }) {
    return (
        <label className="mr-4">
            Category:{''}
            <select value={value} onChange={(e) => onChange(e.target.value)}>   
                <option value="">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Books">Books</option>
            </select>
        </label>
    );
}

    