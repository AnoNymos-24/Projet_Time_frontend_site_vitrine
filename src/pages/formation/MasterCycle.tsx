
import React from 'react';
import { useLocation } from 'react-router-dom';
import CycleLayout from '@/components/formation/CycleLayout';
import FieldAccordion, { FieldData } from '@/components/formation/FieldAccordion';

const masterFields: FieldData[] = [
  {
    id: 'comptabilite',
    title: 'Comptabilité',
    image: '/img/7b010f37-7e95-4231-99e7-7f92798f4f6d.png',
    description: 'La filière Comptabilité forme des professionnels spécialisés dans la gestion, l\'analyse et le contrôle des opérations financières d\'une organisation. Elle est essentielle pour assurer la transparence, la conformité réglementaire et la prise de décisions stratégiques au sein des entreprises.',
    videoUrl: '#',
    careers: [
      'Expert-comptable (après obtention du diplôme d\'expertise comptable)',
      'Directeur financier',
      'Contrôleur de gestion',
      'Commissaire aux comptes',
      'Responsable comptable et financier'
    ],
    academicPaths: [
      'Doctorat en Sciences de Gestion',
      'Diplôme d\'Expertise Comptable',
      'MBA spécialisé'
    ],
    admissionConditions: 'Licence en comptabilité, finance, gestion ou équivalent. Sélection sur dossier, entretien et éventuellement concours d\'entrée.',
    skills: [
      'Expertise des normes IFRS et comptables nationales',
      'Consolidation des comptes',
      'Audit et contrôle financier',
      'Fiscalité approfondie',
      'Management des systèmes d\'information comptables'
    ],
    syllabusUrl: '/doc/matier/MP-COMPT.pdf',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },





  {
    id: 'finance',
    title: 'Finance',
    image: 'https://policy.un.org/sites/default/files/styles/16_9_lg/public/2023-04/finance.jpeg?h=60b6dc0b&itok=HZaK_Sxa',
    description: 'La filière Finance est une formation pluridisciplinaire qui combine les domaines de l\'économie, de la gestion et de la comptabilité. Elle vise à former des professionnels capables d\'analyser, de gérer et d\'optimiser les ressources financières des entreprises et des institutions.',
    videoUrl: '#',
    careers: [
      'Analyste financier senior',
      'Gestionnaire de portefeuille',
      'Risk manager',
      'Trésorier d\'entreprise',
      'Consultant en finance d\'entreprise'
    ],
    academicPaths: [
      'Doctorat en Finance',
      'MBA Finance',
      'Certifications professionnelles (CFA, FRM)'
    ],
    admissionConditions: 'Licence en finance, économie, gestion ou diplôme équivalent. Sélection sur dossier et entretien.',
    skills: [
      'Analyse financière approfondie',
      'Gestion de portefeuille',
      'Finance de marché',
      'Évaluation d\'entreprise',
      'Gestion des risques financiers',
      'Modélisation financière'
    ],
    syllabusUrl: '/doc/matier/MP-Finance.pdf',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },





  {
    id: 'ingenierie-financiere',
    title: 'Ingénierie Financière (IF)',
    image: 'https://executive.esca.ma/hs-fs/hubfs/master%20finance%20maroc.png?width=1280&height=721&name=master%20finance%20maroc.png',
    description: 'La filière Ingénierie Financière forme des experts capables de concevoir des solutions financières complexes pour répondre aux besoins stratégiques des entreprises, des investisseurs et des institutions financières. Elle combine des compétences en finance, mathématiques, droit et technologies numériques pour structurer des opérations telles que fusions-acquisitions, levées de fonds, gestion des risques ou création de produits dérivés.',
    videoUrl: '#',
    careers: [
      'Ingénieur financier',
      'Structureur de produits financiers',
      'Conseiller en fusion-acquisition',
      'Consultant en ingénierie financière',
      'Analyste quantitatif'
    ],
    academicPaths: [
      'Doctorat en Mathématiques Financières',
      'MBA spécialisé',
      'Certifications professionnelles avancées'
    ],
    admissionConditions: 'Licence en finance, mathématiques appliquées ou équivalent. Bon niveau en mathématiques requis. Sélection sur dossier et entretien.',
    skills: [
      'Modélisation financière avancée',
      'Évaluation d\'actifs complexes',
      'Gestion des risques financiers',
      'Structuration d\'opérations financières',
      'Maîtrise des produits dérivés',
      'Programmation appliquée à la finance'
    ],
    syllabusUrl: '/doc/matier/MP-IF.pdf',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },




  {
    id: 'fiscalite',
    title: 'Fiscalité',
    image: 'https://www.lbs.tn/wp-content/uploads/2020/10/Master-en-Droit-fiscal-de-LBS.png',
    description: 'Le Master en Fiscalité forme des spécialistes du droit fiscal national et international, capables de conseiller les entreprises et particuliers.',
    videoUrl: '#',
    careers: [
      'Fiscaliste d\'entreprise',
      'Conseiller fiscal',
      'Avocat fiscaliste (après formation complémentaire)',
      'Expert en optimisation fiscale',
      'Consultant en fiscalité internationale'
    ],
    academicPaths: [
      'Doctorat en Droit Fiscal',
      'Formations spécialisées en fiscalité internationale',
      'Expertise comptable'
    ],
    admissionConditions: 'Licence en droit, fiscalité, comptabilité ou équivalent. Sélection sur dossier et entretien.',
    skills: [
      'Maîtrise du droit fiscal national',
      'Fiscalité internationale et conventions fiscales',
      'Optimisation fiscale légale',
      'Contentieux fiscal',
      'Fiscalité des entreprises et des groupes',
      'Fiscalité du patrimoine'
    ],
    syllabusUrl: '#',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },





  {
    id: 'securite-systemes',
    title: 'Sécurité des Systèmes Informatiques et des Réseaux (SSIR)',
    image: 'https://www.elite-formation.com/wp-content/uploads/2024/06/Administrateur-securite-reseaux-Elite-Formation-Nabeul.webp',
    description: 'Le Master SSIR forme des experts en sécurité informatique capables de protéger les systèmes d\'information contre les cyberattaques et vulnérabilités.',
    videoUrl: '#',
    careers: [
      'Responsable sécurité des systèmes d\'information (RSSI)',
      'Expert en cybersécurité',
      'Auditeur sécurité',
      'Pentester',
      'Architecte sécurité'
    ],
    academicPaths: [
      'Doctorat en Sécurité Informatique',
      'Certifications spécialisées (CISSP, CEH, OSCP)',
      'Spécialisation en forensique digitale'
    ],
    admissionConditions: 'Licence en informatique, réseaux ou équivalent. Bonnes connaissances en systèmes et réseaux requises. Sélection sur dossier et entretien technique.',
    skills: [
      'Sécurité des réseaux et infrastructures',
      'Tests d\'intrusion',
      'Analyse de malwares',
      'Gestion des incidents de sécurité',
      'Cryptographie appliquée',
      'Conformité et standards de sécurité'
    ],
    syllabusUrl: '#',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },








  {
    id: 'management-rh',
    title: 'Management des Ressources Humaines et Ingénierie des Compétences (MRHIC)',
    image: 'https://b2p-consulting.com/img/sermon/1641916426fc-grh.jpg',
    description: 'Le Master MRHIC forme des experts en gestion des ressources humaines capables de développer les talents et compétences au sein des organisations.',
    videoUrl: '#',
    careers: [
      'Directeur des ressources humaines',
      'Responsable formation et développement des compétences',
      'Chef de projet SIRH',
      'Consultant en recrutement',
      'Responsable relations sociales'
    ],
    academicPaths: [
      'Doctorat en Sciences de Gestion',
      'MBA spécialisé RH',
      'Formations en droit social'
    ],
    admissionConditions: 'Licence en RH, gestion, psychologie du travail ou équivalent. Sélection sur dossier et entretien.',
    skills: [
      'Stratégie RH',
      'Gestion prévisionnelle des emplois et compétences',
      'Digitalisation des processus RH',
      'Management des talents',
      'Droit social et relations professionnelles',
      'Conduite du changement'
    ],
    syllabusUrl: '#',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },







  {
    id: 'intelligence-economique',
    title: 'Intelligence Économique et Stratégies Compétitives à l\'International (IESCI)',
    image: 'https://scobex-rgpd-dpo.fr/wp-content/uploads/2022/11/numerique-intelligence-economique-1080x675.jpg',
    description: 'Le Master IESCI forme des stratèges capables d\'analyser les marchés internationaux et d\'élaborer des stratégies d\'influence et de veille concurrentielle.',
    videoUrl: '#',
    careers: [
      'Responsable intelligence économique',
      'Analyste en veille stratégique',
      'Consultant en stratégie internationale',
      'Chef de projet influence et lobbying',
      'Risk manager international'
    ],
    academicPaths: [
      'Doctorat en Relations Internationales ou Géopolitique',
      'MBA International',
      'Spécialisation en géostratégie'
    ],
    admissionConditions: 'Licence en commerce international, sciences politiques, économie ou équivalent. Maîtrise de l\'anglais requise. Sélection sur dossier et entretien.',
    skills: [
      'Veille et intelligence stratégique',
      'Géopolitique et géoéconomie',
      'Diplomatie d\'entreprise',
      'Analyse des marchés internationaux',
      'Stratégies d\'influence',
      'Protection du patrimoine informationnel'
    ],
    syllabusUrl: '#',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },










  {
    id: 'controle-gestion',
    title: 'Contrôle de Gestion et Système d\'Information (CGSI)',
    image: 'https://static3.cegos.fr/content/uploads/2022/01/31154531/Untitled-design-15.png',
    description: 'Le Master CGSI forme des spécialistes du pilotage de la performance financière et opérationnelle des organisations en s\'appuyant sur les systèmes d\'information.',
    videoUrl: '#',
    careers: [
      'Contrôleur de gestion',
      'Directeur administratif et financier',
      'Chef de projet ERP/SI',
      'Business analyst',
      'Consultant en pilotage de la performance'
    ],
    academicPaths: [
      'Doctorat en Sciences de Gestion',
      'MBA Finance',
      'Certifications professionnelles (CIMA, ACCA)'
    ],
    admissionConditions: 'Licence en gestion, comptabilité, systèmes d\'information ou équivalent. Sélection sur dossier et entretien.',
    skills: [
      'Contrôle de gestion avancé',
      'Business intelligence',
      'Analyse prédictive',
      'Pilotage de la performance',
      'Maîtrise des ERP financiers',
      'Tableaux de bord et reporting'
    ],
    syllabusUrl: '#',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },







  {
    id: 'management-operationnel',
    title: 'Management Opérationnel (MO), Chaîne Logistique et Achats',
    image: 'https://www.supplychaininfo.eu/wp-content/uploads/2018/11/gestion-de-la-cha%C3%AEne-logistique.jpg',
    description: 'Le Master en Management Opérationnel forme des experts capables de gérer la chaîne logistique globale et d\'optimiser les processus d\'approvisionnement et de distribution.',
    videoUrl: '#',
    careers: [
      'Directeur des opérations',
      'Supply chain manager',
      'Responsable achats',
      'Consultant en excellence opérationnelle',
      'Responsable logistique internationale'
    ],
    academicPaths: [
      'Doctorat en Sciences de Gestion',
      'MBA Supply Chain',
      'Certifications professionnelles (APICS, CIPS)'
    ],
    admissionConditions: 'Licence en gestion, logistique, commerce ou équivalent. Sélection sur dossier et entretien.',
    skills: [
      'Gestion de la chaîne logistique globale',
      'Management des achats et approvisionnements',
      'Lean management',
      'Planification et prévision des flux',
      'Optimisation des processus',
      'Gestion de projets complexes'
    ],
    syllabusUrl: '#',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },








  {
    id: 'marketing-force-vente',
    title: 'Marketing et Force de Vente à l\'International (MFVI)',
    image: 'https://blog.easyfichiers.com/wp-content/uploads/2024/11/force-de-vente-scaled.jpg',
    description: 'Le Master MFVI forme des spécialistes du marketing et de la vente capables de développer des stratégies commerciales performantes à l\'international.',
    videoUrl: '#',
    careers: [
      'Directeur marketing international',
      'Directeur commercial export',
      'Chef de produit international',
      'Responsable développement commercial',
      'Consultant en stratégie marketing'
    ],
    academicPaths: [
      'Doctorat en Marketing ou Commerce International',
      'MBA spécialisé',
      'Formations en management interculturel'
    ],
    admissionConditions: 'Licence en marketing, commerce, communication ou équivalent. Maîtrise de l\'anglais requise. Sélection sur dossier et entretien.',
    skills: [
      'Marketing stratégique et opérationnel international',
      'Management des équipes commerciales',
      'Négociation d\'affaires internationales',
      'E-commerce et marketing digital',
      'Étude des marchés internationaux',
      'Gestion de la relation client'
    ],
    syllabusUrl: '#',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  }





];

const MasterCycle: React.FC = () => {
  const location = useLocation();
  const hash = location.hash.replace('#', '');
  
  return (
    <CycleLayout
      title="Cycle Master"
      description="Formation en 2 ans pour vous spécialiser dans votre domaine et développer une expertise reconnue par les entreprises."
      coverImage="/img/DSC_0215.JPG"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-time-blue-1 mb-4">À propos du cycle Master</h2>
          <p className="text-lg text-gray-700">
            Notre cycle Master constitue le deuxième niveau d'études supérieures et s'étend sur 2 années (4 semestres). 
            Il vous permet d'acquérir une expertise approfondie dans votre domaine de spécialité et de développer des compétences 
            avancées recherchées par les entreprises à des postes à responsabilité.
          </p>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-time-blue-1 mb-6">Nos filières en Master</h2>
          
          <div className="space-y-2 mb-8">
            {masterFields.map((field, index) => (
              <FieldAccordion key={index} field={field} isActive={field.id === hash} />
            ))}
          </div>
        </div>
      </div>
    </CycleLayout>
  );
};

export default MasterCycle;
