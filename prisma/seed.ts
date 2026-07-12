import 'dotenv/config';
import { PrismaClient } from '../lib/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL! }),
});

async function main() {
  const existing = await prisma.adminUser.findUnique({
    where: { email: 'admin@himalayanbotanicals.com.np' },
  });

  if (existing) {
    console.log('Admin user already exists:', existing.email);
    return;
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

  console.log('Admin user created:', user.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
