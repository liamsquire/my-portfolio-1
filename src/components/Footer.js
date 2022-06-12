import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub);
}
  
  export default function Footer() {
    return (
    <div>
 
      <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mt-2 ">
            <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">Thank you</p>
            <p className="text-lg leading-6 font-medium text-gray-900">Thanks for stopping by. Feel free to get in touch.</p>
        </div>


        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">

{/* Begin Col */}
              <div className="relative">
                <dt>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-10">Thank you</p>
                  <p className="text-lg leading-6 font-medium text-gray-900">Thanks for stopping by.</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">feature.description</dd>
              </div>
{/* End Col */}     

{/* Begin Col */}
<div className="relative">
                <dt>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-10">Thank you</p>
                  <p className="text-lg leading-6 font-medium text-gray-900">Thanks for stopping by.</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">feature.description</dd>
              </div>
{/* End Col */}     

{/* Begin Col */}
<div className="relative">
                <dt>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-10">Thank you</p>
                  <p className="text-lg leading-6 font-medium text-gray-900">Thanks for stopping by.</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">feature.description</dd>
              </div>
{/* End Col */}     



          </dl>
        </div>
      </div>
    </div>
      </div>
    )
  }
  