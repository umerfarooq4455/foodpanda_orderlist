// TableComponent.js
import React, { useState } from "react";

const TableComponent = ({ all, fandom, videodata }) => {
  const [activeNavItem, setActiveNavItem] = useState("vedio");


  const handleNavItemClick = (tab) => {
    setActiveNavItem(tab);
  };


  const handleDownloadClick = (item) => {
    const dynamicUrl = item.url;
    window.open(dynamicUrl, "_blank");
  };

  const handleDownloadClicke = (item) => {
    const dynamicUrl = item.url;
    window.open(dynamicUrl, "_blank");
  };

  const originalList = videodata.thumbnails;

  const last20Items = originalList.slice(-20);

  return (
    <>
      <div>
        {/* Navigation */}
        <div className="flex space-x-4">
          <button
            className={`text-sky-700  font-pacific ${activeNavItem === "vedio" ? "bg-[#ED5400] text-white hover:text-sky-800 font-pacific text-xs md:text-base rounded-lg px-4 py-2 font-thin  bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400" : "bg-white"
              }`}
            onClick={() => handleNavItemClick("vedio")}
          >
            Video
          </button>
          <button
            className={`px-4 py-2 text-sky-700 font-pacific ${activeNavItem === "audio" ? "bg-[#ED5400] text-white hover:text-sky-800 font-pacific text-xs md:text-base rounded-lg px-4 py-2 font-thin  bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400" : "bg-white"
              }`}
            onClick={() => handleNavItemClick("audio")}
          >
            Thumbnail
          </button>
        </div>

        {/* Table */}
        <div>
          {activeNavItem === "vedio" && (
            <table className="w-full rounded-lg shadow-2xl">
              <thead className="text-[10px] md:text-base text-left text-sky-800 font-pacific">
                <tr>
                  <th className="px-4 py-4">Format</th>
                  <th className="px-4 py-4">Quality</th>
                  <th className="px-4 py-4">Download</th>
                </tr>
              </thead>
              <tbody>
                {fandom?.map((item) => (
                  <tr key={item}>
                    <td className="md:px-4 md:py-4 px-2">{item.ext}</td>
                    <td className="md:px-4 md:py-4 ">{item.format}</td>
                    <td>
                      <button
                        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white px-2 py-1 rounded"
                        onClick={() => handleDownloadClicke(item)}
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}

                {all?.map((item) => (
                  <tr key={item}>
                    <td className="md:px-4 md:py-4 px-2 ">{item.ext}</td>
                    <td className="md:px-4 md:py-4 ">{item.format}</td>
                    <td className="py-2">
                      <button
                        className="bg-sky-700 text-white  md:px-2 md:py-1 md:mt-2 text-sm md:text-base text-[10px] px-1 py-1 rounded"
                        onClick={() => handleDownloadClick(item)}
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeNavItem === "audio" && (
            <table className="w-full  rounded-lg shadow-2xl">
              <thead className="text-[10px] md:text-base text-left text-sky-800 font-pacific">
                <tr>
                  <th className="px-4 py-4 ">Image</th>
                  <th className="px-4 py-4">Format</th>
                  <th className="px-4 py-4">Download</th>
                </tr>
              </thead>
              <tbody>
                {last20Items.map((item) => (
                  <tr key={item}>
                    <td className="md:px-4 md:py-4 px-2">
                      <img
                        width={150}
                        className="rounded-lg"
                        src={item.url}
                        alt=""
                      />
                    </td>
                    <td className="px-4 py-4">jpg</td>
                    <td>
                      <button
                        className="bg-sky-700 text-white px-2 py-1 rounded"
                        onClick={() => handleDownloadClicke(item)}
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default TableComponent;
