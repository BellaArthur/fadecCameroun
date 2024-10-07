import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo_fadec from '../../assets/img/Logo_fadec.png'
import { Phone, Mail, Facebook, Twitter, Instagram, Youtube,  } from 'lucide-react'

const Footer = () => {

  const [formData, setFormData] = useState({ email: ''});
    
    const hadnleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventdefault();
        console.log('Form Submitted:', formData);
        alert('Form submited successfully')
    }
  return (
    <div>
      <div className="flex flex-col">
        <div className="mx-4 mt-4 mb-6 px-3 py-3 rounded-md bg-green-100 shadow-xl md:mx-28">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col text-center ">
              <h3 className='text-lg font-bold mt-4'>Télechargez Notre Newsletter</h3>
              <p className='text-sm font-semibold text-gray-500 mt-3'>Nous vous présentons les résultats majeurs des différentes initiatives de terrains que nous menons. veuillez laisser votre adresse pour être informés de nos differentes avancées.</p>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={hadnleChange}
                placeholder='Adresse Email'
                id=""  
                className='rounded-md bg-gray-100 p-2 focus:outline-none focus:ring-0 mt-6'
              />
              <button type='submit' className='mt-4 mb-4 py-2 px-4 bg-brandPrimary text-white rounded-md'>Soumettre votre message</button>
            </div>
          </form>
        </div>

        {/*site map */}
        <div className=" px-4 sm:px-8 py-4 flex flex-col mt-12 md:grid md:grid-cols-7  lg:space-x-2">
          <div className="flex flex-col px-12 text-center md:text-left md:px-0 md:col-span-3 ">
            <div className="flex flex-col items-center mb-4">
              <a href="/"><img src={Logo_fadec} alt="" className='h-14 w-14' /></a>
              <p className='text-brandPrimary font-bold'>FADEC Cameroun</p>
            </div>
            <div className=" text-sm space-y-2">
              <p><span className='font-bold'>FADEC Cameroun</span> est une association à but non-lucratif autorisé au Cameroun (N*0000217/A/MINATD/SG/DAP/SAC).</p>
              <p><span className='font-bold'>Bureau Principal:</span> Biyem-assi, acacias | Yaoundé VI - Cameroun </p>
            </div>
            <div className="flex flex-row items-center space-x-2">
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

          <div className="text-center space-y-5 mt-6 md:mt-0 md:col-span-2">
            <h3 className='text-base font-bold'>Menu</h3>
            <ul className='flex flex-col text-sm font-semibold text-gray-500 space-y-2'>
              <button><Link className='hover:text-brandPrimary' to="/programmes/autonomisation-des-femmes-en-milieu-rural">Ataunomisation des des femmes</Link></button>
              <button><Link className='hover:text-brandPrimary' to="/programmes/aide-a-l-edcation-pour-les-plus-défvorisés">Education des plus défavorisés</Link></button>
              <button><Link className='hover:text-brandPrimary' to="/programmes/sensibilisation-en-faveur-de-l-education-de-la-jeune-fille">Education de le jeune fille</Link></button>
            </ul>
          </div>

          <div className="text-center space-y-5 mt-6 md:mt-0 md:col-span-2">
            <h3 className='text-base font-bold'>Menu</h3>
            <ul className='flex flex-col text-sm font-semibold text-gray-500 space-y-2'>
              <button><a className='hover:text-brandPrimary' href="/">Home</a></button>
              <button><Link className='hover:text-brandPrimary' to="/a-propos">A Propos</Link></button>
              <button><Link className='hover:text-brandPrimary' to="/programmes">Programmes</Link></button>
              <button><Link className='hover:text-brandPrimary' to="/partenariats">Partenariats</Link></button>
              <button><Link className='hover:text-brandPrimary' to="/contacts">Contacts</Link></button>
            </ul>
          </div>
          
        </div>

        <div className="container px-4 sm:px-8 py-4 my-8 text-sm text-center">
          <p>Copyright &copy; 2024 <a href="/" className='font-bold text-brandPrimary'>FADECameroun</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
