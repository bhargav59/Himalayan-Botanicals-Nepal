'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Leaf, LogOut, MessageSquare, FileText, LayoutDashboard } from 'lucide-react';
import type { AdminSession } from '@/lib/admin';

export default function AdminNav({ session }: { session: AdminSession }) {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/contacts', label: 'Contacts', icon: MessageSquare },
    { href: '/admin/quotes', label: 'Quotes', icon: FileText },
  ];

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  if (pathname === '/admin/login') return null;

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-700" />
              <span className="font-heading text-sm font-bold text-gray-900">Admin</span>
            </Link>
            <div className="flex items-center gap-1">
              {links.map((link) => {
                const Icon = link.icon;
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      active ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">{session.email}</span>
            <button onClick={handleLogout} className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-50">
              <LogOut className="h-3.5 w-3.5" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
