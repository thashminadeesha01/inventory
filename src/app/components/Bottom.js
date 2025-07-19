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
      {/* Desktop and Tablet Table */}
      <div className="hidden md:block bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                  Item ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                  Item Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                  Maintain Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                  Maintain By
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((row, index) => (
                <tr key={row.itemID} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {row.itemID}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {row.itemName}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {row.MaintainDATE || '-'}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {row.MaintainBy || '-'}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {row.Quantity}
                  </td>
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

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-3">
        {rows.map((row) => (
          <div key={row.itemID} className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Item ID</span>
                <p className="text-sm font-semibold text-gray-900">{row.itemID}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Quantity</span>
                <p className="text-sm font-semibold text-gray-900">{row.Quantity}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Item Name</span>
                <p className="text-sm text-gray-700">{row.itemName}</p>
              </div>
              
              {row.MaintainDATE && (
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Maintain Date</span>
                  <p className="text-sm text-gray-700">{row.MaintainDATE}</p>
                </div>
              )}
              
              {row.MaintainBy && (
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Maintain By</span>
                  <p className="text-sm text-gray-700">{row.MaintainBy}</p>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Mobile See All Button */}
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <button className="w-full text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors py-2">
            See All
          </button>
        </div>
      </div>

      {/* Tablet Horizontal Scroll Alternative */}
      <div className="hidden sm:block md:hidden bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-900 uppercase tracking-wide">
                  ID
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-900 uppercase tracking-wide">
                  Item Name
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-900 uppercase tracking-wide">
                  Date
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-900 uppercase tracking-wide">
                  Maintained By
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-900 uppercase tracking-wide">
                  Qty
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((row, index) => (
                <tr key={row.itemID} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-3 py-2 text-sm font-medium text-gray-900">
                    {row.itemID}
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-700">
                    {row.itemName}
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-700">
                    {row.MaintainDATE || '-'}
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-700">
                    {row.MaintainBy || '-'}
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-700">
                    {row.Quantity}
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={5} className="px-3 py-3 text-center">
                  <button className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors">
                    See All
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}