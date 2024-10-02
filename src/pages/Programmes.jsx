import React from 'react'
import fadec6 from '../assets/img/Fadec6.jpg'
import fadec1 from '../assets/img/Fadec1.jpg'
import fadec4 from '../assets/img/Fadec4.jpg'
import fadec3 from '../assets/img/Fadec3.jpg'
import { ChevronRight } from 'lucide-react'

const Programmes = () => {
  return (
    <div>
        {/* **** */}
        <div className="px-4 sm:px-8 py-8 bg-green-100 flex flex-col md:grid md:grid-cols-2 gap-3">
            <div className="flex flex-col">
                <h3 className='text-xl font-bold'>Programmes</h3>
                <p className='mt-4'>Tous nos progammes contribuent:</p>
                <ul className='list-disc mt-2 text-justify pl-5'>
                    <li className=''>
                        Au bien-être des femmes désavantageés, aux jeunes filles, aux jeunes gens en général et au respect de leurs droits.
                    </li>
                    <li>
                        A aider et equiper les jeunes à découvrir leurs talents pour pouvoir contribuer au renforceement de leurs capacités et à leur dévelopement.
                    </li>
                    <li>
                        A soutenir les acteurs locaux dans l'accomplissement des ODDs.
                    </li>
                </ul>
            </div>

            <img className='rounded-lg md:h-[300px]' src={fadec6} alt="" />
        </div>
        {/* **** */}

        <div className="px-4 sm:px-8 pt-12 pb-10 flex flex-col gap-8 md:gap-3 md:flex-row">
            {/*cart */}
            <div className="flex flex-col items-start pb-4 rounded-lg border border-gray-200 shadow-md">
                <img className='object-cover rounded-lg' src={fadec1} alt="" />
                <h3 className='text-lg font-bold mt-3'>Autonomisation des femmes en milieu rural</h3>
                <button className='mt-3 px-4 py-2 flex text-brandSecondary font-semibold text-sm bg-transparent rounded-lg hover:bg-brandSecondary hover:text-white '><a className='flex' href="/programmes/autonomisation-des-femmes-en-milieu-rural">En savoir plus <ChevronRight className='w-5 h-5' /></a></button>
            </div>
            {/*cart */}
            {/*cart */}
            <div className="flex flex-col items-start pb-4 rounded-lg border border-gray-200 shadow-md">
                <img className='object-cover rounded-lg' src={fadec3} alt="" />
                <h3 className='text-lg font-bold mt-3'>En faveur de l'éducation de la jeune fille</h3>
                <button className='mt-3 px-4 py-2 flex text-brandSecondary font-semibold text-sm bg-transparent rounded-lg hover:bg-brandSecondary hover:text-white '><a className='flex' href="/programmes/sensibilisation-en-faveur-de-l-education-de-la-jeune-fille">En savoir plus <ChevronRight className='w-5 h-5' /></a></button>
            </div>
            {/*cart */}
            {/*cart */}
            <div className="flex flex-col items-start pb-4 rounded-lg border border-gray-200 shadow-md">
                <img className='object-cover rounded-lg' src={fadec4} alt="" />
                <h3 className='text-lg font-bold mt-3'>Education pour les plus défavorisés</h3>
                <button className='mt-3 px-4 py-2 flex text-brandSecondary font-semibold text-sm bg-transparent rounded-lg hover:bg-brandSecondary hover:text-white '><a className='flex' href="/programmes/aide-a-l-edcation-pour-les-plus-défvorisés">En savoir plus <ChevronRight className='w-5 h-5' /></a></button>
            </div>
            {/*cart */}
        </div>
    </div>
  )
}

export default Programmes