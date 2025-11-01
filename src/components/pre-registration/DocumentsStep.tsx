import React, { useRef } from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, FileText, X } from 'lucide-react';
import { FormData } from '../PreRegistrationModal';

interface DocumentsStepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const DocumentsStep: React.FC<DocumentsStepProps> = ({ formData, setFormData }) => {
  const diplomeRef = useRef<HTMLInputElement>(null);
  const pieceIdentiteRef = useRef<HTMLInputElement>(null);
  const photoIdentiteRef = useRef<HTMLInputElement>(null);
  const releverNotesRef = useRef<HTMLInputElement>(null);

  const updateField = (field: keyof FormData, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileChange = (field: keyof FormData, file: File | null) => {
    updateField(field, file);
  };

  const removeFile = (field: keyof FormData) => {
    updateField(field, null);
  };

  const triggerFileInput = (ref: React.RefObject<HTMLInputElement>) => {
    ref.current?.click();
  };

  const isRelevantForReleverNotes = () => {
    // Relevé de notes requis si on postule pour continuer un cycle (pas niveau 1) ou pour licence/ingénieur (pas mastère)
    if (formData.cycle === 'master') return false;
    if (formData.level && !['1ere-annee', 'l1'].includes(formData.level)) return true;
    return false;
  };

  const FileUploadCard = ({ 
    title, 
    description, 
    file, 
    onFileChange, 
    onRemove, 
    inputRef, 
    required = false 
  }: {
    title: string;
    description: string;
    file: File | null;
    onFileChange: (file: File | null) => void;
    onRemove: () => void;
    inputRef: React.RefObject<HTMLInputElement>;
    required?: boolean;
  }) => (
    <div className="border rounded-lg p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium flex items-center gap-2">
            {title} {required && <span className="text-red-500">*</span>}
          </h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <Input
        type="file"
        accept=".pdf"
        ref={inputRef}
        onChange={(e) => onFileChange(e.target.files?.[0] || null)}
        className="hidden"
      />
      
      {file ? (
        <div className="flex items-center justify-between bg-muted p-3 rounded">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">{file.name}</span>
            <span className="text-xs text-muted-foreground">
              ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </span>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onRemove}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      ) : (
        <Button
          type="button"
          variant="outline"
          onClick={() => triggerFileInput(inputRef)}
          className="w-full"
        >
          <Upload className="w-4 h-4 mr-2" />
          Choisir un fichier PDF
        </Button>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground mb-4">
        <p>Veuillez soumettre les documents suivants au format PDF uniquement.</p>
        <p className="text-red-600">* Champs obligatoires</p>
      </div>

      <FileUploadCard
        title="Diplôme"
        description="Votre dernier diplôme obtenu"
        file={formData.diplome}
        onFileChange={(file) => handleFileChange('diplome', file)}
        onRemove={() => removeFile('diplome')}
        inputRef={diplomeRef}
        required={true}
      />

      <FileUploadCard
        title="Pièce d'identité"
        description="Carte d'identité, passeport ou permis de conduire"
        file={formData.pieceIdentite}
        onFileChange={(file) => handleFileChange('pieceIdentite', file)}
        onRemove={() => removeFile('pieceIdentite')}
        inputRef={pieceIdentiteRef}
        required={true}
      />

      <FileUploadCard
        title="Photo d'identité"
        description="Photo récente au format identité"
        file={formData.photoIdentite}
        onFileChange={(file) => handleFileChange('photoIdentite', file)}
        onRemove={() => removeFile('photoIdentite')}
        inputRef={photoIdentiteRef}
        required={false}
      />

      {isRelevantForReleverNotes() && (
        <FileUploadCard
          title="Relevé de notes"
          description="Relevé de notes de votre formation actuelle ou précédente"
          file={formData.releverNotes}
          onFileChange={(file) => handleFileChange('releverNotes', file)}
          onRemove={() => removeFile('releverNotes')}
          inputRef={releverNotesRef}
          required={false}
        />
      )}

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">Informations importantes :</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Tous les documents doivent être au format PDF</li>
          <li>• La taille maximale par fichier est de 10 MB</li>
          <li>• Les documents doivent être clairs et lisibles</li>
          <li>• Vous pourrez compléter votre dossier ultérieurement si nécessaire</li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentsStep;