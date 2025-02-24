import Image from "next/image";

const Home = () => {
  return (
    <div>
      <h1 className="text-primary-100 text-3xl font-black">My Homepage</h1>
      <Image
        src="/me.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Home;
