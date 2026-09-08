import type { ServiceEntry } from "@/content/types";
import type { Faq } from "@/content/faqs";
import { residencyFr, faqsFr } from "./residency";
import { establishmentFr, propertyFr, faqsBusinessFr } from "./business";
import { countriesFr } from "./countries";
import { insightsFr } from "./insights";

const navLabels: Record<string, string> = {
  Residency: "Résidence",
  "Live, work or retire in Mauritius through an approved permit.": "Vivre, travailler ou prendre sa retraite à Maurice avec un permis agréé.",
  "Occupation permits": "Permis d'occupation",
  Investor: "Investisseur",
  Professional: "Professionnel",
  "Self-employed": "Indépendant",
  Innovator: "Innovateur",
  "Residence permits and visas": "Permis de résidence et visas",
  "Retired Non-Citizen": "Retraité non-citoyen",
  "Residency by property": "Résidence par l'immobilier",
  "Golden Visa": "Golden Visa",
  "Premium Visa": "Premium Visa",
  Overview: "Vue d'ensemble",
  "Which route fits": "Quelle voie vous convient",
  "Compare all routes": "Comparer toutes les voies",
  "Dependents and family": "Personnes à charge et famille",
  "Permanent residence": "Résidence permanente",
  "Moving from": "Venir de",
  "South Africa": "Afrique du Sud",
  "United Kingdom": "Royaume-Uni",
  France: "France",
  "Germany, Austria, Switzerland": "Allemagne, Autriche, Suisse",
  Establishment: "Établissement",
  "A Mauritian company, bank account and registered office, operational from day one.": "Une société mauricienne, un compte bancaire et un siège social, opérationnels dès le premier jour.",
  "Company structures": "Structures de société",
  "Domestic Company": "Domestic Company",
  "Global Business Company": "Global Business Company",
  "Authorised Company": "Authorised Company",
  Administration: "Administration",
  "Bank account opening": "Ouverture de compte bancaire",
  "Registered office and secretary": "Siège social et secrétariat",
  "Annual compliance": "Conformité annuelle",
  "Which structure fits": "Quelle structure convient",
  "Why Mauritius": "Pourquoi Maurice",
  Property: "Immobilier",
  "Buy in an approved development and, above the threshold, qualify for residence.": "Acheter dans un programme agréé et, au-delà du seuil, obtenir la résidence.",
  "Approved schemes": "Régimes agréés",
  "Property Development Scheme": "Property Development Scheme",
  "Integrated Resort Scheme": "Integrated Resort Scheme",
  "Real Estate Scheme": "Real Estate Scheme",
  "Smart City Scheme": "Smart City Scheme",
  "Other routes": "Autres voies",
  "Invest Hotel Scheme": "Invest Hotel Scheme",
  "Ground plus two apartments": "Appartements R+2",
  "How acquisition works": "Comment se déroule l'acquisition",
  "Off-plan and VEFA": "Achat sur plan et VEFA",
  Concierge: "Conciergerie",
  "The arrangements that a permit and a company do not cover.": "Ce qu'un permis et une société ne couvrent pas.",
  About: "Le cabinet",
  "A private client firm within the Intrasia Group.": "Un cabinet de clientèle privée au sein du Groupe Intrasia.",
  "The firm": "Le cabinet",
  "About us": "Qui nous sommes",
  "Mauritius in practice": "Maurice, en pratique",
  Insights: "Notes",
  Contact: "Contact",
  "Request a consultation": "Prendre rendez-vous",
  "Intrasia Group": "Groupe Intrasia",
  "Investor permit": "Permis Investisseur",
  "Professional permit": "Permis Professionnel",
  "Self-employed permit": "Permis Indépendant",
  "Retired Non-Citizen permit": "Permis Retraité non-citoyen",
  Firm: "Le cabinet",
};

const thresholdNote =
  "Les critères d'éligibilité sont fixés par l'Economic Development Board et révisés à chaque Budget national. Les chiffres de cette page suivent les Occupation Permit Guidelines de l'EDB, publiées en vertu de l'article 5(2)(ca) de l'Economic Development Board Act 2017 et révisées après le Budget 2026-27 ; ils ont été vérifiés pour la dernière fois en septembre 2026. Nous confirmons les critères en vigueur auprès de l'EDB avant de préparer toute demande.";

const residency: Record<string, Partial<ServiceEntry>> = {
  "investor-permit": {
    title: "Occupation Permit Investisseur",
    summary: "Pour ceux qui détiendront et dirigeront une entreprise à Maurice.",
    intro:
      "L'Occupation Permit de catégorie Investisseur est un permis combiné de travail et de résidence destiné à la personne qui investit dans une société constituée à Maurice et y participe activement. Il est délivré pour une durée maximale de dix ans et couvre le conjoint, les enfants à charge et les parents du titulaire.",
    facts: [
      { label: "Investissement initial minimum", value: "100 000 USD, transférés de l'étranger sur le compte bancaire de la société mauricienne" },
      { label: "Conditions de chiffre d'affaires", value: "5 millions MUR par an à partir de la troisième année d'enregistrement ; 8 millions MUR par an à partir de la cinquième année pour le renouvellement" },
      { label: "Validité", value: "Jusqu'à 10 ans, renouvelable" },
      { label: "Justificatif de fonds", value: "Preuve de fonds à l'étranger lors de la demande, les 100 000 USD étant transférés sur le compte mauricien de la société dans les 60 jours suivant la délivrance" },
      { label: "Suivi", value: "L'EDB, avec le PIO et la Mauritius Revenue Authority, contrôle le respect des conditions, y compris par des visites sur place, et peut radier un titulaire qui ne les remplit pas" },
      { label: "Personnes à charge", value: "Conjoint ou concubin, enfants à charge non mariés et parents" },
      { label: "Autorités", value: "Economic Development Board ; le permis de résidence est délivré par le Passport and Immigration Office" },
    ],
    sections: [
      {
        heading: "À qui il convient",
        body: [
          "Le permis est conçu pour un dirigeant-propriétaire : quelqu'un qui détiendra des parts d'une société mauricienne, la dirigera et bâtira une activité générant des revenus à Maurice. Ce n'est pas une voie d'investissement passif. Celui qui n'a pas l'intention de diriger l'entreprise en pratique sera généralement mieux servi par un permis de résidence via l'immobilier, ou par le Golden Visa une fois opérationnel.",
          "La plupart de nos clients investisseurs arrivent avec une activité établie ailleurs : conseil, négoce, logiciel, services professionnels, distribution régionale. La société mauricienne devient l'entité opérationnelle de cette activité, ou une base régionale d'où l'ensemble est servi.",
        ],
      },
      {
        heading: "Ce que comporte la demande",
        body: [
          "La société est constituée d'abord. La demande est ensuite examinée par un comité réunissant l'EDB, le Passport and Immigration Office et le Bureau du Premier ministre, sur la base du plan d'affaires, du justificatif de fonds, des documents de la société et du dossier personnel du demandeur. L'approbation est donnée en principe, l'examen médical est effectué à Maurice, et le demandeur se présente en personne pour la délivrance du permis. Lorsque l'investisseur est une société, chaque actionnaire qui en est aussi administrateur fait sa propre demande.",
          "Nous préparons le plan d'affaires en gardant à l'esprit les conditions de chiffre d'affaires, de sorte que les objectifs des années 3 et 5 soient réalistes et reflétés dans la manière dont l'entreprise est structurée.",
        ],
      },
      {
        heading: "Après la délivrance",
        body: [
          "Le permis n'est que le début d'une relation continue avec l'EDB et la Mauritius Revenue Authority. Le revenu brut de la société doit être déclaré chaque année à la MRA, les seuils de chiffre d'affaires s'appliquent à partir de la troisième année puis au renouvellement, et l'EDB contrôle la conformité avec le PIO et la MRA, y compris par des visites sur place. Nous restons engagés après la délivrance pour les déclarations annuelles, le seuil de la cinquième année et le renouvellement.",
        ],
      },
      {
        heading: "La voie des start-ups innovantes",
        body: [
          "Une voie distincte existe au sein de la catégorie Investisseur pour les start-ups innovantes dont le projet est soumis à l'EDB ou enregistré auprès d'un incubateur accrédité par le Mauritius Research and Innovation Council. Il n'y a pas d'investissement initial minimum. Le titulaire dépose un rapport d'avancement annuel et, à la fin de la cinquième année, un rapport de développement montrant que le projet a atteint le stade du produit minimum viable. Nous en traitons sur la page du permis Innovateur.",
        ],
      },
    ],
    related: [
      { label: "Domestic Company", href: "/establishment/domestic-company" },
      { label: "Ouverture de compte bancaire", href: "/establishment/bank-account-opening" },
      { label: "Permis Innovateur", href: "/residency/innovator-permit" },
      { label: "Personnes à charge et famille", href: "/residency/dependents" },
    ],
    metaTitle: "Occupation Permit Investisseur à Maurice | start.mu",
    metaDescription:
      "L'Occupation Permit Investisseur à Maurice : investissement minimum de 100 000 USD, conditions de chiffre d'affaires, personnes à charge, et comment start.mu gère la demande de la constitution à la délivrance.",
    index: { audience: "Dirigeants-propriétaires d'une société mauricienne", threshold: "100 000 USD d'investissement", duration: "Jusqu'à 10 ans" },
  },
};

const faqs: Record<string, Faq[]> = {
  "investor-permit": [
    { q: "Les 100 000 USD doivent-ils rester dans la société ?", a: "L'engagement est de les transférer de l'étranger sur le compte mauricien de la société dans les 60 jours suivant la délivrance. Une fois arrivés, ils constituent le fonds de roulement de la société et peuvent être dépensés pour l'activité. Ce n'est ni une caution ni un dépôt, et ils ne sont pas restitués." },
    { q: "Puis-je détenir le permis avec un associé ?", a: "Oui. Lorsque l'investisseur est une société à plusieurs propriétaires, chaque actionnaire qui en est aussi administrateur demande son propre permis, et chacun doit remplir les critères à titre individuel." },
    { q: "Que se passe-t-il si le chiffre d'affaires est insuffisant en année 3 ?", a: "L'EDB compare le chiffre d'affaires déclaré au seuil de 5 millions MUR et peut radier un titulaire qui ne l'atteint pas, ce qui annule le permis. En pratique, la question est soulevée avant d'être sanctionnée, et il reste généralement du temps pour corriger le cap si l'écart est identifié tôt. C'est la raison principale pour laquelle nous suivons les déclarations dès la première année." },
    { q: "Mon conjoint peut-il travailler à Maurice ?", a: "Pas avec un permis de personne à charge. Un conjoint qui souhaite travailler demande son propre Occupation Permit, souvent en tant que Professionnel employé par la même société, ou un permis de travail." },
    { q: "Le permis Investisseur convient-il si je veux seulement investir passivement ?", a: "Généralement non. Le permis suppose un propriétaire qui dirige l'entreprise et dont la société génère des revenus à Maurice. Un investisseur passif est en général mieux servi par la résidence via l'immobilier, ou par le Golden Visa une fois opérationnel." },
  ],
};

export const overrides = {
  navLabels,
  insights: insightsFr,
  countries: countriesFr,
  thresholdNote,
  residency: { ...residency, ...residencyFr },
  establishment: establishmentFr,
  property: propertyFr,
  faqs: { ...faqs, ...faqsFr, ...faqsBusinessFr },
};
