import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-12">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold italic text-slate-800 mb-4">
            About Shortnest
          </h1>
          <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Shortnest simplifies URL shortening for efficient sharing. Easily
            generate, manage, and track your shortened links with our powerful
            yet intuitive platform. Whether for personal use or business needs,
            we provide reliable tools to optimize your online presence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <FaLink className="text-blue-500 text-3xl" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                Simple URL Shortening
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Experience the ease of creating short, memorable URLs in just a
                few clicks. Our intuitive interface and quick setup process
                ensure you can start shortening URLs without any hassle.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <FaShareAlt className="text-green-500 text-3xl" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                Powerful Analytics
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Gain insights into your link performance with our comprehensive
                analytics dashboard. Track clicks, geographical data, and
                referral sources to optimize your marketing strategies.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <FaEdit className="text-purple-500 text-3xl" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                Enhanced Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Rest assured with our robust security measures. All shortened
                URLs are protected with advanced encryption, ensuring your data
                remains safe and secure.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <FaChartLine className="text-red-500 text-3xl" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                Fast and Reliable
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Enjoy lightning-fast redirects and high uptime with our reliable
                infrastructure. Your shortened URLs will always be available and
                responsive, ensuring a seamless experience for your users.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 flex justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md sm:max-w-lg rounded-lg shadow-md"
              src="/images/img2.png"
              alt="Shortnest in action"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
