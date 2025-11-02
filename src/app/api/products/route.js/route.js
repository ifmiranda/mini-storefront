export async function GET(){
    const products = [
        {id: 'p1', name:'Laptop', price: 1200, category:'Electronics', stock: 5 },
        {id: 'p2', name:'Desk Chair', price: 150, category:'Furniture', stock: 3 }, 
        {id: 'p3', name:'Phone', price:900, category:'Electronics', stock: 4 },
        {id: 'p4',  name:'Book: Twilight', price:40, category:'Books', stock: 10 },
        {id: 'p5', name:'Headphones', price:199, category:'Electronics', stock: 8}, 
        {id: 'p6', name:'Sofa', price:700, category:'Furniture', stock: 6}, 
        {id: 'p7', name:'Lamp', price:45, category:'Furniture', stock:7}, 
        {id: 'p8', name:'Notebook', price:9, category: 'Books', stock: 20 },     
    ];
    return Response.json(products);
}