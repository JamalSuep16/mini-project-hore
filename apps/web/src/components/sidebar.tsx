// components/Sidebar.js
export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold">Event Dashboard</h2>
      <ul className="mt-4">
        <li className="mb-2">Events</li>
        <li className="mb-2">Attendees</li>
        <li className="mb-2">Transactions</li>
        <li className="mb-2">Reports</li>
      </ul>
    </div>
  );
}
