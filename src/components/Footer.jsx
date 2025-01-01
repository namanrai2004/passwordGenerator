import React from 'react'
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";



const Footer = () => {
  return (
    <>
            <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-blue-600 rounded-full flex items-center justify-center">
                {/* Placeholder for Lock Icon */}
                <span className="text-white text-xs font-bold"><TbLockPassword /></span>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Password Generator
              </span>
            </div>
            <p className="text-gray-600">
              Generate secure, random passwords to keep your accounts safe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Generate Password
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Password History
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Password Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Security Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Connect
            </h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <div className="h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-xs font-bold"><FaGithub /></span>
                </div>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <div className="h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-xs font-bold"><TiSocialTwitter /></span>
                </div>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <div className="h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-xs font-bold"><TiSocialLinkedin /></span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Password Generator. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer