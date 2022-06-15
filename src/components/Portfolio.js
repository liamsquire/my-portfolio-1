import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from '../assets/image-1.jpg' 

const skills = [
  {
    name: 'React',
    description:
      'A Javascript library for building user interfaces, such as this website.',
      icon: <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="h-8 w-8" />,
  },
  {
    name: 'Javascript',
    description:
      'One of the core technologies of the web. ',
      icon: <FontAwesomeIcon icon="fa-brands fa-js" className="h-8 w-8" />,
  },
  {
    name: 'PHP',
    description:
      'A programming language used on many millions of websites.',
      icon: <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="h-8 w-8" />,
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
      'A powerful aid in styling websites.',
      icon: <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="h-8 w-8" />,
  },
  {
  name: 'SCSS',
  description:
    'SCSS is a preprocessor scripting language that is compiled into CSS.',
    icon: <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="h-8 w-8" />,
},
{
  name: 'Git',
  description:
    'Git is a great tool to help track changes in software and allows us to share that code with others, such as a private team or the public.',
  icon: <FontAwesomeIcon icon="fa-brands fa-github" className="h-8 w-8" />,
},
{
  name: 'SQL / MySQL',
  description:
    'I often use MySQL for storing data and SQL for querying, updating and deleting data.',
    icon: <FontAwesomeIcon icon="fa-solid fa-database" className="h-6 w-6" />,
},
{
  name: 'Bootstrap',
  description:
    'A free and open-source CSS framework supporting responsive, mobile-first front-end web development.',
    icon: <FontAwesomeIcon icon="fa-brands fa-bootstrap" className="h-8 w-8"/>,
},
{
  name: 'Zurb Foundation',
  description:
    'A free and open-source responsive front-end framework',
    icon: <FontAwesomeIcon icon="fa-solid fa-wand-magic-sparkles" className="h-6 w-6" />,
},
{
  name: 'Tailwind CSS',
  description:
    'Tailwind CSS is a framework to quickly style up websites. This website uses Tailwind CSS.',
    icon: <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="h-8 w-8" />,
},
{
  name: 'Terminal Four Site Manager',
  description:
    'An enterprise Content Management System.',
    icon: <FontAwesomeIcon icon="fa-solid fa-align-left" className="h-6 w-6"/>,
},
{
  name: 'Wordpress',
  description:
    'The most popular Content Management System on the internet.',
    icon: <FontAwesomeIcon icon="fa-brands fa-wordpress" className="h-8 w-8"/>,
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
      technologies: ['HTML', 'Javascript', 'CSS', 'PHP', 'T4 CMS','Adobe Photoshop'],
    },
    {
      name: 'Customised Content',
      description: 'Geo-IP Customised Content Solution',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
      icons: [<FontAwesomeIcon icon="fa-brands fa-html5" className="mr-2 h-7 w-7 text-orange-600" />,<FontAwesomeIcon icon="fa-location-dot" className="mr-2 h-7 w-7 text-green-600" />, <FontAwesomeIcon icon="fa-brands fa-php" className="mr-2 h-30 w-30 text-purple-500" />, <FontAwesomeIcon icon="fa-brands fa-js" className="mr-2 h-30 w-30 text-yellow-500" />],
      technologies: ['HTML', 'CSS', 'Javascript', 'PHP', 'Max-mind GEO IP Database', 'T4 CMS','Adobe Photoshop'],
    },
    {
        name: 'Reiki Rocks NI',
        description: 'A Wordpress and Bootstrap based website',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
      icons: [<FontAwesomeIcon icon="fa-brands fa-github" className="mr-2 h-30 w-30 text-black-500" />, <FontAwesomeIcon icon="fa-brands fa-js" className="mr-2 h-30 w-30 text-yellow-500" />, <FontAwesomeIcon icon="fa-brands fa-wordpress" className="mr-2 h-30 w-30 text-blue-300" />],
      technologies: ['Wordpress', 'HTML', 'CSS', 'Bootstrap', 'Javascript', 'PHP', 'Adobe Photoshop']
    },
    {
        name: 'Funding and Scholarships Finder',
        description: 'Helping students find scholarships',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
        icons: <FontAwesomeIcon icon="faGithub" />,
        technologies: ['HTML', 'CSS', 'Javascript', 'DataTables', 'PHP', 'T4 CMS', 'Adobe Photoshop'],
      },
      {
        name: 'Digital Scholars',
        description: 'Connecting digital experts to power innovation and growth',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
        icons: <FontAwesomeIcon icon="faGithub" />,
        technologies: ['HTML', 'CSS', 'Javascript', 'DataTables', 'PHP', 'T4 CMS', 'Adobe Photoshop'],
      },
      {
        name: 'Bespoke Application for Future Learn MOOC',
        description: 'Identity questionaire and auto-profiling',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
        icons: [<FontAwesomeIcon icon="fa-brands fa-js" className="mr-2 h-30 w-30 text-yellow-500" />, <FontAwesomeIcon icon="fa-brands fa-wordpress" className="mr-2 h-30 w-30 text-blue-300" />],
        technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'Adobe Photoshop'],
      },            
  ]

  
  export default function Example() {
    return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto pt-16 pb-16 sm:pt-8 sm:pb-24 lg:pt-16 lg:pb-32 lg:max-w-none">
              {/* <div className="flex items-stretch flex-wrap"> */}
              <h2 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500 mb-[60px]">
              Portfolio
            </h2>
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
                            {
                              project.technologies.map((technology, index) => (
                                  <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full mt-4 mr-2">{technology}</span>
                              ))
                            }
                        </div>
                        
                        
                    </div>
                </div>
                ))}
                </div>




          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500">Technologies</span> &amp; <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500">Skills</span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            I'm always learning and adapting to the latest technolgies so I can continually improve older applications and find new ways of doing things.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {skills.map((skill) => (
              <div key={skill.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {skill.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{skill.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{skill.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
      </div>
    )
  }
  