import { useState } from "react";

function CreditSimulation() {
    const [price, setPrice] = useState("");
    const [tenor, setTenor] = useState("12");
    const [result, setResult] = useState(null);

    const calculateInstallment = () => {
        if (!price) return;
        const interest = 0.1; // bunga flat 10%
        const total = parseFloat(price) * (1 + interest);
        const monthly = total / parseInt(tenor);
        setResult(monthly.toFixed(2));
    };

    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Simulasi Kredit</h2>
            <div className="flex flex-col gap-2 max-w-md">
                <input
                    type="number"
                    placeholder="Harga Kendaraan"
                    className="border p-2 rounded"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <select
                    className="border p-2 rounded"
                    value={tenor}
                    onChange={(e) => setTenor(e.target.value)}
                >
                    <option value="12">12 bulan</option>
                    <option value="24">24 bulan</option>
                    <option value="36">36 bulan</option>
                </select>
                <button
                    onClick={calculateInstallment}
                    className="bg-blue-600 text-white p-2 rounded"
                >
                    Hitung Cicilan
                </button>
                {result && <p>Cicilan per bulan: Rp {Number(result).toLocaleString()}</p>}
            </div>
        </div>
    );
}

export default CreditSimulation;