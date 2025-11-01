
import React from 'react';
import { useLocation } from 'react-router-dom';
import CycleLayout from '@/components/formation/CycleLayout';
import FieldAccordion, { FieldData } from '@/components/formation/FieldAccordion';

const engineerFields: FieldData[] = [
  {
    id: 'reseaux-telecom',
    title: 'Réseaux Informatiques et Télécom (RT)',
    image: '/lovable-uploads/12268076-1dc6-4b3c-a79a-5a4068085605.png',
    description: 'Le diplôme d\'ingénieur en Réseaux Informatiques et Télécommunications forme des experts capables de concevoir, implémenter et administrer des infrastructures réseau complexes et sécurisées.',
    videoUrl: '#',
    careers: [
      'Ingénieur réseaux et télécoms',
      'Architecte infrastructure IT',
      'Ingénieur cybersécurité',
      'Chef de projet réseaux',
      'Consultant en technologies réseau',
      'Responsable de la sécurité des systèmes d\'information (RSSI)'
    ],
    academicPaths: [
      'Doctorat en réseaux et télécommunications',
      'MBA spécialisé en management des systèmes d\'information',
      'Mastère spécialisé en cybersécurité'
    ],
    admissionConditions: 'Cycle préparatoire validé, DUT/BTS dans le domaine des réseaux informatiques ou équivalent. Sélection sur dossier, entretien et concours.',
    skills: [
      'Architecture et administration des réseaux complexes',
      'Sécurité des systèmes d\'information',
      'Technologies cloud et virtualisation',
      'Conception d\'infrastructures de télécommunications',
      'Management de projets IT',
      'Audit et gouvernance des SI'
    ],
    syllabusUrl: '#',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },
  {
    id: 'genie-logiciel',
    title: 'Génie Logiciel (GL)',
    image: 'https://exploreengineering.ca/sites/default/files/2020-02/NEM_software.jpg',
    description: 'Le diplôme d\'ingénieur en Génie Logiciel forme des experts capables de concevoir, développer et maintenir des applications complexes et innovantes.',
    videoUrl: '#',
    careers: [
      'Ingénieur développement logiciel',
      'Architecte logiciel',
      'Chef de projet informatique',
      'Expert DevOps',
      'Ingénieur R&D',
      'Consultant en transformation digitale'
    ],
    academicPaths: [
      'Doctorat en informatique',
      'MBA Tech',
      'Mastère spécialisé en Intelligence Artificielle'
    ],
    admissionConditions: 'Cycle préparatoire validé, DUT/BTS en informatique ou équivalent. Sélection sur dossier, entretien et concours.',
    skills: [
      'Architecture et conception logicielle avancée',
      'Développement full-stack',
      'DevOps et intégration continue',
      'Intelligence artificielle et machine learning',
      'Méthodologies agiles',
      'Gestion de la qualité logicielle'
    ],
    syllabusUrl: '#',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },
  {
    id: 'informatique-industrielle',
    title: 'Informatique Industrielle et Automatique (IIA)',
    image: '/lovable-uploads/ae69a31e-008a-4941-b324-6d1834bdfc5f.png',
    description: 'Le diplôme d\'ingénieur en Informatique Industrielle et Automatique forme des experts capables de concevoir et développer des systèmes embarqués et des solutions d\'automatisation pour l\'industrie.',
    videoUrl: '#',
    careers: [
      'Ingénieur en systèmes embarqués',
      'Ingénieur automaticien',
      'Ingénieur IoT',
      'Chef de projet en robotique',
      'Ingénieur R&D en électronique',
      'Responsable d\'automatisation industrielle'
    ],
    academicPaths: [
      'Doctorat en informatique industrielle',
      'Mastère spécialisé en robotique',
      'MBA en management de l\'innovation technologique'
    ],
    admissionConditions: 'Cycle préparatoire validé, DUT/BTS en génie électrique, informatique industrielle ou équivalent. Sélection sur dossier, entretien et concours.',
    skills: [
      'Conception de systèmes embarqués',
      'Programmation temps réel',
      'Robotique et automatisme industriel',
      'Technologies IoT',
      'Conception électronique',
      'Traitement du signal et contrôle'
    ],
    syllabusUrl: '#',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  }
];

const EngineerCycle: React.FC = () => {
  const location = useLocation();
  const hash = location.hash.replace('#', '');
  
  return (
    <CycleLayout
      title="Cycle Ingénieur"
      description="Formation en 3 ans pour devenir un ingénieur de haut niveau, expert dans votre domaine de spécialité et capable de relever les défis technologiques actuels."
      coverImage="/lovable-uploads/da386ba8-ba43-453f-a0fb-f942049dfe63.png"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-time-blue-1 mb-4">À propos du cycle ingénieur</h2>
          <p className="text-lg text-gray-700">
            Notre cycle ingénieur constitue le troisième niveau de formation et s'étend sur 3 années. 
            Cette formation exigeante vous permettra de développer une expertise technique de haut niveau, 
            complétée par des compétences en management, communication et gestion de projet, essentielles 
            pour occuper des postes à responsabilité dans des environnements technologiques complexes.
          </p>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-time-blue-1 mb-6">Nos spécialités d'ingénieur</h2>
          
          <div className="space-y-2 mb-8">
            {engineerFields.map((field, index) => (
              <FieldAccordion key={index} field={field} isActive={field.id === hash} />
            ))}
          </div>
        </div>
      </div>
    </CycleLayout>
  );
};

export default EngineerCycle;
