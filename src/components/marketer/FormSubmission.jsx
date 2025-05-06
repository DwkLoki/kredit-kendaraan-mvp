import { useEffect, useState } from "react";

function FormSubmission() {
    const [submissions, setSubmissions] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editData, setEditData] = useState({
        pekerjaan: "",
        penghasilan: "",
        ktp: "",
    });

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("submissions") || "[]");
        setSubmissions(data);
    }, []);

    const handleEditChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const handleSave = (index) => {
        const updated = [...submissions];
        updated[index] = {
            ...updated[index],
            ...editData,
            status: "verified",
        };
        localStorage.setItem("submissions", JSON.stringify(updated));

        // Simpan juga ke approval list
        const approval = JSON.parse(localStorage.getItem("approvals") || "[]");
        approval.push(updated[index]);
        localStorage.setItem("approvals", JSON.stringify(approval));

        setSubmissions(updated);
        setEditingIndex(null);
        setEditData({ pekerjaan: "", penghasilan: "", ktp: "" });
    };

    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Pengajuan Kredit Masuk</h2>
            {submissions.length === 0 ? (
                <p className="text-gray-500">Belum ada pengajuan.</p>
            ) : (
                <ul className="space-y-4">
                    {submissions.map((s, idx) => (
                        <li key={idx} className="border p-4 rounded shadow">
                            <p><strong>Nama:</strong> {s.name}</p>
                            <p><strong>Telepon:</strong> {s.phone}</p>
                            <p><strong>Kendaraan:</strong> {s.vehicle}</p>

                            {s.status === "verified" && (
                                <p className="text-green-600 text-sm font-medium">✓ Sudah diverifikasi & dikirim ke approval</p>
                            )}

                            {editingIndex === idx ? (
                                <div className="mt-2 space-y-2">
                                    <input
                                        name="pekerjaan"
                                        placeholder="Pekerjaan"
                                        value={editData.pekerjaan}
                                        onChange={handleEditChange}
                                        className="w-full border p-1"
                                    />
                                    <input
                                        name="penghasilan"
                                        placeholder="Penghasilan"
                                        value={editData.penghasilan}
                                        onChange={handleEditChange}
                                        className="w-full border p-1"
                                    />
                                    <input
                                        name="ktp"
                                        placeholder="No. KTP"
                                        value={editData.ktp}
                                        onChange={handleEditChange}
                                        className="w-full border p-1"
                                    />
                                    <button
                                        onClick={() => handleSave(idx)}
                                        className="bg-blue-600 text-white px-3 py-1 rounded"
                                    >
                                        Kirim ke Approval
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setEditingIndex(idx)}
                                    className="mt-2 bg-gray-800 text-white px-3 py-1 rounded"
                                >
                                    Lengkapi
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FormSubmission;
