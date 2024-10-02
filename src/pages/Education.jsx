import React from 'react'
import fadec4 from '../assets/img/Fadec4.jpg'

const Education = () => {
  return (
    <div>
        <div className='px-4 sm:px-8 py-8 mb-8'>
            <div className="flex flex-col gap-10 md:gap-2 md:grid md:grid-cols-4">
                {/*right side*/}
                <div className="flex flex-col md:col-span-3">
                    <img className='rounded-lg' src={fadec4} alt="" />
                    <h2 className='text-3xl font-bold mt-6'>Programme d'aide à l'éducation pour les plus défavorisés</h2>
                    <h3 className='text-xl font-bold mt-3'>Contexte et justification</h3>
                    <p className='text-justify'>
                        L'accès à une éducation de qualité est un droit fondamental, mais de nombreux enfants issus de milieux défavorisés en sont privés en raison de la pauvreté, de la marginalisation et des crises. Ce programme vise à combler ces lacunes et à offrir des opportunités éducatives équitables à tous les enfants.
                    </p>
                    <h3 className='text-xl font-bold mt-3'>Objectifs du Programme</h3>
                    <ol className='pl-4 list-decimal text-justify'>
                        <li>
                            Améliorer l'accès à l'éducation pour les enfants défavorisés en réduisant les barrières financières et sociales.
                        </li>
                        <li>
                            Renforcer les capacités des enseignants et des établissements scolaires pour mieux répondre aux besoins des élèves défavorisés.
                        </li>
                        <li>
                            Promouvoir l'inclusion et l'égalité des chances dans le système éducatif.
                        </li>
                        <li>
                            Soutenir les familles pour qu'elles puissent accompagner efficacement leurs enfants dans leur parcours scolaire.
                        </li>
                    </ol>
                    <h3 className='text-xl font-bold mt-3'>Activités principales</h3>
                    <ol className='pl-4 list-decimal text-justify'>
                        <li>
                            Bourses et Aides Financières : Fournir des bourses d'études et des aides financières pour couvrir les frais de scolarité, les uniformes, et les fournitures scolaires.
                        </li>
                        <li>
                            Formations pour les Enseignants : Organiser des formations pour les enseignants afin de les sensibiliser aux défis spécifiques des élèves défavorisés et de leur fournir des outils pédagogiques adaptés.
                        </li>
                        <li>
                            Programmes de Tutorat et de Mentorat : Mettre en place des programmes de tutorat et de mentorat pour offrir un soutien académique et émotionnel aux élèves.
                        </li>
                        <li>
                            Sensibilisation et Plaidoyer : Mener des campagnes de sensibilisation pour promouvoir l'importance de l'éducation et mobiliser les communautés autour de cette cause.
                        </li>
                    </ol>
                    <h3 className='text-xl font-bold mt-3'>Résultats attendus</h3>
                    <ol className='pl-4 list-decimal text-justify'>
                        <li>
                            Accès Élargi à l'Éducation : Augmentation du taux de scolarisation et de rétention des élèves défavorisés.
                        </li>
                        <li>
                            Amélioration des Performances Scolaires : Meilleure performance académique des élèves grâce à un soutien personnalisé.
                        </li>
                        <li>
                            Engagement Communautaire : Communautés plus engagées et sensibilisées à l'importance de l'éducation pour tous.
                        </li>
                        <li>
                            Renforcement des Capacités : Enseignants mieux formés et établissements scolaires mieux équipés pour répondre aux besoins des élèves.
                        </li>
                    </ol>
                    <p className='text-justify mt-3'>
                        Ce programme vise à garantir que tous les enfants, indépendamment de leur origine socio-économique, aient accès à une éducation de qualité. En investissant dans l'éducation des enfants défavorisés, nous contribuons à la construction d'un avenir plus équitable et prospère pour tous.
                    </p>
                </div>
                {/*end of right side*/}

                {/*left side*/}
                <div className="">
                    <h3 className='text-base font-bold text-brandPrimary'>Vous pouvez ausi consulter:</h3>
                    <ul className='flex flex-col'>
                        <a className='text-sm text-brandPrimary hover:text-green-700  hover:underline' href="/programmes/autonomisation-des-femmes-en-milieu-rural">
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

export default Education