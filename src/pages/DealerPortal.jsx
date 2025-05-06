import Catalog from "../components/dealer/Catalog";
import CreditSimulation from "../components/dealer/CreditSimulation";
import CreditForm from "../components/dealer/CreditForm";

export default function DealerPortal() {
    return (
        <div className="p-6 font-poppins">
            <h1 className="text-2xl font-bold mb-4">Dealer Portal</h1>
            <Catalog />
            <CreditSimulation />
            <CreditForm />
        </div>
    );
}