import Image from "next/image";
import localImage from "../img/icon2.png";
import Layout from "../components/Layout";


export default function About() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-12 md:p-16 lg:p-24 xl:p-48">
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
          <h1 className="text-[min(13vw,100px)]">About me</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="flex justify-center">
            <Image
              src={localImage}
              alt="Your photo"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-lg sm:text-xl md:text-2xl">
              こんにちは！私は[あなたの名前]です。ウェブ開発者として、多くのプロジェクトに携わってきました。私のポートフォリオをご覧いただきありがとうございます。
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}