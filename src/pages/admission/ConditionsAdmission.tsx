import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, FileText, School, Users } from "lucide-react";
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ConditionsAdmission: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Admission requirement cards data
  const requirementCards = [{
    title: "Bacheliers",
    description: "Pour s'inscrire en 1ér cycle Prépa ou en licence",
    icon: <School className="h-8 w-8 text-time-orange" />,
    color: "bg-orange-50"
  }, {
    title: "Diplômés 1er cycle",
    description: "Pour s'inscrire en cycle ingénieur",
    icon: <GraduationCap className="h-8 w-8 text-time-blue-1" />,
    color: "bg-blue-50"
  }, {
    title: "Maîtrisards ou ingénieurs",
    description: "Pour s'inscrire en 3ème cycle en Mastère Professionnel",
    icon: <FileText className="h-8 w-8 text-emerald-500" />,
    color: "bg-emerald-50"
  }, {
    title: "Licenciés",
    description: "Pour s'inscrire en mastère Professionnels (Système LMD : M1 et M2)",
    icon: <Users className="h-8 w-8 text-purple-500" />,
    color: "bg-purple-50"
  }];

  // Programs data
  const programs = [{
    id: "prepa",
    title: "Cycle préparatoire aux études d'ingénieurs",
    duration: "2 années",
    conditions: ["Baccalauréat en sciences expérimentales", "Baccalauréat en mathématiques", "Baccalauréat en technique / informatique"],
    image: "/lovable-uploads/324d4197-60f3-4c45-b785-5338a4530b0a.png" // Image mathématiques/informatique
  }, {
    id: "ingenieur",
    title: "Diplôme National d'Ingénieur",
    duration: "3 années",
    conditions: ["Etudiants diplômés en cycle préparatoire (Nouveau Système)", "DUT en informatique (Ancien Système)", "Diplôme en ISET informatique ou diplôme équivalent (Ancien Système)", "Validation des modules requis"],
    image: "/lovable-uploads/5a1a1593-6bb2-4066-8042-55c0786277d6.png" // Image étudiant en informatique
  },   {
    id: "licence-app-eco",
    title: "Licence Appliquée Economie Gestion",
    duration: "3 années",
    conditions: ["Baccalauréat en économie - gestion", "Baccalauréat en sciences expérimentales", "Baccalauréat en mathématiques"],
    image: "/lovable-uploads/d08bd437-5b13-4e3d-9ed5-f78220d11786.png" // Image gestion/économie
  },  {
    id: "mastere",
    title: "Mastères professionnels",
    duration: "2 années (nouveau système LMD (5 semestres de 14 semaines + 1 semestre (stage et thèse professionnelle)))",
    conditions: ["Licences (LMD)", "Bac + 4 dans le domaine de la spécialité (ancien système)", "Validation des modules requis"],
    image: "https://premiumadvicetraining.com/wp-content/uploads/2025/01/TRAINING-ADVICE.png" // Image étudiant en informatique
  }];













  
  
  return <Layout>
      {/* Hero Section */}
      <div className="bg-blue-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-time-blue-1 mb-4">Conditions d'admission</h1>
          <p className="text-xl text-gray-700">Pour connaître les conditions d'admissibilité à un programme, il faut consulter la description de ce programme.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex justify-between mb-8 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger value="overview" className="flex-1">Aperçu</TabsTrigger>
            <TabsTrigger value="documents" className="flex-1">Pièces à fournir</TabsTrigger>
            <TabsTrigger value="programs" className="flex-1">Programmes</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-time-blue-1 mb-4">Catégories d'admission</h2>
                <p className="text-gray-700 mb-6">
                  Les conditions d'admission sont généralement réparties en quatre grandes catégories selon votre niveau d'études actuel.
                </p>
              </div>
              <div>
                <img src="/lovable-uploads/da386ba8-ba43-453f-a0fb-f942049dfe63.png" alt="Conditions d'admission" className="w-full h-auto rounded-lg shadow-md" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {requirementCards.map((card, index) => <Card key={index} className={cn("border-none shadow-sm", card.color)}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>{card.icon}</div>
                    </div>
                    <CardTitle className="mt-2">{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                </Card>)}
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents">
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-time-blue-1 mb-6">Pièces à fournir</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-time-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</div>
                      <span>2 photos d'identité</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-time-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</div>
                      <span>2 enveloppes affranchies portant l'adresse (16 X 11cm)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-time-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</div>
                      <span>Photocopie de la carte d'identité ou du passeport de l'étudiant</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-time-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</div>
                      <span>Copie certifiée du baccalauréat et son relevée de notes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-time-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">5</div>
                      <span>Copies certifiées des diplômes obtenues, des relevés des notes et des attestations de réussite</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-time-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">6</div>
                      <span>Formulaire d'inscription</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center items-center">
                  <img src="/lovable-uploads/28b98c57-a173-4a72-b9ff-be2e9455d2bc.png" alt="Documents requis" className="max-h-72 rounded-lg shadow-md" />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Programs Tab */}
          <TabsContent value="programs">
            <div className="space-y-8">
              {programs.map((program, index) => <Card key={index} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-1">
                      <AspectRatio ratio={4 / 3} className="h-full">
                        <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                      </AspectRatio>
                    </div>
                    <div className="md:col-span-2 p-6">
                      <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-time-blue-1">{program.title}</CardTitle>
                        <CardDescription>
                          <span className="font-medium">Durée :</span> {program.duration}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 pb-4">
                        <h4 className="font-medium mb-2">Conditions d'admission:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {program.conditions.map((condition, idx) => <li key={idx}>{condition}</li>)}
                        </ul>
                      </CardContent>
<CardFooter className="p-0 flex flex-wrap gap-2">
  {/* Bouton Pré-inscription */}
  <Button
    variant="outline"
    size="sm"
    asChild
    className="flex items-center gap-1"
  >
    <a
      href="/admission/pre-inscription"
      target="_blank"
      rel="noopener noreferrer"
    >
      Pré-inscription en ligne <ArrowRight className="h-3.5 w-3.5" />
    </a>
  </Button>

  {/* Bouton Tarifs */}
  <Button
    variant="outline"
    size="sm"
    asChild
    className="flex items-center gap-1"
  >
    <a
      href="/information/services-academiques/frais"
      target="_blank"
      rel="noopener noreferrer"
    >
      Tarifs <ArrowRight className="h-3.5 w-3.5" />
    </a>
  </Button>
</CardFooter>

                    </div>
                  </div>
                </Card>)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>;
};
export default ConditionsAdmission;
