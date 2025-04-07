import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 py-10">
      <div className="text-white flex font-sanss font-thin justify-center p-4">
        ©2024 All video Downloader - Video Saver
      </div>
      {/* Flex Container */}
      <div className="flex  justify-center px-6 py-3">
        {/* List Container */}
        <div className="flex  justify-centerv text-[10px] lg:text-sm ">
          <div className="flex  text-white font-sanss font-thin">
            <Link to="/about" className="hover:text-gray-500 mx-2">
              About
            </Link>
            <Link to="/contactus" className="hover:text-gray-500  mx-2 ">
              Contact
            </Link>
            <Link to="/terms" className="hover:text-gray-500  mx-2">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
