import Blog2_49 from '../_components/Blog2_49';
import Wrapper from '../_assets/wrapper/Blog2_49';
import Alert_49 from '../_components/Alert_49';
import DeleteAllBlogs_49 from '../_components/DeleteAllBlogs_49';
import SeedAllBlogs_49 from '../_components/SeedBlogs_49';

import { prisma } from '@/lib/prisma';

type Blog = {
  id: number;
  img: string | null;
  category: string | null;
  title: string | null;
  descrip: string | null;
};

export const fetchBlog_49 = async () => {
  const blogs = await prisma.blog_49.findMany();
  return blogs;
};

const P1_49 = async () => {
  const blogs_49: Blog[] = await fetchBlog_49();
  // console.log('blogs_49:', blogs_49);

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>blogs from local PosgreSQL -- huhao, 213417149</h2>
        </div>
        <div className='blogs-center2'>
          {blogs_49?.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog2_49
                key={id}
                id={id}
                title={title || 'Untitled'}
                descrip={descrip || 'No description'}
                category={category || 'Uncategorized'}
                img={img || '/default-blog.jpg'}
              />
            );
          })}
        </div>
        <div className='flex justify-center items-center gap-8 mt-8'>
          <DeleteAllBlogs_49 />
          <SeedAllBlogs_49 />
        </div>
      </section>
    </Wrapper>
  );
};

export default P1_49;
