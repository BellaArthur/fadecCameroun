import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, Facebook, Twitter, Instagram, Youtube, Users, HandCoins } from 'lucide-react'
import fadec4 from '../assets/img/Fadec4.jpg'
import minjec from '../assets/img/Minjec.jpg'
import planCam from '../assets/img/Plan-Cam.jpg'
import pnud from '../assets/img/pnud.jpg'
import unfpa from '../assets/img/unfpa.jpg'
import onuFemmes from '../assets/img/ONUfemmes.jpg'

const Partenariats = () => {
  return (
    <div>
        <div className="">

            {/* first */}
            <div className="  px-4 sm:px-8 pt-10 pb-16 flex flex-col gap-3 md:flex-row bg-green-100">

                <div className="flex flex-col">
                    <h3 className='text-base text-brandPrimary font-semibold'>Soutnez-Nous</h3>
                    <h2 className='text-3xl font-bold mt-5'>Partenaires</h2>
                    <p className='text-sm text-gray-500 mt-5'>
                        Nous sommes prêts à donner tout ce que nous avons, mais nous savons que nous ne pouvous pas y arriver tout seuls.
                    </p>
                    <div className="flex flex-row items-center mt-5 space-x-2">
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

                <div className="mt-6 md:mt-0">
                    <img className='rounded-lg' src={fadec4} alt="" />
                </div>
            </div>
            {/*end of first*/}

            {/* second */}
            <div className=" px-4 sm:px-8 pt-12 pb-16 flex flex-col gap-5 md:grid md:grid-cols-2  ">

                <div className="flex flex-col gap-3 items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
                    <img className='shadow-lg' src={unfpa} alt="" />
                    <img className='shadow-lg' src={planCam} alt="" />
                    <img className='shadow-lg' src={onuFemmes} alt="" />
                    <img className='shadow-lg' src={pnud} alt="" />
                    <img className='shadow-lg' src={minjec} alt="" />
                </div>

                <div className="hidden md:block ">
                    <h3 className='text-left text-xl font-bold text-brandPrimary'>Nous Sommes Plus Forts <br /> <span className='text-brandSecondary'>Ensembles.</span></h3>
                </div>
            </div>
            {/*end of second */}

            {/*third*/}
            <div className=" pt-12 pb-16 px-4 sm:px-8 flex flex-col md:grid md:grid-cols-2 md:gap-2 bg-green-100 ">

                <div className="flex flex-col mb-6 ">
                    <h3 className='text-left text-xl font-bold text-brandPrimary'>Devenez un <span className='text-brandSecondary'>Parternaire</span></h3>
                    <p className='text-sm mt-4'>Chaque contribution fait une <span className='text-brandSecondary'>énorme</span> difference pour nous.</p>
                </div>

                <div className="flex flex-col space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-4">

                    {/*Cart*/}
                    <div className="flex flex-col space-y-4 border border-brandPrimary shadow-lg rounded-lg py-4 px-4 ">
                        <Users className='w-12 h-12 text-brandPrimary' />
                        <div className="flex flex-col space-y-3">
                            <h4 className='text-left text-lg font-bold text-brandPrimary'>Devenez un <span className='text-brandSecondary'>Volontire</span></h4>
                            <p className='text-base text-gray-500'>Ensemble agissons pour le dévelopement dans votre communauté.</p>
                        </div>
                        <button className='px-3 py-2 w-2/5 md:w-full bg-brandPrimary rounded-lg text-sm font-bold text-white'><Link to="/partenariats">Cliquez Ici</Link></button>
                    </div>
                    {/*end of cart*/}

                    {/*Cart*/}
                    <div className="flex flex-col space-y-4 border border-brandPrimary shadow-lg rounded-lg py-4 px-4 ">
                        <HandCoins className='w-12 h-12 text-brandSecondary' />
                        <div className="flex flex-col space-y-3">
                            <h4 className='text-left text-lg font-bold text-brandPrimary'>Devenez un <span className='text-brandSecondary'>Donateur</span></h4>
                            <p className='text-base text-gray-500'>Nous menons des initiatives de fundraising pour financer nos activités.</p>
                        </div>
                        <button className='px-3 py-2 w-2/5 md:w-full bg-brandSecondary rounded-lg text-sm font-bold text-white'><Link to="/partenariats">Cliquez Ici</Link></button>
                    </div>
                    {/*end of cart*/}
                </div>
            </div>
            {/*end of third*/}
        </div>
    </div>
  )
}

export default Partenariats
