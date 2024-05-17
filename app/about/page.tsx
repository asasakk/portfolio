import Image from "next/image";
import Layout from "../components/Layout";


export default function About() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-12 md:p-16 lg:p-24 xl:p-48">
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
          <h1 className="text-[min(13vw,100px)]">About me</h1>
        </div>
      </main>
    </Layout>
  );
}
