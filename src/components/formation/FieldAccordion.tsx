import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Download, Play } from "lucide-react";
import { cn } from '@/lib/utils';
export interface FieldData {
  id: string;
  title: string;
  image: string;
  description: string;
  videoUrl?: string;
  careers: string[];
  academicPaths: string[];
  admissionConditions: string;
  skills: string[];
  syllabusUrl?: string;
  relatedLinks?: {
    text: string;
    url: string;
  }[];
}
interface FieldAccordionProps {
  field: FieldData;
  isActive: boolean;
}
const FieldAccordion: React.FC<FieldAccordionProps> = ({
  field,
  isActive
}) => {
  const [activeValue, setActiveValue] = useState<string>(isActive ? "description" : "");

  // Function to determine the correct article based on the field title
  const getArticle = (title: string): string => {
    const lowerTitle = title.toLowerCase();

    // Check if the title starts with a vowel
    if (lowerTitle.startsWith('a') || lowerTitle.startsWith('e') || lowerTitle.startsWith('i') || lowerTitle.startsWith('o') || lowerTitle.startsWith('u') || lowerTitle.startsWith('h') || lowerTitle.startsWith('é')) {
      return "l'";
    }

    // Special cases for feminine words
    if (lowerTitle.endsWith('ie') || lowerTitle.includes('formation') || lowerTitle.includes('année') || lowerTitle.includes('spécialité') || lowerTitle.includes('gestion') || lowerTitle === 'finance' || lowerTitle === 'fiscalité' || lowerTitle === 'comptabilité' || lowerTitle.includes('sécurité')) {
      // Added specific feminine words
      return "la ";
    }

    // Special case for "Contrôle" which is masculine
    if (lowerTitle.startsWith('contrôle')) {
      return "le ";
    }

    // Default to masculine
    return "le ";
  };
  return <Card id={field.id} className={cn("border rounded-lg shadow-sm transition-all duration-500 mb-10", isActive ? "ring-2 ring-time-blue-1 shadow-lg" : "")}>
      <div className="grid md:grid-cols-3 gap-4">
        {/* Field Image */}
        <div className="h-60 md:h-auto relative">
          <img src={field.image} alt={field.title} className="h-full w-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:bg-gradient-to-r md:from-black/70 md:via-transparent md:to-transparent"></div>
          <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">{field.title}</h3>
        </div>
        
        {/* Accordions */}
        <div className="md:col-span-2 p-4">
          <Accordion type="single" value={activeValue} onValueChange={setActiveValue} collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger className="font-semibold">{`Qu'est-ce que ${getArticle(field.title)}${field.title} ?`}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <p className="text-gray-700 font-normal">{field.description}</p>
                  {/* bouton de la video descriptif de la filière */}
{/*                   {field.videoUrl && <Button variant="outline" size="sm" className="mt-2 flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Voir la présentation vidéo
                    </Button>} */}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="careers">
              <AccordionTrigger className="font-semibold">Débouchés professionnels</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-1">
                  {field.careers.map((career, index) => <li key={index} className="text-gray-700">{career}</li>)}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="academicPaths">
              <AccordionTrigger className="font-semibold">Poursuites académiques</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-1">
                  {field.academicPaths.map((path, index) => <li key={index} className="text-gray-700">{path}</li>)}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="admissionConditions">
              <AccordionTrigger className="font-semibold">Conditions d'admission</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">{field.admissionConditions}</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="skills">
              <AccordionTrigger className="font-semibold">Compétences acquises</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-1">
                  {field.skills.map((skill, index) => <li key={index} className="text-gray-700">{skill}</li>)}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <CardFooter className="bg-gray-50 p-4 flex-wrap gap-4 justify-between">
          {field.syllabusUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex items-center gap-2"
            >
              <a href={field.syllabusUrl} download target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Fiche des matières (PDF)
              </a>
            </Button>
          )}


{/*         <div className="flex gap-2">
          {field.relatedLinks?.map((link, index) => <Button key={index} variant="default" size="sm" asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
            </Button>)}
        </div> */}


        <div className="flex gap-2">
              <Button variant="default" size="sm" asChild>
                <a href="/admission/pre-inscription" target="_blank" rel="noopener noreferrer">
                  S'inscrire
                </a>
              </Button>

              <Button variant="default" size="sm" asChild>
                <a href="/information/services-academiques/calendrier" target="_blank" rel="noopener noreferrer">
                  Dates clés
                </a>
              </Button>
        </div>

      </CardFooter>
    </Card>;
};
export default FieldAccordion;