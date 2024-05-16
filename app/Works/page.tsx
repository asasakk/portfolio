import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import localImage from "./test.jpg"; 
import youtubeImage from "./yt.png"; 
import rsImage from "./rs.png"; 
import v2iImage from "./v2i.png";
import arduinoImage from "./arduino.png"; 

const items = [
  { id: 1, title: "Youtube Downloader", image: youtubeImage, link: "#" },
  { id: 2, title: "RelativeStrength-Calc", image: rsImage, link: "#" },
  { id: 3, title: "Video to Image", image: v2iImage, link: "#" },
  { id: 4, title: "ObjectDetectionArduinoController", image: arduinoImage, link: "#",},
  { id: 5, title: "AccelerometerMusicPlayer", image: localImage, link: "#" },
  { id: 6, title: "Human Detection.js", image: localImage, link: "#" },
  { id: 7, title: "Portfolio", image: localImage, link: "#" },
];

export default function Works() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-12 md:p-16 lg:p-24 xl:p-48">
        <p className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">Works</p>
        <div className="gap-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {items.map((item) => (
            <Link href={item.link} key={item.id}>
              <div className="w-full h-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto"
                />
                <p className="mt-2 text-center">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
