import { cookies } from 'next/headers';

export interface AdminSession {
  id: string;
  email: string;
  role: string;
}

export async function getSession(): Promise<AdminSession | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;

    if (!token) return null;

    const data = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'));

    if (data.exp < Date.now()) return null;

    return { id: data.id, email: data.email, role: data.role };
  } catch {
    return null;
  }
}
