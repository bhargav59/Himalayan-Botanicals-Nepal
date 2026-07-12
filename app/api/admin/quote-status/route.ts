import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { id, status } = await request.json();

    if (!id || !status) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
    }

    await prisma.quoteRequest.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Quote Status]', err);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
