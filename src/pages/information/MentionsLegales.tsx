
import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const MentionsLegales: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-time-blue-1 mb-8">Mentions légales – Université TIME</h1>
            
            <div className="space-y-8">
              {/* Identification de l'éditeur */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Identification de l'éditeur du site</h2>
                <p className="text-gray-700 leading-relaxed">
                  Le site Internet de l'Université TIME est édité par l'Université TIME, établissement d'enseignement
                  supérieur privé tunisien. Son siège social est situé au 45, Avenue Mohamed V – 1002 Montplaisir, Tunis
                  (Tunisie). Le numéro de téléphone de l'établissement est le (+216) 71 95 11 94 et l'adresse électronique
                  principale est admissions@time.ens.tn. La publication du site est assurée par le Service
                  Communication & Marketing de l'Université TIME (contact : marketing@time.ens.tn).
                </p>
              </section>

              {/* Hébergeur */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Hébergeur du site</h2>
                <p className="text-gray-700 leading-relaxed">
                  Le site est hébergé par la société Infomaniak Network SA, dont le siège est situé au 25, rue Eugène
                  Marziano – 1227 Les Acacias (Genève, Suisse). C'est cette société qui assure le stockage et la mise à
                  disposition du site sur Internet.
                </p>
              </section>

              {/* Responsabilité du contenu */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Responsabilité du contenu</h2>
                <p className="text-gray-700 leading-relaxed">
                  L'Université TIME veille à la qualité et à la pertinence des informations diffusées sur son site, mais elle
                  ne garantit pas leur exactitude, leur exhaustivité ni leur actualité. Les contenus sont fournis à titre
                  indicatif et peuvent évoluer sans préavis. L'utilisateur est seul responsable de l'usage qu'il fait des
                  informations disponibles sur le site. Par conséquent, la responsabilité de l'Université TIME ne saurait
                  être engagée pour des dommages directs ou indirects (perte de données, dommages matériels ou
                  immatériels, etc.) résultant de l'accès ou de l'utilisation du site. De plus, l'accès au site peut être
                  suspendu à tout moment pour des raisons techniques ou de maintenance, sans que l'Université TIME
                  ne puisse être tenue pour responsable de ces interruptions. Enfin, le site peut comporter des liens
                  hypertextes vers d'autres sites Internet : l'Université TIME n'exerce aucun contrôle sur ces contenus
                  externes et décline toute responsabilité quant à leur contenu ou leur accessibilité.
                </p>
              </section>

              {/* Propriété intellectuelle */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Propriété intellectuelle</h2>
                <p className="text-gray-700 leading-relaxed">
                  La structure générale du site, ainsi que les contenus (textes, images, graphismes, logo, icônes, sons,
                  vidéos, etc.) sont protégés par le Code du droit d'auteur tunisien et les conventions internationales
                  relatives à la propriété intellectuelle. L'Université TIME détient les droits de propriété intellectuelle
                  sur l'ensemble de ces contenus, sauf mention contraire. Toute reproduction, représentation,
                  modification, publication, adaptation de tout ou partie des éléments du site, par quelque procédé que
                  ce soit, sans l'autorisation expresse de l'Université TIME, est interdite et constituerait une contrefaçon.
                  En l'absence d'une autorisation préalable, toute utilisation non autorisée du site ou de l'un de ses
                  éléments pourra entraîner des poursuites civiles et pénales conformes à la législation tunisienne.
                </p>
              </section>

              {/* Protection des données personnelles */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Protection des données personnelles</h2>
                <p className="text-gray-700 leading-relaxed">
                  L'Université TIME se conforme aux dispositions de la législation tunisienne en matière de données
                  personnelles. En particulier, la loi organique n°2004-63 du 27 juillet 2004 relative à la protection des
                  données à caractère personnel est applicable au traitement des données collectées sur ce site. Les
                  informations nominatives éventuellement recueillies via des formulaires (demande d'information,
                  inscription, candidature, etc.) sont utilisées uniquement dans le cadre des finalités déclarées (par
                  exemple répondre aux demandes des utilisateurs ou traiter des inscriptions). Aucune information
                  personnelle n'est cédée à des tiers à des fins commerciales sans le consentement explicite de
                  l'utilisateur. Conformément à la loi précitée, l'utilisateur dispose d'un droit d'accès, de rectification et
                  d'opposition relatif aux données personnelles le concernant. Pour l'exercer, il peut adresser une
                  demande par écrit ou par courriel au Service Communication & Marketing de l'Université TIME
                  (marketing@time.ens.tn). Les données sont conservées pendant la durée nécessaire au traitement de la
                  demande.
                </p>
              </section>

              {/* Conditions d'utilisation */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Conditions d'utilisation</h2>
                <p className="text-gray-700 leading-relaxed">
                  La consultation du site de l'Université TIME est libre et gratuite. En accédant au site, l'utilisateur
                  reconnaît accepter sans réserve les présentes mentions légales. L'Université TIME se réserve le droit de
                  modifier à tout moment le contenu du site et les présentes mentions, sans préavis. Il appartient donc à
                  l'utilisateur de consulter régulièrement ces mentions légales ; la version en ligne publiée sur le site
                  faisant foi. L'utilisateur s'engage en outre à ne pas perturber le fonctionnement du site ou porter
                  atteinte aux droits des autres utilisateurs.
                </p>
              </section>

              {/* Droit applicable */}
              <section>
                <h2 className="text-xl font-semibold text-time-blue-1 mb-4">Droit applicable</h2>
                <p className="text-gray-700 leading-relaxed">
                  Les présentes mentions légales sont régies par le droit tunisien. Tout litige relatif à l'interprétation ou à
                  l'exécution des présentes sera de la compétence des tribunaux tunisiens. En particulier, toute
                  contestation découlant de l'utilisation du site relèvera de la juridiction tunisienne compétente,
                  conformément à la législation en vigueur.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MentionsLegales;
