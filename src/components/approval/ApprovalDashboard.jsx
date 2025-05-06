import { useEffect, useState } from "react";

function ApprovalDashboard() {
    const [approvals, setApprovals] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("approvals") || "[]");
        setApprovals(data);
    }, []);

    const handleApprove = (index) => {
        const updated = [...approvals];
        updated[index].status = "siap kontrak";

        // Simpan perubahan ke localStorage
        localStorage.setItem("approvals", JSON.stringify(updated));
        setApprovals(updated);
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Daftar Pengajuan Siap Disetujui</h2>
            {approvals.length === 0 ? (
                <p className="text-gray-500">Belum ada pengajuan masuk ke approval.</p>
            ) : (
                <ul className="space-y-4">
                    {approvals.map((a, idx) => (
                        <li key={idx} className="border rounded p-4 shadow">
                            <p><strong>Nama:</strong> {a.name}</p>
                            <p><strong>Telepon:</strong> {a.phone}</p>
                            <p><strong>Kendaraan:</strong> {a.vehicle}</p>
                            <p><strong>Pekerjaan:</strong> {a.pekerjaan || "-"}</p>
                            <p><strong>Penghasilan:</strong> {a.penghasilan || "-"}</p>
                            <p><strong>KTP:</strong> {a.ktp || "-"}</p>

                            {a.status === "siap kontrak" ? (
                                <p className="text-green-700 font-semibold mt-2">✓ Disetujui – Siap dibuatkan kontrak</p>
                            ) : (
                                <button
                                    onClick={() => handleApprove(idx)}
                                    className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
                                >
                                    Approve
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ApprovalDashboard;
