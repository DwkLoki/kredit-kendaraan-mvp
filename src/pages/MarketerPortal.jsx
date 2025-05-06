import Dashboard from "../components/marketer/Dashboard";
import FormSubmission from "../components/marketer/FormSubmission";

export default function MarketerPortal() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Marketer Portal</h1>
            <Dashboard />
            <FormSubmission />
        </div>
    );
}
