import React from 'react';

const Terms = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#ED5400] dark:text-white">Terms of Service</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Please review these terms and conditions of use carefully before Video Downloader - Video Saver</p>
        <div className="min-w-full">
      <div className="container mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By using our website, you agree to comply with and be bound by these terms and conditions. If you do not
            agree to these terms, please do not use our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Intellectual Property</h2>
          <p>
            All content on this website is the property of our company and is protected by intellectual property laws.
            You may not use our content without permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Disclaimer</h2>
          <p>
            Our website is provided on an "as is" and "as available" basis. We make no warranties or representations
            about the accuracy or completeness of the content.
          </p>
        </section>

        {/* Add more sections for other terms and conditions as needed */}
      </div>
    </div>
    </div>
  </section>
  );
};

export default Terms;
