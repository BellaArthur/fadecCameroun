import React from 'react'
import fadec7 from '../assets/img/Fadec7.jpg'

const Sensibilisation = () => {
  return (
    <div>
        <div className='px-4 sm:px-8 py-8 mb-8'>
            <div className="flex flex-col gap-10 md:gap-2 md:grid md:grid-cols-4">
                {/*right side*/}
                <div className="flex flex-col md:col-span-3">
                    <img className='rounded-lg' src={fadec7} alt="" />
                    <h2 className='text-3xl font-bold mt-6'>Programme de sensibilisation en faveur de l'education de la jeune fille</h2>
                    <h3 className='text-xl font-bold mt-3'>Contexte et justification</h3>
                    <p className='text-justify'>
                        L'éducation des jeunes filles est essentielle pour le développement durable et l'égalité des sexes. Cependant, de nombreuses filles dans les zones rurales et défavorisées sont privées de cette opportunité en raison de la pauvreté, des normes culturelles et des mariages précoces. Ce programme vise à sensibiliser les communautés à l'importance de l'éducation des filles et à promouvoir leur accès à une éducation de qualité.
                    </p>
                    <h3 className='text-xl font-bold mt-3'>Objectifs du Programme</h3>
                    <ol className='pl-4 list-decimal text-justify'>
                        <li>
                            Sensibiliser les communautés à l'importance de l'éducation des jeunes filles.
                        </li>
                        <li>
                            Réduire les obstacles à la scolarisation des filles, tels que les mariages précoces et les stéréotypes de genre.
                        </li>
                        <li>
                            Encourager la rétention scolaire des jeunes filles en leur offrant un environnement éducatif sûr et inclusif.
                        </li>
                        <li>
                            Promouvoir l'égalité des chances** en éducation pour les filles et les garçons.
                        </li>
                    </ol>
                    <h3 className='text-xl font-bold mt-3'>Activités principales</h3>
                    <ol className='pl-4 list-decimal text-justify'>
                        <li>
                            Campagnes de Sensibilisation : Organiser des campagnes de sensibilisation dans les communautés rurales pour informer sur les avantages de l'éducation des filles.
                        </li>
                        <li>
                            Ateliers et Séminaires : Tenir des ateliers pour les parents, les leaders communautaires et les enseignants sur l'importance de l'éducation des filles et les moyens de surmonter les obstacles.
                        </li>
                        <li>
                            Programmes de Mentorat : Mettre en place des programmes de mentorat pour soutenir les jeunes filles dans leur parcours éducatif.
                        </li>
                        <li>
                            Partenariats avec les Écoles : Collaborer avec les écoles pour créer des environnements d'apprentissage sûrs et inclusifs pour les filles.
                        </li>
                    </ol>
                    <h3 className='text-xl font-bold mt-3'>Résultats attendus</h3>
                    <ol className='pl-4 list-decimal text-justify'>
                        <li>
                            Augmentation de la Scolarisation : Augmentation du taux de scolarisation des jeunes filles dans les zones ciblées.
                        </li>
                        <li>
                            Réduction des Mariages Précoces : Diminution des mariages précoces grâce à une sensibilisation accrue.
                        </li>
                        <li>
                            Amélioration des Performances Scolaires : Meilleure performance académique des jeunes filles grâce à un soutien continu.
                        </li>
                        <li>
                            hangement des Normes Culturelles : Évolution des attitudes et des pratiques culturelles en faveur de l'éducation des filles.
                        </li>
                    </ol>
                    <p className='text-justify mt-3'>
                        Ce programme vise à transformer les perceptions et les pratiques concernant l'éducation des jeunes filles, en garantissant qu'elles aient les mêmes opportunités éducatives que les garçons. En investissant dans l'éducation des filles, nous contribuons à un avenir plus équitable et prospère pour tous.
                    </p>
                </div>
                {/*end of right side*/}

                {/*left side*/}
                <div className="">
                    <h3 className='text-base font-bold text-brandPrimary'>Vous pouvez ausi consulter:</h3>
                    <ul className='flex flex-col'>
                        <a className='text-sm text-brandPrimary hover:text-green-700  hover:underline ' href="/programmes/autonomisation-des-femmes-en-milieu-rural">
                            autonomisation des femmes en milieu rural
                        </a>
                        <a className='text-sm text-brandPrimary hover:text-green-700  hover:underline' href="/programmes/aide-a-l-edcation-pour-les-plus-défvorisés">
                            aide à l'éducation pour les plus défavorisés
                        </a>
                        <a className='text-sm text-brandPrimary hover:text-green-700  hover:underline' href="/programmes/sensibilisation-en-faveur-de-l-education-de-la-jeune-fille">
                            sensibilisation en faveur de l'education de la jeune fille
                        </a>
                    </ul>
                </div>
                {/*end of left side*/}

                <div className="md:col-span-2"></div>
            </div>
        </div>
    </div>
  )
}

export default Sensibilisation