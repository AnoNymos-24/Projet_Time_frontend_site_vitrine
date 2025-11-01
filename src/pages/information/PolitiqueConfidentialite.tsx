
import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const PolitiqueConfidentialite: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-time-blue-1 mb-8">Politique de confidentialité – Université TIME</h1>
            
            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  L'Université TIME s'engage à protéger la confidentialité et la sécurité des données personnelles de ses utilisateurs.
                  Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles
                  lorsque vous utilisez notre site web ou nos services.
                </p>
              </section>

              {/* Collecte des données */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Collecte des données personnelles</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nous collectons différents types d'informations personnelles dans le cadre de nos activités :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Informations d'identification : nom, prénom, date de naissance</li>
                  <li>Coordonnées : adresse postale, adresse e-mail, numéro de téléphone</li>
                  <li>Informations académiques : diplômes, résultats scolaires, parcours éducatif</li>
                  <li>Données de navigation : adresse IP, cookies, pages visitées</li>
                </ul>
              </section>

              {/* Utilisation des données */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Utilisation des données</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vos données personnelles sont utilisées pour les finalités suivantes :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Traitement des candidatures et inscriptions</li>
                  <li>Gestion de la scolarité et suivi pédagogique</li>
                  <li>Communication institutionnelle et information sur nos programmes</li>
                  <li>Amélioration de nos services et de notre site web</li>
                  <li>Respect de nos obligations légales et réglementaires</li>
                </ul>
              </section>

              {/* Partage des données */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Partage des données</h2>
                <p className="text-gray-700 leading-relaxed">
                  L'Université TIME ne partage vos données personnelles avec des tiers que dans les cas suivants :
                  avec votre consentement explicite, pour répondre à des obligations légales, avec nos partenaires académiques
                  dans le cadre de programmes d'échange ou de double diplomation, ou avec nos prestataires de services
                  techniques sous strict accord de confidentialité.
                </p>
              </section>

              {/* Sécurité des données */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Sécurité des données</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données
                  personnelles contre tout accès non autorisé, modification, divulgation ou destruction. Ces mesures incluent
                  le chiffrement des données sensibles, l'authentification sécurisée, la formation du personnel et
                  la limitation de l'accès aux données sur la base du besoin d'en connaître.
                </p>
              </section>

              {/* Conservation des données */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Conservation des données</h2>
                <p className="text-gray-700 leading-relaxed">
                  Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles
                  ont été collectées, conformément à la législation tunisienne. Les données relatives aux candidatures
                  sont conservées pendant 3 ans, les dossiers étudiants pendant 30 ans après la fin des études,
                  et les données de navigation pendant 13 mois maximum.
                </p>
              </section>

              {/* Vos droits */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Vos droits</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Conformément à la législation tunisienne sur la protection des données, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification des données inexactes</li>
                  <li>Droit d'opposition au traitement de vos données</li>
                  <li>Droit de limitation du traitement</li>
                  <li>Droit à la portabilité de vos données</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse : marketing@time.ens.tn
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles,
                  vous pouvez nous contacter par email à marketing@time.ens.tn ou par courrier à l'adresse :
                  Université TIME, Service Communication & Marketing, 45 Avenue Mohamed V, 1002 Montplaisir, Tunis, Tunisie.
                </p>
              </section>

              {/* Mise à jour */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Mise à jour de la politique</h2>
                <p className="text-gray-700 leading-relaxed">
                  Cette politique de confidentialité peut être mise à jour périodiquement. La version en vigueur
                  est celle publiée sur notre site web. Nous vous encourageons à consulter régulièrement cette page
                  pour rester informé de nos pratiques en matière de protection des données.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PolitiqueConfidentialite;
