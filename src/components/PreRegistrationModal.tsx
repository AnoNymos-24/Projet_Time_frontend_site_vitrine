import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PersonalInfoStep from './pre-registration/PersonalInfoStep';
import ProgramSelectionStep from './pre-registration/ProgramSelectionStep';
import DocumentsStep from './pre-registration/DocumentsStep';
import api from "@/api"; // ton instance axios

interface PreRegistrationModalProps {
  children: React.ReactNode;
}

export interface FormData {
  // Étape 1: Informations personnelles
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date | undefined;
  placeOfBirth: string;
  nationality: string;
  address: string;
  city: string;
  postalCode: string;
  
  // Étape 2: Sélection programme
  cycle: string;
  program: string;
  level: string;
  justification: string;
  
  // Étape 3: Documents
  diplome: File | null;
  pieceIdentite: File | null;
  photoIdentite: File | null;
  releverNotes: File | null;
}

const PreRegistrationModal: React.FC<PreRegistrationModalProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    // Étape 1
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: undefined,
    placeOfBirth: '',
    nationality: '',
    address: '',
    city: '',
    postalCode: '',
    
    // Étape 2
    cycle: '',
    program: '',
    level: '',
    justification: '',
    
    // Étape 3
    diplome: null,
    pieceIdentite: null,
    photoIdentite: null,
    releverNotes: null
  });

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };








const handleSubmit = async () => {
  try {
    const data = new FormData();

    // Ajout de tous les champs
    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof Date) {
        // Conversion date en YYYY-MM-DD
        data.append(key, value.toISOString().split("T")[0]);
      } else if (value !== null && value !== undefined) {
        data.append(key, value);
      }
    });

    // Envoi au backend
    const res = await api.post("/pre-inscription", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (res.status === 200) {
      alert("✅ Votre pré-inscription a été envoyée avec succès !");
      // Optionnel : reset du formulaire
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: undefined,
        placeOfBirth: '',
        nationality: '',
        address: '',
        city: '',
        postalCode: '',
        cycle: '',
        program: '',
        level: '',
        justification: '',
        diplome: null,
        pieceIdentite: null,
        photoIdentite: null,
        releverNotes: null
      });
      setCurrentStep(1);
    }
  } catch (error) {
    console.error(error);
    alert("❌ Erreur lors de l'envoi. Veuillez réessayer.");
  }
};








  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone && 
               formData.dateOfBirth && formData.placeOfBirth && formData.nationality;
      case 2:
        return formData.cycle && formData.program && formData.level;
      case 3:
        return formData.diplome && formData.pieceIdentite;
      default:
        return false;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Informations personnelles";
      case 2:
        return "Sélection du programme";
      case 3:
        return "Documents à soumettre";
      default:
        return "";
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep formData={formData} setFormData={setFormData} />;
      case 2:
        return <ProgramSelectionStep formData={formData} setFormData={setFormData} />;
      case 3:
        return <DocumentsStep formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Pré-inscription - Étape {currentStep} sur {totalSteps}</DialogTitle>
          <DialogDescription>
            {getStepTitle()}
          </DialogDescription>
          <Progress value={progress} className="mt-2" />
        </DialogHeader>

        <div className="py-4">
          {renderStep()}
        </div>

        <div className="flex justify-between pt-4 border-t">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentStep === 1}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Précédent
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="bg-time-blue-1 hover:bg-time-blue-2"
            >
              Suivant
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid()}
              className="bg-time-blue-1 hover:bg-time-blue-2"
            >
              Soumettre la pré-inscription
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreRegistrationModal;