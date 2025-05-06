const dummyCatalog = [
    { id: 1, name: "Toyota Avanza", price: 250000000 },
    { id: 2, name: "Honda Brio", price: 180000000 },
    { id: 3, name: "Suzuki Ertiga", price: 220000000 },
];

function Catalog() {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Katalog Kendaraan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dummyCatalog.map((car) => (
                    <div key={car.id} className="border p-4 rounded shadow">
                        <h3 className="text-lg font-medium">{car.name}</h3>
                        <p className="text-sm">Harga: Rp {car.price.toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalog;