import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

function createPrismaClient(): PrismaClient {
  if (process.env.CLOUDFLARE_ENV === '1') {
    const { PrismaD1 } = require('@prisma/adapter-d1');
    const { getCloudflareContext } = require('@opennextjs/cloudflare');
    return new PrismaClient({
      adapter: new PrismaD1(getCloudflareContext().env.MY_D1),
    });
  }
  const { PrismaLibSql } = require('@prisma/adapter-libsql');
  const { createClient } = require('@libsql/client');
  return new PrismaClient({
    adapter: new PrismaLibSql(
      createClient({ url: process.env.DATABASE_URL || 'file:./prisma/dev.db' }),
    ),
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
