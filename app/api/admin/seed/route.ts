import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { secret } = await request.json();

    if (secret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
    }

    const bcrypt = require('bcryptjs');

    const existing = await prisma.adminUser.findUnique({ where: { email: 'admin@himalayanbotanicals.com.np' } });
    if (existing) {
      return NextResponse.json({ message: 'Admin user already exists' });
    }

    const passwordHash = await bcrypt.hash('admin123', 12);

    const user = await prisma.adminUser.create({
      data: {
        email: 'admin@himalayanbotanicals.com.np',
        name: 'Admin',
        passwordHash,
        role: 'ADMIN',
      },
    });

    return NextResponse.json({ success: true, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
  } catch (err) {
    console.error('[Admin Seed]', err);
    return NextResponse.json({ error: 'Seed failed' }, { status: 500 });
  }
}
