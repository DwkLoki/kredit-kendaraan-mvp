import { useState } from "react";

function CreditForm() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        vehicle: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simpan ke localStorage
        const existing = JSON.parse(localStorage.getItem("submissions") || "[]");
        const updated = [...existing, form];
        localStorage.setItem("submissions", JSON.stringify(updated));

        alert("Pengajuan berhasil dikirim!");
        setForm({ name: "", phone: "", vehicle: "" });
    };

    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Form Pengajuan Kredit</h2>
            <form className="flex flex-col gap-3 max-w-md" onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Nama Lengkap"
                    className="border p-2 rounded"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    name="phone"
                    placeholder="Nomor Telepon"
                    className="border p-2 rounded"
                    value={form.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    name="vehicle"
                    placeholder="Kendaraan yang Diinginkan"
                    className="border p-2 rounded"
                    value={form.vehicle}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="bg-green-600 text-white p-2 rounded">
                    Ajukan Kredit
                </button>
            </form>
        </div>
    );
}

export default CreditForm;