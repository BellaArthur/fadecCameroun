import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import fadec5 from '../assets/img/Fadec5.jpg'
import fadec1 from '../assets/img/Fadec1.jpg'
import fadec4 from '../assets/img/Fadec4.jpg'
import fadec7 from '../assets/img/Fadec7.jpg'
import fadec3 from '../assets/img/Fadec3.jpg'


function Home() {

  return (
    <div className=" pt-18 ">
      {/*Hero section*/}
      <div className="flex flex-col items-center space-y-8 px-4 pt-10 pb-16 sm:px-8 bg-green-100">
        <h1 className='text-4xl font-extrabold text-brandPrimary'>FADEC Cameroun</h1>
        <h3 className='text-lg text-center font-semibold px-8 md:px-28'>Bâtir un monde <span className='text-brandSecondary'>meilleur</span> pour les moins privilégiés en Afrique Centrale</h3>
        <div className="flex flex-row items-center gap-4">
          <button className='px-4 py-2 text-white font-semibold text-sm bg-brandPrimary rounded-lg hover:bg-green-700'><Link to="/partenariats">Soutnez-Nous</Link></button>
          <button className='px-4 py-2 flex text-brandSecondary font-semibold text-sm bg-transparent rounded-lg hover:bg-brandSecondary hover:text-white '><Link className='flex' to="/programmes">Activités <ChevronRight className='w-5 h-5' /></Link></button>
        </div>
      </div>
      {/*Hero section*/}

      {/*About us*/}
      <div className="flex flex-col space-y-10 px-4 pt-10 pb-16 sm:px-8 md:grid md:grid-cols-2 md:space-y-0 md:gap-4 ">
        <div className="pt-2">
          <img className='rounded-lg md:h-[200px]' src={fadec5} alt="" />
        </div>
        <div className="space-y-4">
          <h2 className='text-2xl font-bold text-brandPrimary text-left'>A Propos de Nous</h2>
          <p className='text-left text-sm '>
            Crée en 2017, FADECameroun est une association à but non-lucrative dont la mission est de contribuer au bien-être des femmes, des jeunes filles, et des jeunes et d'améliorer leurs vies pour leur plein dévelopement tout en assurant un dévelopement durable pour nos communautés.
          </p>
          <button className='px-4 py-2 flex text-brandSecondary font-semibold text-sm bg-transparent rounded-lg hover:bg-brandSecondary hover:text-white '><Link className='flex' to="/a-propos">En savoir plus <ChevronRight className='w-5 h-5' /></Link></button>
        </div>
      </div>
      {/*About us*/}

      {/*Activities*/}
      <div className="px-4 sm:px-8 pt-12 pb-10 flex flex-col gap-8 md:gap-3 md:flex-row">
            {/*cart */}
            <div className="flex flex-col items-start pb-4 rounded-lg border border-gray-200 shadow-md">
                <img className='object-cover rounded-lg' src={fadec1} alt="" />
                <h3 className='text-lg font-bold mt-3'>Autonomisation des femmes en milieu rural</h3>
                <button className='mt-3 px-4 py-2 flex text-brandSecondary font-semibold text-sm bg-transparent rounded-lg hover:bg-brandSecondary hover:text-white '><Link className='flex' to="/programmes/autonomisation-des-femmes-en-milieu-rural">En savoir plus <ChevronRight className='w-5 h-5' /></Link></button>
            </div>
            {/*cart */}
            {/*cart */}
            <div className="flex flex-col items-start pb-4 rounded-lg border border-gray-200 shadow-md">
                <img className='object-cover rounded-lg' src={fadec3} alt="" />
                <h3 className='text-lg font-bold mt-3'>En faveur de l'éducation de la jeune fille</h3>
                <button className='mt-3 px-4 py-2 flex text-brandSecondary font-semibold text-sm bg-transparent rounded-lg hover:bg-brandSecondary hover:text-white '><Link className='flex' to="/programmes/sensibilisation-en-faveur-de-l-education-de-la-jeune-fille">En savoir plus <ChevronRight className='w-5 h-5' /></Link></button>
            </div>
            {/*cart */}
            {/*cart */}
            <div className="flex flex-col items-start pb-4 rounded-lg border border-gray-200 shadow-md">
                <img className='object-cover rounded-lg' src={fadec4} alt="" />
                <h3 className='text-lg font-bold mt-3'>Education pour les plus défavorisés</h3>
                <button className='mt-3 px-4 py-2 flex text-brandSecondary font-semibold text-sm bg-transparent rounded-lg hover:bg-brandSecondary hover:text-white '><Link className='flex' to="/programmes/aide-a-l-edcation-pour-les-plus-défvorisés">En savoir plus <ChevronRight className='w-5 h-5' /></Link></button>
            </div>
            {/*cart */}
        </div>
      {/*end of Activities*/}
      
       

       
    </div>
  )
}

export default Home
