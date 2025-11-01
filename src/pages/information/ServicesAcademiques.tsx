import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar } from "lucide-react";

const ServicesAcademiques: React.FC = () => {
  const {
    service
  } = useParams<{
    service?: string;
  }>();
  const defaultTab = service || 'reglement';
  return <Layout>
      <div className="container max-w-5xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-time-blue-1 mb-8">Services académiques</h1>
        
        <Tabs defaultValue={defaultTab} className="space-y-6">
          <TabsList className="w-full bg-gray-100 p-1 h-auto flex flex-wrap">
            <TabsTrigger value="reglement" className="flex-1 py-2">Règlement intérieur</TabsTrigger>
            <TabsTrigger value="annuaire" className="flex-1 py-2">Annuaire</TabsTrigger>
            <TabsTrigger value="frais" className="flex-1 py-2">Frais académiques</TabsTrigger>
            <TabsTrigger value="regime" className="flex-1 py-2">Régime</TabsTrigger>
            <TabsTrigger value="calendrier" className="flex-1 py-2">Calendrier académique</TabsTrigger>
          </TabsList>
          
          <TabsContent value="reglement" className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Règlement intérieur</h2>
            <div className="prose max-w-none">
              <p className="mb-4">Le règlement intérieur de notre établissement définit les règles de vie et de fonctionnement au sein de l'université. Il s'applique à tous les étudiants et membres du personnel.</p>
              
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="discipline" className="border rounded-md px-4">
                  <AccordionTrigger className="text-lg font-medium py-3">I - DE LA DISCIPLINE</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 space-y-3">
                    <div>
                      <h4 className="font-medium">Article 1 :</h4>
                      <p>Les étudiants doivent se conformer au Règlement Intérieur de l'institution. Les contrevenants sont passibles d'une sanction disciplinaire prise à leur encontre par le Directeur de TIME ou le conseil de Discipline de l'institution.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 2 :</h4>
                      <p>L'un des devoirs les plus impérieux des étudiants est le respect que doit chacun d'eux à tous les enseignants ainsi qu'aux personnels administratifs et ouvriers de l'institution. Tout étudiant ayant fait l'objet d'un rapport faisant état d'irrespect envers un enseignant, un fonctionnaire ou un ouvrier est passible d'une sanction disciplinaire, et ce au cas où la faute serait établie.</p>
                      <p>Il est strictement interdit d'accéder à l'enceinte de l'établissement en tenue jugée incorrecte (le port de short, de chapeau et de t-shirt demi-ventre est particulièrement interdit). Il est formellement interdit de fumer en classe et ce même lors du déroulement des examens.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 3 :</h4>
                      <p>Les salissures volontaires sur les murs ou sur les matériels peuvent constituer des délits de dégradation répréhensibles par la loi.</p>
                      <p>Toute personne qui détériore les murs ou bien du domaine public de l'Ecole est responsable des frais découlant de leur remise en état.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 4 :</h4>
                      <p>Tout étudiant ayant écopé d'une sanction disciplinaire ne peut bénéficier d'un rachat dans les examens.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="assiduite" className="border rounded-md px-4">
                  <AccordionTrigger className="text-lg font-medium py-3">II - DE L'ASSIDUITÉ</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div>
                      <h4 className="font-medium">Article 5 :</h4>
                      <p>La présence aux cours, aux TP et aux TD est obligatoire. L'assiduité des étudiants est rigoureusement contrôlée par les enseignants et régulièrement suivie par l'administration ; et ce, conformément aux prédispositions du système «Bonus- Malus» de l'institution TIME en Annexe 1 du présent règlement.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="examens" className="border rounded-md px-4">
                  <AccordionTrigger className="text-lg font-medium py-3">III - DES EXAMENS</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 space-y-3">
                    <div>
                      <h4 className="font-medium">Article 6 :</h4>
                      <p>Chaque module semestriel donne lieu à un examen final par écrit, à l'exclusion des modules relatifs au contrôle exclusif.</p>
                      <p>Deux sessions d'examens finals sont prévues pour chaque module.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 7 :</h4>
                      <p>Les étudiants du même niveau et de la même filière passent la même épreuve dans chaque module, et ce, même si l'enseignement n'est pas dispensé par le même enseignant de TD et de TP.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 8 :</h4>
                      <p>La moyenne de chaque module semestriel est calculée compte tenu des pondérations des examens intra semestriels, des examens semestriels et du contrôle continu, décidées par le conseil scientifique et affichées par le service de scolarité au début de chaque année universitaire voir Annexe 2.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 9 :</h4>
                      <p>Toute absence enregistrée lors d'un examen final est sanctionnée par un zéro, et ce quel qu'en soit le motif.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 10 :</h4>
                      <p>En cas de flagrant délit de fraude ou de tentative de fraude, l'étudiant doit impérativement se soumettre aux directives des professeurs surveillants en remettant sa feuille d'examen avec tous les documents censés devoir établir la preuve de sa culpabilité et quitter la salle d'examen en s'abstenant de perturber le déroulement de l'examen.</p>
                      <p>L'étudiant accusé de fraude comparait devant le conseil de discipline, cette instance peut prendre des sanctions disciplinaires allant de l'avertissement au renvoi définitif de l'institution TIME.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 11 :</h4>
                      <p>Il est interdit aux candidats de se présenter à la salle d'examen muni d'un quelconque document, sauf indications contraires mentionnées expressément sur le sujet d'examen.</p>
                      <p>Les feuilles d'examen et de brouillon sont fournies par l'institution.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 12 :</h4>
                      <p>Les candidats doivent garder les places qui leur sont affectées pendant les examens. Quiconque enfreindrait à cette consigne écoperait d'une lourde sanction.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 13 :</h4>
                      <p>Quel que soit le motif de son retard, le candidat retardataire ne peut être autorisé à passer son examen qu'à condition qu'il ne se soit pas écoulé plus de quinze minutes après le commencement de l'épreuve d'une durée supérieure ou égale à deux heures. Dans ce cas, le retardataire autorisé par l'administration à accéder à la salle d'examen ne peut bénéficier d'aucune prolongation de temps.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 14 :</h4>
                      <p>A partir du moment où les sujets sont remis, le candidat n'est autorisé à quitter la salle d'examen que trente minutes au moins après le commencement de l'épreuve. Il est rigoureusement interdit de quitter la salle d'examens avant de remettre sa copie, même blanche, et de signer la feuille de présence après y avoir porté, le cas échéant, la mention qui suit ; « je rends une copie blanche ».</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 15 :</h4>
                      <p>Après affichage des notes des examens finaux du 1er semestre et après proclamation des résultats des examens de fin d'année universitaire, tout étudiant peut demander à consulter ses copies pour en vérifier l'authenticité matérielle. Les demandes de consultations de copie sont à déposer auprès du service des Examens, scolarité, au plus tard, dans les 48 heures qui suivent l'affichage des notes ou la proclamation des résultats.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 16 :</h4>
                      <p>La vérification de l'authenticité matérielle des copies d'examen signifie ce qui suit :</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li>La copie est reconnue par l'étudiant comme étant sienne.</li>
                        <li>Le total des points obtenus correspond à la note globale attribuée.</li>
                      </ul>
                      <p>Cette vérification ne signifie, en aucune manière, deuxième correction des copies d'examen.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="controle-continu" className="border rounded-md px-4">
                  <AccordionTrigger className="text-lg font-medium py-3">IV - DU CONTRÔLE CONTINU</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 space-y-3">
                    <div>
                      <h4 className="font-medium">Article 17 :</h4>
                      <p>Généralement les cours semestriels donnent lieu à un devoir de contrôle continu et/ou des interrogations écrites ou de toute autre forme d'évaluation intra semestriels que l'enseignant juge opportune.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 18 :</h4>
                      <p>Les notes du contrôle continu entrent dans le calcul de la moyenne arithmétique de chaque module à concurrence d'un pourcentage décidé par le conseil scientifique et affiché par le service de scolarité au début de chaque année universitaire.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="travaux-recherche" className="border rounded-md px-4">
                  <AccordionTrigger className="text-lg font-medium py-3">V - DES TRAVAUX DE RECHERCHE</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 space-y-3">
                    <div>
                      <h4 className="font-medium">Article 19 :</h4>
                      <p>Les étudiants de l'année terminale doivent rédiger des travaux de recherche sous forme, soit d'un mémoire de licence, soit d'un rapport de stage d'ingénieurs, soit d'une thèse professionnelle de mastère professionnel.</p>
                      <p>Ces travaux doivent systématiquement être soutenus devant un jury.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 20 :</h4>
                      <p>Les sujets des travaux de recherche doivent être proposés par écrit au service des stages et des relations publiques, et ce, conformément aux délais arrêtés et affichés par la direction des études au début de chaque année universitaire. A cet effet, un formulaire est mis à la disposition des étudiants au dit service. Ce formulaire doit être signé et par l'étudiant et par l'enseignant dirigeant les travaux de recherches de celui–ci.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 21 :</h4>
                      <p>Les travaux de recherche doivent être déposés auprès du service des stages dans les délais de rigueur, et dont la soutenabilité est décidée par l'enseignant dirigeant. Ces travaux sont affichés par la direction des études au début de chaque année universitaire.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Article 22 :</h4>
                      <p>La soutenance doit se faire devant un jury composé d'enseignants universitaires et de professionnels.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-8 flex justify-center">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-time-blue-1 text-time-blue-1 hover:bg-time-blue-1/10"
                  onClick={() => window.open('/reglements/reglement-interieur.pdf', '_blank')}
                >
                  <FileText size={18} />
                  <span>Télécharger le règlement intérieur complet (PDF)</span>
                  <Download size={18} />
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="annuaire" className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Annuaire</h2>
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Direction</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/2 bg-orange-500 text-white">Service</TableHead>
                    <TableHead className="w-1/2 bg-orange-500 text-white">Contact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Directeur Exécutif</TableCell>
                    <TableCell>
                      <a href="mailto:nidhal.damak@time.ens.tn" className="text-blue-600 hover:text-blue-800 hover:underline">
                        nidhal.damak@time.ens.tn
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Direction des admissions</TableCell>
                    <TableCell>
                      <a href="mailto:admissions@time.ens.tn" className="text-blue-600 hover:text-blue-800 hover:underline">
                        admissions@time.ens.tn
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Direction Administrative et Financière</TableCell>
                    <TableCell>
                      <a href="mailto:Raf@time.ens.tn" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Raf@time.ens.tn
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Direction des études</TableCell>
                    <TableCell>
                      <a href="mailto:de@time.ens.tn" className="text-blue-600 hover:text-blue-800 hover:underline">
                        de@time.ens.tn
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Assistant Direction des études</TableCell>
                    <TableCell>
                      <a href="mailto:de.assistant@time.ens.tn" className="text-blue-600 hover:text-blue-800 hover:underline">
                        de.assistant@time.ens.tn
                      </a>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <h3 className="text-lg font-medium mt-6">Services administratifs</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/2 bg-orange-500 text-white">Service</TableHead>
                    <TableHead className="w-1/2 bg-orange-500 text-white">Contact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Service Inscription</TableCell>
                    <TableCell>
                      <a href="mailto:admissions@time.ens.tn" className="text-blue-600 hover:text-blue-800 hover:underline">
                        admissions@time.ens.tn
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Service paiement et Recouvrement</TableCell>
                    <TableCell>
                      <a href="mailto:admissions1@time.ens.tn" className="text-blue-600 hover:text-blue-800 hover:underline">
                        admissions1@time.ens.tn
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Service Communication & Marketing</TableCell>
                    <TableCell>
                      <a href="mailto:marketing@time.ens.tn" className="text-blue-600 hover:text-blue-800 hover:underline">
                        marketing@time.ens.tn
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Scolarité</TableCell>
                    <TableCell>
                      <a href="mailto:scolarite1@time.ens.tn" className="text-blue-600 hover:text-blue-800 hover:underline">
                        scolarite1@time.ens.tn
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">BackOffice</TableCell>
                    <TableCell>
                      <a href="mailto:backoffice@time.ens.tn" className="text-blue-600 hover:text-blue-800 hover:underline">
                        backoffice@time.ens.tn
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">EPS-entreprise</TableCell>
                    <TableCell>
                      <a href="mailto:eps-e@time.ens.tn" className="text-blue-600 hover:text-blue-800 hover:underline">
                        eps-e@time.ens.tn
                      </a>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <h3 className="text-lg font-medium mt-6">Départements académiques</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/2 bg-orange-500 text-white">Département</TableHead>
                    <TableHead className="w-1/2 bg-orange-500 text-white">Contact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Département économie et gestion</TableCell>
                    <TableCell>
                      <a href="mailto:neila.elloumi@time.ens.tn" className="text-blue-600 hover:text-blue-800 hover:underline">
                        neila.elloumi@time.ens.tn
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Département des Mastères</TableCell>
                    <TableCell>
                      <a href="mailto:masteres@time.ens.tn" className="text-blue-600 hover:text-blue-800 hover:underline">
                        masteres@time.ens.tn
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Département Recherche & Développement</TableCell>
                    <TableCell>
                      <a href="mailto:rd@time.ens.tn" className="text-blue-600 hover:text-blue-800 hover:underline">
                        rd@time.ens.tn
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Responsable bibliothèque</TableCell>
                    <TableCell>
                      <a href="mailto:biblio@time.ens.tn" className="text-blue-600 hover:text-blue-800 hover:underline">
                        biblio@time.ens.tn
                      </a>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="frais" className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Frais académiques 2024-2025</h2>
            <div className="prose max-w-none">
              <p className="mb-4">Les frais de scolarité varient selon le cycle d'études et la formation choisie. Ils couvrent l'enseignement, l'accès à la bibliothèque et aux ressources informatiques, ainsi que certaines activités parascolaires.</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th colSpan={2} className="border p-3 bg-gray-200 text-center">Domaine et Filières</th>
                      <th colSpan={4} className="border p-3 bg-time-blue-2 text-white text-center">Droits d'inscription pour l'A.U 2024/2025 en TND et en €</th>
                    </tr>
                    <tr>
                      <th className="border p-3 bg-time-blue-3 text-white">Domaine</th>
                      <th className="border p-3 bg-time-blue-3 text-white">Filières</th>
                      <th colSpan={2} className="border p-3 bg-time-blue-3 text-white text-center">Tarifs TND<br />Tunisiens</th>
                      <th colSpan={2} className="border p-3 bg-time-blue-3 text-white text-center">Tarifs en Euros<br />Étudiants Internationaux</th>
                    </tr>
                    <tr>
                      <th colSpan={2} className="border"></th>
                      <th className="border p-2 bg-blue-100 text-center rounded-none">Frais d'inscription</th>
                      <th className="border p-2 bg-blue-100 text-center">Frais d'études</th>
                      <th className="border p-2 bg-blue-100 text-center">Frais d'inscription*</th>
                      <th className="border p-2 text-center bg-blue-100">Frais d'études**</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowSpan={1} className="border p-3 bg-gray-50">Économie et Gestion</td>
                      <td className="border p-3">- Licence</td>
                      <td className="border p-3 text-center">500</td>
                      <td className="border p-3 text-center">5300</td>
                      <td className="border p-3 text-center">150</td>
                      <td className="border p-3 text-center">1790</td>
                    </tr>
                    <tr>
                      <td rowSpan={3} className="border p-3 bg-gray-50">Sciences Et Technologie</td>
                      <td className="border p-3">- Diplôme d'Ingénieur</td>
                      <td rowSpan={3} className="border p-3 text-center">500</td>
                      <td rowSpan={3} className="border p-3 text-center">6510</td>
                      <td rowSpan={3} className="border p-3 text-center">150</td>
                      <td rowSpan={3} className="border p-3 text-center">2200</td>
                    </tr>
                    <tr>
                      <td className="border p-3">- Cycle Préparatoire</td>
                    </tr>
                    <tr>
                      <td className="border p-3">- Licence "Business Computing" (Informatique de Gestion)</td>
                    </tr>
                    <tr>
                      <td className="border p-3 bg-gray-50">Mastères Professionnels</td>
                      <td className="border p-3">Particulier et prise en charge</td>
                      <td className="border p-3 text-center">500</td>
                      <td className="border p-3 text-center">6930</td>
                      <td className="border p-3 text-center">150</td>
                      <td className="border p-3 text-center">2260</td>
                    </tr>
                    <tr>
                      <td className="border p-3 bg-gray-50">Mastères Professionnels:</td>
                      <td className="border p-3 font-medium">Mastère Comptabilité<br />Particulier et prise en charge</td>
                      <td className="border p-3 text-center">500</td>
                      <td className="border p-3 text-center">7350</td>
                      <td className="border p-3 text-center">150</td>
                      <td className="border p-3 text-center">2360</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mt-4 text-sm my-[10px]">(*) : Frais d'inscription (frais de dossier) qui s'élèvent à 500dt (150 euros) non inclus et qui ne sont en aucun cas remboursables.</p>
              <p className="text-sm"> Frais d'études annuels</p>
              
              <h3 className="mt-6 py-[12px] text-sm">Modalités de paiement</h3>
              <p className="text-sm">Les remises : Des remises peuvent être accordées dans les conditions suivantes :</p>
              <ul>
                <li>En une seule fois (réduction de 5%)</li>
                <li>- Frères & soeurs (présentation des certificats de naissance) : 5 % pour chaque membre de la famille

- Toute inscription, avec de paiement intégral de tous les frais d'études avant le 31/8/2024 : exonération totale des frais d'inscription (frais de dossier).</li>
              </ul>
              
              <p className="text-base font-medium">[Banque Tuniso-Libyenne] BTL La petite Ariana   
Code Swift: ATLDTNTT IBAN: TN 59 26 005 000 8901183717 06</p>
            </div>
          </TabsContent>
          
          <TabsContent value="regime" className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Régime des études</h2>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                L'Ecole Supérieure Privée des Technologies de l'Information et de Management de l'Entreprise (TIME- ESP) du Groupe TIME Université 
                est un établissement d'enseignement supérieur privé agréé par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique 
                de l'Etat tunisien sous le N° 1/2002, en vertu de l'arrêté du 24 juin 2002.
              </p>
              
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="definitions" className="border rounded-md px-4">
                  <AccordionTrigger className="text-lg font-medium py-3">1. Définitions</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 space-y-3">
                    <div>
                      <h4 className="font-medium">1.1 Année universitaire</h4>
                      <p>L'année universitaire s'étend sur douze mois et compte deux semestres.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.2 Semestre</h4>
                      <p>Un semestre correspond généralement à quatorze (14) semaines de cours, sanctionné par des examens, décidé par le conseil scientifique et pédagogique et affiché au début de l'année universitaire dans un calendrier annuel.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.3 Organisation</h4>
                      <p>Domaines d'enseignement :</p>
                      <ul className="list-disc pl-6">
                        <li>Economie et Gestion</li>
                        <li>Sciences et Technologies</li>
                      </ul>
                      <p>Spécialités : Consulter notre Direction des Admissions et/ou notre site web www.time.ens.tn</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.3 Cycles d'études</h4>
                      <p>L'enseignement universitaire comprend quatre cycles d'études : Licence, Mastère, Cycle Préparatoire et Cycle Ingénieur.</p>
                      
                      <div className="pl-4 mt-2">
                        <h5 className="font-medium">1.3.1 TIME-ESP: Licence</h5>
                        <p>Le premier cycle conduit à une licence appliquée (durée : cinq semestres et 6 mois de stages et réalisation d'un projet de fin d'études) ou une licence fondamentale (durée : six semestres).</p>
                        
                        <h5 className="font-medium mt-2">1.3.2 TIME-ESP: Mastère</h5>
                        <p>Le deuxième cycle conduit au diplôme de mastère professionnel (durée : trois semestres et 6 mois de stage et réalisation d'une thèse professionnelle).</p>
                        
                        <h5 className="font-medium mt-2">1.3.3 TIME-ESP: Cycle Préparatoire</h5>
                        <p>Le premier cycle conduit à un diplôme de cycle préparatoire intégré (1ère année tronc commun : Math- Physique-Informatique ; 2ème année : tronc commun et ou une année de spécialité).</p>
                        
                        <h5 className="font-medium mt-2">1.3.4 TIME-ESP: Cycle Ingénieur</h5>
                        <p>Le deuxième cycle conduit à un diplôme d'Ingénieur spécialisé (durée : cinq semestres et 6 mois de stage et réalisation d'un projet de fin d'Etudes).</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.4 Étudiante ou étudiant régulier</h4>
                      <p>L'étudiant régulier vise l'obtention d'un diplôme de TIME-ESP. Il doit satisfaire aux conditions d'admission et aux exigences pédagogiques spécifiées pour le diplôme visé. Il est inscrit à plusieurs cours et en subit toutes les formes d'évaluation.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.5 Étudiant ou étudiante libre (Projet en cours)</h4>
                      <p>L'étudiant libre n'est pas candidat à l'obtention d'un diplôme ou d'un certificat et ne satisfait pas nécessairement à toutes les conditions d'admission du programme. Il ne peut s'inscrire qu'à quelques cours, après en avoir obtenu l'autorisation de la direction du programme concerné, et il en subit toutes les formes d'évaluation.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.6 Étudiant ou étudiante visiteur (Projet en cours)</h4>
                      <p>L'étudiant visiteur est admis dans un programme d'études d'un autre établissement universitaire et s'inscrit à un ou plusieurs cours à TIME. Il est soumis aux règles d'évaluation de TIME pour chacun de ces cours.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.7 Crédit</h4>
                      <p>Le crédit est une unité qui permet d'attribuer une valeur numérique à la charge de travail exigée d'un étudiant pour atteindre les objectifs d'un cours ou d'une activité de recherche. Dans le cas d'un cours, un crédit représente un nombre d'heures de présence en classe et le nombre d'heures de travail personnel nécessaire pour atteindre les objectifs du cours, lequel varie selon les programmes. Le travail personnel dans les programmes de 1er cycle, et de 2ème cycle est fixé par le conseil scientifique et pédagogique pour chaque diplôme.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.8 Exemption / Validation</h4>
                      <p>Il y a exemption/validation lorsque des activités de formation ont permis d'acquérir les connaissances que lui apporterait normalement un cours prévu à son programme. L'exemption/ validation accorde la reconnaissance de crédits de cours sans que ce cours ait à être suivi ou remplacé par l'étudiant qui a obtenu l'exemption/validation.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.9 Interrogation et test</h4>
                      <p>Une interrogation ou un test couvrent une portion limitée de matière, sont de courte durée et se déroulent généralement sur une partie des cours.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.10 Examen intra semestriel</h4>
                      <p>L'examen intra semestriel est un (des) devoir(s) surveillé (DS) qui se tient (tiennent) à la session et couvre (couvrent) la matière vue dans au moins la première moitié du cours.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.11 Examen final</h4>
                      <p>L'examen final se tient à la fin du semestre ou de la période et couvre normalement toute la matière vue pendant le cours.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.12 Thèse Professionnelle</h4>
                      <p>La thèse est un exposé écrit des résultats d'un travail de recherche poursuivi dans le cadre d'un programme de Mastère Professionnel.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.13 Mémoire</h4>
                      <p>Le mémoire est un exposé écrit des résultats d'un travail de recherche poursuivi dans le cadre d'un programme de licence.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.14 Travail encadré (Projet Fin d'Année : PFA)</h4>
                      <p>Le travail encadré est un projet d'analyse approfondi personnel et professionnel, effectué dans le cadre d'un programme du cycle (respectivement, à la fin des 1ère et 2ème année du cycle Ingénieur).</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.15 Projet de Fin d'Etudes (PFE)</h4>
                      <p>C'est un projet effectué au dernier semestre du cycle Ingénieur, sanctionnant un stage dans une entreprise.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.16 Diplôme</h4>
                      <p>Le diplôme est un acte universitaire conféré à une personne. L'école confère à un étudiant les actes de diplômes selon le cas : Licence, Cycle Préparatoire Intégré, Cycle Préparatoire Général (Projet en cours), Cycle Ingénieur et Mastère professionnel.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.17 Supplément de diplôme (SD)</h4>
                      <p>Le SD est un acte attestant la réussite et la capitalisation de tous les crédits des unités d'enseignements des programmes de licences et de mastères dans une même discipline ou un même champ d'études du système LMD.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">1.18 Attestation de réussite</h4>
                      <p>L'attestation de réussite est un acte par lequel on atteste le succès à plusieurs cours ou activités pédagogiques.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="preinscription" className="border rounded-md px-4">
                  <AccordionTrigger className="text-lg font-medium py-3">2. Pré inscription</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 space-y-3">
                    <div>
                      <h4 className="font-medium">2.1 Demande de Pré inscription</h4>
                      <p>Le candidat ou la candidate qui désire s'inscrire aux cours d'un programme doit d'abord soumettre une demande de pré inscription sur le formulaire approprié qu'il peut se procurer au comptoir d'accueil au bureau des admissions ou sur le site Web de TIME. La demande de pré inscription doit être accompagnée des pièces et des frais exigés. Le candidat aurait avantage à s'assurer qu'il satisfait aux conditions d'admission.</p>
                      <p>Une demande de pré inscription peut être déposée en tout temps. Cependant, le candidat qui désire être admis doit soumettre sa demande avant la date limite publiée par TIME pour la rentrée universitaire en question.</p>
                      <p>Tout document falsifié soumis lors de la Préinscription entraîne, à quelque moment que ce soit, l'annulation de l'admission ou de l'inscription à TIME.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">2.2 Réponse à la demande de pré inscription</h4>
                      <p>TIME-ESP ne s'engage pas à accepter tous les candidats pré inscrits et admissibles.</p>
                      <p>Un avis écrit de confirmation ou de refus d'admission est transmis au candidat dans des délais raisonnables. Dans certains cas, la confirmation d'admission reste conditionnelle à la présentation de documents officiels ou à l'obtention du diplôme, qui appuie la demande.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="changement-programme" className="border rounded-md px-4">
                  <AccordionTrigger className="text-lg font-medium py-3">3. Changement de programme d'études</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p>L'étudiant qui désire changer de programme doit soumettre une nouvelle demande de pré inscription, y joindre les pièces requises et le paiement des frais exigés, s'il y a lieu.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="langue" className="border rounded-md px-4">
                  <AccordionTrigger className="text-lg font-medium py-3">4. Langue des études</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div>
                      <h4 className="font-medium">4.1 Exigences linguistiques</h4>
                      <p>La pleine maîtrise de la langue française et la bonne connaissance d'usage de la langue anglaise sont obligatoires pour la délivrance de la majorité des diplômes de TIME-ESP.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="regime-etudes" className="border rounded-md px-4">
                  <AccordionTrigger className="text-lg font-medium py-3">5. Régime d'études</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 space-y-3">
                    <div>
                      <h4 className="font-medium">5.1 Régime d'études</h4>
                      <p>L'étudiant ou l'étudiante est à temps complet même s'il est inscrit à un nombre minimum de crédits décidé par le conseil scientifique pour un semestre.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">5.2 Interruption d'études</h4>
                      <p>L'étudiante ou l'étudiant régulier est tenu de s'inscrire à tous les semestres. En conséquence, dès qu'il omet de s'inscrire à une année universitaire donné, ou abandonne tous les cours auxquels il s'est inscrit à une année précise, TIME-ESP considère qu'il est en interruption d'études.</p>
                      <p>Lorsque l'étudiant prévoit d'interrompre ses études, il doit à l'avance en obtenir l'autorisation auprès de la direction des études. Celle-ci analyse le bien-fondé de la demande et établit les modalités auxquelles l'étudiant devra se soumettre afin que sa réintégration lui soit assurée au moment de son retour.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="inscription" className="border rounded-md px-4">
                  <AccordionTrigger className="text-lg font-medium py-3">6. Inscription</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 space-y-3">
                    <div>
                      <h4 className="font-medium">6.1. Responsabilité de l'étudiant et de l'étudiante</h4>
                      <p>L'étudiant est responsable de la gestion de son cheminement. Pour avoir droit à son diplôme, il doit s'être conformé intégralement aux exigences de son programme d'études ainsi qu'aux règlements et marches à suivre de TIME-ESP.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">6.2 Choix de discipline</h4>
                      <p><strong>Préalables</strong></p>
                      <p>En s'inscrivant à une discipline, l'étudiant doit s'assurer qu'il respecte les exigences en ce qui a trait aux préalables, s'il y a lieu. Lorsque le résultat d'un préalable n'est pas encore disponible au moment où l'étudiant effectue son choix de discipline pour un semestre, l'étudiant doit s'inscrire en présumant qu'il a réussi ce préalable. Cependant si le résultat du ou des préalables s'avère être un échec, l'étudiant conservera l'obligation de réussir le préalable échoué.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">6.3 Demande d'inscription</h4>
                      <p><strong>Inscription à des disciplines</strong></p>
                      <p>L'étudiant doit s'inscrire directement à TIME-ESP durant les périodes de choix de disciplines précisées dans le calendrier universitaire et en tenant compte du rendez-vous qui lui aura été fixé. Il faut prendre note que :</p>
                      <p>TIME-ESP se réserve le droit de ne pas rembourser les frais des études après les dates de démarrages des cours. Toutefois avant cette date de démarrage, le remboursement des ces frais est autorisé après déduction des droits d'inscription.</p>
                      
                      <p className="mt-2"><strong>Inscription à un cours-projet *</strong></p>
                      <p>L'étudiant doit remplir le formulaire d'inscription à un cours-projet, le faire approuver par le professeur qui le dirigera et par la direction du programme. Une fois le cours-projet approuvé, le Bureau de scolarité procède à l'inscription. Il est de la responsabilité de l'étudiant de trouver le professeur qui acceptera de superviser son cours-projet.</p>
                      <p className="text-sm italic">* le cours- projet concerne tous les travaux de fin d'étude (thèse professionnelle, PFE, mémoire).</p>
                      
                      <p className="mt-2"><strong>Frais</strong></p>
                      <p>L'étudiant doit acquitter les frais exigés avant la date limite et consulter, le service des admissions et le service des stages « EPS-Entreprise » pour des informations additionnelles.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">6.4 Confirmation d'inscription et facture</h4>
                      <p><strong>Confirmation d'inscription</strong></p>
                      <p>Avant le début du semestre, l'étudiant doit consulter son horaire de cours dans les locaux de TIME-ESP pour connaître les salles de ses cours et le nom de ses professeurs.</p>
                      
                      <p className="mt-2"><strong>Facture /Reçu</strong></p>
                      <p>TIME-ESP adresse une facture ou un reçu à tout étudiant ou étudiante dont l'inscription est agréée en entier ou en partie.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="acces-rectification" className="border rounded-md px-4">
                  <AccordionTrigger className="text-lg font-medium py-3">7. Droit à l'accès et à la rectification des renseignements personnels</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p>Toute personne a le droit d'être informée de l'existence et de recevoir communication de tout renseignement personnel la concernant. Toute personne a le droit de recevoir communication des enregistrements, de consultations, et de renseignements nominatifs la concernant ainsi que la liste de personnes ou catégories de personnes qui n'ont pas à s'enregistrer. Le document peut être consulté gratuitement à TIME durant les heures d'ouverture. On peut également le recevoir par la poste, en en faisant la demande auprès du Bureau de scolarité. Des frais d'envoi, de transcription ou de reproduction sont exigés pour une copie. Toute personne qui reçoit la confirmation de l'existence dans un fichier d'un renseignement personnel la concernant peut, si ce renseignement est inexact, incomplet ou équivoque ou si la collecte, la communication ou la conservation de ce renseignement ne sont pas autorisées par la loi, exiger que le fichier soit rectifié. Par sa demande de pré inscription et par son inscription, l'étudiant ou le candidat accepte que des renseignements nominatifs confidentiels le concernant et inclus à tout moment dans son dossier servent à l'exercice des attributions confiées à TIME ou à la mise en œuvre d'un programme dont elle a la responsabilité, étant entendu que la transmission d'informations aux divers organismes sera limitée aux besoins essentiels de ces organismes. Cela signifie qu'à des fins administratives, TIME peut transmettre certains de ces renseignements aux organismes suivants :</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Le ministère chargé de l'Enseignement Supérieur Privé et de la recherche scientifique;</li>
                      <li>Le Service de placement et de gestion de carrière des diplômés de TIME;</li>
                      <li>Les associations professionnelles dûment reconnues par TIME;</li>
                      <li>Les organismes boursiers publics et privés;</li>
                      <li>Les compagnies d'assurance accident.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="changement-fichier-social" className="border rounded-md px-4">
                  <AccordionTrigger className="text-lg font-medium py-3">8. Changement au fichier social de l'étudiant ou de l'étudiante</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p>Il est dans l'intérêt de l'étudiant de faire en sorte que le Bureau de scolarité puisse le joindre facilement. Il est donc indispensable que l'étudiant mette à jour promptement ses coordonnées au service de scolarité ou dans TIME-ESP en ligne lors d'un changement d'adresse ou de numéro de téléphone, à son domicile ou à son travail. De plus, afin d'assurer l'exactitude des documents officiels qui portent son nom, l'étudiant doit immédiatement aviser par écrit le Bureau de scolarité de toute erreur notée dans les renseignements personnels le concernant ou de tout changement à son dossier social. Dans le cas d'un changement de nom ou de statut, la pièce justificative originale appropriée sera exigée. La politique établie à TIME-ESP veut que l'étudiant ou l'étudiante soit toujours nommé par son nom de famille à la naissance.</p>
                    <p>En plus d'un certificat de naissance original et d'une copie obligatoire de la CIN ou du Passeport qui doivent être dans le Dossier d'Admission de l'étudiante ou de l'étudiant, une copie de la carte de séjour doit être remise au service Back Office Scolarité, au plus tard, un mois après la date d'inscription.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="regles-marches" className="border rounded-md px-4">
                  <AccordionTrigger className="text-lg font-medium py-3">9. Règles et marches à suivre</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p>La direction de TIME-ESP se réserve le droit d'établir par simple résolution les règles et marches à suivre relatives à l'application et à l'interprétation du présent régime des études.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="calendrier" className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Calendrier académique 2024-2025</h2>
            
            <div className="prose max-w-none">
              <p className="mb-6 text-justified">
                Consultez les calendriers académiques pour tous les cycles d'études. Les dates importantes des semestres, 
                des examens et des vacances y sont détaillées pour vous accompagner dans votre planification académique.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Calendrier 1er et 2e cycles */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-center">1er et 2e cycles</h3>
                  <div className="border rounded-lg overflow-hidden shadow-sm">
                    <img 
                      src="/img/b046bcf8-3e9e-48b7-bfcf-1d92a0042607.png" 
                      alt="Calendrier académique 1er et 2e cycles"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 border-time-blue-1 text-time-blue-1 hover:bg-time-blue-1/10"
                      onClick={() => window.open('/calendriers/calendrier-1er-2eme-cycles.pdf', '_blank')}
                    >
                      <Calendar size={18} />
                      <span>Télécharger calendrier 1er & 2e cycles (PDF)</span>
                      <Download size={18} />
                    </Button>
                  </div>
                </div>

                {/* Calendrier Mastères */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-center">Mastères professionnels</h3>
                  <div className="border rounded-lg overflow-hidden shadow-sm">
                    <img 
                      src="/img/39d65381-ea57-49c2-8bd0-5ad75b3a3d36.png" 
                      alt="Calendrier académique mastères professionnels"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 border-time-blue-1 text-time-blue-1 hover:bg-time-blue-1/10"
                      onClick={() => window.open('/calendriers/calendrier-masteres.pdf', '_blank')}
                    >
                      <Calendar size={18} />
                      <span>Télécharger calendrier mastères (PDF)</span>
                      <Download size={18} />
                    </Button>
                  </div>
                </div>
              </div>
















              {/* Section téléchargements examens */}
{/*               <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-center">Calendriers des examens par cycle</h3>
                <p className="text-sm text-gray-600 mb-4 text-justified">
                  Téléchargez les calendriers détaillés des examens pour chaque cycle d'études :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button 
                    variant="outline" 
                    className="flex flex-col items-center gap-2 h-auto py-4 border-time-blue-1 text-time-blue-1 hover:bg-time-blue-1/10"
                    onClick={() => window.open('/examens/licence-examens.pdf', '_blank')}
                  >
                    <Calendar size={24} />
                    <span className="text-sm font-medium">Examens Licence</span>
                    <Download size={16} />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="flex flex-col items-center gap-2 h-auto py-4 border-time-blue-1 text-time-blue-1 hover:bg-time-blue-1/10"
                    onClick={() => window.open('/examens/master-examens.pdf', '_blank')}
                  >
                    <Calendar size={24} />
                    <span className="text-sm font-medium">Examens Master</span>
                    <Download size={16} />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="flex flex-col items-center gap-2 h-auto py-4 border-time-blue-1 text-time-blue-1 hover:bg-time-blue-1/10"
                    onClick={() => window.open('/examens/prepa-examens.pdf', '_blank')}
                  >
                    <Calendar size={24} />
                    <span className="text-sm font-medium">Examens Prépa</span>
                    <Download size={16} />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="flex flex-col items-center gap-2 h-auto py-4 border-time-blue-1 text-time-blue-1 hover:bg-time-blue-1/10"
                    onClick={() => window.open('/examens/ingenieur-examens.pdf', '_blank')}
                  >
                    <Calendar size={24} />
                    <span className="text-sm font-medium">Examens Ingénieur</span>
                    <Download size={16} />
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  * Les calendriers d'examens sont mis à jour régulièrement. Vérifiez les dates auprès du service scolarité.
                </p>
              </div> */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>;
};

export default ServicesAcademiques;
