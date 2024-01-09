import { AdventureList, Button } from 'shared-ui';
// import { Adventure } from 'shared-types';
import Image from 'next/image';

// const getData = async (): Promise<Adventure[]> => {
//   const res = await fetch('http://localhost:3001/adventures');
//   return await res.json();
// };

export default async function Home() {
  // const adventures = await getData();
  const adventures: any = [];
  return (
    <>
      <nav className="bg-primary py-12">
        <ul className="flex max-w-content m-auto gap-8 items-center">
          <li className="font-volkhov text-h3">Adventure</li>
          <li className="ml-auto hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Destination</li>
          <li className="hover:underline cursor-pointer">Tour</li>
          <li className="hover:underline cursor-pointer">Blog</li>
          <Button className={'ml-auto'}>Join Us</Button>{' '}
        </ul>
      </nav>
      <main>
        <div className="bg-primary py-24">
          <div className="max-w-content m-auto flex justify-between">
            <div className="max-w-xl">
              <h1 className="text-h1 mb-8">
                Get started your exciting{' '}
                <span className="text-orange-500">journey</span> with us.
              </h1>
              <p className="text-p1 mb-16">
                A Team of experienced tourism professionals will provide you
                with the best advice and tips for your desire place.
              </p>
              <Button variant="secondary">Discover Destinations</Button>
            </div>
            <Image
              src={'/thumb_up_image.png'}
              width={500}
              height={530}
              alt="Join us"
            />
          </div>
        </div>

        <div className="bg-secondary py-24">
          <div className="max-w-content m-auto">
            <h1 className="text-h1 mb-6 text-center">
              Your next <span className="text-orange-500">adventure</span>
            </h1>
            <p className="text-p1 mb-16 text-center">
              Discover our fantastic early booking discounts & start planning
              your journey.
            </p>
            <AdventureList data={adventures} />
          </div>
        </div>
      </main>
    </>
  );
}
