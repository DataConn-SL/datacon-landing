"use client"

import { Link } from "@heroui/link"
import { button as buttonStyles } from "@heroui/theme"
import { useState } from "react"
import { siteConfig } from "@/config/site"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="border-b border-gray-800 bg-black-100/80 backdrop-blur-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-500 to-gray-300 flex items-center justify-center">
              <span className="text-black font-bold">D</span>
            </div>
            <span className="font-bold text-lg">DataConn</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
            Members
          </Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href={siteConfig.links.login}
            className={buttonStyles({
              variant: "flat",
              radius: "full",
              color: "default",
              class: "bg-transparent text-white hover:bg-white/10",
            })}
          >
            Login
          </Link>
          <Link
            href={siteConfig.links.signup}
            className={buttonStyles({
              color: "default",
              radius: "full",
              variant: "shadow",
              class: "bg-gray-700 hover:bg-gray-600",
            })}
          >
            Sign Up
          </Link>
        </div>

        <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"}
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black-200 border-t border-gray-800">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors py-2">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors py-2">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors py-2">
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors py-2">
              Contact
            </Link>
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href={siteConfig.links.login}
                className={buttonStyles({
                  variant: "flat",
                  radius: "full",
                  color: "default",
                  class: "bg-transparent text-white hover:bg-white/10 justify-center",
                })}
              >
                Login
              </Link>
              <Link
                href={siteConfig.links.signup}
                className={buttonStyles({
                  color: "default",
                  radius: "full",
                  variant: "shadow",
                  class: "bg-gray-700 hover:bg-gray-600 justify-center",
                })}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

