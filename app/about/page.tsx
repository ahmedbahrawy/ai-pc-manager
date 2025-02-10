import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            About Us
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Leading the way in AI innovation and digital transformation, empowering businesses to thrive in the digital age.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To revolutionize businesses through innovative AI solutions and digital transformation, making advanced technology accessible and impactful for organizations of all sizes.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the global leader in AI-driven business solutions, creating a future where technology enhances human potential and drives sustainable growth.
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Innovation</h3>
              <p className="mt-4 text-gray-600 text-center">
                Constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Collaboration</h3>
              <p className="mt-4 text-gray-600 text-center">
                Working closely with our clients to understand their needs and deliver tailored solutions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Excellence</h3>
              <p className="mt-4 text-gray-600 text-center">
                Maintaining the highest standards in everything we do, from code quality to customer service.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Leadership Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-32 w-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">John Smith</h3>
              <p className="text-gray-600 text-center">Chief Executive Officer</p>
              <p className="mt-4 text-gray-600 text-center">
                20+ years of experience in technology leadership and innovation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-32 w-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Sarah Johnson</h3>
              <p className="text-gray-600 text-center">Chief Technology Officer</p>
              <p className="mt-4 text-gray-600 text-center">
                Expert in AI and machine learning with 15+ years of experience.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-32 w-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Michael Chen</h3>
              <p className="text-gray-600 text-center">Chief Innovation Officer</p>
              <p className="mt-4 text-gray-600 text-center">
                Pioneering AI solutions with 12+ years in digital transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">10+</h3>
              <p className="mt-2 text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">500+</h3>
              <p className="mt-2 text-gray-600">Clients Worldwide</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">100+</h3>
              <p className="mt-2 text-gray-600">AI Solutions Deployed</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">50+</h3>
              <p className="mt-2 text-gray-600">Industry Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 