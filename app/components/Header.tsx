import Link from "next/link";
import "../styles/style.css";

const Header = () => {
  return (
    // "fixed top-0 left-0 w-full bg-white text-gray-600 body-font shadow-md z-50"
    <header className="sm:fixed top-0 left-0 w-full  text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center">
        <Link href="/" legacyBehavior>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24">
              <path
                d="M17 14a5 5 0 0 0 2.71-.81L20 13a3.16 3.16 0 0 0 .45-.37l.21-.2a4.48 4.48 0 0 0 .48-.58l.06-.08a4.28 4.28 0 0 0 .41-.76a1.57 1.57 0 0 0 .09-.23a4.21 4.21 0 0 0 .2-.63l.06-.25A5.5 5.5 0 0 0 22 9V2l-3 3h-4l-3-3v7a5 5 0 0 0 5 5zm2-7a1 1 0 1 1-1 1a1 1 0 0 1 1-1zm-4 0a1 1 0 1 1-1 1a1 1 0 0 1 1-1z"
                fill="currentColor"
              />
              <path
                d="M11 22v-5H8v5H5V11.9a3.49 3.49 0 0 1-2.48-1.64A3.59 3.59 0 0 1 2 8.5A3.65 3.65 0 0 1 6 5a1.89 1.89 0 0 0 2-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1a3.89 3.89 0 0 1-4 4C4.19 7 4 8.16 4 8.51S4.18 10 6 10h5.09A6 6 0 0 0 19 14.65V22h-3v-5h-2v5z"
                fill="currentColor"
              />
            </svg>
            <span className="ml-5 text-xl">asa's portfolio</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center hidden md:flex">
          <Link href="/about" legacyBehavior>
            <a className="mr-5 hover:text-gray-900 custom-mr-5">About</a>
          </Link>
          <Link href="/Works" legacyBehavior>
            <a className="mr-5 hover:text-gray-900 custom-mr-5">Works</a>
          </Link>
        </nav>
        <Link href={"https://github.com/asasakk"}>
          <button className="inline-flex items-center hidden md:flex  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Github
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
