import React from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, MapPin, DollarSign, Home, Calendar } from 'lucide-react';
const EtudiantsInternationaux: React.FC = () => {
  return <Layout>
      <div className="container max-w-5xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-time-blue-1 mb-4">Étudiants internationaux</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <p className="text-lg mb-6">
            Bienvenue à TIME, l'école Entreprise par excellence. Située au cœur de la ville de Tunis et au milieu de l'un des plus importants quartiers d'affaire.
          </p>
          
          <div className="flex justify-center mb-8">
            <img alt="Campus TIME Université" className="rounded-lg max-w-full h-auto" src="/lovable-uploads/bccd8597-0b88-49cd-9314-caa5c44aff9a.jpg" />
          </div>
        </div>
        
        <Tabs defaultValue="admission" className="space-y-6">
          <TabsList className="w-full bg-gray-100 p-1 h-auto flex flex-wrap">
            <TabsTrigger value="admission" className="flex-1 py-2 flex items-center gap-1">
              <FileText className="h-4 w-4" /> Procédure d'admission
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex-1 py-2 flex items-center gap-1">
              <Calendar className="h-4 w-4" /> Documents requis
            </TabsTrigger>
            <TabsTrigger value="logement" className="flex-1 py-2 flex items-center gap-1">
              <Home className="h-4 w-4" /> Logement
            </TabsTrigger>
            <TabsTrigger value="vie" className="flex-1 py-2 flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Vie étudiante
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="admission">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Procédure d'admission</h2>
              
              <div className="prose max-w-none">
                <div className="mb-8 bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="text-lg font-semibold text-amber-800">Important : Obtenir votre attestation d'inscription</h3>
                  <p className="text-amber-700">Pour obtenir votre ATTESTATION D'INSCRIPTION par mail, vous devez :</p>
                  <ul className="list-disc pl-6 text-amber-700">
                    <li>Transférer la totalité des frais de Formation</li>
                    <li>Envoyer par mail :
                      <ul className="list-disc pl-6">
                        <li>Une copie du passeport</li>
                        <li>Une copie certifiée du baccalauréat et son relevé de notes</li>
                        <li>Des copies certifiées des diplômes obtenus, des relevés de notes, et des attestations de réussite</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Candidature en ligne</h3>
                    <p>Complétez le formulaire de candidature disponible sur notre site web, et joignez les documents requis mentionnés ci-dessous.</p>
                  </div>
                  
                  <div>
                    <img src="/lovable-uploads/19d9fae2-0cc4-4b6a-9735-688319eb36c0.png" alt="Étudiants internationaux" className="rounded-lg w-full h-auto shadow" />
                  </div>
                </div>
                
                <div className="mt-6">
                  <a href="/admission/pre-inscription">
                  <Button className="bg-time-orange hover:bg-time-orange/90 flex items-center gap-2">
                    Candidater en ligne
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="documents">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Documents requis</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="prose max-w-none">
                  <h3>Pièces à fournir lors de l'inscription définitive</h3>
                  <ul className="list-disc pl-6">
                    <li>4 photos d'identité</li>
                    <li>2 enveloppes affranchies portant l'adresse (16 X 11cm)</li>
                    <li>Photocopie du passeport de l'étudiant</li>
                    <li>Copie certifiée du baccalauréat et son relevé de notes</li>
                    <li>Copies certifiées des diplômes obtenus, des relevés de notes et des attestations de réussite</li>
                    <li>Formulaire d'inscription dûment rempli</li>
                  </ul>
                </div>
                
                <div>
                  <img alt="Documents d'inscription" className="rounded-lg w-full h-auto shadow object-scale-down" src="https://media.istockphoto.com/id/1153672822/fr/vectoriel/documents-contractuels-document-dossier-avec-le-timbre-et-le-texte-pile-des-accords.jpg?s=612x612&w=0&k=20&c=k-yGfNjKdWFCTuovwjDqivqC2BVAjSVClWrtRuohf9U=" />
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">
                  TIME Université veille à un accueil chaleureux des étudiants étrangers en provenance des pays africains en collaboration avec l'Association des Étudiants et Stagiaires Africains en Tunisie.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="logement">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Logement et vie quotidienne</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Home className="h-5 w-5 text-time-orange" />
                      Hébergement
                    </h3>
                    <p className="text-gray-600 mb-4">
                      En foyers universitaires privés : un maximum de 1000 euros/an.
                    </p>
                    <p className="text-gray-600">
                      Il est possible de procéder à la location d'un appartement par un groupe d'étudiants et dans ce cas le prix variera selon le standing du logement.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-time-orange" />
                      Restauration
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Au restaurant universitaire public (les étudiants du privé y ont droit) : un maximum de 200 euros/an.
                    </p>
                    <p className="text-gray-600">
                      Il est possible de se nourrir chez des établissements privés, dans ce cas il faut prévoir un budget de l'ordre de 1800 euros/an.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-4 flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-time-orange" />
                        Transport
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Pour les cartes de transport universitaire, il faut prévoir un budget d'environ 50 euros/an.
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        NB : Les frais d'habillement et de voyage ne sont pas inclus.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="md:w-1/2">
                  
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="vie">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Vie étudiante</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="prose max-w-none">
                  <h3>Une intégration facilitée</h3>
                  <p>TIME Université met un point d'honneur à accompagner les étudiants internationaux tout au long de leur parcours académique :</p>
                  <ul>
                    <li>Accueil personnalisé à l'arrivée</li>
                    <li>Assistance pour les démarches administratives</li>
                    <li>Programme de parrainage avec des étudiants locaux</li>
                    <li>Activités d'intégration culturelle</li>
                    <li>Support pour la recherche de logement</li>
                  </ul>
                  
                  <div className="mt-6">
                    <Link to="/information/vie-estudiantine">
                      <Button variant="outline" className="flex items-center gap-2">
                        Découvrir la vie estudiantine
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div>
                  <img src="/lovable-uploads/28b98c57-a173-4a72-b9ff-be2e9455d2bc.png" alt="Étudiants à TIME Université" className="rounded-lg w-full h-auto shadow" />
                </div>
              </div>
              
              <div className="mt-6 bg-time-blue-1/10 p-4 rounded-lg">
                <h3 className="font-semibold text-time-blue-1 mb-2">Association des Étudiants et Stagiaires Africains en Tunisie</h3>
                <p>
                  TIME Université collabore étroitement avec l'Association des Étudiants et Stagiaires Africains en Tunisie pour assurer une expérience enrichissante aux étudiants internationaux.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>;
};
export default EtudiantsInternationaux;