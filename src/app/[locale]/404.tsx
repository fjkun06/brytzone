import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Custom404: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={() => router.push('/')}>Go back to home</button>
    </div>
  );
};

export default Custom404;