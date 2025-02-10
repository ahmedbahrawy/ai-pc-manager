import React from 'react';

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Our Certifications
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Industry-recognized certifications and accreditations that demonstrate our expertise and commitment to excellence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Certification Cards */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="h-20 w-20 mx-auto mb-4">
              {/* Add certification logo/image here */}
              <div className="bg-gray-200 h-full w-full rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-2xl">ISO</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">ISO 27001</h3>
            <p className="mt-4 text-gray-600 text-center">
              Information Security Management System (ISMS) certification ensuring the highest standards of data security.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="h-20 w-20 mx-auto mb-4">
              {/* Add certification logo/image here */}
              <div className="bg-gray-200 h-full w-full rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-2xl">AI</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">AI Excellence</h3>
            <p className="mt-4 text-gray-600 text-center">
              Certified expertise in artificial intelligence and machine learning technologies.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="h-20 w-20 mx-auto mb-4">
              {/* Add certification logo/image here */}
              <div className="bg-gray-200 h-full w-full rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-2xl">MS</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">Microsoft Gold Partner</h3>
            <p className="mt-4 text-gray-600 text-center">
              Highest level of Microsoft partnership demonstrating our expertise in Microsoft technologies.
            </p>
          </div>
        </div>

        {/* Industry Recognition Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Industry Recognition</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900">Awards</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600">🏆</span>
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">Innovation Excellence Award 2023</h4>
                    <p className="text-gray-600">Recognition for groundbreaking AI solutions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600">🏆</span>
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">Tech Leader Award 2023</h4>
                    <p className="text-gray-600">Leadership in technology innovation</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900">Partnerships</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600">🤝</span>
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">Cloud Platform Partners</h4>
                    <p className="text-gray-600">Strategic partnerships with leading cloud providers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600">🤝</span>
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">Research Institutions</h4>
                    <p className="text-gray-600">Collaborations with top research institutions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 