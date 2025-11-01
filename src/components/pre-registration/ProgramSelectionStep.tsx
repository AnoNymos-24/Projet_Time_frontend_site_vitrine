import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { FormData } from '../PreRegistrationModal';

interface ProgramSelectionStepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const ProgramSelectionStep: React.FC<ProgramSelectionStepProps> = ({ formData, setFormData }) => {
  const updateField = (field: keyof FormData, value: any) => {
    setFormData({ ...formData, [field]: value });
  };
const cycles = [
  { value: 'preparatoire', label: 'Cycle Préparatoire' },
  { value: 'licence', label: 'Cycle Licence' },
  { value: 'ingenieur', label: 'Cycle Ingénieur' },
  { value: 'master', label: 'Cycle Mastère' }
];

const getPrograms = () => {
  switch (formData.cycle) {
    case 'preparatoire':
      return [
        { value: 'preparatoire-integre', label: 'Cycle Préparatoire Intégré' }
      ];
    case 'licence':
      return [
        { value: 'informatique-business-computing', label: 'Licence en Informatique (Business Computing)' },
        { value: 'finance', label: 'Licence en Finance' },
        { value: 'marketing', label: 'Licence en Marketing' },
        { value: 'comptabilite', label: 'Licence en Comptabilité' },
        { value: 'management', label: 'Licence en Management' },
        { value: 'ressources-humaines', label: 'Licence en Gestion des Ressources Humaines' }
      ];
    case 'ingenieur':
      return [
        { value: 'reseaux-telecom', label: 'Ingénieur en Réseaux Informatiques et Télécom (RT)' },
        { value: 'genie-logiciel', label: 'Ingénieur en Génie Logiciel (GL)' },
        { value: 'informatique-industrielle-automatique', label: 'Ingénieur en Informatique Industrielle et Automatique (IIA)' }
      ];
    case 'master':
      return [
        { value: 'comptabilite', label: 'Mastère en Comptabilité' },
        { value: 'finance', label: 'Mastère en Finance' },
        { value: 'ingenierie-financiere', label: 'Mastère en Ingénierie Financière (IF)' },
        { value: 'fiscalite', label: 'Mastère en Fiscalité' },
        { value: 'ssir', label: 'Mastère en Sécurité des Systèmes Informatiques et des Réseaux (SSIR)' },
        { value: 'mrhic', label: 'Mastère en Management des Ressources Humaines et Ingénierie des Compétences (MRHIC)' },
        { value: 'iesci', label: 'Mastère en Intelligence Économique et Stratégies Compétitives à l’International (IESCI)' },
        { value: 'cgsi', label: 'Mastère en Contrôle de Gestion et Système d’Information (CGSI)' },
        { value: 'mo-cla', label: 'Mastère en Management Opérationnel, Chaîne Logistique et Achats' },
        { value: 'mfvi', label: 'Mastère en Marketing et Force de Vente à l’International (MFVI)' }
      ];
    default:
      return [];
  }
};

const getLevels = () => {
  switch (formData.cycle) {
    case 'preparatoire':
      return [
        { value: 'annee-1', label: '1ère année' },
        { value: 'annee-2', label: '2ème année' }
      ];
    case 'licence':
      return [
        { value: 'l1', label: 'L1 (1ère année Licence)' },
        { value: 'l2', label: 'L2 (2ème année Licence)' },
        { value: 'l3', label: 'L3 (3ème année Licence)' }
      ];
    case 'ingenieur':
      return [
        { value: 'annee-1', label: '1ère année Ingénieur' },
        { value: 'annee-2', label: '2ème année Ingénieur' },
        { value: 'annee-3', label: '3ème année Ingénieur' }
      ];
    case 'master':
      return [
        { value: 'm1', label: 'M1 (1ère année Mastère)' },
        { value: 'm2', label: 'M2 (2ème année Mastère)' }
      ];
    default:
      return [];
  }
};

  // Reset program and level when cycle changes
  const handleCycleChange = (value: string) => {
    setFormData({
      ...formData,
      cycle: value,
      program: '',
      level: ''
    });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Cycle d'études *</Label>
        <Select value={formData.cycle} onValueChange={handleCycleChange}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner un cycle" />
          </SelectTrigger>
          <SelectContent>
            {cycles.map((cycle) => (
              <SelectItem key={cycle.value} value={cycle.value}>
                {cycle.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {formData.cycle && (
        <div className="space-y-2">
          <Label>Formation *</Label>
          <Select value={formData.program} onValueChange={(value) => updateField('program', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner une formation" />
            </SelectTrigger>
            <SelectContent>
              {getPrograms().map((program) => (
                <SelectItem key={program.value} value={program.value}>
                  {program.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {formData.program && (
        <div className="space-y-2">
          <Label>Niveau souhaité *</Label>
          <Select value={formData.level} onValueChange={(value) => updateField('level', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner un niveau" />
            </SelectTrigger>
            <SelectContent>
              {getLevels().map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="justification">Justification (optionnel)</Label>
        <Textarea
          id="justification"
          placeholder="Expliquez pourquoi vous souhaitez intégrer cette formation..."
          value={formData.justification}
          onChange={(e) => updateField('justification', e.target.value)}
          rows={4}
        />
        <p className="text-sm text-muted-foreground">
          Cette section vous permet d'expliquer vos motivations et votre projet professionnel.
        </p>
      </div>
    </div>
  );
};

export default ProgramSelectionStep;