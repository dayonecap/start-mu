import type { Locale } from "@/lib/i18n";

/** Copy for the route finder. The decision logic lives in components/RouteFinder.tsx. */
export type FinderStrings = {
  title: string;
  lead: string;
  metaTitle: string;
  meta: string;
  progress: (n: number, total: number) => string;
  startAgain: string;
  back: string;
  change: string;
  answersLabel: string;
  theRoute: string;
  readAbout: string;
  arrange: string;
  alongside: string;
  disclaimer: string;
  q: {
    purpose: { text: string; options: [string, string][] };
    over50: { text: string; options: [string, string][] };
    capital: { text: string; options: [string, string][] };
    horizon: { text: string; options: [string, string][] };
  };
  links: Record<"premium" | "property" | "retired" | "investorAfterPlan" | "selfEmployed" | "investorGrowth" | "investorIfDirect", { title: string; note: string }>;
  r: {
    premiumFirst: { title: string; why: string[] };
    employed: { title: string; why: string[] };
    retiredOver50: { title: string; why: string[] };
    premiumThen50: { title: string; why: string[] };
    remote: { title: string; why: string[] };
    propertyResidency: { title: string; why: string[] };
    homeBelow: { titleOver50: string; titleUnder50: string; why0: string; whyOver50: string; whyUnder50: string };
    golden: { title: string; why: string[] };
    passive: { titleOver50: string; titleUnder50: string; why: string[] };
    innovator: { title: string; why: string[] };
    selfEmployedOrInvestor: { title: string; why: string[] };
    investor: { title: string; why: string[] };
  };
};

export const finder: Record<Locale, FinderStrings> = {
  en: {
    title: "Which route fits",
    lead: "Four questions. No exact figures or email required. You get the best starting route, the reasons, and the page to read next.",
    metaTitle: "Which Mauritius residency route fits you",
    meta: "Four questions, one recommended route. Investor, professional, self-employed, retired, property, Golden Visa or Premium Visa, with the reasons.",
    progress: (n, total) => `Question ${n} of ${total}`,
    startAgain: "Start again",
    back: "Back",
    change: "Change",
    answersLabel: "Your answers",
    theRoute: "Your best starting route",
    readAbout: "Read about this route",
    arrange: "Request a consultation",
    alongside: "Worth reading alongside",
    disclaimer:
      "A starting point, not advice. We confirm it against your circumstances in the first consultation, where the decision is actually made, and occasionally a different route turns out to fit better.",
    q: {
      purpose: {
        text: "What will you mainly do in Mauritius?",
        options: [
          ["business", "Own and run a business here"],
          ["employed", "Work for a Mauritian employer"],
          ["remote", "Work remotely for clients or an employer abroad"],
          ["retire", "Retire, living on income from abroad"],
          ["capital", "Invest capital, without running a business day to day"],
          ["home", "Buy a home and live in it"],
        ],
      },
      over50: { text: "Are you 50 or over?", options: [["yes", "Yes"], ["no", "No"]] },
      capital: {
        text: "Roughly how much are you prepared to commit at the outset?",
        options: [
          ["under50", "Under USD 50,000"],
          ["50to100", "USD 50,000 to 100,000"],
          ["100to375", "USD 100,000 to 375,000"],
          ["375to1m", "USD 375,000 to 1 million"],
          ["over1m", "USD 1 million or more"],
        ],
      },
      horizon: {
        text: "Are you settling now, or living here first to decide?",
        options: [
          ["settle", "Settling now"],
          ["test", "Living here first, then deciding"],
        ],
      },
    },
    links: {
      premium: { title: "Premium Visa", note: "A year in Mauritius, renewable, before committing to a permit." },
      property: { title: "Residency by property", note: "If you decide to buy at USD 375,000 or above, the purchase carries residence while you hold it." },
      retired: { title: "Retired Non-Citizen permit", note: "Ten years on transfers of USD 24,000 a year, no property required." },
      investorAfterPlan: { title: "Investor permit", note: "The route to move to once the business plan is settled." },
      selfEmployed: { title: "Self-Employed permit", note: "Ten years, services sector, income conditions from Year 3." },
      investorGrowth: { title: "Investor permit", note: "Ten years, a Mauritian company, turnover conditions from Year 3." },
      investorIfDirect: { title: "Investor permit", note: "If you would in fact direct a Mauritian company." },
    },
    r: {
      premiumFirst: {
        title: "Premium Visa first",
        why: [
          "You want to live in Mauritius before committing, and the Premium Visa allows up to a year, renewable, for anyone whose income arises outside Mauritius.",
          "It can be converted to a permit from within Mauritius, so the time is not wasted when you decide.",
        ],
      },
      employed: {
        title: "Professional Occupation Permit",
        why: [
          "You will be employed by a Mauritian company, which applies on your behalf.",
          "The permit runs for the length of the contract, up to ten years, and covers your family.",
        ],
      },
      retiredOver50: {
        title: "Retired Non-Citizen Residence Permit",
        why: [
          "You are over 50 and will live on income from abroad, which is exactly what the permit is for.",
          "No property purchase is required; the condition is USD 24,000 a year transferred into a Mauritian bank.",
        ],
      },
      premiumThen50: {
        title: "Premium Visa, then a permit at 50",
        why: [
          "The Retired Non-Citizen permit requires the main applicant to be 50 or over.",
          "Until then, the Premium Visa allows a year at a time on income from abroad, or residency through a property purchase at USD 375,000 or above.",
        ],
      },
      remote: {
        title: "Premium Visa, or Self-Employed permit if you will stay",
        why: [
          "Working remotely for clients or an employer abroad is what the Premium Visa is designed for, a year at a time.",
          "If you intend to settle and your work is in services, the Self-Employed permit at USD 50,000 gives ten years.",
        ],
      },
      propertyResidency: {
        title: "Residency by property acquisition",
        why: [
          "A purchase in an approved scheme at USD 375,000 or above carries a residence permit for as long as you hold the property.",
          "The permit covers your spouse and dependent children and exempts you from needing a work permit.",
        ],
      },
      homeBelow: {
        titleOver50: "Retired Non-Citizen permit, and buy separately",
        titleUnder50: "A permit first, then the home",
        why0: "Below USD 375,000 a purchase in an approved scheme is permitted but does not carry a residence permit.",
        whyOver50: "Over 50, the Retired Non-Citizen permit secures residence without a property condition, and you buy on your own timetable.",
        whyUnder50: "Residence comes from an Occupation Permit or the Premium Visa; the home follows.",
      },
      golden: {
        title: "Golden Visa, once operational",
        why: [
          "USD 1 million invested within twelve months makes you eligible to apply for a twenty-year permanent residence permit, without the obligation to run a business. Approval is not automatic.",
          "The EDB's guidelines are still awaited; until then the Investor permit or residence through property are the working alternatives.",
        ],
      },
      passive: {
        titleOver50: "Retired Non-Citizen permit",
        titleUnder50: "Residency by property, or the Investor permit",
        why: [
          "The Golden Visa starts at USD 1 million. Below that, the passive routes are residence through a property purchase at USD 375,000 or above, or, over 50, the Retired Non-Citizen permit.",
          "The Investor permit requires USD 100,000 but assumes you will run the business; it is not a passive route.",
        ],
      },
      innovator: {
        title: "Innovator route, if the project qualifies",
        why: [
          "The Investor permit requires USD 100,000 and the Self-Employed permit USD 50,000.",
          "The innovative start-up route under the Investor category has no minimum investment, for a project submitted to the EDB or registered with an accredited incubator.",
        ],
      },
      selfEmployedOrInvestor: {
        title: "Self-Employed permit, or Investor if the business will grow",
        why: [
          "USD 50,000 meets the Self-Employed threshold for a one-person services practice.",
          "If the plan is a company with staff and contracts in its own name, the Investor permit at USD 100,000 is the right foundation and worth reaching for.",
        ],
      },
      investor: {
        title: "Investor Occupation Permit",
        why: [
          "You will own and run a Mauritian company, which is what the permit is for.",
          "USD 100,000 into the company's account, ten years' validity, and your family as dependents.",
        ],
      },
    },
  },

  fr: {
    title: "Quelle voie vous convient",
    lead: "Quatre questions. Aucun montant exact ni aucune adresse e-mail ne sont requis. Vous obtenez le meilleur point de départ, les raisons, et la page à lire ensuite.",
    metaTitle: "Quelle voie de résidence à Maurice vous convient",
    meta: "Quatre questions, une voie recommandée. Investisseur, professionnel, indépendant, retraité, immobilier, Golden Visa ou Premium Visa, avec les raisons.",
    progress: (n, total) => `Question ${n} sur ${total}`,
    startAgain: "Recommencer",
    back: "Retour",
    change: "Modifier",
    answersLabel: "Vos réponses",
    theRoute: "Votre meilleur point de départ",
    readAbout: "En savoir plus sur cette voie",
    arrange: "Prendre rendez-vous",
    alongside: "À lire également",
    disclaimer:
      "Un point de départ, non un conseil. Nous le confirmons au regard de votre situation lors du premier entretien, où la décision se prend réellement, et il arrive qu'une autre voie se révèle plus adaptée.",
    q: {
      purpose: {
        text: "Que ferez-vous principalement à Maurice ?",
        options: [
          ["business", "Détenir et diriger une entreprise ici"],
          ["employed", "Travailler pour un employeur mauricien"],
          ["remote", "Travailler à distance pour des clients ou un employeur à l'étranger"],
          ["retire", "Prendre votre retraite, en vivant de revenus de l'étranger"],
          ["capital", "Investir, sans diriger une entreprise au quotidien"],
          ["home", "Acheter un logement et y vivre"],
        ],
      },
      over50: { text: "Avez-vous 50 ans ou plus ?", options: [["yes", "Oui"], ["no", "Non"]] },
      capital: {
        text: "Quel montant êtes-vous prêt à engager au départ, approximativement ?",
        options: [
          ["under50", "Moins de 50 000 USD"],
          ["50to100", "De 50 000 à 100 000 USD"],
          ["100to375", "De 100 000 à 375 000 USD"],
          ["375to1m", "De 375 000 USD à 1 million"],
          ["over1m", "1 million USD ou plus"],
        ],
      },
      horizon: {
        text: "Souhaitez-vous vous installer maintenant ou commencer par vivre à Maurice avant de décider ?",
        options: [
          ["settle", "Je m'installe maintenant"],
          ["test", "Vivre ici d'abord, puis décider"],
        ],
      },
    },
    links: {
      premium: { title: "Premium Visa", note: "Une année à Maurice, renouvelable, avant de s'engager sur un permis." },
      property: { title: "Résidence par l'immobilier", note: "Si vous décidez d'acheter à partir de 375 000 USD, l'acquisition ouvre la résidence tant que vous détenez le bien." },
      retired: { title: "Permis Retired Non-Citizen", note: "Dix ans sur des transferts de 24 000 USD par an, sans obligation d'achat." },
      investorAfterPlan: { title: "Permis Investisseur", note: "La voie vers laquelle basculer une fois le plan d'affaires arrêté." },
      selfEmployed: { title: "Permis Self-Employed", note: "Dix ans, secteur des services, conditions de revenus à partir de la troisième année." },
      investorGrowth: { title: "Permis Investisseur", note: "Dix ans, une société mauricienne, conditions de chiffre d'affaires à partir de la troisième année." },
      investorIfDirect: { title: "Permis Investisseur", note: "Si vous dirigez effectivement une société mauricienne." },
    },
    r: {
      premiumFirst: {
        title: "Le Premium Visa d'abord",
        why: [
          "Vous souhaitez vivre à Maurice avant de vous engager, et le Premium Visa autorise jusqu'à un an, renouvelable, pour toute personne dont les revenus naissent hors de Maurice.",
          "Il peut être converti en permis depuis Maurice : le temps passé n'est donc pas perdu au moment de décider.",
        ],
      },
      employed: {
        title: "Occupation Permit Professionnel",
        why: [
          "Vous serez employé par une société mauricienne, qui dépose la demande pour vous.",
          "Le permis court pour la durée du contrat, jusqu'à dix ans, et couvre votre famille.",
        ],
      },
      retiredOver50: {
        title: "Permis de résidence Retired Non-Citizen",
        why: [
          "Vous avez plus de 50 ans et vivrez de revenus provenant de l'étranger, ce qui correspond exactement à l'objet du permis.",
          "Aucun achat immobilier n'est requis ; la condition est de 24 000 USD par an transférés sur un compte bancaire mauricien.",
        ],
      },
      premiumThen50: {
        title: "Le Premium Visa, puis un permis à 50 ans",
        why: [
          "Le permis Retired Non-Citizen exige que le demandeur principal ait 50 ans ou plus.",
          "D'ici là, le Premium Visa autorise une année à la fois sur des revenus de l'étranger, ou la résidence par une acquisition immobilière à partir de 375 000 USD.",
        ],
      },
      remote: {
        title: "Le Premium Visa, ou le permis Self-Employed si vous restez",
        why: [
          "Travailler à distance pour des clients ou un employeur à l'étranger est précisément l'objet du Premium Visa, une année à la fois.",
          "Si vous comptez vous installer et que votre activité relève des services, le permis Self-Employed à 50 000 USD offre dix ans.",
        ],
      },
      propertyResidency: {
        title: "La résidence par acquisition immobilière",
        why: [
          "Une acquisition dans un programme agréé à partir de 375 000 USD ouvre un permis de résidence tant que vous détenez le bien.",
          "Le permis couvre votre conjoint et vos enfants à charge et vous dispense de détenir un permis de travail.",
        ],
      },
      homeBelow: {
        titleOver50: "Le permis Retired Non-Citizen, et l'achat séparément",
        titleUnder50: "Un permis d'abord, le logement ensuite",
        why0: "En dessous de 375 000 USD, une acquisition dans un programme agréé est permise mais n'ouvre pas de permis de résidence.",
        whyOver50: "Au-delà de 50 ans, le permis Retired Non-Citizen assure la résidence sans condition immobilière, et vous achetez à votre propre rythme.",
        whyUnder50: "La résidence vient d'un Occupation Permit ou du Premium Visa ; le logement suit.",
      },
      golden: {
        title: "Le Golden Visa, une fois opérationnel",
        why: [
          "Un million de dollars investi dans les douze mois vous rend éligible pour demander un permis de résidence permanente de vingt ans, sans obligation de diriger une entreprise. L'octroi n'est pas automatique.",
          "Les lignes directrices de l'EDB sont encore attendues ; d'ici là, le permis Investisseur ou la résidence par l'immobilier sont les solutions praticables.",
        ],
      },
      passive: {
        titleOver50: "Permis Retired Non-Citizen",
        titleUnder50: "La résidence par l'immobilier, ou le permis Investisseur",
        why: [
          "Le Golden Visa commence à 1 million USD. En dessous, les voies passives sont la résidence par une acquisition à partir de 375 000 USD ou, au-delà de 50 ans, le permis Retired Non-Citizen.",
          "Le permis Investisseur exige 100 000 USD mais suppose que vous dirigiez l'entreprise ; ce n'est pas une voie passive.",
        ],
      },
      innovator: {
        title: "La voie Innovateur, si le projet est éligible",
        why: [
          "Le permis Investisseur exige 100 000 USD et le permis Self-Employed 50 000 USD.",
          "La voie des start-up innovantes, au sein de la catégorie Investisseur, ne comporte aucun investissement minimum, pour un projet soumis à l'EDB ou enregistré auprès d'un incubateur accrédité.",
        ],
      },
      selfEmployedOrInvestor: {
        title: "Le permis Self-Employed, ou Investisseur si l'activité doit croître",
        why: [
          "50 000 USD atteignent le seuil du permis Self-Employed pour une pratique de services exercée seul.",
          "Si le projet est une société avec des salariés et des contrats en son nom propre, le permis Investisseur à 100 000 USD est la bonne fondation et mérite l'effort.",
        ],
      },
      investor: {
        title: "Occupation Permit Investisseur",
        why: [
          "Vous détiendrez et dirigerez une société mauricienne, ce qui correspond à l'objet du permis.",
          "100 000 USD sur le compte de la société, dix ans de validité, et votre famille comme personnes à charge.",
        ],
      },
    },
  },

  de: {
    title: "Welche Aufenthaltsmöglichkeit passt",
    lead: "Vier Fragen. Keine genauen Zahlen und keine E-Mail-Adresse erforderlich. Sie erhalten den besten Ausgangspunkt, die Gründe und die Seite, die als Nächstes zu lesen ist.",
    metaTitle: "Welche Aufenthaltsmöglichkeit auf Mauritius zu Ihnen passt",
    meta: "Vier Fragen, eine Empfehlung. Investor, Angestellter, Selbstständiger, Ruheständler, Immobilie, Golden Visa oder Premium Visa, mit den Gründen.",
    progress: (n, total) => `Frage ${n} von ${total}`,
    startAgain: "Neu beginnen",
    back: "Zurück",
    change: "Ändern",
    answersLabel: "Ihre Antworten",
    theRoute: "Ihr bester Ausgangspunkt",
    readAbout: "Mehr zu dieser Aufenthaltsmöglichkeit lesen",
    arrange: "Beratungsgespräch vereinbaren",
    alongside: "Ergänzend lesenswert",
    disclaimer:
      "Ein Ausgangspunkt, keine Beratung. Wir gleichen das Ergebnis im ersten Gespräch mit Ihrer persönlichen Situation ab, wo die Entscheidung tatsächlich fällt, und gelegentlich passt eine andere Aufenthaltsmöglichkeit besser.",
    q: {
      purpose: {
        text: "Was werden Sie auf Mauritius hauptsächlich tun?",
        options: [
          ["business", "Ein Unternehmen hier besitzen und führen"],
          ["employed", "Für einen mauritischen Arbeitgeber arbeiten"],
          ["remote", "Aus der Ferne für Kunden oder einen Arbeitgeber im Ausland arbeiten"],
          ["retire", "Den Ruhestand verbringen, von Einkünften aus dem Ausland"],
          ["capital", "Kapital anlegen, ohne ein Unternehmen täglich zu führen"],
          ["home", "Ein Zuhause kaufen und darin leben"],
        ],
      },
      over50: { text: "Sind Sie 50 Jahre oder älter?", options: [["yes", "Ja"], ["no", "Nein"]] },
      capital: {
        text: "Wie viel wollen Sie zu Beginn ungefähr einsetzen?",
        options: [
          ["under50", "Unter 50.000 USD"],
          ["50to100", "50.000 bis 100.000 USD"],
          ["100to375", "100.000 bis 375.000 USD"],
          ["375to1m", "375.000 USD bis 1 Million"],
          ["over1m", "1 Million USD oder mehr"],
        ],
      },
      horizon: {
        text: "Ziehen Sie jetzt zu, oder leben Sie erst hier, um zu entscheiden?",
        options: [
          ["settle", "Ich ziehe jetzt zu"],
          ["test", "Erst hier leben, dann entscheiden"],
        ],
      },
    },
    links: {
      premium: { title: "Premium Visa", note: "Ein Jahr auf Mauritius, verlängerbar, bevor Sie sich auf eine Genehmigung festlegen." },
      property: { title: "Aufenthalt durch Immobilienerwerb", note: "Wenn Sie ab 375.000 USD kaufen, trägt der Erwerb den Aufenthalt, solange Sie die Immobilie halten." },
      retired: { title: "Genehmigung für Ruheständler", note: "Zehn Jahre auf Überweisungen von 24.000 USD im Jahr, ohne Immobilienpflicht." },
      investorAfterPlan: { title: "Investor Permit", note: "Die Aufenthaltsmöglichkeit, auf die Sie wechseln, sobald der Geschäftsplan steht." },
      selfEmployed: { title: "Self-Employed Permit", note: "Zehn Jahre, Dienstleistungssektor, Einkommensbedingungen ab dem dritten Jahr." },
      investorGrowth: { title: "Investor Permit", note: "Zehn Jahre, eine mauritische Gesellschaft, Umsatzbedingungen ab dem dritten Jahr." },
      investorIfDirect: { title: "Investor Permit", note: "Wenn Sie eine mauritische Gesellschaft tatsächlich leiten würden." },
    },
    r: {
      premiumFirst: {
        title: "Zuerst das Premium Visa",
        why: [
          "Sie möchten auf Mauritius leben, bevor Sie sich festlegen, und das Premium Visa erlaubt bis zu einem Jahr, verlängerbar, für alle, deren Einkünfte außerhalb von Mauritius entstehen.",
          "Es lässt sich von Mauritius aus in eine Genehmigung umwandeln, sodass die Zeit nicht verloren ist, wenn Sie sich entscheiden.",
        ],
      },
      employed: {
        title: "Occupation Permit für Angestellte",
        why: [
          "Sie werden bei einer mauritischen Gesellschaft angestellt sein, die den Antrag für Sie stellt.",
          "Die Genehmigung läuft für die Dauer des Vertrags, bis zu zehn Jahre, und erfasst Ihre Familie.",
        ],
      },
      retiredOver50: {
        title: "Aufenthaltsgenehmigung für Ruheständler",
        why: [
          "Sie sind über 50 und werden von Einkünften aus dem Ausland leben, wofür diese Genehmigung genau gedacht ist.",
          "Ein Immobilienkauf ist nicht erforderlich; die Bedingung sind 24.000 USD im Jahr, überwiesen auf ein mauritisches Bankkonto.",
        ],
      },
      premiumThen50: {
        title: "Premium Visa, dann mit 50 eine Genehmigung",
        why: [
          "Die Genehmigung für Ruheständler setzt voraus, dass der Hauptantragsteller 50 Jahre oder älter ist.",
          "Bis dahin erlaubt das Premium Visa jeweils ein Jahr auf Einkünfte aus dem Ausland, oder den Aufenthalt über einen Immobilienerwerb ab 375.000 USD.",
        ],
      },
      remote: {
        title: "Premium Visa, oder Self-Employed Permit, wenn Sie bleiben",
        why: [
          "Aus der Ferne für Kunden oder einen Arbeitgeber im Ausland zu arbeiten ist genau das, wofür das Premium Visa gedacht ist, jeweils für ein Jahr.",
          "Wenn Sie sich niederlassen wollen und Ihre Arbeit im Dienstleistungsbereich liegt, gibt das Self-Employed Permit mit 50.000 USD zehn Jahre.",
        ],
      },
      propertyResidency: {
        title: "Aufenthalt durch Immobilienerwerb",
        why: [
          "Ein Erwerb in einem zugelassenen Programm ab 375.000 USD begründet einen Anspruch auf eine Aufenthaltsgenehmigung, solange Sie die Immobilie halten.",
          "Die Genehmigung umfasst auch Ehepartner und unterhaltsberechtigte Kinder und befreit Sie davon, eine Arbeitsgenehmigung zu benötigen.",
        ],
      },
      homeBelow: {
        titleOver50: "Genehmigung für Ruheständler, und getrennt davon kaufen",
        titleUnder50: "Erst die Genehmigung, dann das Zuhause",
        why0: "Unter 375.000 USD ist ein Erwerb in einem zugelassenen Programm zulässig, trägt aber keine Aufenthaltsgenehmigung.",
        whyOver50: "Über 50 sichert die Genehmigung für Ruheständler den Aufenthalt ohne Immobilienbedingung, und Sie kaufen nach Ihrem eigenen Zeitplan.",
        whyUnder50: "Der Aufenthalt kommt aus einem Occupation Permit oder dem Premium Visa; das Zuhause folgt.",
      },
      golden: {
        title: "Golden Visa, sobald es läuft",
        why: [
          "Eine Million USD, innerhalb von zwölf Monaten investiert, berechtigt Sie, ein zwanzigjähriges Permanent Residence Permit zu beantragen, ohne die Pflicht, ein Unternehmen zu führen. Die Erteilung erfolgt nicht automatisch.",
          "Die Richtlinien des EDB stehen noch aus; bis dahin sind das Investor Permit oder der Aufenthalt über eine Immobilie die praktikablen Alternativen.",
        ],
      },
      passive: {
        titleOver50: "Genehmigung für Ruheständler",
        titleUnder50: "Aufenthalt durch Immobilienerwerb, oder das Investor Permit",
        why: [
          "Das Golden Visa beginnt bei 1 Million USD. Darunter kommen als passive Aufenthaltsmöglichkeiten der Aufenthalt über einen Immobilienerwerb ab 375.000 USD oder, über 50, die Genehmigung für Ruheständler.",
          "Das Investor Permit verlangt 100.000 USD, setzt aber voraus, dass Sie das Unternehmen führen; es ist keine passive Aufenthaltsmöglichkeit.",
        ],
      },
      innovator: {
        title: "Occupation Permit für Innovatoren, wenn das Projekt qualifiziert",
        why: [
          "Das Investor Permit verlangt 100.000 USD und das Self-Employed Permit 50.000 USD.",
          "Die Aufenthaltsmöglichkeit für innovative Start-ups innerhalb der Kategorie Investor kennt keine Mindestinvestition, für ein Projekt, das dem EDB vorgelegt oder bei einem akkreditierten Inkubator registriert ist.",
        ],
      },
      selfEmployedOrInvestor: {
        title: "Self-Employed Permit, oder Investor, wenn das Geschäft wachsen soll",
        why: [
          "50.000 USD erreichen die Schwelle des Self-Employed Permit für eine Ein-Personen-Dienstleistungspraxis.",
          "Wenn eine Gesellschaft mit Angestellten und Verträgen im eigenen Namen geplant ist, ist das Investor Permit mit 100.000 USD das richtige Fundament und die Anstrengung wert.",
        ],
      },
      investor: {
        title: "Occupation Permit der Kategorie Investor",
        why: [
          "Sie werden eine mauritische Gesellschaft besitzen und führen, wofür diese Genehmigung gedacht ist.",
          "100.000 USD auf das Konto der Gesellschaft, zehn Jahre Gültigkeit, und Ihre Familie als Familienangehörige.",
        ],
      },
    },
  },
};
