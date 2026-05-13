import { prisma } from '@/lib/prisma';
import products from './store/products.json';

async function main() {
  //const allShops = await prisma.shop_49.findMany({
  //  where: { cat_id: 4 },
  //});
  //console.log('Products of catid=4:', JSON.stringify(allShops, null, 2));
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
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
