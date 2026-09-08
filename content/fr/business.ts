import type { ServiceEntry } from "@/content/types";
import type { Faq } from "@/content/faqs";

export const establishmentFr: Record<string, Partial<ServiceEntry>> = {
  "domestic-company": {
    title: "Domestic Company",
    summary: "La société opérationnelle derrière la plupart des Occupation Permits et de nombreux achats immobiliers.",
    intro:
      "Une Domestic Company mauricienne est une société privée constituée en vertu du Companies Act 2001 pour une activité exercée à Maurice. C'est le véhicule d'un Occupation Permit Investisseur, l'employeur d'un permis Professionnel et, avec un trust, un moyen de détenir un bien sous programme. Elle est imposée à Maurice à 15 % sur le revenu imposable, avec des exonérations partielles pour certaines catégories.",
    facts: [
      { label: "Droit applicable", value: "Companies Act 2001, administré par le Registrar of Companies" },
      { label: "Actionnaires et administrateurs", value: "Un actionnaire et un administrateur suffisent. Au moins un administrateur doit résider habituellement à Maurice" },
      { label: "Siège social", value: "Requis à Maurice. Nous le fournissons" },
      { label: "Secrétaire de société", value: "Requis pour une société ayant plus d'un administrateur, et en pratique pour toute société détenant un permis ou un compte bancaire. Nous le fournissons" },
      { label: "Délais", value: "Constitution généralement en quelques jours ouvrables à partir d'un dossier complet. Le compte bancaire prend plus de temps" },
      { label: "Fiscalité", value: "15 % sur le revenu imposable. Pas d'impôt sur les plus-values. Les dividendes versés aux actionnaires sont exonérés entre leurs mains" },
      { label: "Obligations annuelles", value: "Déclaration annuelle, états financiers, déclaration fiscale et, pour les titulaires de permis, déclarations de chiffre d'affaires à l'EDB" },
    ],
    sections: [
      { heading: "À qui elle convient", body: ["Toute personne qui s'installe avec un permis Investisseur, puisque le permis exige une société. Toute personne qui crée une véritable activité à Maurice : conseil, négoce, technologie, hôtellerie, promotion immobilière, services régionaux. Et les familles qui veulent détenir un bien sous programme par une société plutôt qu'en leur nom propre."] },
      { heading: "Détenir un bien par une société avec un trust", body: [
        "Une Domestic Company peut acquérir un bien sous les programmes agréés, et les parts de cette société peuvent être détenues par un trust. La structure sépare le logement de la personne, ce qui compte pour la succession, pour les familles dont les membres vivent dans plusieurs juridictions, et pour les acheteurs qui préfèrent ne pas détenir d'immobilier mauricien en leur nom. L'EDB nous a confirmé que le permis de résidence peut être demandé via une structure fiduciaire, sous réserve des conditions habituelles.",
        "C'est une structure que nous mettons en place régulièrement. Elle exige un trustee mauricien, un acte de trust correctement rédigé et une coordination entre le notaire, l'EDB et la banque au moment de l'achat. Nous préparons une proposition écrite pour chaque mandat présentant la structure, les parties, les coûts et la séquence.",
      ] },
      { heading: "Administrateur résident", body: ["Toute Domestic Company a besoin d'au moins un administrateur résidant habituellement à Maurice. Lorsque le propriétaire n'est pas encore résident ou préfère ne pas agir, nous fournissons un administrateur résident dans le cadre d'un accord écrit qui précise clairement ce que l'administrateur fera et ne fera pas, et comment le propriétaire conserve le contrôle. Nous ne fournissons pas d'administrateurs à des sociétés dont nous ne comprenons pas les activités."] },
      { heading: "Ce que nous prenons en charge", body: ["Réservation du nom, constitution, statuts, siège social, secrétaire de société, administrateur résident si nécessaire, introduction bancaire, enregistrement auprès de la Mauritius Revenue Authority et du Registrar of Businesses, et la conformité annuelle qui suit. Pour les titulaires de permis, les dépôts auprès de l'EDB se font en parallèle."] },
    ],
    related: [
      { label: "Permis Investisseur", href: "/residency/investor-permit" },
      { label: "Ouverture de compte bancaire", href: "/establishment/bank-account-opening" },
      { label: "Siège social et secrétariat", href: "/establishment/registered-office-and-secretary" },
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
    ],
    metaTitle: "Constitution d'une Domestic Company à Maurice | start.mu",
    metaDescription: "Constituer une Domestic Company à Maurice : administrateurs, siège social, imposition à 15 %, détention d'un bien sous programme par une société et un trust, et ce que start.mu prend en charge.",
    index: { audience: "Activité à Maurice, titulaires de permis, immobilier via une structure", threshold: "Activité exercée à Maurice", duration: "15 % sur le revenu imposable" },
  },
  "global-business-company": {
    title: "Global Business Company",
    summary: "Pour une activité internationale menée depuis Maurice avec substance et accès aux conventions.",
    intro:
      "Une Global Business Company détient une Global Business Licence de la Financial Services Commission et exerce son activité principalement hors de Maurice tout en étant gérée et contrôlée depuis l'île. C'est la structure des holdings, du négoce international, des fonds d'investissement et des sièges régionaux qui veulent accéder aux conventions de non-double imposition de Maurice.",
    status:
      "Les Global Business Companies sont agréées par la Financial Services Commission et doivent être administrées par une Management Company agréée. Ces mandats sont menés avec notre société sœur, Intrasia Management (Mauritius) Limited, titulaire d'une Management Licence de la FSC. start.mu coordonne le mandat pour le compte du client.",
    facts: [
      { label: "Agrément", value: "Global Business Licence délivrée par la Financial Services Commission" },
      { label: "Administration", value: "Doit être administrée par une Management Company agréée par la FSC" },
      { label: "Substance", value: "Au moins deux administrateurs résidents, un compte bancaire principal à Maurice, des comptes tenus et audités à Maurice, des conseils d'administration tenus à Maurice, et l'activité génératrice de revenus exercée à Maurice" },
      { label: "Fiscalité", value: "15 % avec une exonération partielle de 80 % sur les revenus de source étrangère éligibles, soit un taux effectif de 3 % sur ces revenus, sous réserve de substance" },
      { label: "Accès aux conventions", value: "Éligible au réseau de conventions de non-double imposition de Maurice, sous réserve d'un certificat de résidence fiscale" },
      { label: "Délais", value: "L'agrément prend généralement plusieurs semaines à partir d'un dossier complet" },
    ],
    sections: [
      { heading: "À qui elle convient", body: ["Un chef d'entreprise ayant des activités ou des investissements dans plusieurs pays, en particulier en Afrique et en Asie, qui veut une juridiction de holding stable et bien réglementée avec accès aux conventions. Ce n'est pas la bonne structure pour une entreprise qui commercera principalement à Maurice, et ce n'est pas à elle seule une structure pour une demande de permis, bien qu'une Global Business Company puisse employer un titulaire de permis Professionnel."] },
      { heading: "La substance n'est pas optionnelle", body: ["La valeur d'une Global Business Company tient à sa résidence fiscale, et la résidence fiscale dépend d'une gestion et d'un contrôle réels à Maurice. La FSC et la Mauritius Revenue Authority le vérifient. Les administrateurs doivent être résidents et diriger effectivement. Les décisions doivent être prises à Maurice. Les dépenses et le personnel doivent être proportionnés à l'activité. Nous mettons en place la structure pour qu'elle réponde à ces critères, et nous le disons clairement lorsqu'une structure proposée ne le peut pas."] },
      { heading: "Comment nous menons ces mandats", body: ["Nous évaluons le projet, identifions l'agrément et la structure appropriés, et coordonnons la demande via la Management Company agréée. Lorsque le propriétaire s'installe aussi à Maurice, nous menons le permis et le volet personnel en parallèle pour que les deux soient cohérents."] },
    ],
    related: [
      { label: "Authorised Company", href: "/establishment/authorised-company" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
      { label: "Pourquoi Maurice", href: "/mauritius" },
    ],
    metaTitle: "Global Business Company à Maurice | start.mu",
    metaDescription: "La Global Business Company mauricienne : agrément FSC, exigences de substance, taux effectif de 3 % sur les revenus étrangers éligibles, accès aux conventions et coordination du mandat.",
    index: { audience: "Holding et négoce international", threshold: "Gérée et contrôlée à Maurice", duration: "3 % effectif sur les revenus étrangers éligibles" },
  },
  "authorised-company": {
    title: "Authorised Company",
    summary: "Un véhicule plus simple pour une activité menée et contrôlée hors de Maurice.",
    intro:
      "Une Authorised Company est constituée à Maurice, autorisée par la Financial Services Commission, et a sa gestion et son contrôle centraux hors de Maurice. Elle est traitée comme non-résidente fiscalement et n'a pas accès aux conventions. Elle convient au négoce international, à la facturation et aux activités de holding lorsque l'accès aux conventions n'est pas nécessaire.",
    status:
      "Les Authorised Companies sont autorisées par la Financial Services Commission et doivent avoir pour agent enregistré une Management Company agréée. Notre société sœur, Intrasia Management (Mauritius) Limited, agit comme agent enregistré, et start.mu coordonne le mandat pour le compte du client.",
    facts: [
      { label: "Autorisation", value: "Délivrée par la Financial Services Commission" },
      { label: "Agent enregistré", value: "Une Management Company agréée par la FSC" },
      { label: "Gestion et contrôle", value: "Hors de Maurice" },
      { label: "Fiscalité", value: "Non-résidente. Pas d'impôt mauricien sur les revenus de source étrangère. Pas d'accès aux conventions de non-double imposition" },
      { label: "Activités", value: "Négoce, holding d'investissements, conseil, détention de propriété intellectuelle et activités similaires menées hors de Maurice. La banque, les services financiers et certaines autres activités sont exclus" },
      { label: "Déclarations", value: "Un résumé financier annuel déposé auprès de la FSC et une déclaration annuelle de revenus auprès de la Mauritius Revenue Authority" },
    ],
    sections: [
      { heading: "À qui elle convient", body: ["Un entrepreneur qui veut une société constituée à Maurice pour une activité internationale, avec des exigences de substance plus légères qu'une Global Business Company, et qui n'a pas besoin d'accès aux conventions. Courante pour les consultants et négociants servant des clients sur plusieurs marchés, et pour la détention de propriété intellectuelle ou d'investissements lorsque la juridiction d'origine du propriétaire n'impose pas sur la base de la résidence."] },
      { heading: "Limites", body: ["Une Authorised Company ne peut pas exercer d'activité à Maurice avec des résidents, ne peut pas détenir de Global Business Licence et ne peut pas soutenir un Occupation Permit. La position fiscale du propriétaire dans son pays n'est pas affectée par le choix d'un véhicule mauricien, et nous recommandons un conseil dans le pays d'origine avant de procéder."] },
    ],
    related: [
      { label: "Global Business Company", href: "/establishment/global-business-company" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Authorised Company à Maurice | start.mu",
    metaDescription: "L'Authorised Company mauricienne : autorisation FSC, gestion et contrôle hors de Maurice, traitement fiscal de non-résident, activités permises et limites.",
    index: { audience: "Activité internationale sans besoin de conventions", threshold: "Contrôlée hors de Maurice", duration: "Non-résidente, pas d'impôt mauricien" },
  },
  "bank-account-opening": {
    title: "Ouverture de compte bancaire",
    summary: "Présenté, accompagné jusqu'à l'activation, et ouvert avant le dépôt du permis.",
    intro:
      "Un compte bancaire mauricien est une condition de la plupart des permis et une nécessité pratique pour toute société. Son ouverture prend plus de temps que la constitution, et les exigences d'entrée en relation des banques ont considérablement augmenté. Nous présentons les clients à la banque qui correspond à leur profil et accompagnons le dossier jusqu'à l'activation.",
    facts: [
      { label: "Banques avec lesquelles nous travaillons", value: "MCB, AfrAsia Bank, SBM, Bank One et ABSA Mauritius, entre autres" },
      { label: "Délais", value: "Deux à six semaines à partir d'un dossier complet, selon la banque et le profil du demandeur" },
      { label: "Ce que la banque demandera", value: "Documents d'identité et de domicile, origine du patrimoine et origine des fonds, le plan d'affaires et, pour les sociétés, les statuts et les documents de constitution" },
      { label: "Personnel et professionnel", value: "Nous organisons les deux. Le compte personnel est généralement ouvert en premier" },
    ],
    sections: [
      { heading: "Pourquoi cela prend du temps", body: ["Les banques mauriciennes appliquent une diligence renforcée aux demandeurs non-résidents et aux nouvelles sociétés. Un dossier incomplet ou incohérent reste en attente. La chose la plus efficace que nous faisons sur un dossier bancaire est de le préparer correctement avant la soumission : un récit cohérent du patrimoine du demandeur, des documents qui concordent, et un plan d'affaires que la fonction conformité de la banque peut suivre."] },
      { heading: "Choisir la banque", body: ["Les banques diffèrent dans leur appétit selon la nationalité, le secteur et le type de compte, dans leurs soldes minimums, dans leurs facilités multidevises, et dans leur traitement d'une société qui n'a pas encore commencé à opérer. Nous savons où un profil donné a des chances d'être bien accueilli et orientons l'introduction en conséquence, plutôt que de soumettre à plusieurs banques et d'attendre de voir laquelle répond."] },
      { heading: "Coordination avec le permis", body: ["Pour un permis Investisseur, les 100 000 USD doivent être transférés sur le compte mauricien de la société dans les 60 jours suivant la délivrance ; pour l'Indépendant le montant est de 50 000 USD et pour un Retraité non-citoyen un premier versement de 2 000 USD. Un défaut de transfert dans les 60 jours entraîne la radiation et l'annulation du permis. Nous séquençons le dossier bancaire et le dossier de permis pour que le compte soit ouvert avant la délivrance et que le délai ne soit jamais en question."] },
    ],
    related: [
      { label: "Domestic Company", href: "/establishment/domestic-company" },
      { label: "Permis Investisseur", href: "/residency/investor-permit" },
    ],
    metaTitle: "Ouverture de compte bancaire à Maurice | start.mu",
    metaDescription: "Ouvrir des comptes bancaires personnels et professionnels à Maurice : quelles banques, ce qu'elles exigent, les délais, et la coordination du compte avec une demande de permis.",
  },
  "registered-office-and-secretary": {
    title: "Siège social et secrétaire de société",
    summary: "Tenus dans nos livres, avec les registres statutaires à jour et les dépôts effectués.",
    intro:
      "Toute société mauricienne a besoin d'un siège social à Maurice et, en pratique, d'un secrétaire de société qui tient les registres statutaires et effectue les dépôts exigés par le Registrar of Companies. Nous fournissons les deux depuis nos bureaux à Maurice.",
    facts: [
      { label: "Siège social", value: "Une adresse mauricienne pour la signification des actes et la correspondance statutaire" },
      { label: "Secrétaire de société", value: "Tenue du registre des actionnaires, du registre des administrateurs, des procès-verbaux et résolutions, et de la déclaration annuelle" },
      { label: "Dépôts", value: "Déclaration annuelle au Registrar of Companies, changements d'administrateurs et d'actionnaires, et informations sur les bénéficiaires effectifs" },
      { label: "Courrier", value: "Courrier statutaire reçu, numérisé et transmis" },
    ],
    sections: [
      { heading: "Ce qui est inclus", body: ["L'adresse du siège social, la réception et le traitement de la correspondance officielle, les registres statutaires, les résolutions du conseil et des actionnaires pour les affaires courantes, la déclaration annuelle, et des rappels avant chaque échéance de dépôt et de renouvellement. Pour les titulaires de permis, nous tenons les déclarations de chiffre d'affaires à l'EDB dans le même calendrier."] },
      { heading: "Ce qui n'est pas inclus", body: ["La comptabilité, l'audit et les déclarations fiscales sont des services distincts. Nous introduisons un comptable local dans le cadre de l'établissement et nous coordonnons avec lui, mais les comptes eux-mêmes sont préparés par le comptable. Lorsqu'un client préfère un point de contact unique pour l'ensemble, nous l'organisons."] },
    ],
    related: [
      { label: "Conformité annuelle", href: "/establishment/annual-compliance" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Siège social et secrétaire de société à Maurice | start.mu",
    metaDescription: "Services de siège social et de secrétariat de société à Maurice : registres statutaires, déclarations annuelles, dépôts sur les bénéficiaires effectifs et calendrier de conformité pour les titulaires de permis.",
  },
  "annual-compliance": {
    title: "Conformité annuelle",
    summary: "Les dépôts, déclarations et contrôles qui maintiennent un permis et une société en règle.",
    intro:
      "Un permis et une société comportent chacun des obligations annuelles, et depuis les Budgets 2025 et 2026 ces obligations sont vérifiées de plus près qu'auparavant. Nous tenons un seul calendrier pour la société, le permis et le foyer, et nous agissons en conséquence.",
    facts: [
      { label: "Société", value: "Déclaration annuelle, états financiers, déclaration fiscale, mises à jour des bénéficiaires effectifs, renouvellements du siège social et du secrétaire" },
      { label: "Permis", value: "Déclaration annuelle du chiffre d'affaires ou des revenus à la Mauritius Revenue Authority, suivi par l'EDB, seuils des années 3 et 5, et renouvellement déposé au moins un mois avant l'expiration" },
      { label: "Fiscalité", value: "Déclaration d'impôt sur le revenu personnelle en cas de résidence, et déclaration d'impôt sur les sociétés pour la société, déposées auprès de la Mauritius Revenue Authority" },
      { label: "Foyer", value: "Vignettes automobiles, renouvellements de couverture médicale, renouvellements de bail, réinscriptions scolaires" },
    ],
    sections: [
      { heading: "Le seuil de la cinquième année", body: ["Les permis Investisseur et Indépendant comportent des conditions de chiffre d'affaires ou de revenus à partir de l'année 3, et des conditions plus élevées à partir de l'année 5 qui régissent le renouvellement. L'EDB, avec le Passport and Immigration Office et la Mauritius Revenue Authority, contrôle la conformité, y compris par des visites sur place, et peut radier un titulaire qui ne les remplit pas, après quoi le permis est annulé. Nous nous y préparons dès l'année 1 en maintenant la cohérence des déclarations à la MRA et en signalant tôt lorsque les chiffres s'éloignent des seuils."] },
      { heading: "Comment fonctionne le service", body: ["Les clients sous mandat annuel reçoivent un calendrier de conformité pour l'année à venir, des rappels avant chaque échéance, les dépôts effectués en leur nom et une courte réunion de bilan annuelle. Les questions ordinaires qui accompagnent la vie dans un nouveau pays reçoivent une réponse au fur et à mesure."] },
    ],
    related: [
      { label: "Siège social et secrétariat", href: "/establishment/registered-office-and-secretary" },
      { label: "Permis Investisseur", href: "/residency/investor-permit" },
      { label: "Conciergerie", href: "/concierge" },
    ],
    metaTitle: "Conformité annuelle des titulaires de permis et des sociétés à Maurice | start.mu",
    metaDescription: "La conformité annuelle à Maurice pour les titulaires d'Occupation Permit et les Domestic Companies : déclarations à la MRA, suivi de l'EDB, seuil de l'année 5, dépôts de société et fonctionnement du mandat.",
  },
};

export const propertyFr: Record<string, Partial<ServiceEntry>> = {
  "property-development-scheme": {
    title: "Property Development Scheme",
    summary: "Le régime actuel des nouveaux programmes résidentiels ouverts aux acheteurs étrangers.",
    intro:
      "Le Property Development Scheme est le cadre dans lequel la plupart des nouveaux programmes résidentiels ouverts aux non-citoyens ont été agréés depuis 2015. Il a remplacé l'Integrated Resort Scheme et le Real Estate Scheme pour les nouveaux projets et couvre villas, maisons de ville, appartements et terrains viabilisés au sein d'un programme agréé.",
    facts: [
      { label: "Prix d'achat minimum", value: "Aucun pour l'achat lui-même. 375 000 USD pour obtenir un permis de résidence" },
      { label: "Qui peut acheter", value: "Non-citoyens, sociétés, trusts et fondations, avec l'autorisation de l'EDB" },
      { label: "Permis de résidence", value: "Pour l'acheteur, le conjoint et les enfants à charge, valable tant que le bien est détenu, à partir de 375 000 USD" },
      { label: "Droit d'enregistrement", value: "5 % du prix d'achat, à la charge de l'acheteur" },
      { label: "Location", value: "Le propriétaire peut louer le bien" },
      { label: "Revente", value: "Permise, à un autre acheteur éligible, avec la même procédure d'autorisation" },
    ],
    sections: [
      { heading: "À quoi ressemble un programme PDS", body: ["Les projets PDS vont de quelques villas sur un terrain côtier à plusieurs centaines d'appartements dans un domaine planifié avec des équipements partagés. Le régime impose au promoteur d'affecter une partie du projet à des fins sociales et de respecter des normes de conception et d'environnement, et chaque projet est agréé par l'EDB avant que des unités puissent être vendues à des étrangers."] },
      { heading: "Déroulement de l'achat", body: ["Réservation avec dépôt, demande d'autorisation d'acquérir auprès de l'EDB, acte de vente notarié et enregistrement. La plupart des unités PDS sont vendues sur plan sous contrat VEFA, ce qui ajoute des paiements échelonnés liés aux étapes de la construction et une garantie d'achèvement de la banque du promoteur. Nous agissons pour l'acheteur aux côtés du notaire, examinons la situation du promoteur et la garantie, et gérons la demande auprès de l'EDB."] },
      { heading: "Détention par une société ou un trust", body: ["Une unité PDS peut être détenue par une Domestic Company mauricienne, dont les parts sont détenues en trust. C'est une structure que nous mettons en place régulièrement pour les familles qui préfèrent ne pas détenir d'immobilier en leur nom. Le permis de résidence peut être obtenu via la structure, sous réserve des conditions de l'EDB."] },
    ],
    related: [
      { label: "Achat sur plan et VEFA", href: "/property/off-plan-vefa" },
      { label: "Résidence par l'immobilier", href: "/residency/property-acquisition" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Property Development Scheme à Maurice | start.mu",
    metaDescription: "Acheter sous le Property Development Scheme mauricien : éligibilité, seuil de résidence de 375 000 USD, séquence d'achat, ventes sur plan en VEFA et détention par une société et un trust.",
    index: { audience: "Villas, maisons de ville et appartements neufs dans des programmes agréés", threshold: "Aucun minimum ; 375 000 USD pour la résidence", duration: "Régime actuel des nouveaux projets" },
  },
  "integrated-resort-scheme": {
    title: "Integrated Resort Scheme",
    summary: "Le régime resort de luxe d'origine, aujourd'hui disponible sur le marché de la revente.",
    intro:
      "L'Integrated Resort Scheme a été le premier cadre à ouvrir l'immobilier résidentiel mauricien aux acheteurs étrangers, à partir de 2002. Les programmes IRS sont de grands domaines de type resort avec golfs, marinas ou hôtels. Aucun nouveau projet IRS n'a été agréé depuis que le Property Development Scheme l'a remplacé, mais des unités en revente dans les domaines IRS établis restent disponibles et donnent droit à la même résidence.",
    facts: [
      { label: "Statut", value: "Fermé aux nouveaux projets. Unités en revente disponibles dans les domaines existants" },
      { label: "Permis de résidence", value: "À partir de 375 000 USD, pour l'acheteur, le conjoint et les enfants à charge, tant que le bien est détenu" },
      { label: "Droit d'enregistrement", value: "5 % du prix d'achat, à la charge de l'acheteur" },
      { label: "Domaines", value: "Anahita, Tamarina, Villas Valriche, Azuri et autres" },
    ],
    sections: [
      { heading: "Pourquoi les acheteurs regardent encore l'IRS", body: ["Les domaines IRS établis sont matures : les jardins ont poussé, les équipements fonctionnent, les sociétés de gestion ont fait leurs preuves, et le marché locatif des unités est connu. Un acheteur qui privilégie la certitude au prix du neuf les préfère souvent. L'achat porte sur un bien achevé, de sorte que le risque VEFA de l'achat sur plan ne se pose pas."] },
      { heading: "Déroulement de l'achat", body: ["La même séquence que tout achat sous programme : demande auprès de l'EDB, acte notarié et enregistrement. Comme le vendeur est généralement un particulier plutôt qu'un promoteur, la diligence se déplace vers le titre, les charges du domaine et l'état du bien, que nous examinons avec le notaire avant l'acte."] },
    ],
    related: [
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Real Estate Scheme", href: "/property/real-estate-scheme" },
      { label: "Résidence par l'immobilier", href: "/residency/property-acquisition" },
    ],
    metaTitle: "Integrated Resort Scheme à Maurice | start.mu",
    metaDescription: "Acheter une unité en revente dans un domaine Integrated Resort Scheme à Maurice : statut actuel, droit à la résidence à 375 000 USD et déroulement de l'achat.",
    index: { audience: "Unités en revente dans des domaines resort établis", threshold: "375 000 USD pour la résidence", duration: "Fermé aux nouveaux projets" },
  },
  "real-estate-scheme": {
    title: "Real Estate Scheme",
    summary: "Des programmes plus petits du cadre antérieur à 2015, disponibles en revente.",
    intro:
      "Le Real Estate Scheme couvrait des programmes plus petits que l'IRS, sur des terrains de moins de dix hectares, et a été la voie par laquelle de nombreux projets de villas et d'appartements de charme ont été agréés avant 2015. Comme l'IRS, il est fermé aux nouveaux projets mais reste pertinent pour la revente.",
    facts: [
      { label: "Statut", value: "Fermé aux nouveaux projets. Unités en revente disponibles" },
      { label: "Permis de résidence", value: "À partir de 375 000 USD, pour l'acheteur, le conjoint et les enfants à charge, tant que le bien est détenu" },
      { label: "Droit d'enregistrement", value: "5 % du prix d'achat, à la charge de l'acheteur" },
    ],
    sections: [
      { heading: "À qui il convient", body: ["Un acheteur qui cherche un bien achevé dans un programme plus petit et plus calme, souvent près de la côte au nord ou à l'ouest, à un niveau de prix inférieur aux grands domaines resort. De nombreux programmes RES sont bien situés et bien entretenus, et le marché de la revente est actif."] },
      { heading: "Déroulement de l'achat", body: ["Demande auprès de l'EDB, acte notarié et enregistrement, avec diligence sur le titre, les charges de copropriété et l'état du bien. Nous agissons pour l'acheteur avec le notaire tout au long."] },
    ],
    related: [
      { label: "Integrated Resort Scheme", href: "/property/integrated-resort-scheme" },
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
    ],
    metaTitle: "Real Estate Scheme à Maurice | start.mu",
    metaDescription: "Acheter une unité en revente dans un programme Real Estate Scheme à Maurice : statut, droit à la résidence et procédure d'achat.",
    index: { audience: "Unités en revente dans des programmes plus petits", threshold: "375 000 USD pour la résidence", duration: "Fermé aux nouveaux projets" },
  },
  "smart-city-scheme": {
    title: "Smart City Scheme",
    summary: "Des programmes mixtes avec des unités résidentielles et, pour les titulaires de permis, des terrains viabilisés.",
    intro:
      "Les programmes Smart City Scheme sont des projets mixtes planifiés combinant bureaux, unités résidentielles, commerces, éducation et loisirs. Les non-citoyens peuvent y acheter des unités résidentielles, et les titulaires d'un Occupation Permit, d'un permis de résidence ou d'un permis de résidence permanente peuvent aussi acquérir un terrain viabilisé pour y construire.",
    facts: [
      { label: "Unités résidentielles", value: "Ouvertes aux non-citoyens avec l'autorisation de l'EDB. Permis de résidence à partir de 375 000 USD" },
      { label: "Terrains viabilisés", value: "Accessibles aux titulaires d'Occupation Permit, de permis de résidence et de résidence permanente pour une construction résidentielle, sous réserve de limites de superficie et d'un délai de construction" },
      { label: "Droit d'enregistrement", value: "5 % du prix d'achat, à la charge de l'acheteur" },
      { label: "Programmes", value: "Beau Plan, Moka, Mon Trésor, Uniciti, Cap Tamarin et autres" },
    ],
    sections: [
      { heading: "À qui il convient", body: ["Les familles qui veulent vivre près des écoles, des bureaux et des services plutôt que dans un resort côtier, et les professionnels qui préfèrent un cadre urbain. Les Smart Cities du centre et du nord sont devenues le choix établi des familles qui s'installent avec des enfants d'âge scolaire."] },
      { heading: "Construire sur un terrain viabilisé", body: ["Un titulaire de permis peut acheter un terrain dans une Smart City et y construire une maison. Le terrain est viabilisé avec routes et réseaux, la conception doit respecter les règles du domaine, et la construction doit commencer dans un délai fixé. C'est la seule voie par laquelle la plupart des non-citoyens peuvent construire une maison de leur propre conception à Maurice, et nous gérons l'acquisition, l'agrément de l'EDB et l'introduction auprès d'architectes et d'entrepreneurs."] },
    ],
    related: [
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Achat sur plan et VEFA", href: "/property/off-plan-vefa" },
      { label: "Résidence par l'immobilier", href: "/residency/property-acquisition" },
    ],
    metaTitle: "Smart City Scheme à Maurice | start.mu",
    metaDescription: "Acheter une unité résidentielle ou un terrain viabilisé dans une Smart City mauricienne : éligibilité, résidence à 375 000 USD, construction sur un terrain en tant que titulaire de permis et principaux programmes.",
    index: { audience: "Vie urbaine et terrains à bâtir pour titulaires de permis", threshold: "375 000 USD pour la résidence", duration: "Régime actuel" },
  },
  "invest-hotel-scheme": {
    title: "Invest Hotel Scheme",
    summary: "La propriété d'une chambre ou d'une villa d'hôtel, louée à l'exploitant.",
    intro:
      "L'Invest Hotel Scheme permet à un non-citoyen d'acheter une unité dans un hôtel agréé, de la relouer à l'exploitant et de percevoir des revenus locatifs, avec un droit limité d'occuper l'unité chaque année. C'est d'abord un produit d'investissement, et un logement ensuite.",
    facts: [
      { label: "Ce qui est acheté", value: "Une chambre, une suite ou une villa dans un hôtel agréé sous le régime" },
      { label: "Bail en retour", value: "L'unité est relouée à l'exploitant, qui l'exploite dans le cadre de l'hôtel et verse au propriétaire une part des revenus" },
      { label: "Usage personnel", value: "Jusqu'à 45 jours par an" },
      { label: "Permis de résidence", value: "À partir de 375 000 USD, pour l'acheteur, le conjoint et les enfants à charge, tant que l'unité est détenue" },
      { label: "Droit d'enregistrement", value: "5 % du prix d'achat, à la charge de l'acheteur" },
    ],
    sections: [
      { heading: "À qui il convient", body: ["Un investisseur qui veut une exposition à l'hôtellerie mauricienne avec un exploitant professionnel gérant l'actif, et qui visite Maurice quelques semaines par an plutôt que d'y vivre. Une unité à 375 000 USD ou plus donne droit à un permis de résidence comme tout achat sous programme, mais la limite de 45 jours d'usage personnel en fait rarement la bonne voie pour quelqu'un qui compte vivre à Maurice à plein temps."] },
      { heading: "Ce qu'il faut examiner", body: ["Les antécédents de l'exploitant, les termes du bail en retour et du partage des revenus, le traitement des coûts de rénovation et les clauses de sortie. Ils varient considérablement d'un hôtel à l'autre. Nous les examinons avec l'acheteur avant toute réservation."] },
    ],
    related: [
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Résidence par l'immobilier", href: "/residency/property-acquisition" },
    ],
    metaTitle: "Invest Hotel Scheme à Maurice | start.mu",
    metaDescription: "L'Invest Hotel Scheme mauricien : acheter une unité d'hôtel avec bail en retour, usage personnel de 45 jours par an, droit à la résidence à 375 000 USD et ce qu'il faut examiner avant d'acheter.",
    index: { audience: "Investisseurs en unités d'hôtel avec bail en retour", threshold: "375 000 USD pour la résidence", duration: "45 jours d'usage personnel" },
  },
  "ground-plus-two": {
    title: "Appartements R+2",
    summary: "Des appartements dans des immeubles ordinaires, hors programmes, pour les non-citoyens.",
    intro:
      "Un non-citoyen peut acheter un appartement dans un immeuble d'au moins deux étages au-dessus du rez-de-chaussée n'importe où à Maurice, hors des programmes agréés, avec l'autorisation de l'EDB. Cette voie a ouvert aux acheteurs étrangers le marché plus large des appartements, y compris les programmes neufs des centres-villes et du littoral.",
    facts: [
      { label: "Immeuble", value: "Au moins trois niveaux : rez-de-chaussée plus deux" },
      { label: "Prix d'achat minimum", value: "6 millions MUR" },
      { label: "Permis de résidence", value: "À partir de 375 000 USD, pour l'acheteur, le conjoint et les enfants à charge, tant que le bien est détenu" },
      { label: "Droit d'enregistrement", value: "5 % du prix d'achat, à la charge de l'acheteur" },
      { label: "Autorisation", value: "Autorisation de l'EDB requise avant l'acte" },
    ],
    sections: [
      { heading: "À qui il convient", body: ["Un acheteur qui veut un appartement plutôt qu'une villa, dans un lieu que les programmes ne couvrent pas, à un prix d'entrée inférieur. De nombreux programmes d'appartements récents à Grand Baie, Tamarin, Flic en Flac et dans les villes du plateau sont vendus à des non-citoyens par cette voie."] },
      { heading: "Achats sur plan", body: ["Les immeubles d'appartements neufs sont couramment vendus sur plan sous contrat VEFA. Les mêmes protections et les mêmes risques s'appliquent que sous les programmes, et l'examen de la situation du promoteur et de la garantie d'achèvement est d'autant plus important que le promoteur est petit."] },
    ],
    related: [
      { label: "Achat sur plan et VEFA", href: "/property/off-plan-vefa" },
      { label: "Résidence par l'immobilier", href: "/residency/property-acquisition" },
    ],
    metaTitle: "Appartements R+2 à Maurice | start.mu",
    metaDescription: "Acheter un appartement à Maurice en tant que non-citoyen par la voie R+2 : minimum de 6 millions MUR, résidence à 375 000 USD, autorisation de l'EDB et achats sur plan.",
    index: { audience: "Appartements hors programmes", threshold: "6 millions MUR ; 375 000 USD pour la résidence", duration: "Immeubles de trois niveaux ou plus" },
  },
  "off-plan-vefa": {
    title: "Achat sur plan et VEFA",
    summary: "Comment fonctionne une vente en l'état futur d'achèvement, et où se situe le risque.",
    intro:
      "La plupart des logements neufs vendus à des non-citoyens à Maurice le sont sur plan, dans le cadre d'une vente en l'état futur d'achèvement, ou VEFA. L'acheteur devient propriétaire de la quote-part de terrain et du bâtiment au fur et à mesure de sa construction, paie par étapes liées à l'avancement, et s'appuie sur une garantie financière d'achèvement fournie par la banque du promoteur.",
    facts: [
      { label: "Contrat", value: "Un acte de VEFA signé devant notaire, transférant progressivement la propriété à mesure que la construction avance" },
      { label: "Paiements", value: "Échelonnés selon les étapes de construction, typiquement à la signature, aux fondations, au gros œuvre, à la mise hors d'eau et à la livraison, dans des proportions fixées dans l'acte" },
      { label: "Garantie d'achèvement", value: "Une garantie financière d'achèvement d'une banque ou d'un assureur, couvrant l'achèvement du bâtiment en cas de défaillance du promoteur" },
      { label: "Livraison", value: "Une date de livraison contractuelle, avec des pénalités de retard fixées dans l'acte" },
      { label: "Vices", value: "Garanties légales contre les vices après livraison, dont la garantie décennale" },
    ],
    sections: [
      { heading: "Où se situe le risque", body: [
        "La protection d'une VEFA tient à la garantie d'achèvement et à l'échelonnement des paiements. Un acheteur qui a payé en avance sur la construction, ou dont la garantie est faible, est exposé si le promoteur cale. Les questions à poser avant de signer sont donc : qui a émis la garantie, à quelles conditions, et si le calendrier de paiement de l'acte suit réellement la construction.",
        "Nous avons agi pour des acheteurs dont les programmes ont pris du retard, et la différence entre une position récupérable et une position difficile se décide presque toujours au moment de la signature plutôt qu'après.",
      ] },
      { heading: "Ce que nous faisons pour un acheteur", body: ["Examiner la situation du promoteur, l'agrément du projet par l'EDB, la garantie et son émetteur, le calendrier de paiement, les conditions de livraison et les clauses de pénalité. Coordonner avec le notaire. Gérer la demande auprès de l'EDB. Et, si un programme rencontre des difficultés, travailler dans le cadre de la garantie, avec le notaire et le promoteur, pour le compte de l'acheteur."] },
      { heading: "Acheter par une structure", body: ["Une unité en VEFA peut être achetée par une Domestic Company mauricienne détenue en trust, comme tout bien sous programme. La structure doit être en place avant l'acte, et la banque, le notaire et l'EDB doivent chacun l'accepter. Nous préparons la structure en parallèle de la réservation pour que l'acte ne soit pas retardé."] },
    ],
    related: [
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Appartements R+2", href: "/property/ground-plus-two" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Achat sur plan et VEFA à Maurice | start.mu",
    metaDescription: "Comment fonctionnent les achats immobiliers sur plan à Maurice en VEFA : paiements échelonnés, garantie d'achèvement, conditions de livraison, où se situe le risque et ce que start.mu fait pour l'acheteur.",
  },
};

export const faqsBusinessFr: Record<string, Faq[]> = {
  "domestic-company": [
    { q: "Ai-je besoin d'un administrateur mauricien ?", a: "Au moins un administrateur doit résider habituellement à Maurice. Lorsque le propriétaire n'est pas encore résident ou préfère ne pas agir, nous fournissons un administrateur résident dans le cadre d'un accord écrit qui précise ce que l'administrateur fera et ne fera pas." },
    { q: "Comment la société est-elle imposée ?", a: "À 15 % sur le revenu imposable, avec des exonérations partielles pour certaines catégories. Il n'y a pas d'impôt sur les plus-values et les dividendes sont exonérés entre les mains de l'actionnaire." },
    { q: "La société peut-elle détenir un logement sous les programmes immobiliers ?", a: "Oui, avec l'autorisation de l'EDB, et ses parts peuvent être détenues en trust. C'est une structure que nous mettons en place régulièrement pour les familles qui préfèrent ne pas détenir d'immobilier en leur nom." },
    { q: "Combien de temps prend la constitution ?", a: "Quelques jours ouvrables à partir d'un dossier complet. Le compte bancaire prend plus de temps et c'est lui qui fixe le calendrier." },
  ],
  "global-business-company": [
    { q: "Une Global Business Company convient-elle à une entreprise qui commerce à Maurice ?", a: "Non. Elle est destinée à une activité menée principalement hors de Maurice. Une entreprise qui sert le marché mauricien utilise une Domestic Company." },
    { q: "Que signifie la substance en pratique ?", a: "Deux administrateurs résidents qui dirigent réellement, des conseils tenus à Maurice, un compte bancaire principal et des comptes audités ici, et une activité génératrice de revenus exercée à Maurice avec des dépenses et du personnel proportionnés. La résidence fiscale, et donc la valeur de la structure, en dépend." },
    { q: "Une Global Business Company peut-elle soutenir mon Occupation Permit ?", a: "Elle peut employer un titulaire de permis Professionnel. Elle n'est pas, à elle seule, le véhicule d'un permis Investisseur, qui suppose une activité générant des revenus à Maurice." },
  ],
  "authorised-company": [
    { q: "Quelle est la différence avec une Global Business Company ?", a: "Une Authorised Company est gérée et contrôlée hors de Maurice, est traitée comme non-résidente fiscalement, ne paie pas d'impôt mauricien sur les revenus étrangers et n'a pas accès aux conventions. Une Global Business Company est résidente, paie un impôt effectif de 3 % sur les revenus étrangers éligibles et a accès aux conventions, au prix d'une substance réelle à Maurice." },
    { q: "Peut-elle faire des affaires à Maurice ?", a: "Non. Elle ne peut pas exercer d'activité avec des résidents mauriciens et ne peut pas soutenir un Occupation Permit." },
    { q: "Change-t-elle ma position fiscale dans mon pays ?", a: "Non. Votre propre résidence et les règles de votre pays ne sont pas affectées par le choix d'un véhicule mauricien, et nous recommandons un conseil dans le pays d'origine avant de procéder." },
  ],
};
