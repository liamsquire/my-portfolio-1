import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from '../assets/image-1.jpg' 

const features2 = [
  {
    name: 'Git and Github',
    description:
      'Git is an awesome tool and GitHub is a great service for helping track changes in a coded based project and sharing that code with others, either privately or publicly. ',
    icon: <FontAwesomeIcon icon="fa-brands fa-github" className="h-8 w-8" />,
  },
  {
    name: 'Javascript',
    description:
      'Javascript is the foundation in doing nice things on websites. From button click effects, to loading new content, switching colours and a whole host more. ',
      icon: <FontAwesomeIcon icon="fa-brands fa-js" className="h-8 w-8" />,
  },
  {
    name: 'HTML 5',
    description:
      'HTML - the markup language of the web. Crucial in developing websites and web based apps.',
      icon: <FontAwesomeIcon icon="fa-brands fa-html5" className="h-8 w-8" />,
  },
  {
    name: 'CSS',
    description:
      'Before CSS, styling up web pages was a chore and messy. CSS revolutionsied how we handle content and presentation.',
      icon: <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="h-8 w-8" />,
  },
  {
  name: 'SCSS',
  description:
    'SCSS is a layer above CSSI it allows us to do some fancy programmming style things with CSS. ',
    icon: <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="h-8 w-8" />,
},
{
  name: 'PHP',
  description:
    'PHP - a tool used on many millions of websites.  All those WordPress websites are built using PHP.',
    icon: <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="h-8 w-8" />,
},
]

const projects = [
    {
      name: 'Enterprise level website theming',
      description: 'A reusable, rebrandable website theme',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
      icons: [<FontAwesomeIcon icon="fa-brands fa-html5" className="mr-2 h-7 w-7 text-orange-600" />, <FontAwesomeIcon icon="fa-brands fa-js" className="mr-2 h-30 w-30 text-yellow-500" />,<FontAwesomeIcon icon="fa-brands fa-php" className="mr-2 h-30 w-30 text-purple-500" />, <FontAwesomeIcon icon="fa-solid fa-image" className="mr-2 h-30 w-30 text-gray-500" />],
      pets: ['dog', 'cat']
    },
    {
      name: 'Customised Content',
      description: 'Geo-IP Customised Content Solution',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
      icons: [<FontAwesomeIcon icon="fa-brands fa-html5" className="mr-2 h-7 w-7 text-orange-600" />,<FontAwesomeIcon icon="fa-location-dot" className="mr-2 h-7 w-7 text-green-600" />, <FontAwesomeIcon icon="fa-brands fa-php" className="mr-2 h-30 w-30 text-purple-500" />, <FontAwesomeIcon icon="fa-brands fa-js" className="mr-2 h-30 w-30 text-yellow-500" />],
    },
    {
        name: 'Reiki Rocks NI',
        description: 'A Wordpress based website',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
      icons: [<FontAwesomeIcon icon="fa-brands fa-github" className="mr-2 h-30 w-30 text-black-500" />, <FontAwesomeIcon icon="fa-brands fa-js" className="mr-2 h-30 w-30 text-yellow-500" />, <FontAwesomeIcon icon="fa-brands fa-wordpress" className="mr-2 h-30 w-30 text-blue-300" />],
    },
    {
        name: 'Reiki Rocks NI',
        description: 'A Wordpress based website',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
        icons: <FontAwesomeIcon icon="faGithub" />,
      },
      {
        name: 'Wordpress',
        description: 'Reiki Rocks NI',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
        icons: <FontAwesomeIcon icon="faGithub" />,
      },
      {
        name: 'Wordpress',
        description: 'Reiki Rocks NI',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
        icons: [<FontAwesomeIcon icon="fa-brands fa-js" className="mr-2 h-30 w-30 text-yellow-500" />, <FontAwesomeIcon icon="fa-brands fa-wordpress" className="mr-2 h-30 w-30 text-blue-300" />],
      },            
  ]

  
  export default function Example() {
    return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto pt-16 pb-16 sm:pt-8 sm:pb-24 lg:pt-16 lg:pb-32 lg:max-w-none">
              {/* <div className="flex items-stretch flex-wrap"> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {projects.map((project, index) => (

                    <div className="sm:w-full lg:w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mr-2 mb-10 flex flex-col">
                            
                      
                  

                    <a href="#">
                        <img className="rounded-t-lg" src={image1} alt={project.description} />
                    </a>
                    <div className="p-5 flex flex-col h-full">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                          {/* <p className="text-3xl mb-3">{project.icons}</p> */}
                        {/* <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-auto">
                            Read more
                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a> */}
                        
                        <div className="mt-auto">
                          <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full mt-4 mr-2">HTML 5</span>
                          <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full mt-4 mr-2">Javascript</span>
                          <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full mt-4 mr-2">PHP</span>
                          <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full mt-4 mr-2">CSS</span>
                          <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full mt-4 mr-2">Adobe Photoshop</span>
                        </div>
                    </div>
                </div>
                ))}
                </div>



            <h2 className="text-3xl font-extrabold text-gray-900 pt-5 pb-5">Portfolio</h2>
            <p>Just a few of the many projects I've worked on.</p>
  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
              {projects.map((project) => (
                <div key={project.name} className="group relative mb-16">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={project.href}>
                      <span className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{project.description}</p>
                  <p className="text-3xl">{project.icons}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Technologies</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Some of the main technologies I use
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            I'm always learning and keen to try out new technologies so I can continually improve older code bases or be able to do new things in smarter ways.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features2.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
      </div>
    )
  }
  