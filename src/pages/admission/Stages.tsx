
import React from 'react';
import Layout from '@/components/Layout';
import { 
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow 
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileDown,
  Calendar,
  FileText,
  ClipboardList
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Stages: React.FC = () => {
  // Structure for download links
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

 
  const downloadLinks = [
    {
      category: "Calendriers EPS",
      icon: <Calendar className="h-4 w-4 mr-2" />,
      files: [
        { name: `Calendrier EPS-Entreprises Cycle Ingénieur PFE RT5-GL5 ${currentYear}-${nextYear}`, url: "#" },
        { name: `Calendrier EPS-Entreprises Licence en Informatique ${currentYear}-${nextYear}`, url: "#" },
        { name: `Calendrier EPS-Entreprises Mastère Professionnel ${currentYear}-${nextYear}`, url: "#" },
        { name: `Calendrier EPS-Entreprises RT4-GL4 PFA ${currentYear}-${nextYear}`, url: "#" },
        { name: `Calendrier Licences: GRH-Management-Finance-Marketing-Comptabilité ${currentYear}-${nextYear}`, url: "#" },
      ]
    },
    {
      category: "Pages de garde",
      icon: <FileText className="h-4 w-4 mr-2" />,
      files: [
        { name: "Page de Garde Licence en Informatique", url: "#" },
        { name: "Page de Garde Mastère Professionnel", url: "#" },
        { name: "Page de garde Cycle Ingénieur PFE GL", url: "#" },
        { name: "Page de garde PFA GL", url: "#" },
        { name: "Page de garde RT5", url: "#" },
      ]
    },
    {
      category: "Guides des stagiaires",
      icon: <ClipboardList className="h-4 w-4 mr-2" />,
      files: [
        { name: "Guide du stagiaire Licence en Informatique", url: "#" },
        { name: "Guide du stagiaire Mastère Professionnel", url: "#" },
        { name: "Guide du stagiaire PFE GL et RT", url: "#" },
        { name: "Guide de l'étudiant PFA RT4 et GL4", url: "#" },
        { name: "Guide PFE licences", url: "#" },
      ]
    }
  ];

  // Partner companies structured by sector
  const partnerCompanies = [
    { sector: "BANQUE & ASSURANCE", companies: "AMEN BANK, BIAT, BAD, BT, BCT, BFI, LA CARTE" },
    { sector: "TRANSPORT", companies: "TUNISAIR, TRANSTU" },
    { sector: "PUBLIC", companies: "SONEDE, CEPEX" },
    { sector: "COMMUNICATION", companies: "ECOMEVENT, IMPRIMERIE FINZI" },
    { sector: "GRANDE CONSOMMATION", companies: "LECLERC" },
    { sector: "INDUSTRIIE", companies: "BONNA TUNISIE, ETAP" },
    { sector: "TELECOMMUNICATIONS", companies: "LA POSTE TUNISIENNE, TUNISIE TELECOM, ORANGE TUNISIE" },
    { sector: "TIC", companies: "LOGICA, ALPHA TECHNOLOGY, CYNAPSYS, FLEXOS AFRIQUE, MANAGER PARTNER, B2M-IT" },
    { sector: "GROUPE DE SOCIETES", companies: "GROUPE SLAMA, DALIAN GROUP" },
    { sector: "AUDIT / FINANCE", companies: "PROWAY CONSULTING, BUSINESS ADVICE & ASSURANCE B2A, MSI CONSULTANTS, CFTI, CABINET MAITRE HOUSSEM MHADHEBI" },
    { sector: "EDUCATION / FORMATION", companies: "ECOLE SUPERIEURE DE TECHNOLOGIE ( ETS CANADA), AMIDEAST" },
    { sector: "Autres", companies: "TUNISIE PORCELAINE, BEH, THE RESIDENCE HOTEL, HR ACCESS" }
  ];

  return (
    <Layout 
      coverImage="/img/11c8528a-642d-41fc-b627-fb2be40a63d5.png"
    >
      
      <div className="bg-blue-50 pt-20 pb-16" >
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-time-blue-1 mb-4">Stages</h1>
          <p className="text-xl text-gray-700">Accéder aux offres d'emplois et de stages</p>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="prose max-w-none mb-12">
            <h2 className="text-2xl font-semibold text-time-blue-1 mb-6">Notre politique de stages</h2>
            
            <p className="mb-4">
              Depuis 2002, date de création, TIME Higher School a mis en place une politique générale d'affectation de stagiaires, 
              menée par son département Recherche et Développement, supervisant des unités de recherches disciplinaires, orientées métiers 
              (Informatique de Gestion, Génie Logiciel, Réseaux Informatiques et Télécoms, Ressources Humaines, Marketing et Force de 
              vente à l'International, Finance, Audit, Ingénierie Financière, Contrôle de Gestion et Système d'Information, 
              Sécurité des Systèmes Informatiques et des Réseaux).
            </p>
            
            <p className="mb-4">
              L'effectif des inscrits à TIME Higher School est composé, en plus des étudiants tunisiens, d'étudiants en provenance 
              d'une vingtaine de Nationalités africaines. La réalisation de stage au profit de nos étudiants africains leur fait 
              vivre les réalités des entreprises tunisiennes.
            </p>
            
            <p className="mb-8">
              Ces jeunes africains seront, désormais, nos futurs ambassadeurs en Afrique maîtrisant notre culture, renoueront des 
              relations économiques et commerciales et favorisant nécessairement l'essor de notre économie nationale en collaboration 
              avec les pays frères africains.
            </p>
          </div>
          
          <div className="prose max-w-none mb-12">
            <h2 className="text-2xl font-semibold text-time-blue-1 mb-6">Relation Université - Entreprise</h2>
            
            <p className="mb-4">
              Notre perception de la Relation Université - Entreprise s'inscrit dans un cadre d'élaboration de Partenariat permanent afin de pouvoir :
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>Se donner la possibilité d'évaluer les résultats attendus ;</li>
              <li>Se confronter aux changements auquels se confrontent l'entreprise et Analyser l'impact de ces changements ;</li>
              <li>Préparer les compétences requises pour en faire face.</li>
            </ul>
            
            <p className="mb-4">
              Cette perception de la relation Université- Entreprise est matérialisée par la réalisation de stage 
              dont la problématique du sujet traité est appelée à donner une solution qui répond à une attente réelle de l'entreprise.
            </p>
            
            <p className="mb-4">
              Par rapport à notre demande d'affectation de stagiaires, cette solution revêt deux formes :
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>Une solution rapportée à la gestion courante (cas des sujets de mémoire de Licence et de Maîtrise).</li>
              <li>Une solution d'ordre stratégique : cas des sujets de Projet Fin d'Etudes en Cycle Ingénieur et des thèses professionnelles de 3ème cycle en Mastère Professionnel).</li>
            </ul>
            
            <p className="mb-4">
              Il en découle un accompagnement des activités courantes et de la veille stratégique de l'entreprise.
            </p>
            
            <p>
              Il est entendu que le choix des sujets devrait être partagé par l'entreprise (représenté par l'encadreur Professionnel) et nos enseignants.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-time-blue-1 mb-6">Entreprises conventionnées avec le Service EPS/ STAGES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partnerCompanies.map((partner, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="bg-time-orange text-white py-3 px-4">
                  <CardTitle className="text-sm font-semibold">{partner.sector}</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm">{partner.companies}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-time-blue-1 mb-6">Documents à télécharger</h2>
          
          <div className="space-y-8">
            {downloadLinks.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-time-blue-1 mb-4 flex items-center">
                  {category.icon} {category.category}
                </h3>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document</TableHead>
                      <TableHead className="w-[120px]">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {category.files.map((file, fileIndex) => (
                      <TableRow key={fileIndex}>
                        <TableCell>{file.name}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <FileDown className="h-4 w-4" />
                            <span>Télécharger</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Stages;
