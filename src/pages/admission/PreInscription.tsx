import React, { useState } from 'react';
import PreRegistrationLayout from '@/components/PreRegistrationLayout';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, GraduationCap, FileText, User } from 'lucide-react';
import PersonalInfoStep from '@/components/pre-registration/PersonalInfoStep';
import ProgramSelectionStep from '@/components/pre-registration/ProgramSelectionStep';
import DocumentsStep from '@/components/pre-registration/DocumentsStep';
import type { FormData } from '@/components/PreRegistrationModal';

import api from "@/api"; 

const PreInscription: React.FC = () => {
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

    // Ajout de tous les champs du formData
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
      // Optionnel : reset du formulaire et retour à l'étape 1
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
    alert(" Erreur lors de l'envoi. Veuillez réessayer.");
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

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <User className="w-5 h-5" />;
      case 2:
        return <GraduationCap className="w-5 h-5" />;
      case 3:
        return <FileText className="w-5 h-5" />;
      default:
        return null;
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
    <PreRegistrationLayout>
      <div className="min-h-full py-8 px-4">
        {/* Full Width Progress Bar */}
        <div className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg mb-8">
          <div className="px-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Pré-inscription
                </h1>
                <p className="text-blue-100">
                  Rejoignez l'Université TIME et façonnez votre avenir professionnel
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-white font-medium">Étape {currentStep} sur {totalSteps}</p>
                <p className="text-blue-200 text-sm">{getStepTitle()}</p>
              </div>
            </div>
            
            {/* Progress Steps */}
            <div className="flex justify-center items-center space-x-4 mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                    step === currentStep 
                      ? 'bg-time-orange border-time-orange text-white shadow-lg' 
                      : step < currentStep
                      ? 'bg-white border-white text-time-blue-1 shadow-lg'
                      : 'bg-white/20 border-white/50 text-white/70'
                  }`}>
                    {step < currentStep ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <div className="w-5 h-5">{getStepIcon(step)}</div>
                    )}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-3 rounded transition-all ${
                      step < currentStep ? 'bg-white' : 'bg-white/30'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            
            <Progress 
              value={progress} 
              className="w-full h-2 bg-white/20 [&>div]:bg-gradient-to-r [&>div]:from-time-orange [&>div]:to-orange-400" 
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-time-blue-2 to-time-blue-1 px-6 py-4">
              <h2 className="text-xl font-bold text-white text-center">
                {getStepTitle()}
              </h2>
            </div>

            {/* Form Body */}
            <div className="p-6 md:p-8">
              <div className="mb-8">
                {renderStep()}
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-between pt-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className="w-full sm:w-auto min-w-[140px] border-time-blue-1 text-time-blue-1 hover:bg-time-blue-1 hover:text-white transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Précédent
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="w-full sm:w-auto min-w-[140px] bg-gradient-to-r from-time-blue-1 to-time-blue-2 hover:from-time-blue-2 hover:to-time-blue-3 text-white transition-all duration-300"
                  >
                    Suivant
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!isStepValid()}
                    className="w-full sm:w-auto min-w-[140px] bg-gradient-to-r from-time-orange to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white transition-all duration-300 font-bold"
                  >
                    Soumettre la pré-inscription
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center bg-white/20 backdrop-blur-sm border border-white/30 p-6 rounded-lg">
            <p className="text-white leading-relaxed">
              Besoin d'aide ? Contactez-nous au <span className="font-bold text-time-orange">(+216) 71 95 11 94</span> ou par email à{' '}
              <span className="font-bold text-time-orange">admissions@time.ens.tn</span>
            </p>
          </div>
        </div>
      </div>
    </PreRegistrationLayout>
  );
};

export default PreInscription;