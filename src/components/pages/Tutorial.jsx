
import React from "react";
import img1 from "../../assets/Images/download.png";
import img2 from "../../assets/Images/freee.png";
import img3 from "../../assets/Images/how-to-download-youtube-videos-pc-2.png";
import img4 from "../../assets/Images/youtube.jpeg";
import { Helmet } from 'react-helmet';


const Tutorial = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Please review these terms and conditions of use carefully before using Video Downloader - Video Saver."
        />
      </Helmet>
      <div className="sm:px-6 md:px-36 py-4 ">
        {/* Quick shortcut */}
        <div className="bg-gray-300 flex justify-center flex-col p-8 font-sanss font-extralight  mb-4 rounded-xl">
          <h1 className="font-semibold text-center text-2xl py-4">
            A Quick Shortcut to Download Videos
          </h1>
          <p className="font-pata mt-2">
            Expedite your YouTube video downloads with a simple trick. By replacing "you" in youtube.com with "000,"
          </p>
          <div className="bg-gray-200 flex justify-center">
            <p className="font-semibold  p-4  text-[10px] lg:text-sm">
              https://www.youtube.com/watch?v=6stlCkUDG_s
            </p>
          </div>
          <p className="text-center text-6xl py-7">👇</p>
          <div className="bg-gray-200 flex justify-center">
            <p className="font-semibold p-4 text-[10px] lg:text-sm">
              https://www.000tube.com/watch?v=6stlCkUDG_s
            </p>
          </div>
        </div>
        {/* Quick shortcut */}


        {/* Description */}
        <div className="bg-gray-300 flex justify-center flex-col p-8 font-sanss font-extralight mb-4 rounded-xl">
          <p className="font-pata leading-7">
            Unlock a world of possibilities with Videodownloader.
          </p>
          <div className="py-4 leading-7">
            <p className="font-pata">
              Elevate your video downloading experience with this YouTube downloader tool, enabling you to download YouTube videos in high-definition quality without the need for additional software or browser extensions. Our tool is not only 100% online but also completely free to use.
            </p>
            <p className="font-pata">
              Tailored for educators, Videodownloader serves as an invaluable resource for teachers and educators, facilitating the seamless integration of videos into classrooms. It's also a sanctuary for journalists seeking to archive crucial videos before they vanish from the platform. Moreover, it's the ideal solution for anyone looking to download YouTube videos that are copyright-free for offline use.
            </p>
            <p className="font-pata">
              Trust in the safety and reliability of Videodownloader as your preferred alternative to Y2Mate, SaveFrom, BTClod, QDownloader, BitDownloader, X2Mate, 4K Video Downloader, 8Downloader, and other websites notorious for malicious ads.
            </p>
          </div>
        </div>
        {/* Description */}


        {/* HOW TO download youtube video on PC */}
        <div className="bg-gray-300 flex justify-center flex-col p-8 font-sanss font-extralight mb-4 rounded-xl">
          <h4 className="font-semibold text-center text-2xl py-4">
            How to Download YouTube Videos on PC
          </h4>
          <p className="font-pata leading-7">
            Streamlining the process of downloading YouTube videos on your computer becomes a breeze, thanks to Vediosdownloader.
          </p>
          <p className="font-pata leading-7">Follow these simple steps:</p>
          <div className="flex flex-col">
            <p className="font-pata leading-7">
              1. Navigate to YouTube's website and open the video you want to download.
            </p>
            <p className="font-pata leading-7">
              2. Copy the video's link from your browser's address bar.
            </p>
            <img src={img3} alt="" className="w-80  h-50 md:w-1/3" />
            <p className="font-pata leading-10 py-4">
              3. Paste the link into the search box on Vediosdownloader, located at the top of this page.
            </p>
            <img src={img2} alt="" className="w-80 h-50 md:w-1/3" />
            <p className="font-pata leading-10 py-2">
              4. Vediosdownloader will automatically initiate the search for the video,
              displaying the results within seconds.
            </p>
            <p className="font-pata leading-10 py-2">
              5. Determine the desired video resolution, then right-click on the Download button.
              Select the "Save," "Save As," or "Save Link As" option, depending on your browser.
            </p>
            <img src={img1} alt="" className="w-80 h-50 md:w-1/4" />
            <p className="font-pata leading-10 py-2">
              6. The YouTube video will commence downloading to your computer,
              saving it to your default or selected downloads folder.
            </p>
          </div>
          <p className="font-pata leading-10 ">
            7. The video download will start and should be completed within a few seconds or minutes,
            depending on the file size.
          </p>
        </div>
        {/* HOW TO download youtube video on PC */}


        {/* HOW TO download youtube video on iOS/Android/Smartphone */}
        <div className="bg-gray-300 flex justify-center flex-col p-8 font-sanss font-extralight mb-4 rounded-xl">
          <h4 className="font-semibold text-center text-[13px]  md:text-2xl  py-4">
            How to Download YouTube Videos on iOS/Android/Smartphone
          </h4>
          <p className="font-pata py-2">
            To effortlessly download YouTube videos on your mobile device, follow these simple steps using 10Download:
          </p>
          <div className="flex flex-col">
            <p className="font-pata py-2">
              1. Open the YouTube app and locate the video you want to save.
            </p>
            <p className="font-pata py-2">
              2. Tap on the Share button below the video, then choose{" "}
              <span className="font-bold">Copy link.</span>{" "}
            </p>
            <img src={img4} alt="" className="w-80 h-50 md:w-1/4" />
            <p className="font-pata py-2">
              3. Open your phone's browser and navigate to vediodownloader.com.
            </p>
            <p className="font-pata py-2">
              4. Paste the link into the search box at the top of the page.
            </p>
            <img src={img2} alt="" className="w-80 h-50 md:w-1/3" />
            <p className="font-pata py-2">
              5. The website will initiate the search for the video. Within seconds, it will present the available resolutions and output formats.
            </p>
            <p className="font-pata py-2">
              6. Select your desired video resolution, then tap and hold the Download button next to it. Choose the save option.
            </p>
            <p className="font-pata py-2">
              On iPhone, this option is typically labeled as "Download Linked File."
            </p>
          </div>
          <h5 className="font-bold py-2">
            On Android, the option may vary but is commonly named "Download File," "Download," or "Save."
          </h5>
          <img src={img1} alt="" className="w-80 h-50 md:w-1/4" />
          <p className="font-pata py-4">
            7. The video will start saving to your mobile and should be completed within seconds or minutes, depending on the file size.
          </p>
        </div>


        {/* FAQ */}
        <div className="bg-gray-300 flex justify-center flex-col p-8 font-sanss font-extralight mb-4 rounded-xl">
          <h4 className="font-semibold text-center text-2xl py-4">
            FAQs about VideoRetriever - Your Ultimate YouTube Video Downloader
          </h4>
          <h5 className="font-bold py-2">
            How can I download videos from YouTube using VideoRetriever?
          </h5>
          <div className="flex flex-col">
            <p className="font-pata py-2">
              1. Launch your web browser and navigate to YouTube. For mobile users, the YouTube app is a convenient alternative.
            </p>
            <p className="font-pata py-2">
              2. Locate the video you want to download and copy its link. On desktop, copy the video link from the browser's URL bar. On the YouTube app, tap the share button and copy the URL.
            </p>
            <p className="font-pata py-2">
              3. Visit VideoRetriever.com in your web browser.
            </p>
            <p className="font-pata py-2">
              4. Paste the video link into the search bar and click the Download button.
            </p>
            <p className="font-pata py-2">
              5. Choose your preferred format and quality for the download. Your video will be saved to your device.
            </p>
          </div>
          <h5 className="font-bold py-2">
            Is VideoRetriever a paid service?
          </h5>
          <p className="font-pata py-2">
            No, VideoRetriever is a 100% free YouTube downloader. There are no charges for using any of its features.
          </p>
          <h5 className="font-bold py-2">
            Which websites are supported by VideoRetriever?
          </h5>
          <p className="font-pata py-2">
            VideoRetriever exclusively works with YouTube.
          </p>
          <h5 className="font-bold py-2">
            Can I use VideoRetriever on both PC and mobile devices?
          </h5>
          <p className="font-pata py-2">
            Absolutely! VideoRetriever is an online tool, accessible from any computer or mobile device with internet access.
          </p>
          <h5 className="font-bold py-2">
            Is it safe to download videos from YouTube using VideoRetriever?
          </h5>
          <p className="font-pata py-2">
            Yes! VideoRetriever prioritizes user privacy, refraining from collecting or logging any user data and downloaded videos.
          </p>
        </div>
        {/* FAQ */}
      </div>
    </>
  );
};

export default Tutorial;
