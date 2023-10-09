import PostCart from '@/components/PostCart';

export default function Home() {
  return (
    <main className='grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
      <PostCart />
      <PostCart />
      <PostCart />
      <PostCart />
      <PostCart />
      <PostCart />
    </main>
  );
}
