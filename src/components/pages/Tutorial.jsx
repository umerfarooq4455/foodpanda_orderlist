

import React from "react";
import img1 from "../../assets/Images/download.png";
import img2 from "../../assets/Images/freee.png";
import img3 from "../../assets/Images/how-to-download-youtube-videos-pc-2.png";
import img4 from "../../assets/Images/youtube.jpeg";

const Tutorial = () => {
  return (
    <>
      <div className="sm:px-6 md:px-36 py-4 ">
        {/* Quick shortcut */}
        <div className="bg-gray-300 flex justify-center flex-col p-8 font-sanss font-extralight  mb-4 rounded-xl">
          <h4 className="font-semibold text-center text-2xl py-4">
            Quick shortcut to download videos
          </h4>
          <p className="font-pata mt-2">
            You can quickly download YouTube videos by replacing the "you" in
            youtube.com with "000". Here's an example:
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
            Videodownloader is a free online YouTube video downloader that
            allows users to download videos from YouTube instantly and easily.
            Simply paste a YouTube link in the textbox above and download your
            favorite videos right away.
          </p>
          <div className="py-4 leading-7">
            <p className="font-pata ">
              With this YouTube downloader tool, you can download YouTube videos
              in HD quality without having to install any additional software or
              browser extensions. The tool is 100% online and free to use.
            </p>
            <p className="font-pata">
              We've built this online video tool to allow teachers and educators
              to save videos for use in the classroom, journalists who want to
              keep a copy of important videos before they're removed from the
              platform, and others who wish to download YouTube videos that are
              copyright-free for offline use.
            </p>
            <p className="font-pata">
              It is the safest and the best alternative to Y2Mate, SaveFrom,
              BTClod, QDownloader, BitDownloader, X2Mate, 4K Video Downloader,
              8Downloader, and other websites that are filled with malicious
              ads.
            </p>
          </div>
        </div>
        {/* Description */}

        {/* HOW TO download youtube video on PC */}
        <div className="bg-gray-300 flex justify-center flex-col p-8 font-sanss font-extralight mb-4 rounded-xl">
          <h4 className="font-semibold text-center text-2xl py-4">
            How to download YouTube videos on PC?
          </h4>
          <p className="font-pata leading-7">
            Downloading videos from YouTube on your computer is a quick and
            straightforward process, thanks to the Vediosdownloader.
          </p>
          <p className="font-pata leading-7">Here are the steps.</p>
          <div className="flex flex-col">
            <p className="font-pata leading-7">
              1. Go to YouTube's website and open the video that you want to
              download.
            </p>
            <p className="font-pata leading-7">
              2. Copy the video's link from your browser's address bar.
            </p>
            <img src={img3} alt="" className="w-80 md:w-1/3" />
            <p className="font-pata leading-10 py-4">
              3. Paste the link into the search box on Vediosdownloader, such as
              the one at the top of this page.
            </p>
            <img src={img2} alt="" className="w-80 md:w-1/3" />
            <p className="font-pata leading-10 py-2">
              4. Vediosdownloader will automatically begin searching for the
              video.
            </p>
            <p className="font-pata">
              It will display the results within a few seconds.
            </p>
            <p className="font-pata leading-10 py-2">
              5. Determine the video resolution that you want to save, then
              right-click on the Download button and select the "Save", "Save
              As", or "Save Link As" option. The naming will vary depending on
              the browser that you use.
            </p>
            <img src={img1} alt="" className="w-80 md:w-1/4" />
            <p className="font-pata leading-10 py-2">
              6. The YouTube video will begin to download to your computer and
              will be saved to your default or the selected downloads folder.
            </p>
          </div>
          <p className="font-pata leading-10 ">
            7. The video will begin to save to your mobile and should be
            completed within a few seconds or minutes depending on the file
            size.
          </p>
        </div>
        {/* HOW TO download youtube video on PC */}

        {/* HOW TO download youtube video on ios */}
        <div className="bg-gray-300 flex justify-center flex-col p-8 font-sanss font-extralight mb-4 rounded-xl">
          <h4 className="font-semibold text-center text-[13px]  md:text-2xl  py-4">
            How to download YouTube videos on iOS/Android/Smartphone?
          </h4>
          <p className="font-pata py-2">
            To download YouTube videos on your mobile, simply paste the link of
            the YouTube video in 10Download and then save the video
          </p>
          <p className="font-pata py-2">
            Here are the step-by-step instructions:{" "}
          </p>
          <div className="flex flex-col">
            <p className="font-pata py-2">
              1. On the YouTube app, open the video that you want to save.
            </p>
            <p className="font-pata py-2">
              2. Tap on the Share button below the video, then select{" "}
              <span className="font-bold">Copy link.</span>{" "}
            </p>
            <img src={img4} alt="" className="w-80 md:w-1/4" />
            <p className="font-pata py-2">
              3. Open a browser on your phone and go to vediodownloader.com.
            </p>
            <p className="font-pata py-2">
              4. Paste the link into the search box at the top of the page.
            </p>
            <img src={img2} alt="" className="w-80 md:w-1/3" />
            <p className="font-pata py-2">
              5. The website will begin searching for the video. Within a few
              seconds, it should display the video's available resolutions and
              output formats.
            </p>
            <p className="font-pata py-2">
              6. Determine the video resolution that you want to save, then tap
              and hold on to the Download button next to it and select the save
              option.
            </p>
            <p className="font-pata py-2">
              On iPhone, the option is commonly called "Download Linked File".
            </p>
          </div>
          <h5 className="font-bold py-2">
            On Android, the name varies but it's usually called "Download File",
            "Download", or "Save".
          </h5>
          <img src={img1} alt="" className="w-80 md:w-1/4" />
          <p className="font-pata py-4">
            7. The video will begin to save to your mobile and should be
            completed within a few seconds or minutes depending on the file
            size.
          </p>
        </div>
        {/* HOW TO download youtube video on ios */}

        {/* FAQ */}
        <div className="bg-gray-300 flex justify-center flex-col p-8 font-sanss font-extralight mb-4 rounded-xl">
          <h4 className="font-semibold text-center text-2xl py-4">
            Online YouTube Downloader FAQ
          </h4>
          <h5 className="font-bold py-2">
            How can I download videos from YouTube?
          </h5>
          <div className="flex flex-col">
            <p className="font-pata py-2">
              1. Open a web browser and go to YouTube. If you're on mobile, you
              can open the YouTube app alternatively.
            </p>
            <p className="font-pata py-2">
              2. Go to the video that you wish to download and copy its link. On
              desktop, you can copy the video's link from the browser's URL bar.
              On the YouTube app, tap the share button and copy the URL.
            </p>
            <p className="font-pata py-2">
              3. Go to 10downloader.com in a web browser.
            </p>
            <p className="font-pata py-2">
              4. Paste the video's link into the search bar and press the
              Download button.
            </p>
            <p className="font-pata py-2">
              5. Now select the format and quality that you want to download.
              The video will get saved to your device.
            </p>
          </div>
          <h5 className="font-bold py-2">
            Do I need to pay to use this video downloader?
          </h5>
          <p className="font-pata py-2">
            No. Our YouTube downloader is 100% free to use and you don't need to
            pay for anything.
          </p>
          <h5 className="font-bold py-2">
            Which other websites are supported?
          </h5>
          <p className="font-pata py-2">
            10Downloader works with YouTube only.
          </p>
          <h5 className="font-bold py-2">
            Can I use this YouTube video downloader on PC or mobile?
          </h5>
          <p className="font-pata py-2">
            Definitely! Since our YouTube downloader is an online tool, you can
            use it from any computer or mobile device that has access to the
            internet.
          </p>
          <h5 className="font-bold py-2">
            Is it safe to download videos from YouTube using this tool?
          </h5>
          <p className="font-pata py-2">
            Yes! We do not collect or log any user data and the videos that they
            download.
          </p>
        </div>
        {/* FAQ */}
      </div>
    </>
  );
};

export default Tutorial;
