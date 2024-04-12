import { PrismaClient } from '@prisma/client';

const invoices = [
  {
    vendor_name: 'Amazon',
    amount: 100,
    due_date: new Date('2024-01-01'),
    description: 'Books, electronics, and other items',
    paid: false,
  },
  {
    vendor_name: 'Google',
    amount: 200,
    due_date: new Date('2024-02-01'),
    description: 'Google Cloud services',
    paid: true,
  },
  {
    vendor_name: 'Microsoft',
    amount: 300,
    due_date: new Date('2024-03-01'),
    description: 'Microsoft Office subscription',
    paid: false,
  },
  {
    vendor_name: 'Apple',
    amount: 400,
    due_date: new Date('2024-04-01'),
    description: 'iPhone, iPad, and MacBook',
    paid: true,
  },
  {
    vendor_name: 'LinkedIn',
    amount: 700,
    due_date: new Date('2024-07-01'),
    description: 'LinkedIn Ads',
    paid: true,
  },
  {
    vendor_name: 'Instagram',
    amount: 1000,
    due_date: new Date('2024-10-01'),
    description: 'Instagram Ads',
    paid: false,
  },
];

const prisma = new PrismaClient();
async function main() {
  const john = await prisma.user.create({
    data: {
      email: 'john@mail.com',
      username: 'JohnDoe',
      password: 'password',
    },
  });

  const createdInvoices = await prisma.invoice.createMany({
    data: invoices.map((invoice) => ({
      ...invoice,
      userId: john.id,
    })),
  });

  console.log({ john, createdInvoices });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
