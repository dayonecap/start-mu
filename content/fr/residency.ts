import type { ServiceEntry } from "@/content/types";
import type { Faq } from "@/content/faqs";

export const residencyFr: Record<string, Partial<ServiceEntry>> = {
  "professional-permit": {
    title: "Occupation Permit Professionnel",
    summary: "Pour ceux qui sont employés par une société à Maurice.",
    intro:
      "L'Occupation Permit de catégorie Professionnel permet à un non-citoyen d'occuper un emploi auprès d'un employeur mauricien. La demande est faite par l'employeur, le permis est valable jusqu'à dix ans et donne au titulaire et aux personnes à sa charge le droit de résider à Maurice pour la durée du contrat.",
    facts: [
      { label: "Salaire de base minimum", value: "50 000 MUR par mois, tous secteurs confondus, depuis le Budget 2026-27" },
      { label: "Demandeur", value: "L'employeur dépose la demande, l'employé en est le bénéficiaire" },
      { label: "Validité", value: "Jusqu'à 10 ans, ou la durée du contrat de travail si elle est plus courte" },
      { label: "Personnes à charge", value: "Conjoint ou concubin, enfants à charge non mariés et parents" },
      { label: "Titulaires actuels", value: "Un professionnel titulaire d'un permis en cours délivré sous l'ancien critère de 30 000 MUR a droit à un renouvellement sur cette base" },
      { label: "Permis de courte durée", value: "Un Short-term Occupation Permit est disponible pour 9 mois au plus, prolongeable une fois de 3 mois" },
      { label: "Actionnariat", value: "Un professionnel peut détenir des parts de son employeur, sans en être l'actionnaire majoritaire, et investir dans d'autres entreprises sans y être employé" },
    ],
    sections: [
      { heading: "À qui il convient", body: [
        "Le permis s'adresse à celui qui sera salarié plutôt que propriétaire. Il est courant pour les cadres qui se relocalisent avec un groupe international, les spécialistes recrutés par des sociétés mauriciennes, et le conjoint d'un fondateur qui prend un poste dans l'entreprise familiale.",
        "Les anciens paliers ProPass et Expert Pass ont été fusionnés en une seule catégorie Professionnel avec un seuil de salaire unique. La distinction qui comptait sous l'ancien système, entre professionnel standard et expert senior, n'a plus d'incidence sur la demande.",
      ] },
      { heading: "Emploi au sein de sa propre société", body: [
        "Une structure sur laquelle on nous interroge souvent : le fondateur titulaire du permis Investisseur et le conjoint employé par la même société sous un permis Professionnel. Cela fonctionne, et c'est parfois la bonne réponse lorsque les deux partenaires seront actifs dans l'entreprise. Le salaire doit être réel, versé mensuellement et déclaré à la Mauritius Revenue Authority, la société doit pouvoir démontrer qu'elle gagne assez pour le payer, et le professionnel ne peut pas être l'actionnaire majoritaire de l'employeur.",
      ] },
      { heading: "Changer d'employeur", body: [
        "Le permis est lié à l'employeur. Un professionnel qui rejoint une autre société a besoin d'un nouveau permis sous le nouvel employeur, et si l'emploi prend fin, le permis est annulé. Il existe une période limitée pendant laquelle le titulaire peut rester à Maurice pour trouver un nouvel emploi ou un nouveau permis, à condition d'effectuer les bonnes démarches rapidement. Les clauses de non-concurrence de l'ancien contrat peuvent compliquer un changement dans le même domaine. Nous conseillons sur la séquence avant que le préavis ne soit donné.",
      ] },
      { heading: "Ce que comporte la demande", body: [
        "L'employeur dépose la demande, avec le contrat de travail, les documents de la société et les qualifications du demandeur. Les professions réglementées exigent une autorisation ou une inscription auprès du conseil compétent, et les postes de direction dans le secteur bancaire une autorisation de la Banque de Maurice. Une fois approuvé, l'employé se présente en personne pour la délivrance, accompagné d'un représentant de l'employeur.",
      ] },
    ],
    related: [
      { label: "Permis Investisseur", href: "/residency/investor-permit" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
      { label: "Personnes à charge et famille", href: "/residency/dependents" },
    ],
    metaTitle: "Occupation Permit Professionnel à Maurice | start.mu",
    metaDescription: "L'Occupation Permit Professionnel à Maurice pour les salariés : seuil de salaire de 50 000 MUR, demande par l'employeur, validité et personnes à charge.",
    index: { audience: "Salariés d'une société mauricienne", threshold: "Salaire mensuel de 50 000 MUR", duration: "Jusqu'à 10 ans" },
  },
  "self-employed-permit": {
    title: "Occupation Permit Indépendant",
    summary: "Pour un professionnel travaillant seul, dans le secteur des services.",
    intro:
      "L'Occupation Permit de catégorie Indépendant s'adresse à la personne qui travaillera pour son propre compte à Maurice, dans une activité de services, sans constituer de société. Il est délivré pour dix ans au plus et comporte des conditions de revenus qui augmentent au fil du permis.",
    facts: [
      { label: "Investissement initial minimum", value: "50 000 USD, ou l'équivalent en devise librement convertible, transférés de l'étranger sur le compte bancaire mauricien du titulaire dans les 60 jours suivant la délivrance" },
      { label: "Activité", value: "Secteur des services uniquement, avec enregistrement auprès du Registrar of Businesses ou sous forme de société unipersonnelle" },
      { label: "Lettres d'intention", value: "Au moins trois, dont au moins deux de clients locaux potentiels" },
      { label: "Conditions de revenus", value: "2 millions MUR par an à partir de la troisième année d'activité ; 3 millions MUR par an à partir de la cinquième année pour le renouvellement" },
      { label: "Validité", value: "Jusqu'à 10 ans, renouvelable" },
      { label: "Personnel", value: "Un employé administratif local peut être engagé" },
      { label: "Personnes à charge", value: "Conjoint ou concubin, enfants à charge non mariés et parents" },
    ],
    sections: [
      { heading: "À qui il convient", body: [
        "Consultants, designers, développeurs, coachs, conseillers, producteurs de contenu et autres professionnels qui vendent leur propre temps et leur savoir-faire, et qui n'ont pas besoin d'une société pour le faire. Le permis est personnel et ne permet pas d'employer d'autres professionnels, bien qu'un soutien administratif puisse être engagé.",
        "Le choix entre Indépendant et Investisseur tient généralement à l'échelle et à la structure. L'investissement initial est de 50 000 USD pour l'Indépendant contre 100 000 USD pour l'Investisseur. Si l'activité doit devenir une entreprise avec du personnel, des contrats au nom d'une société et une propriété distincte, la voie Investisseur avec une Domestic Company est la meilleure fondation. Si l'activité est et restera le travail d'une seule personne, l'Indépendant est plus simple et moins coûteux à maintenir.",
      ] },
      { heading: "Le plan d'affaires", body: [
        "L'EDB prescrit la structure du plan d'affaires et le poids qu'il accorde à chaque section, et attend des projections financières sur cinq ans. Trois lettres d'intention, dont deux de clients locaux, sont obligatoires. Nous rédigeons le plan avec le demandeur dans le format que l'EDB évalue, et testons les projections de revenus par rapport aux seuils des années 3 et 5 avant tout dépôt.",
      ] },
      { heading: "Ce que comporte la demande", body: [
        "L'enregistrement comme entreprise, la preuve de fonds à l'étranger, le plan d'affaires et les lettres d'intention, les qualifications et le dossier personnel. L'approbation est donnée en principe, l'examen médical est effectué à Maurice, et le demandeur se présente en personne pour la délivrance, après quoi les 50 000 USD sont transférés dans les 60 jours.",
      ] },
    ],
    related: [
      { label: "Permis Investisseur", href: "/residency/investor-permit" },
      { label: "Ouverture de compte bancaire", href: "/establishment/bank-account-opening" },
      { label: "Premium Visa", href: "/residency/premium-visa" },
    ],
    metaTitle: "Occupation Permit Indépendant à Maurice | start.mu",
    metaDescription: "L'Occupation Permit Indépendant à Maurice : investissement initial de 50 000 USD, trois lettres d'intention, conditions de revenus aux années 3 et 5, et préparation du plan d'affaires.",
    index: { audience: "Professionnels exerçant seuls dans le secteur des services", threshold: "50 000 USD d'investissement", duration: "Jusqu'à 10 ans" },
  },
  "innovator-permit": {
    title: "Occupation Permit Innovateur",
    summary: "Pour les fondateurs d'une start-up innovante, sans investissement minimum.",
    intro:
      "La voie des start-ups innovantes relève de la catégorie Investisseur et s'adresse aux fondateurs dont le projet est soumis à l'Economic Development Board ou enregistré auprès d'un incubateur accrédité. Il n'y a pas d'investissement initial minimum. L'éligibilité repose sur la nature du projet plutôt que sur le capital.",
    facts: [
      { label: "Investissement initial minimum", value: "Aucun" },
      { label: "Voie d'accès", value: "Un projet soumis à l'EDB, ou l'enregistrement auprès d'un incubateur accrédité par le Mauritius Research and Innovation Council" },
      { label: "Rapports", value: "Un rapport d'avancement annuel dans les trois mois suivant la fin de la première année, et un rapport de développement à la fin de la cinquième année confirmant que le projet a atteint le stade du produit minimum viable" },
      { label: "Validité", value: "Jusqu'à 10 ans, renouvelable" },
      { label: "Personnes à charge", value: "Conjoint ou concubin, enfants à charge non mariés et parents" },
    ],
    sections: [
      { heading: "À qui il convient", body: [
        "Les fondateurs de projets technologiques et fondés sur le savoir, qui construisent quelque chose de nouveau et ne peuvent pas, ou préfèrent ne pas, engager 100 000 USD dès le départ. Logiciel, fintech, biotechnologie, énergies renouvelables, données et IA sont les candidats typiques. L'EDB cherche un projet avec de la substance : un produit, une équipe, un plan, et une raison pour que le travail se fasse à Maurice.",
      ] },
      { heading: "Comment le projet est évalué", body: [
        "La demande est jugée sur le projet plutôt que sur le compte en banque du demandeur. La documentation diffère donc d'une demande Investisseur classique : un plan d'affaires clairement identifié comme start-up innovante, une description technique du produit, le développement à mener à Maurice, le parcours de l'équipe fondatrice et la trajectoire commerciale. Lorsqu'un incubateur accrédité est impliqué, son acceptation a du poids auprès de l'EDB. L'obligation après délivrance est une obligation de rapport : les progrès chaque année, et un produit fonctionnel en année 5.",
      ] },
      { heading: "Notre rôle", body: [
        "Nous structurons la société, préparons la demande dans la forme attendue par l'EDB et, lorsque c'est utile, faisons l'introduction auprès d'un incubateur accrédité. Nous fixons aussi le calendrier des rapports dès le départ, pour que les rapports d'avancement annuels et le rapport de développement de l'année 5 soient préparés par rapport au plan d'affaires approuvé par l'EDB.",
      ] },
    ],
    related: [
      { label: "Permis Investisseur", href: "/residency/investor-permit" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Occupation Permit Innovateur à Maurice | start.mu",
    metaDescription: "La voie des start-ups innovantes de l'Occupation Permit Investisseur à Maurice : aucun investissement minimum, projet soumis à l'EDB ou incubateur accrédité, et comment la demande est évaluée.",
    index: { audience: "Fondateurs de start-ups innovantes", threshold: "Aucun investissement minimum", duration: "Jusqu'à 10 ans" },
  },
  "retired-residence-permit": {
    title: "Permis de résidence Retraité non-citoyen",
    summary: "Pour les personnes de 50 ans et plus, disposant de revenus de l'étranger.",
    intro:
      "Le permis de résidence Retraité non-citoyen permet à une personne de 50 ans ou plus de vivre à Maurice pendant dix ans au plus sur la base de revenus transférés de l'étranger. Aucune obligation d'acheter un bien, aucun séjour minimum, et aucune restriction sur le lieu de résidence à Maurice.",
    facts: [
      { label: "Âge", value: "50 ans ou plus à la date de la demande" },
      { label: "Justificatif de fonds", value: "Un relevé bancaire du pays d'origine ou de résidence montrant au moins 24 000 USD" },
      { label: "Transfert", value: "Un premier versement de 2 000 USD sur une banque mauricienne dans les 60 jours suivant la délivrance, puis 2 000 USD par mois ou 24 000 USD par an" },
      { label: "Validité", value: "10 ans, renouvelable" },
      { label: "Travail", value: "Aucune activité rémunérée au titre du permis lui-même. L'investissement dans une entreprise est permis à condition de ne pas y être employé. Un emploi dans certains secteurs est possible avec un permis de travail ou un Occupation Permit distinct" },
      { label: "Moralité", value: "Extrait de casier judiciaire couvrant les dix dernières années, de moins de six mois" },
      { label: "Personnes à charge", value: "Conjoint ou concubin et enfants à charge" },
      { label: "Résidence permanente", value: "Éligible pour demander un permis de résidence permanente de 20 ans après cinq ans, avec des transferts cumulés d'au moins 200 000 USD sur les cinq années précédant la demande" },
    ],
    sections: [
      { heading: "À qui il convient", body: [
        "Un couple retraité ou semi-retraité, ou une personne seule, qui veut une base stable à Maurice sans acheter de bien pour l'obtenir. C'est la voie de résidence la plus souple pour toute personne de plus de 50 ans, et c'est souvent la bonne réponse pour ceux qui s'informent d'abord sur les programmes immobiliers en croyant que c'est la seule porte d'entrée.",
      ] },
      { heading: "Fiscalité et transfert", body: [
        "Un titulaire qui passe 183 jours ou plus à Maurice au cours d'une année fiscale y devient résident fiscal. Maurice impose les revenus de source étrangère sur la base du rapatriement et dispose d'un réseau de conventions de non-double imposition, qui déterminent ensemble le traitement des pensions, dividendes et revenus locatifs de l'étranger. La position dépend du pays d'origine du titulaire et de la convention en vigueur avec lui. Les demandeurs doivent également déclarer leurs autres résidences, y compris fiscales, que l'EDB partage avec la Mauritius Revenue Authority dans le cadre de la Norme commune de déclaration.",
        "Nous ne sommes pas conseillers fiscaux et ne délivrons pas d'avis fiscaux. Lorsque la position compte, et c'est généralement le cas, nous introduisons un spécialiste fiscal mauricien avant le dépôt de la demande, pour que la décision de s'installer soit prise en toute connaissance de cause.",
      ] },
      { heading: "Ce que comporte la demande", body: [
        "Preuve de fonds à l'étranger, extrait de casier judiciaire, documents d'état civil et dossier personnel. L'approbation est donnée en principe, l'examen médical est effectué à Maurice, et le demandeur se présente en personne pour la délivrance. Le premier transfert est effectué après la délivrance du permis.",
      ] },
    ],
    related: [
      { label: "Résidence par l'immobilier", href: "/residency/property-acquisition" },
      { label: "Premium Visa", href: "/residency/premium-visa" },
      { label: "Conciergerie", href: "/concierge" },
    ],
    metaTitle: "Permis de résidence Retraité non-citoyen à Maurice | start.mu",
    metaDescription: "Le permis de résidence Retraité non-citoyen à Maurice pour les 50 ans et plus : 24 000 USD par an transférés de l'étranger, validité de dix ans, résidence fiscale et voie vers la résidence permanente.",
    index: { audience: "Personnes seules et couples de 50 ans et plus", threshold: "24 000 USD par an de l'étranger", duration: "10 ans" },
  },
  "property-acquisition": {
    title: "Résidence par acquisition immobilière",
    summary: "Acheter dans un programme agréé au-delà du seuil et obtenir la résidence.",
    intro:
      "Un non-citoyen qui achète un bien résidentiel dans un programme agréé par l'EDB pour au moins 375 000 USD est éligible à un permis de résidence tant qu'il détient le bien. Le permis couvre le conjoint et les enfants à charge de l'acheteur et le dispense de permis de travail ou d'occupation.",
    facts: [
      { label: "Prix d'achat minimum", value: "375 000 USD, ou l'équivalent en devise convertible au cours vendeur en vigueur à la date de signature de l'acte" },
      { label: "Programmes éligibles", value: "Integrated Resort Scheme, Real Estate Scheme, Invest Hotel Scheme, Property Development Scheme, Smart City Scheme, et appartements à usage résidentiel dans des immeubles d'au moins deux étages au-dessus du rez-de-chaussée" },
      { label: "Validité", value: "Tant que le titulaire est propriétaire du bien" },
      { label: "Travail", value: "Le titulaire est dispensé de l'obligation de détenir un permis de travail ou d'occupation" },
      { label: "Personnes à charge", value: "Conjoint ou concubin et enfants à charge" },
      { label: "En dessous du seuil", value: "Les achats inférieurs à 375 000 USD dans un programme agréé sont permis mais ne donnent pas droit à un permis de résidence" },
    ],
    sections: [
      { heading: "À qui il convient", body: [
        "Un acheteur qui a de toute façon décidé de posséder un logement à Maurice, et pour qui le permis de résidence est une conséquence de cette décision plutôt que son but. Le permis est lié à l'actif ; ce n'est donc pas la bonne voie pour quelqu'un qui veut d'abord la résidence et préférerait louer.",
      ] },
      { heading: "L'acquisition elle-même", body: [
        "L'achat suit une séquence définie : réservation, demande d'autorisation d'acquérir auprès de l'EDB, acte notarié et enregistrement. Les achats sur plan sous contrat VEFA ajoutent un niveau supplémentaire, avec des paiements échelonnés liés aux étapes de la construction et une garantie financière du promoteur. Nous en traitons en détail dans la section Immobilier, et nous agissons pour l'acheteur tout au long, aux côtés du notaire.",
      ] },
      { heading: "Le permis", body: [
        "Une fois l'acte signé et l'acquisition enregistrée par l'EDB, le permis de résidence est demandé via l'EDB et délivré par le Passport and Immigration Office. Il reste valable tant que le bien est détenu et s'éteint à la vente, sauf si le titulaire s'est entre-temps qualifié par une autre voie.",
      ] },
    ],
    related: [
      { label: "Vue d'ensemble de l'immobilier", href: "/property" },
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Achat sur plan et VEFA", href: "/property/off-plan-vefa" },
      { label: "Domestic Company avec un trust", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Permis de résidence par acquisition immobilière à Maurice | start.mu",
    metaDescription: "La résidence à Maurice par l'immobilier : seuil de 375 000 USD, programmes EDB éligibles, déroulement de l'acquisition et portée du permis.",
    index: { audience: "Acheteurs dans un programme agréé", threshold: "375 000 USD d'achat", duration: "Tant que le bien est détenu" },
  },
  "golden-visa": {
    title: "Golden Visa",
    summary: "Une nouvelle voie pour les familles fortunées engageant 1 million USD en douze mois.",
    intro:
      "Le Golden Visa est un visa à entrées multiples pour les personnes fortunées et leurs proches à charge, approuvé par le Conseil des ministres en avril 2026 et introduit par les mesures du Budget 2026-27. Un titulaire qui investit 1 million USD à Maurice dans les douze mois suivant la délivrance devient éligible pour demander un permis de résidence permanente de vingt ans. L'éligibilité n'est pas l'octroi : la demande est appréciée au fond, et l'achèvement de l'investissement ne convertit pas le visa automatiquement.",
    status:
      "Le cadre a été adopté dans son principe, mais les lignes directrices de l'EDB et l'entrée en vigueur du dispositif restent à finaliser. Nous suivons ces lignes directrices de près et confirmerons les exigences applicables avant d'accepter tout mandat.",
    facts: [
      { label: "Engagement d'investissement", value: "1 million USD, investis dans les douze mois suivant la délivrance, confirmés par un engagement écrit lors de la demande" },
      { label: "Investissement éligible", value: "Toute activité économique autre que l'acquisition d'un bien résidentiel sous les programmes immobiliers de l'EDB. Les secteurs mis en avant sont la fintech, l'intelligence artificielle, la biotechnologie, les énergies renouvelables et la trésorerie internationale" },
      { label: "Permis initial", value: "Jusqu'à deux ans, entrées multiples, renouvelable" },
      { label: "À l'achèvement de l'investissement", value: "Éligible pour demander un permis de résidence permanente de 20 ans. Pas une conversion automatique" },
      { label: "Personnes à charge", value: "Conjoint et enfants à charge" },
      { label: "Objectif de traitement", value: "Cinq jours ouvrables, annoncés par le Premier ministre" },
      { label: "Volume attendu", value: "Environ 100 bénéficiaires par an" },
    ],
    sections: [
      { heading: "À qui il convient", body: [
        "Une famille disposant de capitaux à déployer, qui veut s'installer rapidement à Maurice et détenir un permis long qui ne soit lié ni à la possession d'un logement ni à la gestion quotidienne d'une entreprise. Le Golden Visa ne confère pas, à lui seul, le droit de travailler à Maurice ; l'attente est un investissement dans des secteurs éligibles plutôt qu'un emploi.",
        "Il se situe entre les voies existantes. Il exige plus de capital que le permis Investisseur ou le seuil immobilier, mais il permet, à l'issue de la première année, de demander une résidence permanente de vingt ans et laisse au titulaire le choix de l'investissement.",
      ] },
      { heading: "Diligence raisonnable", body: [
        "Les demandes passeront par l'EDB avec un contrôle interagences impliquant la Financial Crimes Commission, la Financial Intelligence Unit, la Financial Services Commission, la Banque de Maurice et le Passport and Immigration Office. L'origine des fonds et l'origine du patrimoine seront examinées sérieusement. Nous préparons ce dossier au niveau qu'appliqueront ces agences, en nous appuyant sur la pratique de conformité du groupe.",
      ] },
      { heading: "Logement pendant la période initiale", body: [
        "Le cadre prévoit que les titulaires résident à l'hôtel ou dans un bien résidentiel déjà ouvert aux acheteurs étrangers pendant que l'investissement est réalisé, afin de ne pas peser sur le marché local du logement. Les biens résidentiels sous les programmes de l'EDB restent accessibles aux titulaires du Golden Visa comme résidence, mais ne comptent pas dans le million USD.",
      ] },
      { heading: "Notre rôle", body: [
        "Nous conseillons sur le choix entre le Golden Visa et une voie existante, préparons la demande et le dossier de diligence, structurons l'entité réceptrice de l'investissement lorsqu'elle est nécessaire et gérons le volet conciergerie de l'installation. Dès la publication des lignes directrices de l'EDB, nous présenterons ici l'ensemble des exigences documentaires.",
      ] },
    ],
    related: [
      { label: "Permis Investisseur", href: "/residency/investor-permit" },
      { label: "Résidence par l'immobilier", href: "/residency/property-acquisition" },
      { label: "Résidence permanente", href: "/residency/permanent-residence" },
      { label: "Conciergerie", href: "/concierge" },
    ],
    metaTitle: "Golden Visa de Maurice | start.mu",
    metaDescription: "Le Golden Visa de Maurice : 1 million USD investis en douze mois, un permis de deux ans à entrées multiples et l'éligibilité à une résidence permanente de vingt ans. État actuel et ce qu'il faut attendre.",
    index: { audience: "Familles fortunées", threshold: "1 million USD en 12 mois", duration: "2 ans, puis éligible pour demander une RP de 20 ans" },
  },
  "premium-visa": {
    title: "Premium Visa",
    summary: "Un visa de long séjour pour les travailleurs à distance et ceux qui testent Maurice avant de s'engager.",
    intro:
      "Le Premium Visa permet à un non-citoyen de séjourner à Maurice jusqu'à un an, renouvelable, en travaillant à distance pour un employeur ou des clients hors de Maurice, ou en tant que retraité vivant de revenus de l'étranger. Ce n'est pas un permis de résidence, mais c'est souvent la bonne première étape.",
    facts: [
      { label: "Validité", value: "Jusqu'à un an, renouvelable" },
      { label: "Qui peut demander", value: "Travailleurs à distance, professionnels du numérique, retraités et visiteurs de long séjour dont les revenus proviennent de l'extérieur de Maurice" },
      { label: "Revenus", value: "Preuve de moyens suffisants, l'EDB indiquant 1 500 USD par mois pour le demandeur principal et des montants supplémentaires pour les enfants accompagnants" },
      { label: "Travail", value: "Aucun emploi auprès d'un employeur mauricien et aucun accès au marché du travail local" },
      { label: "Fiscalité", value: "Les revenus dépensés à Maurice via des cartes ou comptes étrangers ne sont pas considérés comme rapatriés ; la résidence fiscale intervient à 183 jours" },
      { label: "Coût", value: "Aucun frais de demande" },
    ],
    sections: [
      { heading: "À qui il convient", body: [
        "Quelqu'un qui veut vivre à Maurice avant de décider de s'y établir, ou qui n'a pas besoin de s'établir du tout parce que son travail se fait en ligne pour des clients ailleurs. C'est aussi une position d'attente sensée pour une famille qui arrive avant une demande d'Occupation Permit, ou pendant qu'un achat immobilier se finalise.",
      ] },
      { heading: "Du Premium Visa à la résidence", body: [
        "Le visa peut être converti depuis Maurice. Un travailleur à distance qui constitue ensuite une société et demande un permis Investisseur ou Indépendant, ou un titulaire de plus de 50 ans qui passe au permis Retraité non-citoyen, n'a pas besoin de quitter le pays pour le faire. Nous planifions la séquence dès le départ pour que le temps passé sous Premium Visa ne soit pas perdu.",
      ] },
      { heading: "Ce que comporte la demande", body: [
        "La demande se fait en ligne auprès de l'EDB avec un passeport, la preuve du séjour envisagé et du logement, la preuve de revenus provenant de l'extérieur de Maurice, et une couverture voyage et santé. L'approbation est généralement rapide. Nous la traitons dans le cadre d'une installation plus large plutôt que comme un service isolé.",
      ] },
    ],
    related: [
      { label: "Permis Indépendant", href: "/residency/self-employed-permit" },
      { label: "Permis Retraité non-citoyen", href: "/residency/retired-residence-permit" },
      { label: "Conciergerie", href: "/concierge" },
    ],
    metaTitle: "Premium Visa de Maurice | start.mu",
    metaDescription: "Le Premium Visa de Maurice pour les travailleurs à distance et les visiteurs de long séjour : validité d'un an renouvelable, conditions de revenus, traitement fiscal et passage à un permis de résidence.",
    index: { audience: "Travailleurs à distance et visiteurs de long séjour", threshold: "Revenus de l'étranger", duration: "1 an, renouvelable" },
  },
  dependents: {
    title: "Personnes à charge et famille",
    summary: "Qui peut accompagner un titulaire de permis, et à quelles conditions.",
    intro:
      "Chaque Occupation Permit et permis de résidence s'étend à la famille proche du titulaire par un permis de personne à charge. Ce permis suit celui du titulaire principal et prend fin avec lui.",
    facts: [
      { label: "Conjoint", value: "Un conjoint ou un concubin de sexe opposé, avec un certificat de mariage ou un certificat de concubinage" },
      { label: "Enfants", value: "Enfants à charge non mariés de 24 ans au plus, y compris les beaux-enfants et les enfants légalement adoptés" },
      { label: "Parents", value: "Les parents du titulaire principal" },
      { label: "Travail", value: "Les personnes à charge ne peuvent exercer aucune activité rémunérée. Une personne à charge qui souhaite travailler demande son propre Occupation Permit ou un permis de travail" },
      { label: "Autorité", value: "Le Passport and Immigration Office statue sur les demandes de personnes à charge" },
      { label: "Family Occupation Permit", value: "L'ancienne catégorie Family Occupation Permit a été supprimée par le Budget 2026-27" },
    ],
    sections: [
      { heading: "Séquence", body: [
        "Les demandes des personnes à charge sont déposées une fois le permis principal délivré. En pratique, nous préparons leurs dossiers en parallèle de la demande principale pour qu'ils soient déposés immédiatement après la délivrance, et que les permis de la famille soient délivrés ensemble dans un court délai.",
      ] },
      { heading: "Scolarité et aspects pratiques", body: [
        "Les enfants à charge ont besoin de places à l'école, et les bonnes écoles de Maurice se remplissent tôt. Notre service de conciergerie gère les introductions auprès des écoles, la couverture médicale et les arrangements domestiques qui font que l'installation fonctionne pour toute la famille, et pas seulement pour le titulaire du permis.",
      ] },
    ],
    related: [
      { label: "Conciergerie", href: "/concierge" },
      { label: "Comparer toutes les voies", href: "/residency" },
    ],
    metaTitle: "Permis de personnes à charge à Maurice | start.mu",
    metaDescription: "Qui peut accompagner un titulaire d'Occupation Permit ou de permis de résidence à Maurice : conjoint, enfants et parents, séquence des demandes et arrangements pratiques pour les familles.",
  },
  "permanent-residence": {
    title: "Résidence permanente",
    summary: "Le permis de vingt ans, et les voies qui y mènent.",
    intro:
      "Un permis de résidence permanente est délivré pour vingt ans et libère le titulaire des conditions attachées à un Occupation Permit ou à un permis de résidence. Il s'obtient en respectant des seuils soutenus sous un permis existant ou, une fois le dispositif opérationnel, en réalisant l'investissement du Golden Visa.",
    facts: [
      { label: "Validité", value: "20 ans, renouvelable" },
      { label: "Investisseur", value: "Cinq ans de permis, avec un chiffre d'affaires annuel d'au moins 15 millions MUR chacune de ces années ou un chiffre d'affaires cumulé de 75 millions MUR sur les cinq ans" },
      { label: "Professionnel", value: "Cinq ans d'Occupation Permit ou de permis de travail, avec un salaire de base mensuel d'au moins 400 000 MUR pendant cinq années consécutives" },
      { label: "Indépendant", value: "Cinq ans de permis, avec un revenu annuel d'au moins 3 millions MUR chaque année ou un revenu cumulé de 15 millions MUR sur les cinq ans" },
      { label: "Retraité non-citoyen", value: "Cinq ans de permis, avec des transferts cumulés d'au moins 200 000 USD sur les cinq ans" },
      { label: "Délai", value: "La demande doit être faite au plus tard six mois après que les critères sont remplis" },
      { label: "Depuis un Golden Visa", value: "À l'achèvement de l'investissement de 1 million USD dans les douze mois" },
      { label: "Personnes à charge", value: "Le conjoint et les enfants à charge peuvent être inclus" },
    ],
    sections: [
      { heading: "Le préparer dès le départ", body: [
        "Les seuils de la résidence permanente se mesurent sur cinq années consécutives, pas à un instant donné, et ils sont nettement plus élevés que ceux du permis lui-même. Le chiffre d'affaires déclaré de l'investisseur, le salaire de base du professionnel et le revenu déclaré de l'indépendant comptent tous, année après année, et la fenêtre de demande se ferme six mois après que les critères sont remplis. Nous traçons la voie dès la première consultation pour que les décisions de l'année 1 ne ferment pas la porte en année 5.",
      ] },
      { heading: "Ce que cela change", body: [
        "Un résident permanent n'est plus soumis aux conditions annuelles du permis d'origine. Un investisseur, un professionnel ou un indépendant titulaire d'un permis de résidence permanente peut ensuite le faire réémettre dans la catégorie Retraité non-citoyen pour la durée restante, en justifiant d'un revenu annuel disponible de 40 000 USD. Pour une famille installée, c'est le moment où Maurice cesse d'être un permis et devient un chez-soi.",
      ] },
    ],
    related: [
      { label: "Permis Investisseur", href: "/residency/investor-permit" },
      { label: "Golden Visa", href: "/residency/golden-visa" },
      { label: "Permis Retraité non-citoyen", href: "/residency/retired-residence-permit" },
    ],
    metaTitle: "Permis de résidence permanente à Maurice | start.mu",
    metaDescription: "Le permis de résidence permanente de vingt ans à Maurice : quels permis y mènent, les seuils mesurés dans le temps, et ce qui change une fois obtenu.",
  },
  "technical-occupation-permit": {
    title: "Occupation Permit Technique",
    summary: "Une nouvelle catégorie pour les professionnels étrangers recrutés dans le cadre d'accords entre gouvernements.",
    intro:
      "Le Budget 2026-27 a introduit une catégorie Technique d'Occupation Permit dans le cadre du programme Work and Live, pour faciliter le recrutement de professionnels étrangers par des accords de gouvernement à gouvernement. L'EDB a examiné le cadre opérationnel et intègre ce permis à ses systèmes.",
    status:
      "Les critères d'éligibilité et les lignes directrices de l'Occupation Permit Technique n'ont pas encore été publiés par l'EDB. Cette page les présentera dès leur publication. Dans l'intervalle, un professionnel disposant d'un employeur mauricien fait sa demande dans la catégorie Professionnel.",
    facts: [
      { label: "Introduit par", value: "Le Budget 2026-27, dans le cadre du programme Work and Live" },
      { label: "Objet", value: "Recrutement stratégique de professionnels étrangers par des accords de gouvernement à gouvernement" },
      { label: "Statut", value: "Cadre opérationnel examiné par le conseil de l'EDB à la mi-2026 ; lignes directrices attendues" },
      { label: "Alternative actuelle", value: "L'Occupation Permit Professionnel, avec un salaire de base minimum de 50 000 MUR par mois" },
    ],
    sections: [
      { heading: "Ce que l'on sait", body: [
        "Le Budget a décrit cette catégorie comme un moyen de recrutement stratégique dans le cadre d'accords entre gouvernements, ce qui suggère qu'elle vise les secteurs où l'État a convenu de faire venir du personnel technique en nombre, plutôt que des demandeurs individuels. On ne sait pas encore si des professionnels individuels ou des employeurs privés pourront y recourir.",
      ] },
      { heading: "Que faire maintenant", body: [
        "Si vous êtes un professionnel avec une offre d'un employeur mauricien, le permis Professionnel est la voie, et elle est disponible dès aujourd'hui. Si vous êtes un employeur ou un organisme sectoriel envisageant un accord de gouvernement à gouvernement, nous pouvons vous conseiller sur le cadre au fur et à mesure de sa publication par l'EDB.",
      ] },
    ],
    related: [
      { label: "Permis Professionnel", href: "/residency/professional-permit" },
      { label: "Comparer toutes les voies", href: "/residency" },
    ],
    metaTitle: "Occupation Permit Technique à Maurice | start.mu",
    metaDescription: "Le nouvel Occupation Permit Technique de Maurice introduit par le Budget 2026-27 pour le recrutement entre gouvernements : ce que l'on sait, l'état actuel et la voie disponible aujourd'hui.",
  },
};

export const faqsFr: Record<string, Faq[]> = {
  "professional-permit": [
    { q: "Puis-je détenir des parts de la société qui m'emploie ?", a: "Oui, à condition de ne pas en être l'actionnaire majoritaire. Vous pouvez aussi investir dans d'autres entreprises, à condition de ne pas y être employé et de n'en tirer ni salaire ni avantages." },
    { q: "Qu'advient-il de mon permis si je change d'emploi ?", a: "Le permis est lié à l'employeur. Un passage à une autre société exige un nouveau permis sous le nouvel employeur, et l'ancien est annulé. Il existe une période limitée pendant laquelle vous pouvez rester à Maurice pour trouver un nouvel emploi, à condition d'effectuer les bonnes démarches rapidement après la fin de l'ancien contrat." },
    { q: "Le seuil de 50 000 MUR s'applique-t-il à mon permis actuel ?", a: "Un professionnel déjà titulaire d'un permis délivré sous l'ancien critère de 30 000 MUR reste éligible à un renouvellement sur cette base. Les nouvelles demandes sont évaluées à 50 000 MUR." },
    { q: "Mon employeur peut-il être une société que je détiens avec mon conjoint ?", a: "Oui, et c'est une structure courante aux côtés d'un permis Investisseur détenu par l'autre conjoint. Le salaire doit être réel, versé mensuellement et déclaré, et vous ne pouvez pas être l'actionnaire majoritaire de l'employeur." },
  ],
  "self-employed-permit": [
    { q: "Ai-je besoin d'une société ?", a: "Non. Le permis s'adresse à une personne enregistrée comme entreprise en son nom propre, ou exploitant une société unipersonnelle. Si vous prévoyez d'embaucher des professionnels ou de contracter au nom d'une société, la voie Investisseur est la meilleure fondation." },
    { q: "Puis-je employer quelqu'un ?", a: "Un employé administratif local. Le permis ne vous permet pas d'employer d'autres professionnels dans l'activité elle-même." },
    { q: "Qu'entend-on par secteur des services ?", a: "Conseil, design, logiciel, médias, coaching, accompagnement et activités similaires où vous vendez votre propre temps et votre savoir-faire. Le négoce de marchandises, la fabrication et l'hôtellerie ne sont pas éligibles dans cette catégorie." },
    { q: "Et si mon revenu n'atteint pas 2 millions MUR en année 3 ?", a: "Le seuil est contrôlé et un manque peut entraîner une radiation. Il vaut mieux être réaliste dès le départ : si le revenu projeté est juste, la voie Investisseur avec une société, ou le Premium Visa le temps que l'activité se construise, peut être la séquence la plus sûre." },
  ],
  "innovator-permit": [
    { q: "N'y a-t-il vraiment aucun investissement minimum ?", a: "Aucun pour la voie des start-ups innovantes. La demande est jugée sur le projet et l'équipe, et l'obligation après délivrance est de rendre compte des progrès chaque année et de démontrer un produit minimum viable à la fin de l'année 5." },
    { q: "Qu'est-ce que l'EDB considère comme innovant ?", a: "Il n'y a pas de liste fixe. Les projets en technologie, fintech, biotech, énergies renouvelables, données et IA sont les candidats typiques. Un projet enregistré auprès d'un incubateur accrédité par le Mauritius Research and Innovation Council a du poids, et une entreprise classique avec un site web ne se qualifie pas." },
    { q: "Puis-je passer ensuite au permis Investisseur standard ?", a: "Oui. Un titulaire qui lève des fonds ou atteint le seuil de 100 000 USD peut demander l'Option 1, et les obligations de rapport de la voie innovateur disparaissent." },
  ],
  "retired-residence-permit": [
    { q: "Dois-je acheter un bien ?", a: "Non. Le permis repose sur le transfert de 24 000 USD par an de l'étranger, et vous pouvez louer ou acheter à votre guise. Beaucoup de ceux qui s'informent d'abord sur les programmes immobiliers finissent sur cette voie." },
    { q: "Puis-je travailler ?", a: "Pas au titre du permis lui-même. Vous pouvez investir dans une entreprise comme actionnaire à condition de ne pas y être employé. Un emploi dans certains secteurs est possible avec un permis de travail ou un Occupation Permit distinct." },
    { q: "Mon conjoint doit-il avoir plus de 50 ans ?", a: "Non. Un conjoint ou partenaire de moins de 50 ans est inclus comme personne à charge. Seul le demandeur principal doit avoir 50 ans ou plus." },
    { q: "Deviendrai-je résident fiscal à Maurice ?", a: "Si vous passez 183 jours ou plus à Maurice au cours d'une année fiscale, oui. Maurice impose les revenus étrangers sur la base du rapatriement et a des conventions avec de nombreux pays d'origine, de sorte que le traitement d'une pension ou de revenus de placement dépend de leur source et de la convention en vigueur. Nous introduisons un spécialiste fiscal mauricien avant la demande lorsque cela compte." },
    { q: "Le transfert doit-il être mensuel ?", a: "Soit 2 000 USD par mois, soit 24 000 USD par an, après un premier versement de 2 000 USD dans les 60 jours suivant la délivrance. La plupart des clients transfèrent annuellement." },
  ],
  "property-acquisition": [
    { q: "Quels programmes sont éligibles ?", a: "Integrated Resort Scheme, Real Estate Scheme, Invest Hotel Scheme, Property Development Scheme, Smart City Scheme, et un appartement à usage résidentiel dans un immeuble d'au moins deux étages au-dessus du rez-de-chaussée. Dans tous les cas, le prix d'achat doit être d'au moins 375 000 USD." },
    { q: "Puis-je acheter pour moins de 375 000 USD ?", a: "Oui, dans les programmes, mais l'achat ne donne pas droit à un permis de résidence. Les acheteurs sous le seuil qui veulent vivre à Maurice combinent l'achat avec une autre voie, le plus souvent le permis Retraité non-citoyen ou un Occupation Permit." },
    { q: "Puis-je travailler avec ce permis ?", a: "Oui. Le titulaire est dispensé de l'obligation de détenir un permis de travail ou d'occupation." },
    { q: "Que se passe-t-il si je vends ?", a: "Le permis est lié au bien et s'éteint à la vente. Un titulaire qui compte vendre et rester doit se qualifier par une autre voie avant la signature." },
    { q: "Puis-je détenir le bien via une société ou un trust ?", a: "Oui. Une Domestic Company mauricienne peut acquérir un bien sous programme et ses parts peuvent être détenues en trust. Le permis de résidence peut être obtenu via la structure, sous réserve des conditions de l'EDB. La structure doit être en place avant l'acte." },
  ],
  "golden-visa": [
    { q: "Le Golden Visa est-il disponible maintenant ?", a: "Le cadre a été approuvé par le Conseil des ministres en avril 2026 et introduit par les mesures budgétaires, mais les lignes directrices de l'EDB et l'entrée en vigueur du dispositif restent à finaliser. Nous confirmerons les exigences applicables avant d'accepter tout mandat." },
    { q: "L'achat d'un logement compte-t-il dans le million USD ?", a: "Non. Les biens résidentiels sous les programmes de l'EDB sont exclus de l'investissement éligible. Vous pouvez acheter un logement sous les programmes en plus de celui-ci." },
    { q: "Puis-je travailler à Maurice avec le Golden Visa ?", a: "Le visa ne confère pas, à lui seul, le droit de travailler. L'attente est un investissement dans des secteurs éligibles plutôt qu'un emploi." },
    { q: "Comment se compare-t-il au permis Investisseur ?", a: "Il exige dix fois plus de capital mais ouvre la voie à une demande de résidence permanente de vingt ans après la première année, plutôt qu'à un permis de dix ans assorti de conditions de chiffre d'affaires. Le permis Investisseur convient à celui qui dirigera une entreprise ; le Golden Visa à celui qui déploiera des capitaux." },
  ],
  "premium-visa": [
    { q: "Puis-je passer du Premium Visa à un permis de résidence sans quitter Maurice ?", a: "Oui. Un titulaire qui constitue ensuite une société et demande un permis Investisseur ou Indépendant, ou qui a plus de 50 ans et passe au permis Retraité non-citoyen, peut le faire depuis Maurice." },
    { q: "Puis-je travailler pour une société mauricienne ?", a: "Non. Le visa vise le travail effectué à distance pour un employeur ou des clients hors de Maurice. Un emploi auprès d'un employeur mauricien exige un Occupation Permit ou un permis de travail." },
    { q: "Serai-je imposé à Maurice ?", a: "Les revenus dépensés à Maurice via des cartes ou comptes étrangers ne sont pas considérés comme rapatriés. La résidence fiscale intervient à 183 jours au cours d'une année fiscale, et le traitement des revenus étrangers à partir de là dépend de la base du rapatriement et de toute convention avec le pays d'origine." },
    { q: "Ma famille peut-elle m'accompagner ?", a: "Oui. Le conjoint et les enfants peuvent être inclus, avec des justificatifs de moyens supplémentaires pour chacun." },
  ],
  dependents: [
    { q: "Mon conjoint à charge peut-il travailler ?", a: "Pas avec un permis de personne à charge. Un conjoint qui souhaite travailler demande son propre Occupation Permit ou un permis de travail." },
    { q: "Jusqu'à quel âge mes enfants peuvent-ils être inclus ?", a: "Les enfants à charge non mariés de 24 ans au plus, y compris les beaux-enfants et les enfants légalement adoptés." },
    { q: "Puis-je faire venir mes parents ?", a: "Oui. Les parents du titulaire principal sont éligibles comme personnes à charge." },
    { q: "Un partenaire non marié est-il éligible ?", a: "Un concubin de sexe opposé est éligible, avec une preuve de vie commune." },
  ],
  "permanent-residence": [
    { q: "Quand puis-je faire la demande ?", a: "Après cinq ans de permis, à condition que les seuils de votre catégorie aient été atteints chacune de ces années, et au plus tard six mois après qu'ils sont remplis." },
    { q: "Les seuils sont-ils les mêmes que pour le permis lui-même ?", a: "Non. Ils sont nettement plus élevés : 15 millions MUR de chiffre d'affaires annuel pour un investisseur, 400 000 MUR par mois pour un professionnel, 3 millions MUR par an pour un indépendant, et 200 000 USD de transferts cumulés pour un retraité. La préparation commence en année 1." },
    { q: "Le Golden Visa mène-t-il plus vite à la résidence permanente ?", a: "Potentiellement. La réalisation de l'investissement de 1 million USD dans les douze mois rend le titulaire éligible pour demander le permis de vingt ans, une fois le dispositif opérationnel. C'est une voie d'éligibilité, non un octroi automatique." },
  ],
};
