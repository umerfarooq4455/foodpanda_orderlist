import { useState } from "react";
import Vediotable from "./Vediotable";
import Tutorial from "./pages/Tutorial";
import axios from "axios";

const Hero = () => {
  const [inputValue, setInputValue] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [fandom, setFandom] = useState(null);
  const [all, setAll] = useState(null);
  const [videodata, setVideoData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePaste = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        setInputValue(text);
      })
      .catch((err) => console.error("Failed to read clipboard contents", err));
  };

  const notValidUrl = (url) => {
    const blacklist = [
      "https://youtu.be",
      "adultSwim.com",
      "alphaPorno.com",
      "eporner.com",
      "HellPorno.net",
      "lovehomeporn.com",
      "nubiles-porn.com",
      "porn.com",
      "pornerbros.com",
      "pornez.cam",
      "pornflip.com",
      "pornhd.com",
      "pornhub.com",
      "pornzog.com",
      "theporndude.com",
      "PornoVoisines.com",
      "pornotube.com",
      "pornoxo.com",
      "pornbox.com",
      "porn3dx.com",
      "pornzog.com",
      "upornia.com",
      "porntop.com",
      "porntube.com",
      "91porn.com",
      "sunporno.com",
      "hqporner.com",
      "youporn.com",
      "yourporn.com",
      "upornia.com",
      "tubepornclassic.com",
      "goodporn.to",
      "porntrex.com",
      "watchhindiporn.net",
      "feetporno.com",
      "feet9.com",
      "iwara.tv",
      "showup.tv",
      "rule34video.com",
      "xhamster.com",
      "x-tube.link",
      "xvideos.com",
      "xhvid.com",
      "txxx.com",
      "xnxx.com",
      "xxxymovies.com",
      "xxxtik.com",
      "here.xxx",
      "stripchat.com",
      "motherless.com",
      "recurbate.com",
      "hanime.tv",
      "hanimetv.com",
      "xanimu.com",
      "muchohentai.com",
      "ohentai.org",
      "sex.com",
      "daftsex.app",
      "daftsex.com",
      "mofosex.net",
      "villagesexvideos.com",
      "spankbang.com",
      "spankbank.com",
      "redgifs.com",
      "redtube.com",
      "tnaflix.com",
      "biqle.ru",
      "biqle.org",
      "beeg.com",
      "inflatevids.xyz",
      "peekvids.com",
      "manyvids.com",
      "murrtube.net",
      "noodlemagazine.com",
      "cableav.tv",
      "cam4.com",
      "camsoda.com",
      "myfreecams.com",
      "cambutterfly.co",
      "mydesi2.net",
      "emturbovid.com",
      "jable.tv",
      "chaturbate.com",
      "chaturbate.eu",
      "missav.com",
      "jav.guru",
      "javbangers.com",
      "javquick.com",
      "javsubbed.net",
      "xcadr.tv",
      "thisvid.com",
      "thisav.com",
      "Lewdinfluencers.com",
      "quartier-rouge.be",
      "laxd.com",
      "onlyfans.com",
      "boyfriendtv.com",
      "deepgoretube.site",
      "cloud.mail.ru",
      "perverzija.com",
      "javmix.tv",
      "tokyomotion.net",
      "goostream.net",
      "sickjunk.com",
      "xmegadrive.com",
      "ukdevilz.com",
      "erocast.me",
      "boundhub.com",
      "gaystream.pw",
      "koreanfakes.com",
      "mrdeepfakes.com",
      "empflix.com",
      "aznude.com",
    ];

    const lowercasedUrl = url.toLowerCase();
    return blacklist.some((domain) => lowercasedUrl.includes(domain));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (notValidUrl(inputValue)) {
      setError("18+ RESTRICTED");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.get(
        "https://videodownloaderapi.trippleapps.com/api/info?",
        {
          params: {
            url: inputValue,
          },
          headers: {
            key: "Ug5s1fhkTAfsVpkz",
          },
        }
      );

      const data = response.data.info;
      const all = response.data.info.formats;
      const fandom = response.data.info.entries;

      setVideoData(data);
      setAll(all);
      setFandom(fandom);
      setShowCard(true);
      setError(null);
    } catch (error) {
      console.error("Error fetching video data:", error);
      setError("Is not the valid Url. Please try again.");

      setShowCard(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="container mx-auto bg-white rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center font-bold text-[#ED5400] md:text-4xl text-2xl">
              All Video Downloader - Video Saver 4k,8k
            </h1>
            <h5 className="text-center py-3 font-bold text-[#ED5400] md:text-xl text-sm">
              The best YouTube Video Downloader
            </h5>
            <div className="flex flex-col md:flex-row border border-gray-400-500 items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
              <div>
                <input
                  className={`md:text-base text-black flex-grow outline-none  text-sm px-2 text-center md:text-start w-auto md:w-80  ${
                    error ? "border-red-500" : ""
                  }`}
                  type="link"
                  placeholder="Enter video link"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setError(null);
                  }}
                required
                />
              </div>
              <div className="flex  md:flex-row rounded-lg mt-2 md:mt-0">
                <button
                  type="button"
                  onClick={handlePaste}
                  className={`bg-[#ED5400] text-white mx-2 text-xs md:text-base rounded-lg px-4 py-2 font-thin mt-2 md:mt-0 md:ml-2`}
                >
                  Paste Link
                </button>
                <button
                  type="submit"
                  className={`bg-[#ED5400] text-white text-xs md:text-base rounded-lg px-4 py-2 font-thin mt-2 md:mt-0 md:ml-2`}
                >
                  Download
                </button>
              </div>
            </div>
          </form>

          {error && (
            <div className="text-[#ED5400] p-2 rounded-sm font-extralight font-sanss bg-[#ffc5a5] text-sm mt-1">
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center md:h-64 h-full">
              <div
                role="status"
                className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
              >
                <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>

                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : null}

          {showCard && !loading && (
            <div className="mt-4 p-4 flex md:flex-row-reverse flex-col-reverse justify-center bg-white rounded-lg shadow">
              <div className="flex flex-col md:mx-28">
                <Vediotable fandom={fandom} all={all} videodata={videodata} />
              </div>
              <div className="lg:w-2/2 xl:w-2/5   text-lg font-bold mb-2">
                <div className="rounded overflow-hidden shadow-lg">
                  <img
                    className="w-full lg:h-[236px] object-cover"
                    src={videodata.thumbnail}
                    alt="Card image cap"
                  />
                  <div className="px-6 md:py-4 md:px-4 py-4">
                    <div className="font-bold text-xl mb-2">
                      {videodata.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      Duration: {videodata.duration_string}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-5">
        <Tutorial />
      </div>
    </>
  );
};

export default Hero;
