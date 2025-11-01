
import React from 'react';
import { useLocation } from 'react-router-dom';
import CycleLayout from '@/components/formation/CycleLayout';
import FieldAccordion, { FieldData } from '@/components/formation/FieldAccordion';

const prepaFields: FieldData[] = [
  {
    id: 'premiere-annee',
    title: '1ère année : Math-Physique-Informatique',
    image: 'https://www.studycdn.space/sites/default/files/styles/small_carousel_articles/public/2025-03/actus-2-47.png.webp?itok=XlKPOTbe',
    description: 'La première année du cycle préparatoire permet d\'acquérir les fondamentaux scientifiques nécessaires à la formation d\'ingénieur.',
    videoUrl: '#',
    careers: [
      'Poursuite en 2ème année de prépa intégrée',
      'Réorientation possible vers d\'autres formations scientifiques'
    ],
    academicPaths: [
      '2ème année du cycle préparatoire',
      'Cycle ingénieur'
    ],
    admissionConditions: 'Baccalauréat scientifique ou technique avec de bonnes notes en mathématiques et sciences. Sélection sur dossier et entretien.',
    skills: [
      'Mathématiques avancées',
      'Physique générale',
      'Bases de l\'informatique',
      'Algorithmique',
      'Méthodes de travail scientifique',
      'Communication technique'
    ],
    syllabusUrl: '/doc/matier/CP1.pdf',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },



  {
    id: 'reseaux-telecom',
    title: '2e année : Réseaux Informatiques et Télécom (RT)',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470&auto=format&fit=crop',
    description: 'La spécialisation en Réseaux et Télécommunications du cycle préparatoire forme aux fondamentaux des infrastructures réseaux et des technologies de communication.',
    videoUrl: '#',
    careers: [
      'Poursuite en cycle ingénieur Réseaux et Télécoms',
      'Technicien supérieur en réseaux informatiques'
    ],
    academicPaths: [
      'Cycle ingénieur en Réseaux et Télécommunications',
      'Formations spécialisées en cybersécurité'
    ],
    admissionConditions: 'Première année de cycle préparatoire validée ou formation équivalente. Sélection sur dossier et entretien.',
    skills: [
      'Architectures réseaux',
      'Protocoles de communication',
      'Bases de la sécurité informatique',
      'Administration système',
      'Technologies sans fil'
    ],
    syllabusUrl: '/doc/matier/RT2.pdf',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },






  {
    id: 'genie-logiciel',
    title: '2e année : Génie Logiciel (GL)',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop',
    description: 'La spécialisation en Génie Logiciel du cycle préparatoire forme aux fondamentaux du développement et de la conception d\'applications.',
    videoUrl: '#',
    careers: [
      'Poursuite en cycle ingénieur Génie Logiciel',
      'Développeur junior'
    ],
    academicPaths: [
      'Cycle ingénieur en Génie Logiciel',
      'Formations spécialisées en développement web/mobile'
    ],
    admissionConditions: 'Première année de cycle préparatoire validée ou formation équivalente. Sélection sur dossier et entretien.',
    skills: [
      'Programmation orientée objet',
      'Structures de données et algorithmes',
      'Bases de données',
      'Introduction au génie logiciel',
      'Développement web de base'
    ],
    syllabusUrl: '/doc/matier/GL2.pdf',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },





  {
    id: 'informatique-industrielle',
    title: '2e année : Informatique Industrielle et Automatique (IIA)',
    image: 'https://upes-megrine.com/wp-content/uploads/2022/10/DIPLOME-NATIONAL-DINGENIEUR-EN-INFORMATIQUE-INDUSTRIELLE-1-1-1024x657.webp',
    description: 'La spécialisation en Informatique Industrielle et Automatique du cycle préparatoire forme aux fondamentaux des systèmes embarqués et de l\'automatisation.',
    videoUrl: '#',
    careers: [
      'Poursuite en cycle ingénieur Informatique Industrielle',
      'Technicien en automatisme'
    ],
    academicPaths: [
      'Cycle ingénieur en Informatique Industrielle et Automatique',
      'Formations spécialisées en robotique'
    ],
    admissionConditions: 'Première année de cycle préparatoire validée ou formation équivalente. Sélection sur dossier et entretien.',
    skills: [
      'Électronique numérique',
      'Microcontrôleurs',
      'Systèmes embarqués',
      'Bases de l\'automatique',
      'Programmation bas niveau'
    ],
    syllabusUrl: '#',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  }
];

const PrepaCycle: React.FC = () => {
  const location = useLocation();
  const hash = location.hash.replace('#', '');
  
  return (
    <CycleLayout
      title="Cycle Préparatoire Intégré"
      description="Formation en 2 ans pour vous préparer aux études d'ingénieur et acquérir les fondamentaux scientifiques."
      coverImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-time-blue-1 mb-4">À propos du cycle préparatoire</h2>
          <p className="text-lg text-gray-700">
            Notre cycle préparatoire intégré constitue la première phase de la formation d'ingénieur et s'étend sur 2 années. 
            Il vous permet d'acquérir les fondamentaux scientifiques nécessaires avant d'intégrer le cycle ingénieur, 
            avec une spécialisation progressive dès la deuxième année.
          </p>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-time-blue-1 mb-6">Structure du cycle préparatoire</h2>
          
          <div className="space-y-2 mb-8">
            {prepaFields.map((field, index) => (
              <FieldAccordion key={index} field={field} isActive={field.id === hash} />
            ))}
          </div>
        </div>
      </div>
    </CycleLayout>
  );
};

export default PrepaCycle;
