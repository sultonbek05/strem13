import { PrismaClient } from "@prisma/client";

declare global {
  // Next.js hot-reload paytida "prisma already exists" xatoni oldini oladi
  var prisma: PrismaClient | undefined;
}

export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = db;
}
