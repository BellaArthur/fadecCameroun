import React, { useState, useEffect } from 'react'
import { Phone, Mail, Facebook, Twitter, Instagram, Youtube,  } from 'lucide-react'

const Contacts = () => {

    const [formData, setFormData] = useState({ prenom: '', nom: '', email: '', sujet: '', message: ''});
    
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
    <div className="">
        <div className='container px-4 sm:px-8 py-4 bg-green-100  '>
            <div className="flex flex-col space-y-4 md:flex-row ">
                <div className='flex flex-col md:w-1/2'>
                    <p className='text-base text-brandPrimary'>Restons en contact</p>
                    <h2 className='text-4xl font-bold mb-5 pt-5'>Contact</h2>
                    <p className='text-left text-sm text-gray-500'>
                        Aidez FADECamroun à faire tout ce qu'il est possible pour sauver et proteger les enfants les plus vulnérables du monde. Contatez-nous en remplissant ce formulaire.
                    </p>
                    <div className="flex flex-row items-center space-x-2 my-3">
                        <div className="rounded-full bg-white py-2 px-2">
                            <Mail className='h-3 w-3 text-brandPrimary' />
                        </div>
                        <div className="flex flex-col">
                            <p className='text-xs font-light text-gray-500'>Email</p>
                            <p className='text-sm font-semibold'>contact@fadeccameroun.com</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center space-x-2 my-3">
                        <div className="rounded-full bg-white py-2 px-2">
                            <Phone className='h-3 w-3 text-brandPrimary' />
                        </div>
                        <div className="flex flex-col">
                            <p className='text-xs font-light text-gray-500'>Discutons</p>
                            <p className='text-sm font-semibold'>6 71 93 91 91</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <p className='text-sm text-gray-500'>Restez Connectés</p>
                        <div className="flex flex-row space-x-2">
                            <div className="rounded-full bg-white py-2 px-2">
                                <Facebook className='h-3 w-3 text-brandPrimary' />
                            </div>
                            <div className="rounded-full bg-white py-2 px-2">
                                <Twitter className='h-3 w-3 text-brandPrimary' />
                            </div>
                            <div className="rounded-full bg-white py-2 px-2">
                                <Instagram className='h-3 w-3 text-brandPrimary' />
                            </div>
                            <div className="rounded-full bg-white py-2 px-2">
                                <Youtube className='h-3 w-3 text-brandPrimary' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    
                    <div className="rounded-md bg-white shadow-xl w-[350px] mx-4 mt-2 px-3 py-2 ">
                        <form action="" className='shadow-lg' onSubmit={handleSubmit}>
                            <h2>Envoyez un Message</h2>
                            <div className="flex flex-col space-y-2">
                            <div className='flex flex-col'>
                                <h3 className='text-sm font-bold'>Votre Nom</h3>
                                <div className="flex flex-row space-x-2">
                                    <div className="flex flex-col w-1/2">
                                        <input 
                                            type="text" 
                                            name="prenom" 
                                            id=""
                                            value={formData.prenom}
                                            onChange={hadnleChange}  
                                            className='rounded-sm bg-gray-200 p-2 focus:outline-none focus:ring-0'
                                            />
                                        <p className='text-sm text-gray-500 text-semibold'>Prenom</p>
                                    </div>
                                    <div className="flex flex-col w-1/2">
                                        <input 
                                            type="text" 
                                            name="nom" 
                                            value={formData.nom}
                                            onChange={hadnleChange}
                                            id=""
                                             
                                            className='rounded-sm bg-gray-200 p-2 focus:outline-none focus:ring-0'
                                             />
                                        <p className='text-sm text-gray-500 text-semibold'>Nom</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <h3 className='text-sm font-bold'>Email</h3>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={hadnleChange}
                                    id=""  
                                    className='rounded-sm bg-gray-200 p-2 focus:outline-none focus:ring-0'
                                />    
                            </div>

                            <div className="flex flex-col">
                                <h3 className='text-sm font-bold'>Sujet</h3>
                                <input 
                                    type="text" 
                                    name="sujet" 
                                    value={formData.sujet}
                                    onChange={hadnleChange}
                                    id=""  
                                    className='rounded-sm bg-gray-200 p-2 focus:outline-none focus:ring-0'
                                />    
                            </div>

                            <div className="flex flex-col">
                                <h3 className='text-sm font-bold'>Message</h3>
                                <textarea 
                                    type="" 
                                    name="message" 
                                    value={formData.message}
                                    onChange={hadnleChange}
                                    id=""  
                                    className='rounded-sm bg-gray-200 h-40 p-2 focus:outline-none focus:ring-0'
                                />    
                            </div>
                            <button type='submit' className='py-2 px-4 mt-2 bg-brandPrimary text-white rounded-md'>Soumettre votre message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className=""></div>
    </div>    
    )

}

export default Contacts