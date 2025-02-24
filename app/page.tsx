import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-red-300">
      <div className="max-w-7xl bg-neutral-900/50 mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={72}
            height={16}
          />
          <h1>DevFlowApp</h1>
          </div>
          <div className="px-10">
            <ul className="flex justify-center items-center gap-20">
              <li><Link href="#" className=" hover:text-blue-200">Home</Link></li>
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">Home</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Home;