import * as React from 'react';

function createData(itemID, itemName, MaintainDATE, MaintainBy, Quantity) {
  return { itemID, itemName, MaintainDATE, MaintainBy, Quantity };
}

const rows = [
  createData('01', 'Feeds - small(Kg)', '', '', 500),
  createData('02', 'Feeding Machine', '2025/04/01', 'Mr.John', 3),
  createData('03', 'Feeding Machine', '2025/04/01', 'Mr.John', 2),
];

export default function BasicTable() {
  return (
    <div className="w-full p-3 sm:p-4 md:p-6 bg-gray-50">
      {/* Universal Table for All Devices */}
      <div className="bg-white rounded-lg shadow-sm overflow-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Item ID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Item Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Maintain Date</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Maintain By</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Quantity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((row, index) => (
              <tr key={row.itemID} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.itemID}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.itemName}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.MaintainDATE || '-'}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.MaintainBy || '-'}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.Quantity}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={5} className="px-4 py-4 text-center">
                <button className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors">
                  See All
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
