import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import azureFundamentals from '../assets/certifications/microsoft-certified-azure-fundamentals.png'
import googleDataAnalytics from '../assets/certifications/google-data-analytics-certificate.2.png'
import googlePM from '../assets/certifications/google-data-analytics-certificate.2.png'
import divider1 from '../assets/svg-wave-3.svg'

const certifications = [
  {
    name: 'Microsoft Azure Fundamentals AZ-900',
    image: azureFundamentals,
    description:
      '<p class="mb-4">Azure Fundamentals certification proves knowledge of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, as well as Azure pricing and support. Familiarity with the general technology concepts, including concepts of networking, storage, compute, application support, and application development.</p><p>Azure Fundamentals can be used to prepare for other Azure role-based or specialty certifications, but it is not a prerequisite for any of them.</p>',
      icon: <FontAwesomeIcon icon="fa-brands fa-google" className="h-8 w-8"/>,
      link: "https://www.credly.com/badges/d588e46f-b67d-4cd9-9a96-6e64ec9ffd53/public_url",
  },
  {
    name: 'Google Project Management Professional Certificate',
    image: googlePM,
    description:
      '<p class="mb-4">Google Project Management Career Certificate – a rigorous, hands-on program that covers traditional and Agile project management methodologies throughout the life cycle of a project. Consisting of six courses, developed by Google, that include hands-on, practice-based assessments designed to prepare for roles in Project Management. Participants are competent in initiating, planning and running both traditional and agile projects.</p>',
      icon: <FontAwesomeIcon icon="fa-brands fa-google" className="h-8 w-8"/>,
      link: "https://www.credly.com/badges/d588e46f-b67d-4cd9-9a96-6e64ec9ffd53/public_url",
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    image: googleDataAnalytics,
    description:
      '<p>Google Data Analytics Certificate - a rigorous, hands-on program over eight courses that covers the entire scope of the data analysis process. From asking the right questions, sourcing and verifying data, cleaning data, processing data, querying data with programming and tools including R Programming, SQL and spreadsheets, to data visualisation (data viz) via Tableau, RStudio and spreadsheets.</p>',
      icon: <FontAwesomeIcon icon="fa-brands fa-google" className="h-8 w-8"/>,
      link: "https://www.credly.com/badges/face36c5-bb2c-4dfa-8166-ced440f6f7fa/public_url",
  },
  {
    name: 'ITIL Certification',
    description:
      'Association of Project Management Group (APMG) ITIL Foundation Certificate.',
      icon: <FontAwesomeIcon icon="fa-brands fa-html5" className="h-8 w-8" />,
  },
]
  
  export default function Example() {
    return (
    <div>

<img src={divider1} alt="React Logo" className="w-full"/>
        
      <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <FontAwesomeIcon icon="fa-solid fa-award" className="text-pink-500"/><span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-blue-500"><FontAwesomeIcon icon="fa-solid fa-award" className="mr-1 -ml-4"/>Certifications</span>
          </p>
          {/* <p className="mt-4 mb-10 max-w-2xl text-xl lg:mx-auto">
            The stamp of approval. 
          </p> */}
        </div>

        

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-12 md:gap-y-12">
            {certifications.map((cert) => (
              <div key={cert.name} className="relative mb-10 h-full">
                <dt>

                  <div className="text-center">
                    <p className="text-center mb-4">
                      <img src={cert.image} alt={cert.name} className="text-center mx-auto" />
                    </p>
                  </div>
                  <p className="text-lg leading-6 font-medium text-gray-900">
                    {cert.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500"><div dangerouslySetInnerHTML={{ __html: cert.description }} /></dd>
                <dd className="mt-6 text-base"><button type="submit" className="btn btn-blue px-4 py-1 text-sm text-white font-semibold border bg-gradient-to-br bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-600 hover:to-red-500 hover:border-transparent hover:text-white focus:outline-none  align-baseline "><a href={cert.link} title={cert.name}><FontAwesomeIcon icon="fa-solid fa-award" className="mr-1"/> View Certificate</a></button>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
      </div>
    )
  }
  