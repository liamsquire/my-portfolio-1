import logo from '../assets/logo-1.svg';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
// import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub);
}

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Example() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
<Popover>
  <div>
      <nav className="">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
 
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                       
                        <FontAwesomeIcon icon="fa-solid fa-bars" />
                      </Popover.Button>

            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <a href="#">
                  <img className="block h-8 w-auto" src={logo} alt="Logo" />
                </a>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">

                  <a href="#" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>

                  <a href="#" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>

                  <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Projects</a>

                  <a href="#" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </div>
              </div>
            </div>
            <div class="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a href="#" download="Liam - Resume.pdf">
                <button type="submit" className="px-4 py-1 text-sm text-white font-semibold rounded-full border bg-gradient-to-br bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-600 hover:to-red-500 hover:border-transparent hover:text-white focus:outline-none">
                <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" className="mr-3" /> CV
                </button>
              </a>
            </div>
          </div>
        </div>

        <div class="hidden" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1">

          {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
          </div>
        </div>
      </nav>
      </div>

<Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                  <div className="mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <FontAwesomeIcon icon="fa-solid fa-xmark" aria-hidden="true" />
                      </Popover.Button>
                    </div>

                    <div className="flex-grow ml-auto w-full">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-0 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                    </div>
                    
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                </Popover.Panel>
              </ Transition>
              </Popover>


        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-shrink">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    
                  <div className="mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                       
                        <FontAwesomeIcon icon="fa-solid fa-bars" />
                      </Popover.Button>
                    </div>

                    <div className="flex-grow w-full"><a href="#">
                      <span className="sr-only">Logo</span>
                      <img
                        alt="Logo"
                        className="h-8 w-30 sm:h-10"
                        src={logo}
                      />
                    </a></div>

                    
                    
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="ml-auto">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" /> Download CV
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                  <div className="mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <FontAwesomeIcon icon="fa-solid fa-xmark" aria-hidden="true" />
                      </Popover.Button>
                    </div>

                    <div className="flex-grow ml-auto w-full">
                      <img
                        className="h-8 w-auto"
                        src="../assets/logo-1.svg"
                        alt=""
                      />
                    </div>
                    
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block mb-3">Hi there, </span>{' '}
                <span className="block text-indigo-600">I'm Liam 👋😀</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I'm a Fullstack Web Developer with over 20 years experience in building websites and web apps that make a difference. Feel free to look at some of my work or get in touch.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Portfolio
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                      <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" className="mr-3" /> Download CV
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

    </div>
  )
}