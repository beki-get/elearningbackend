// test-db-fixed.js
const { PrismaClient } = require('@prisma/client');

async function test() {
  console.log('Testing Supabase connection...');
  console.log('Connection URL:', process.env.DATABASE_URL?.replace(/:[^:]*?@/, ':********@'));
  
  const prisma = new PrismaClient();
  
  try {
    await prisma.$connect();
    console.log('✅ Connected to Supabase successfully!');
    
    const result = await prisma.$queryRaw`SELECT version() as version`;
    console.log('PostgreSQL version:', result[0]?.version);
    
  } catch (error) {
    console.error('❌ Connection failed:');
    console.error('Error message:', error.message);
    console.error('\n💡 Possible solutions:');
    console.error('1. Check if your IP is allowed in Supabase dashboard');
    console.error('2. Verify your database password');
    console.error('3. Make sure project is not paused');
    console.error('4. Try using connection pooler URL');
    
  } finally {
    await prisma.$disconnect();
    console.log('Connection closed.');
  }
}

test();