
import React from 'react';
import { useLocation } from 'react-router-dom';
import CycleLayout from '@/components/formation/CycleLayout';
import FieldAccordion, { FieldData } from '@/components/formation/FieldAccordion';

const licenseFields: FieldData[] = [
  {
    id: 'informatique',
    title: 'Informatique (Business Computing)',
    image: 'https://www.studycdn.space/sites/default/files/2022-11/iStock-1169929038.jpg',
    description: 'La filière Business Computing est une formation pluridisciplinaire qui combine les domaines de l\'informatique et de la gestion. Elle vise à former des professionnels capables de concevoir, développer et gérer des systèmes d\'information adaptés aux besoins stratégiques des entreprises.',
    videoUrl: '#',
    careers: [
      'Développeur web et mobile',
      'Analyste programmeur',
      'Administrateur système',
      'Technicien de maintenance informatique',
      'Consultant IT'
    ],
    academicPaths: [
      'Master en Ingénierie Logicielle',
      'Master en Sécurité des Systèmes Informatiques',
      'Master en Intelligence Artificielle'
    ],
    admissionConditions: 'Baccalauréat scientifique ou technique, ou diplôme équivalent. Sélection sur dossier et entretien de motivation.',
    skills: [
      'Programmation (Java, Python, JavaScript)',
      'Développement web et mobile',
      'Bases de données et requêtes SQL',
      'Analyse et conception de systèmes d\'information',
      'Réseaux et systèmes'
    ],
    syllabusUrl: '/doc/matier/L-Info.pdf',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/services-academiques/calendrier' }
    ]
  },





  {
    id: 'finance',
    title: 'Finance',
    image: 'https://i.f1g.fr/media/eidos/805x453_crop/2021/08/19/XVM3e7a5768-00ee-11ec-a959-043d09f94d0e.jpg',
    description: 'La filière Finance est une formation pluridisciplinaire qui combine les domaines de l\'économie, de la gestion et de la comptabilité. Elle vise à former des professionnels capables d\'analyser, de gérer et d\'optimiser les ressources financières des entreprises et des institutions.',
    videoUrl: '#',
    careers: [
      'Analyste financier',
      'Conseiller financier',
      'Gestionnaire de portefeuille',
      'Chargé de clientèle bancaire',
      'Responsable financier junior'
    ],
    academicPaths: [
      'Master en Finance',
      'Master en Ingénierie Financière',
      'Master en Gestion de Patrimoine'
    ],
    admissionConditions: 'Baccalauréat économique ou scientifique, ou diplôme équivalent. Sélection sur dossier et entretien de motivation.',
    skills: [
      'Analyse financière',
      'Gestion de portefeuille',
      'Comptabilité',
      'Fiscalité',
      'Finance d\'entreprise',
      'Mathématiques financières'
    ],
    syllabusUrl: '/doc/matier/L-Finance.pdf',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },





  {
    id: 'marketing',
    title: 'Marketing',
    image: 'https://storage.letudiant.fr/mediatheque/letudiant/7/5/2428275-marketing-original.jpg',
    description: 'La filière Marketing forme des professionnels capables de comprendre les besoins des consommateurs, de concevoir des offres attractives et de promouvoir efficacement des produits ou services sur le marché.',
    videoUrl: '#',
    careers: [
      'Chargé de communication',
      'Chef de produit junior',
      'Responsable e-commerce',
      'Community manager',
      'Chargé d\'études marketing'
    ],
    academicPaths: [
      'Master en Marketing Digital',
      'Master en Marketing et Force de Vente',
      'Master en Communication'
    ],
    admissionConditions: 'Baccalauréat toutes séries, ou diplôme équivalent. Sélection sur dossier et entretien de motivation.',
    skills: [
      'Études de marché',
      'Marketing digital',
      'Communication',
      'Techniques de vente',
      'Relation client',
      'Comportement du consommateur'
    ],
    syllabusUrl: '/doc/matier/L-MKT.pdf',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },





  {
    id: 'comptabilite',
    title: 'Comptabilité',
    image: 'https://www.l4mcdn.fr/1/0/1009494.jpg',
    description: 'La filière Comptabilité forme des professionnels spécialisés dans la gestion, l\'analyse et le contrôle des opérations financières d\'une organisation. Elle est essentielle pour assurer la transparence, la conformité réglementaire et la prise de décisions stratégiques au sein des entreprises.',
    videoUrl: '#',
    careers: [
      'Comptable',
      'Auditeur junior',
      'Assistant contrôle de gestion',
      'Gestionnaire de paie',
      'Collaborateur en cabinet comptable'
    ],
    academicPaths: [
      'Master en Comptabilité',
      'Master en Fiscalité',
      'Master en Contrôle, Audit et Reporting'
    ],
    admissionConditions: 'Baccalauréat économique ou scientifique, ou diplôme équivalent. Sélection sur dossier et entretien de motivation.',
    skills: [
      'Tenue de comptabilité',
      'Normes comptables internationales',
      'Fiscalité',
      'Audit',
      'Contrôle de gestion',
      'Gestion financière'
    ],
    syllabusUrl: '/doc/matier/L-Comptabilité.pdf',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },






  {
    id: 'management',
    title: 'Management',
    image: 'https://www.durable.uliege.be/upload/docs/image/jpeg/2024-02/news_admissions_internationaux_.jpg',
    description: 'La filière Management prépare les étudiants à piloter, organiser et optimiser les activités d\'une entreprise ou d\'une organisation. Elle développe des compétences transversales en stratégie, gestion des ressources humaines, marketing, finance, communication et conduite du changement.',
    videoUrl: '#',
    careers: [
      'Assistant manager',
      'Chargé de projet',
      'Responsable d\'équipe junior',
      'Consultant en organisation',
      'Adjoint de direction'
    ],
    academicPaths: [
      'Master en Management',
      'Master en Entrepreneuriat',
      'Master en Gestion des Ressources Humaines'
    ],
    admissionConditions: 'Baccalauréat toutes séries, ou diplôme équivalent. Sélection sur dossier et entretien de motivation.',
    skills: [
      'Gestion d\'équipe',
      'Leadership',
      'Gestion de projet',
      'Communication organisationnelle',
      'Stratégie d\'entreprise',
      'Résolution de problèmes complexes'
    ],
    syllabusUrl: '/doc/matier/L-MNG.pdf',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  },






  {
    id: 'ressources-humaines',
    title: 'Gestion des Ressources Humaines',
    image: '/img/a3e40ad9-cc5b-4b40-9841-50e86f0b02cc.png',
    description: 'La filière Gestion des Ressources Humaines (GRH) forme des professionnels capables de gérer et de valoriser le capital humain au sein des organisations. Elle englobe un ensemble de pratiques visant à administrer, mobiliser et développer les ressources humaines impliquées dans l\'activité d\'une organisation.',
    videoUrl: '#',
    careers: [
      'Assistant RH',
      'Chargé de recrutement',
      'Gestionnaire de paie',
      'Responsable formation junior',
      'Chargé des relations sociales'
    ],
    academicPaths: [
      'Master en Gestion des Ressources Humaines',
      'Master en Management des Compétences',
      'Master en Droit Social'
    ],
    admissionConditions: 'Baccalauréat toutes séries, ou diplôme équivalent. Sélection sur dossier et entretien de motivation.',
    skills: [
      'Recrutement et sélection',
      'Gestion des compétences',
      'Administration du personnel',
      'Droit du travail',
      'Formation professionnelle',
      'SIRH (Systèmes d\'Information Ressources Humaines)'
    ],
    syllabusUrl: '/doc/matier/L-GRH.pdf',
    relatedLinks: [
      { text: 'S\'inscrire', url: '/admission/registration-request' },
      { text: 'Dates clés', url: '/information/academic-calendar' }
    ]
  }
];

const LicenseCycle: React.FC = () => {
  const location = useLocation();
  const hash = location.hash.replace('#', '');
  
  return (
    <CycleLayout
      title="Cycle Licence"
      description="Formation en 3 ans pour acquérir les fondamentaux de votre discipline et vous préparer au marché du travail ou à la poursuite d'études."
      coverImage="/img/11c8528a-642d-41fc-b627-fb2be40a63d5.png"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-time-blue-1 mb-4">À propos du cycle Licence</h2>
          <p className="text-lg text-gray-700">
            Notre cycle licence constitue le premier niveau d'études supérieures et s'étend sur 3 années (6 semestres). 
            Il vous permet d'acquérir les fondamentaux dans votre domaine de spécialité et de développer des compétences 
            professionnelles recherchées par les entreprises.
          </p>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-time-blue-1 mb-6">Nos filières en Licence</h2>
          
          <div className="space-y-2 mb-8">
            {licenseFields.map((field, index) => (
              <FieldAccordion key={index} field={field} isActive={field.id === hash} />
            ))}
          </div>
        </div>
      </div>
    </CycleLayout>
  );
};

export default LicenseCycle;
