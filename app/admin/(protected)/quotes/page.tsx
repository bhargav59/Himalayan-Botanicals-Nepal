import { prisma } from '@/lib/db';
import QuoteActions from './actions';

export const dynamic = 'force-dynamic';

export default async function AdminQuotesPage() {
  const quotes = await prisma.quoteRequest.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-gray-900 mb-6">Quote Requests</h1>
      {quotes.length === 0 ? (
        <p className="text-sm text-gray-500">No quote requests yet.</p>
      ) : (
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Date</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Name</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Email</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Product</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Quantity</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {quotes.map((quote: any) => (
                <tr key={quote.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{quote.createdAt.toLocaleDateString()}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{quote.name}</td>
                  <td className="px-4 py-3 text-gray-600">{quote.email}</td>
                  <td className="px-4 py-3 text-gray-600">{quote.product}</td>
                  <td className="px-4 py-3 text-gray-600">{quote.quantity}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      quote.status === 'PENDING' ? 'bg-amber-50 text-amber-700' :
                      quote.status === 'QUOTED' ? 'bg-blue-50 text-blue-700' :
                      quote.status === 'ACCEPTED' ? 'bg-green-50 text-green-700' :
                      quote.status === 'REJECTED' ? 'bg-red-50 text-red-700' :
                      'bg-gray-50 text-gray-700'
                    }`}>
                      {quote.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <QuoteActions id={quote.id} currentStatus={quote.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
