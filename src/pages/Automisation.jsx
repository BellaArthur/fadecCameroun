import React from 'react'
import { Link } from 'react-router-dom'
import fadec1 from '../assets/img/Fadec1.jpg'

const Automisation = () => {
  return (
    <div className='px-4 sm:px-8 py-8 mb-8'>
        <div className="flex flex-col gap-10 md:gap-2 md:grid md:grid-cols-4">
            {/*right side*/}
            <div className="flex flex-col md:col-span-3">
                <img className='rounded-lg' src={fadec1} alt="" />
                <h2 className='text-3xl font-bold mt-6'>Programme d'autonomisation des femmes en milieu rural</h2>
                <h3 className='text-xl font-bold mt-3'>Contexte et justification</h3>
                <p className='text-justify'>
                Les femmes en milieu rural jouent un rôle crucial dans le développement économique et social de leurs communautés. Cependant, elles font face à des obstacles significatifs tels que l'accès limité aux ressources, aux services financiers, et aux opportunités de formation. Ce programme vise à surmonter ces défis et à promouvoir l'autonomisation économique des femmes rurales.
                </p>
                <h3 className='text-xl font-bold mt-3'>Objectifs du Programme</h3>
                <ol className='pl-4 list-decimal text-justify'>
                    <li>
                        Renforcer les capacités économiques des femmes rurales en leur fournissant des formations en gestion financière, en entrepreneuriat et en compétences techniques.
                    </li>
                    <li>
                        Améliorer l'accès aux ressources telles que les terres, le crédit, et les technologies agricoles modernes.
                    </li>
                    <li>
                        Promouvoir l'égalité des sexes en sensibilisant les communautés aux droits des femmes et en encourageant leur participation active dans les processus décisionnels locaux.
                    </li>
                    <li>
                        Créer des opportunités de marché pour les produits et services offerts par les femmes rurales.
                    </li>
                </ol>
                <h3 className='text-xl font-bold mt-3'>Activités principales</h3>
                <ol className='pl-4 list-decimal text-justify'>
                    <li>
                        Formations et Ateliers : Organiser des sessions de formation sur la gestion d'entreprise, les techniques agricoles modernes, et l'utilisation des technologies numériques.
                    </li>
                    <li>
                        Accès au Crédit : Établir des partenariats avec des institutions financières pour offrir des microcrédits à des conditions favorables.
                    </li>
                    <li>
                        Sensibilisation et Plaidoyer : Mener des campagnes de sensibilisation sur les droits des femmes et l'importance de leur autonomisation économique.
                    </li>
                    <li>
                        Création de Coopératives : Encourager la formation de coopératives pour faciliter l'accès aux marchés et améliorer le pouvoir de négociation des femmes.
                    </li>
                </ol>
                <h3 className='text-xl font-bold mt-3'>Résultats attendus</h3>
                <ol className='pl-4 list-decimal text-justify'>
                    <li>
                        Autonomisation Économique : Augmentation du revenu des femmes rurales et amélioration de leur niveau de vie.
                    </li>
                    <li>
                        Renforcement des Capacités : Acquisition de nouvelles compétences et connaissances par les participantes.
                    </li>
                    <li>
                        Égalité des Sexes : Réduction des inégalités de genre dans les communautés rurales.
                    </li>
                    <li>
                        Développement Durable : Contribution à un développement économique et social durable des zones rurales.
                    </li>
                </ol>
                <p className='text-justify mt-3'>
                    Ce programme vise à transformer les vies des femmes rurales en leur offrant les outils et les opportunités nécessaires pour devenir économiquement autonomes. En investissant dans l'autonomisation des femmes, nous contribuons à la création de communautés rurales plus résilientes et prospères.
                </p>
            </div>
            {/*end of right side*/}

            {/*left side*/}
            <div className="">
                <h3 className='text-base font-bold text-brandPrimary'>Vous pouvez ausi consulter:</h3>
                <ul className='flex flex-col'>
                    <Link className='text-sm text-brandPrimary hover:text-green-700  hover:underline' to="/programmes/autonomisation-des-femmes-en-milieu-rural">
                        autonomisation des femmes en milieu rural
                    </Link>
                    <Link className='text-sm text-brandPrimary hover:text-green-700  hover:underline' to="/programmes/aide-a-l-edcation-pour-les-plus-défvorisés">
                        aide à l'éducation pour les plus défavorisés
                    </Link>
                    <Link className='text-sm text-brandPrimary hover:text-green-700  hover:underline' to="/programmes/sensibilisation-en-faveur-de-l-education-de-la-jeune-fille">
                        sensibilisation en faveur de l'education de la jeune fille
                    </Link>
                </ul>
            </div>
            {/*end of left side*/}

            <div className="md:col-span-2"></div>
        </div>
    </div>
  )
}

export default Automisation
