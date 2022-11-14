import { NextPage } from 'next';
import Image from 'next/image';

const ErrorPage: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="relative h-16 w-16">
        <Image src="/images/red-card.png" alt="Not Found Error" fill />
      </div>
      <p className="text-4xl font-extralight py-6">404 Not Found</p>
      <p className="text-xl font-light">You cannot play this match.</p>
    </div>
  );
};

export default ErrorPage;
