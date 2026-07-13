import { prisma } from '@/lib/db';
import Link from 'next/link';
import { MessageSquare, FileText, TrendingUp } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const [contactCount, quoteCount, recentQuotes] = await Promise.all([
    prisma.contactSubmission.count(),
    prisma.quoteRequest.count(),
    prisma.quoteRequest.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
  ]);

  const stats = [
    { label: 'Total Contacts', value: contactCount, icon: MessageSquare, href: '/admin/contacts', color: 'text-blue-600' },
    { label: 'Total Quotes', value: quoteCount, icon: FileText, href: '/admin/quotes', color: 'text-green-600' },
    { label: 'Pending Quotes', value: quoteCount, icon: TrendingUp, href: '/admin/quotes', color: 'text-amber-600' },
  ];

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link key={stat.label} href={stat.href} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3">
                <Icon className={`h-8 w-8 ${stat.color}`} />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <h2 className="font-heading text-lg font-bold text-gray-900 mt-10 mb-4">Recent Quote Requests</h2>
      {recentQuotes.length === 0 ? (
        <p className="text-sm text-gray-500">No quote requests yet.</p>
      ) : (
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Name</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Product</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Quantity</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentQuotes.map((quote: any) => (
                <tr key={quote.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{quote.name}</td>
                  <td className="px-4 py-3 text-gray-600">{quote.product}</td>
                  <td className="px-4 py-3 text-gray-600">{quote.quantity}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      quote.status === 'PENDING' ? 'bg-amber-50 text-amber-700' :
                      quote.status === 'QUOTED' ? 'bg-blue-50 text-blue-700' :
                      quote.status === 'ACCEPTED' ? 'bg-green-50 text-green-700' :
                      'bg-gray-50 text-gray-700'
                    }`}>
                      {quote.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{quote.createdAt.toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
