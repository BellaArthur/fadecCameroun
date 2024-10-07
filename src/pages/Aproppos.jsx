import React from 'react'
import { Phone, Mail, Facebook, Twitter, Instagram, Youtube, CircleCheckBig, BriefcaseBusiness, Handshake, MessagesSquare, Quote, HandHeart, CircleCheck  } from 'lucide-react'
import fadec6 from '../assets/img/Fadec6.jpg'
import fadec1 from '../assets/img/Fadec1.jpg'
import logo from '../assets/img/Logo_fadec.png'

const Aproppos = () => {
  return (
    <div>
        <div className=" flex flex-col px-4 sm:px-8 py-4 bg-green-100">

            <div className="flex flex-col space-y-12 md:flex-row md:gap-4 ">
                <div className="flex flex-col space-y-4 md:w-1/2">

                    <h2 className='text-xl font-bold'>A Proppos de Nous</h2>
                    <p className='text-base text-justify  tex-gray-500'>
                        Crée  en 2014, FADEC Cameroun (FADEC) est une association à but non-lucrative dont la mission est de contribuer au bien-être des femmes, des filles, et des jeunes en général en participant à l'amélioration de leurs conditions de vie en Afrique Centrale. C'est dans cette perspective que l'association se focalise sur les causes sociales, l'éducation, l'entreprenariat, le respect des Droits Humains et le volontariat. 
                    </p>
                    <div className="flex flex-col items-center space-y-2">
                        <p className='text-base font-bold text-brandPrimary'>Restez Connectés</p>
                        <div className="flex flex-row space-x-2">
                            <div className="rounded-full bg-white py-2 px-2">
                                <Facebook className='h-5 w-5 text-brandPrimary' />
                            </div>
                            <div className="rounded-full bg-white py-2 px-2">
                                <Twitter className='h-5 w-5 text-brandPrimary' />
                            </div>
                            <div className="rounded-full bg-white py-2 px-2">
                                <Instagram className='h-5 w-5 text-brandPrimary' />
                            </div>
                            <div className="rounded-full bg-white py-2 px-2">
                                <Youtube className='h-5 w-5 text-brandPrimary' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <img className='rounded-md sahdow-lg md:w-[350px] lg:w-[450px]' src={fadec6} alt="" />
                </div>
            </div>

            <div className="flex flex-col items-center mt-12 mb-10">
                <img className='w-20 h-20' src={logo} alt="" />
                <p className='text-sm'>FADEC Cameroun (FADEC) est autorisée au Cameroun(N*0000217/A/MINATD/SG/SDLP/SAC).</p>
            </div>
            
        </div>

        {/* Vision and mission container*/}
        <div className=" px-4 sm:px-8 py-4 mt-4 bg-white">

            <div className="flex flex-col items-center space-y-8">
                <div className="">
                    <img className='rounded-md' src={fadec1} alt="" />
                </div>
                <div className="">
                    <h3 className='text-left text-xl font-bold md:text-center'>Nous bâtissons un monde meilleur pour les moins privilégiés en Afrique Centrale</h3>
                    <p></p>
                </div>
            </div>

            <div className="mt-12 flex flex-col ">
                <div className="text-center mb-14 ">
                    <h2 className='text-3xl font-bold'>Vision & Mission</h2>
                    <p className='text-sm font-semibold tex-gray-400 mt-8 md:px-20'>
                        Nous travaillons à améliorer de manière significative les conditions de vie des femmes, des jeunes filles et des jeunes gens.
                    </p>
                </div>
                
                <div className="flex flex-col space-y-8 md:flex-row md:gap-4 md:space-y-0">

                    {/*mission cart */}
                    <div className="flex flex-col items-center md:gap-3">
                        <div className="mb-2 rounded-full p-2 bg-brandPrimary">
                            <HandHeart className='text-white' />
                        </div>
                        <div className="text-center ">
                            <h3 className='mb-2 text-lg font-bold'>Promotion des droits de la femme et de la jeune fille</h3>
                            <p className='text-sm'>
                                Nous travaillons pour promouvoir l'égalité des sexes et permettre à chaque femme et jeune fille de réaliser son plein potentiel.
                            </p>
                        </div>
                    </div>
                    {/*end of mission cart */}
                    {/*mission cart */}
                    <div className="flex flex-col items-center md:gap-3">
                        <div className="mb-2 rounded-full p-2 bg-brandPrimary">
                            <Handshake className='text-white' />
                        </div>
                        <div className="text-center">
                            <h3 className='mb-2 text-lg font-bold'>Amélioration du dévelopement des jeunes.</h3>
                            <p className='text-sm'>
                                Nous accompagnons les jeunes dans la formation et l'entreprenariat et les aidons à s'engager dans leur communautés et à devenir des agents de changements.
                            </p>
                        </div>
                    </div> 
                    {/*end of mission cart */}
                    {/*mission cart */}
                    <div className="flex flex-col items-center md:gap-3">
                        <div className="mb-2 rounded-full p-2 bg-brandPrimary">
                            <MessagesSquare className='text-white' />
                        </div>
                        <div className="text-center">
                            <h3 className='mb-2 text-lg font-bold'>Renforcement de la communication pour le dévelopement:</h3>
                            <p className='text-sm'>
                                Nous facilitons l'access à l'information et favorisons le dialogue dans et entre les communautés pour promouvoir le dévelopement durable.
                            </p>
                        </div>
                    </div>
                    {/*end of mission cart */}
                </div>
            </div>
        </div>
        {/*end of vision and mission container */}

        {/*Gaols container*/}
        <div className=" mt-10 px-4 sm:px-8 pt-4 pb-12 bg-green-100">
            <div className="text-center mb-6">
                <h2 className='text-3xl font-bold'>Nos Objectifs</h2>
                <p className='text-left text-sm font-semibold tex-gray-400 mt-8'>
                    Nous nous focalisons sur les ODDs suivants dans nos missions:
                </p>
            </div>

            <ul className='space-y-2'>
                <div className="flex flex-row gap-3">
                    <CircleCheck className='w-5 h-5' />
                    <p className='text-sm'>Réduction de la pauvreté</p>
                </div>
                <div className="flex flex-row gap-3">
                    <CircleCheck className='w-5 h-5' />
                    <p className='text-sm'>Bonne santé et bien-être</p>
                </div>
                <div className="flex flex-row gap-3">
                    <CircleCheck className='w-5 h-5' />
                    <p className='text-sm'>Education de qualité</p>
                </div>
                <div className="flex flex-row gap-3">
                    <CircleCheck className='w-5 h-5' />
                    <p className='text-sm'>Egalité des genres</p>
                </div>
                <div className="flex flex-row gap-3">
                    <CircleCheck className='w-5 h-5' />
                    <p className='text-sm'>Paix, justice et institutions fortes</p>
                </div>
                <div className="flex flex-row gap-3">
                    <CircleCheck className='w-5 h-5' />
                    <p className='text-sm'>Travail décent et croissance économique</p>
                </div>
                <div className="flex flex-row gap-3">
                    <CircleCheck className='w-5 h-5' />
                    <p className='text-sm'>Réduction des inégalités</p>
                </div>
            </ul>

            <div className=""></div>
        </div>
        {/*end of Goals container*/}
    </div>
  )
}

export default Aproppos
