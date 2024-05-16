import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sm:hidden  bottom-0  py-2 ">
      <div className="max-w-4xl w-full mx-auto mt-32 h-8 flex items-center justify-center">
        {/* <p>©asasakk</p> */}
        <Link href="/about" legacyBehavior>
          <a className="mr-5 ml-5 hover:text-gray-900 custom-mr-5">about</a>
        </Link>
        <Link href="/works" legacyBehavior>
          <a className="mr-5 ml-5 hover:text-gray-900 custom-mr-5">Works</a>
        </Link>
      </div>
      <div className="max-w-4xl w-full mx-auto h-8 flex items-center justify-center">
      <Link href="https://github.com/asasakk" legacyBehavior>
        <a className="mr hover:text-gray-900 custom-mr-5">GitHub</a>
      </Link>
      </div>
    </footer>
  );
};

export default Footer;
