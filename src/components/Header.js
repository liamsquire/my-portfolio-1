import logo from '../assets/logo-1.svg';
import laptopImg from '../assets/laptop-v1.svg';
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
    <Popover>
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 w-full lg:pb-28 xl:pb-32">
 

          
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center">
                
                  <div className="flex items-center w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Logo</span>
                      <img
                        alt="Logo"
                        className="h-8 w-30 sm:h-10"
                        src={logo}
                      />
                    </a>
                    
                  </div>
                </div>
                <div className="hidden md:block md:space-x-8 ml-auto">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="ml-auto md:ml-10">
                  <a href="#" download="Liam - Resume.pdf">
                    <button type="submit" className="px-4 py-1 text-sm text-white font-semibold rounded-full border bg-gradient-to-br bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-600 hover:to-red-500 hover:border-transparent hover:text-white focus:outline-none">
                    <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" className="mr-1" /> Download CV
                    </button>
                  </a>
                </div>
                <div className="ml-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                       
                        <FontAwesomeIcon icon="fa-solid fa-bars" />
                      </Popover.Button>
                    </div>
              </nav>
            </div>

            

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-10">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block mb-3">Hi there, </span>{' '}
                <span className="block text-indigo-600"><span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500">I'm Liam</span> ????????</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I'm a Fullstack Web Developer with over 20 years experience in building websites and web apps that make a difference. Feel free to browse some of my work or get in touch.
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
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-gradient-to-br bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-600 hover:to-red-500 hover:border-transparent text-white hover:text-white focus:outline-none md:py-4 md:text-lg md:px-10"
                  >
                      <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" className="mr-3" /> Download CV
                  </a>
                </div>
              </div>
              
              
            </div>
            <div className="hidden md:block">

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <img src={laptopImg} alt="Laptop" />
              </div>

              
            </div>
          </main>
        </div>
      </div>
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
                className="absolute z-10 top-0 right-0 inset-y-0 border-left-4 transition transform origin-top-right md:hidden h-screen"
              >
                <div className="bg-white text-gray ring-1 ring-black ring-opacity-5 h-full w-60">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="../assets/logo-1.svg"
                        alt=""
                      />
                    </div>
                    <div className="mr-2">
                      <div className="w-full bg-gray border-bottom ">
                      <Popover.Button className="bg-white rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 w-full">
                        <span className="sr-only">Close main menu</span>
                        <FontAwesomeIcon icon="fa-solid fa-xmark" aria-hidden="true" />
                      </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="px-0 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-2 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-b border-gray-200">
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
  )
}

