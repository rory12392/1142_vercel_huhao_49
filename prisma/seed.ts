import { prisma } from '@/lib/prisma';
import { blogData2_xx } from '@/actions/data/blogData';

async function main() {
  // const newBlogs = await prisma.blog_xx.createMany({
  //   data: blogData2_xx,
  //   skipDuplicates: true,
  // });
  // console.log('Created new blogs:', newBlogs);

  const allShops = await prisma.shop_49.findMany({
    where: { cat_id: 4 },
  });
  console.log('Products of catid=4:', JSON.stringify(allShops, null, 2));
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
