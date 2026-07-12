import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.error('[Client Error]', JSON.stringify(body, null, 2));

    await prisma.auditLog.create({
      data: {
        action: 'CLIENT_ERROR',
        entity: 'frontend',
        metadata: body,
      },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
