import type { Insight } from "@/lib/cms";


/**
 * Launch articles held in the repository.
 * When a headless CMS is connected, lib/cms.ts reads from it instead and this file can be removed.
 */
export const insights: Insight[] = [
  {
    slug: "guide-to-moving-to-mauritius-edition-2026-09",
    title: "The start.mu Guide to Moving to Mauritius: edition 2026.09",
    summary: "A versioned reference to every rule that matters for a move, verified on 12 September 2026 against the EDB guidelines and the Finance Act 2026, with each figure dated, sourced and marked by how well it is confirmed.",
    publishedAt: "2026-09-12",
    category: "Living in Mauritius",
    body: `
<p>Most published guides to moving to Mauritius are now wrong. The 2025-26 Budget changed the retired permit, the self-employed threshold and the permanent-residence test; the 2026-27 Budget and the Finance Act 2026 then doubled the investor threshold, merged the professional categories, abolished the Family Occupation Permit, repealed the doubling of registration duty before it took effect, and replaced the Fair Share Contribution with a 35% band. We audited twenty-five guides in September 2026. Nearly all of them, including several dated 2026, still carry at least one of the old figures.</p>
<p>So we have written the reference we wanted to hand to clients: <a href="/guide">The start.mu Guide to Moving to Mauritius</a>. It is versioned, with the edition and the verification date at the top and a change log that sets the old rule beside the current one. Every figure carries a marker for how well it is confirmed and a number that resolves to a source list. It covers the eight residence routes by situation, the application and renewal obligations that catch people out, property and tax with worked examples, what it costs to live here in rupees, and the sections on schools, healthcare, banking, cars, shipping and pets that a family actually needs.</p>
<p>It is rewritten after each National Budget. The next scheduled review follows the 2027-28 Budget in June 2027. If you find a figure that has moved before then, write to us with the section number and a source, and the correction is logged in the guide itself.</p>
`,
  },
  {
    slug: "cost-of-living-mauritius-family",
    title: "What it costs to live in Mauritius: a realistic budget for a relocating family",
    summary: "Mauritius is not the cheap island the brochures imply. Where the money goes for a family arriving in 2026, with the ranges that matter and the choices that move them.",
    publishedAt: "2026-03-10",
    reviewedAt: "2026-09-08",
    category: "Living in Mauritius",
    body: `
<p>The most common misconception we correct is that Mauritius is inexpensive. For a family that replicates a European or South African way of life, with a coastal house, imported groceries, international school and private healthcare, it is not. The figures below are indicative ranges from 2026 and are there to size the decision, not to replace a proper budget. They move with the exchange rate, the area and the choices a family makes.</p>
<p><strong>Housing.</strong> Rent is the largest line and the most variable. A modern two-bedroom apartment in the north around Grand Baie sits in the range of MUR 35,000 to 70,000 a month. A family house with three or more bedrooms and a pool in the north or west runs from roughly USD 2,000 to 5,000 a month, and the large villas in the estates go well beyond that. Ten minutes inland from the coast, in Pamplemousses or Triolet, the same money buys considerably more. Rentals are almost always furnished, and a deposit of one to two months plus an agency fee is paid before arrival.</p>
<p><strong>Schooling.</strong> The second line for a family with children, and the one that most often surprises. Annual fees at the English-medium international schools range from around MUR 180,000 in the early years to over MUR 600,000 at the top of secondary, depending on the school. A family with two children at secondary level should budget MUR 700,000 to 1,200,000 a year in tuition alone, before the enrolment fee, the school bus and the extras. There is a separate note on choosing a school.</p>
<p><strong>Healthcare.</strong> Public hospitals are free to residents but most families use the private clinics, paying at the point of service. A private GP consultation is in the range of MUR 1,000 to 3,000. Insurance is where the real cost sits: a basic local plan from around MUR 2,000 to 4,000 a month per person, and an international plan with evacuation cover from around USD 200 to 500 a month. The evacuation element is the part not to economise on.</p>
<p><strong>Groceries and utilities.</strong> Local produce, fish and rice are inexpensive; imported goods carry duty and cost noticeably more than at home. A single person cooking at home spends around MUR 10,000 to 15,000 a month on food; a family two to three times that, more if the trolley is full of imported brands. Electricity, water and internet for a household come to a few thousand rupees a month, rising sharply in summer if the air conditioning runs all night.</p>
<p><strong>Transport.</strong> A car is a necessity outside the towns, and cars are expensive because of import duty. Budget for that purchase, and for fuel, at the outset. Public transport exists but is not how a relocating family will get to school.</p>
<p><strong>What you get for it.</strong> A personal tax regime that tops out at 20% on chargeable income up to MUR 12 million and 35% above it from 1 July 2026, a remittance basis for foreign income, no capital gains tax, no wealth tax, no inheritance tax. Safety. Domestic help at wages that are low by European standards. Winter that does not happen. Most families who do the sums honestly find that the total is comparable to a mid-sized European city, and that what they are paying for is the life rather than the discount.</p>
`,
    faqs: [
      { q: "Is it cheaper to buy than to rent?", a: "Over a long horizon, often, and a purchase at USD 375,000 or above in an approved scheme carries a residence permit. But we advise every family to rent for the first year. Where you think you want to live and where you actually want to live are frequently different places." },
      { q: "How much should we budget for the move itself?", a: "Two exploratory trips, shipping or replacing furniture, deposits on the house and the school, the car, and the professional fees for the permit and the company. Together these usually exceed what families expect, and they fall in the first three months." },
      { q: "Do costs differ much between the north, the west and the centre?", a: "Yes. The north coast is the most expensive for housing, the west is close behind, and the centre around Moka is markedly cheaper for the same house while being nearer the schools and offices. Inland villages five to ten minutes from the coast are cheaper again." },
    ],
  },
  {
    slug: "international-schools-mauritius-choosing",
    title: "Choosing a school in Mauritius: curricula, areas, fees and timing",
    summary: "The school decides where you live, not the other way round. The English, French and IB options on the island, what they cost, and why the application should start before the permit does.",
    publishedAt: "2026-02-17",
    category: "Living in Mauritius",
    body: `
<p>Every relocating family we work with is told the same thing at the first meeting: choose the school before the house. The island is small but the traffic is not, and a daily run from the wrong coast to the right school is the single most common reason families move house within a year of arriving.</p>
<p><strong>Three systems.</strong> English-medium schools follow the British curriculum through Cambridge IGCSE and A-Levels, several also offering the International Baccalaureate; French schools follow the French national curriculum to the baccalauréat, homologated by the French Ministry, and one offers the IB Diploma in the final years; and the Mauritian state schools, which are free and bilingual but rarely chosen by relocating families. For British or South African university entry, A-Levels and the IB are equally accepted. For a family that may move again, the curriculum they are already in is usually the right one to stay in.</p>
<p><strong>Where the schools are.</strong> The north has the largest and most established English-medium school at Mapou, taking children from 18 months to 18, along with a well-regarded primary in the same village and a French school. The west has an English-medium secondary near Flic en Flac and a growing primary and secondary offer around Tamarin. The central plateau, around Moka, has the second of the two large English-medium secondaries, another IB school, and the main French lycée and école. The east and south have far fewer options and families there accept long commutes.</p>
<p><strong>Fees.</strong> The English-medium schools charge by year group, and the jump at secondary is steep. Published 2025-26 fees at the largest school run from around MUR 161,700 a year in the early years to MUR 608,300 in the final years. The Moka secondary charges around MUR 32,000 to 35,000 a month over eleven months. Enrolment fees of MUR 10,000 to 30,000 and a school bus at MUR 18,000 to 40,000 a year come on top, and sibling discounts of 7.5% to 15% are common. The French schools are less expensive. Fees are reviewed annually, so confirm the current figures with the school before budgeting.</p>
<p><strong>Timing.</strong> The good schools have waiting lists in the year groups families most often arrive into, particularly the first years of primary and the first year of secondary. Six to twelve months' notice is normal, and longer is safer. That means the school application starts before the permit application, not after it, and the enrolment deposit is often the first money spent on the move.</p>
<p><strong>What we do.</strong> Introduce the family to the two or three schools that fit the children's ages and the curriculum they are in, arrange visits during an exploratory trip, manage the admissions correspondence, and align the offer date with the permit timetable so that the place is held until the family can take it up.</p>
`,
    faqs: [
      { q: "Do our children need French?", a: "Not for the English-medium schools, which teach in English and offer French as a subject. The French-curriculum schools require French from an early stage. Most children pick up conversational French and Creole quickly regardless." },
      { q: "Can we visit before deciding?", a: "Yes, and you should. An exploratory trip during term time, with school visits and the school run driven at rush hour, is the best investment a family makes before relocating." },
      { q: "Is boarding available?", a: "Limited. Mauritius is a day-school island. Families on the east or south coast sometimes use weekly boarding arrangements, but most choose to live near the school." },
    ],
  },
  {
    slug: "healthcare-mauritius-what-to-arrange",
    title: "Healthcare in Mauritius: what is here, what is not, and what to arrange before you arrive",
    summary: "Good private clinics, a free public system most residents avoid, and a small number of conditions that are treated abroad. Why evacuation cover is the one clause that matters.",
    publishedAt: "2026-04-23",
    category: "Living in Mauritius",
    body: `
<p>Mauritius has a two-tier system. The public hospitals are free to residents, handle the majority of the island's care, and are crowded. The private clinics are where relocating families go, and they are good: doctors trained in France, the United Kingdom, India and South Africa, modern equipment, short waits, and English and French spoken throughout.</p>
<p><strong>The clinics to know.</strong> The two full-service private hospitals are in the centre of the island: the C-Care group's Wellkin Hospital at Moka, the largest and most modern with an intensive care unit and a 24-hour emergency department, and Clinique Darné at Floréal, long established with maternity and intensive care. There are private clinics in the north at Grand Baie and along the coast road, and a network of registered laboratories for the tests the permit requires. From Tamarin or Grand Baie, the Moka hospitals are around twenty to thirty minutes without traffic.</p>
<p><strong>What is treated abroad.</strong> The island is small and some specialisms do not have the volume to exist here. Advanced oncology, complex cardiac surgery and major neurosurgery are commonly referred to South Africa, Réunion or France. This is not a failing of the system; it is a consequence of a population of 1.3 million. But it has one direct implication for a relocating family: the health insurance must include medical evacuation and treatment abroad, and that clause is the one to read before signing.</p>
<p><strong>Insurance.</strong> Two routes. Local insurers offer plans from around MUR 2,000 to 4,000 a month per person for private consultations, hospitalisation and medication in Mauritius, usually without evacuation. International insurers offer plans from around USD 200 to 500 a month per person with worldwide cover and evacuation included. Many families combine a local plan for day-to-day care with international cover for the serious case. Check how the policy treats pre-existing conditions, whether dependents are covered on an employer's plan, and whether the clinic you would use has a direct billing agreement with the insurer.</p>
<p><strong>Everyday health.</strong> Pharmacies are well stocked and many medicines are available over the counter at reasonable prices; specific brand-name treatments should be checked for availability before the move. The tap water is treated but most households filter it. Dengue and chikungunya circulate in the summer months and the mosquito is the one animal to take seriously; malaria is effectively absent. Cyclone season runs from November into April, with the formal warning period extending to mid-May, and the clinics remain open through it.</p>
<p><strong>What we arrange.</strong> The medical examination the permit requires, at a registered clinic, timed to the application. Introductions to a GP, a paediatrician and a dentist near where the family will live. And the insurance conversation before arrival rather than after, because the evacuation clause is easier to get right on paper than in an emergency.</p>
`,
    faqs: [
      { q: "Is the public system usable in an emergency?", a: "For acute trauma, yes: the public accident and emergency departments stabilise well. The usual pattern is stabilisation in the nearest hospital and transfer to a private clinic for ongoing care, which is why the insurer's number should be in your phone." },
      { q: "Can we keep our existing international policy?", a: "Often, if it covers Mauritius and includes evacuation. Check whether the insurer treats Mauritius as your country of residence rather than a travel destination, since that changes the terms." },
      { q: "Are the permit medical tests demanding?", a: "No. A set of standard blood tests, a chest x-ray and a certificate from a registered practitioner in Mauritius. Three of the tests must be done locally; the rest can be done before travel. We book them." },
    ],
  },
  {
    slug: "where-to-live-mauritius-north-west-centre",
    title: "Where to live in Mauritius: north, west or centre",
    summary: "Three regions account for almost every relocating family. What each one is like to live in, who chooses it, and the commute that decides between them.",
    publishedAt: "2026-05-19",
    reviewedAt: "2026-09-08",
    category: "Living in Mauritius",
    body: `
<p>Mauritius is 65 kilometres from top to bottom, and yet where a family lives shapes their year more than in most larger countries. The reason is the road network: a single motorway spine through Port Louis, and coastal roads that fill at school time. The three regions below account for almost every family we settle, and the choice between them is usually decided by the school and the office rather than by the beach.</p>
<p><strong>The north.</strong> Grand Baie and the coast around it, from Trou aux Biches to Pereybere and Cap Malheureux, has the largest concentration of foreign residents on the island. The reasons are practical: the largest international school at Mapou, a French school, two private clinics, the marina, supermarkets with imported ranges, restaurants and shops in one strip, and a high density of scheme developments, of which Mont Choisy Golf &amp; Beach Estate is the best known. The cost is the price of housing, which is the highest on the island, and the traffic, which has grown with the population. Families who want to walk to things, and who work from home or in the north, choose it. Ten minutes inland, Pamplemousses and Triolet offer the same schools at lower rents, and the gated estates around Piton, among them Domaine de Bon Espoir, suit families who want greener surroundings with the motorway close by.</p>
<p><strong>The west.</strong> Tamarin, Black River and Flic en Flac, with the mountains behind and the lagoon in front. Drier and warmer than the north and sheltered from the trade winds, though development has accelerated along this coast, so it is more relaxed in character than uniformly quiet. La Balise Marina at Black River is the island's one true marina address, where a berth sits at the end of the garden. with the island's surfing, kitesurfing and hiking on the doorstep and a tightly knit community of long-term residents. There is an English-medium secondary near Flic en Flac and a growing school offer in Tamarin, and Port Louis is nearer than it is from Grand Baie. Summers are hot, and the road north to the Mapou schools takes twenty-five minutes on a good day. Families who want the outdoors and a slower pace choose it; so do retirees.</p>
<p><strong>The centre.</strong> Moka and the plateau around it, with Ebene's office district, the two main private hospitals, the second large English-medium secondary, an IB school and the French lycée within a few minutes of each other. The Smart City developments have made it a residential choice rather than a place to commute to. It is cooler and wetter than the coast, and the sea is twenty to thirty minutes away in any direction. Rents are markedly lower than on the coast for the same house. Families with children of secondary age and a parent working in Ebene or Port Louis increasingly choose it, and the commute is the reason.</p>
<p><strong>The east and south.</strong> Beautiful, less developed and cheaper, with a handful of large resort estates. Few schools and long drives to the ones that exist. Chosen by families without school-age children and by buyers in a specific estate.</p>
<p>We name these estates because clients ask about them by name, not because we act for anyone selling in them. We act for buyers only, take no commission from developers or sellers, and any view we give on a particular scheme is given with the buyer's position in mind.</p>
<p><strong>How to decide.</strong> Find the school. Find the office, if there is one. Drive between them and the candidate houses at eight in the morning on a school day. Then choose. We arrange exploratory trips around exactly that exercise, with viewings in two regions and the school run driven at the hour that matters.</p>
`,
    faqs: [
      { q: "Is Grand Baie overpriced?", a: "For what you get in some pockets, yes, and long-term residents will say so. It is paying for convenience. If the convenience matters to your family, it is worth it; if it does not, look inland or west." },
      { q: "Which region has the best weather?", a: "The west, which is drier and more sheltered. The north is warm and windier. The centre is cooler and wetter, which some families prefer in summer and others do not." },
      { q: "Are the gated estates worth it?", a: "For security, community and services, often yes, and for a non-citizen buying property they are frequently the only option. For renting, a house in a village can offer more space for the money at the cost of some convenience." },
    ],
  },
  {
    slug: "bringing-pets-to-mauritius",
    title: "Bringing a dog or cat to Mauritius",
    summary: "Mauritius is rabies-free and guards that status closely. What the import process involves, how long it takes, and why it should start before the permit application.",
    publishedAt: "2026-04-07",
    category: "Living in Mauritius",
    body: `
<p>Mauritius is free of rabies and intends to stay so, which makes bringing a pet one of the longer lead items in a relocation. It is entirely doable, and many families do it, but the timeline is set by blood tests and waiting periods rather than by paperwork, and a family that starts late can find the dog arriving months after they do.</p>
<p><strong>Who decides.</strong> Imports of live animals are regulated by the Livestock and Veterinary Division of the Ministry of Agro-Industry, which issues an import permit for each animal and publishes the current guidelines for dogs and cats. Only animals from countries the Ministry classifies as rabies-free or rabies-controlled are admitted, and an animal from a high-risk country will not be.</p>
<p><strong>What the animal needs.</strong> A microchip. A current rabies vaccination, given after the chip and within the validity window the guidelines set. A rabies antibody titration test at an approved laboratory, showing a result of at least 0.5 IU/ml, taken within a defined window before travel; the guidelines currently frame this as not less than three months and not more than twelve months before shipment, and some origin countries, South Africa among them, are asked for two tests three months apart. The usual vaccinations against distemper, parvovirus and the feline equivalents. Parasite treatment. Sterilisation, in most cases. A health certificate from an official veterinarian in the country of departure shortly before the flight.</p>
<p><strong>On arrival.</strong> The import permit must be in hand before the animal travels, the veterinary officer notified of the flight, and the animal goes into quarantine at the government station. The length depends on the country of origin and the animal's history; sources quote anything from five days to a month, so plan for the longer figure and be pleased if it is shorter. Owners may visit and are expected to provide food and bedding.</p>
<p><strong>The timeline.</strong> Because of the titration test and the period that must elapse after it, the realistic lead time from a standing start is four to six months, and longer for an animal that has never been vaccinated. Families who arrive on an exploratory trip in the spring and move in the autumn should start the pet's file before the trip.</p>
<p><strong>Flights.</strong> Direct services from Johannesburg, Paris, London and Dubai avoid the transit problems that trip up pet travel. Dogs above cabin size travel as cargo in a pressurised hold, and the specialist pet shipping companies in South Africa and Europe handle the crate, the airline and the veterinary endorsement. We introduce one as part of the relocation.</p>
<p>The requirements above are as published at the time of writing. The Ministry revises them, and we confirm the current guideline and the classification of the country of origin at the time a family instructs us.</p>
`,
    faqs: [
      { q: "Can we bring a puppy or kitten?", a: "Not on the mother's vaccinations. The first rabies vaccination is given at twelve weeks and the export process starts from there, so a young animal will be several months old before it can travel." },
      { q: "Are any breeds restricted?", a: "Mauritius restricts certain dog breeds. Check the current list with the Livestock and Veterinary Division before assuming a particular dog can come." },
      { q: "Does the pet affect our own permit?", a: "No. The two processes are separate, but they should be planned together, because the pet's timeline is often the longer one." },
    ],
  },
  {
    slug: "buying-off-plan-mauritius-vefa-checklist",
    title: "Buying off-plan in Mauritius: what to check before you sign a VEFA",
    summary: "Most new homes sold to foreign buyers in Mauritius are sold before they are built. The protection is real, but it is decided at signature. Five things to examine first.",
    publishedAt: "2026-08-04",
    category: "Property",
    body: `
<p>A sale in a future state of completion, a VEFA, is how most scheme property in Mauritius changes hands. The buyer signs a deed before a notary while the building is a drawing, pays in stages as it rises, and relies on a bank guarantee to see it finished if the developer cannot. The system works. But the buyer's protection is fixed on the day of signature, and we have acted for enough buyers in stalled developments to know that the difference between a recoverable position and a difficult one is almost always in the deed.</p>
<p><strong>Who issued the completion guarantee, and what does it cover.</strong> The garantie financière d'achèvement is the heart of a VEFA. Ask for the guarantee itself, not a reference to it. Identify the issuing bank or insurer. Read what triggers it, what it pays for, and whether it covers completion of the building or only repayment of what you have paid. A guarantee from an institution you have never heard of, or one that is capped below the contract price, is a warning.</p>
<p><strong>Does the payment schedule follow the building.</strong> The stages should be tied to physical milestones a third party can verify: foundations, structure, roof, completion, handover. A schedule front-loaded towards signature, or one that calls for payment on "commencement of works" without defining it, shifts risk to the buyer. Compare the schedule in the deed with the one in the brochure. They are not always the same.</p>
<p><strong>What the developer has finished before.</strong> A developer with three completed projects on the island is a different proposition from one whose first project this is, however good the renderings. Ask which developments they have delivered, when, and whether on time. Visit one. Speak to an owner there. The notary will not do this for you.</p>
<p><strong>The delivery date and what happens if it slips.</strong> The deed will give a delivery date and, usually, a list of events that excuse delay. Read the list. If it excuses almost anything, the date means little. Look for a daily or monthly penalty for late delivery and check whether it is capped. A penalty clause with no cap and a short excuse list tells you the developer expects to finish.</p>
<p><strong>The structure you are buying through.</strong> If the unit will be held through a Mauritian company, and the company through a trust, that structure must exist before the deed and must be acceptable to the bank issuing the guarantee, the notary and the Economic Development Board. Setting it up after reservation and before the deed is routine. Setting it up after the deed is a second transaction.</p>
<p>The notary acts for the transaction, not for the buyer. Their job is a valid deed, correctly registered. Whether the deed is a good bargain for you is not their question. It is ours, and it is best asked before the reservation deposit is paid rather than after.</p>
`,
    faqs: [
      { q: "Can I negotiate the payment schedule?", a: "Sometimes, particularly early in a development when the developer wants signatures. More often the schedule is fixed but the deed can be improved on delivery terms, penalties and the guarantee wording. Ask before signing; nothing changes after." },
      { q: "What if the developer stops building?", a: "The completion guarantee is called and the guarantor either finances completion or refunds the buyers, depending on its terms. The process runs through the notary and the guarantor and can take time. Buyers who know the guarantee's terms before signing are in a far stronger position than those reading them for the first time when work stops." },
      { q: "Does the residence permit depend on completion?", a: "The permit is applied for once the deed is signed and the EDB has recorded the acquisition, so it does not wait for the building. If the development fails and the purchase unwinds, the permit lapses with it." },
    ],
  },
  {
    slug: "retiring-to-mauritius-from-germany-austria-switzerland",
    title: "Retiring to Mauritius from Germany, Austria or Switzerland: the permit, and the tax questions to ask",
    summary: "The Retired Non-Citizen permit is straightforward. The interaction between Mauritian residence and a German, Austrian or Swiss pension is not. What to settle before you move.",
    publishedAt: "2026-06-30",
    category: "Residency",
    body: `
<p>Every month we hear from a couple in Munich, Vienna or Zurich who have found Mauritius on a winter holiday and want to know how hard it would be to stay. The permit is the easy part. The tax position is where the decision is actually made, and it is the part that most websites either skip or get wrong.</p>
<p><strong>The permit.</strong> Anyone aged 50 or over can apply for a Retired Non-Citizen Residence Permit. It runs for ten years, requires no property purchase, and rests on transferring USD 24,000 a year from abroad into a Mauritian bank account, or USD 2,000 a month. A spouse under 50 joins as a dependent. Employment is not permitted on the permit, but investment as a shareholder is. After five years, with aggregate transfers of USD 200,000, the holder may apply for a twenty-year permanent residence permit. That is the whole framework.</p>
<p><strong>Tax residence.</strong> Spend 183 days or more in Mauritius in a tax year and you are tax resident here. Mauritius taxes foreign-source income on a remittance basis and has double taxation agreements in force with Germany and with other European jurisdictions. Whether it has one with your country, and what that agreement says about pensions, is the first thing to establish.</p>
<p><strong>The questions to put to a tax adviser before you decide.</strong> We are not tax advisers and do not give tax opinions. We do know which questions produce a useful answer.</p>
<ul>
<li>Which of my income streams are taxed in the country where they arise under the treaty, and which follow me to Mauritius? State pensions, occupational pensions, private annuities and investment income are often treated differently from one another.</li>
<li>What does my home country require to accept that I have left? Deregistration, the end of a habitual abode, the number of days I may still spend there. Germany and Austria in particular look at ties, not only at days.</li>
<li>If I keep a flat at home, does that keep me tax resident there?</li>
<li>How does the remittance basis in Mauritius interact with the transfers the permit requires? Money brought in to satisfy the permit condition is, by definition, remitted.</li>
<li>Is there an exit tax, a deferred charge, or a claw-back on any pension or investment product I hold if I become non-resident?</li>
<li>Will my health insurer continue to cover me abroad, and what does Mauritian private cover cost at my age?</li>
</ul>
<p>The answers vary enough between the three countries, and between individuals, that no website can give them. What a good adviser needs from you is a clear list of income sources, the assets you would keep at home, and the days you expect to spend where. What we do is introduce the adviser, put those facts in front of them, and hold the permit application until the answers are in.</p>
<p>Most couples who ask the questions still move. They move with a plan rather than with an assumption, which is the only difference that matters.</p>
`,
    faqs: [
      { q: "Do I need to sell my home in Europe?", a: "Not for the permit. Whether keeping it affects your tax residence at home is a question for your adviser there, and the answer differs between Germany, Austria and Switzerland." },
      { q: "Can I bring my car, furniture and personal effects?", a: "Yes, and a residence permit holder may import household effects with duty relief, subject to conditions. A vehicle is a separate question and is often not worth it. We handle this as part of the relocation." },
      { q: "Will I be able to open a bank account at 65 with no Mauritian income?", a: "Yes. The banks are familiar with the retired permit. What they will examine closely is the source of your wealth, so the file we prepare for the bank is more detailed than the one for the permit." },
    ],
  },
  {
    slug: "south-africans-relocating-to-mauritius-permit-and-cost",
    title: "South Africans relocating to Mauritius: which permit, and what the first year costs",
    summary: "The three routes most South African families use, and an honest account of where the money goes in the first twelve months.",
    publishedAt: "2026-06-09",
    category: "Living in Mauritius",
    body: `
<p>South Africans are the largest group of foreign residents arriving in Mauritius, and the reasons are familiar: a four-hour flight, the same time zone, English-speaking schools, a stable currency and a functioning state. The question we are asked most often is not whether to come but which door to use and what it will cost. This is the short version.</p>
<p><strong>Three routes.</strong> An entrepreneur who will run a business here takes the Investor Occupation Permit: USD 100,000 into a Mauritian company, turnover conditions from the third year, ten years' validity. A professional or consultant working alone takes the Self-Employed permit at USD 50,000. Anyone over 50 living on income from South Africa takes the Retired Non-Citizen permit on transfers of USD 24,000 a year. A fourth door, buying a home in an approved scheme at USD 375,000 or more, carries a residence permit for as long as the property is held, and suits families who were going to buy anyway. Most South African families use one of the first three and rent for the first year.</p>
<p><strong>Where the money goes in year one.</strong> Setting aside the permit investment itself, which is working capital or living money rather than a fee, the costs fall into six groups, in roughly descending order.</p>
<ul>
<li>Housing. Rent in the north or west for a three-bedroom house with a pool is the largest line. Deposits, agency fees and the first months' rent are paid before arrival.</li>
<li>Schooling. The international schools charge in rupees and the fees are significant but well below the equivalent in the Gulf or Singapore. Places fill early and enrolment deposits are due at acceptance.</li>
<li>Establishment. Incorporation, the registered office and secretary, a resident director if needed, and the bank account. For the Investor route this is a fixed package; for the Retired route it is minimal.</li>
<li>The permit itself. Government fees are modest. Our fee for preparing and managing the application is set out in the written proposal before anything starts.</li>
<li>Medical cover. Private health insurance that works in Mauritius and covers referral to South Africa is not optional and should be arranged before arrival.</li>
<li>Vehicle and household. A car, registration and insurance; utilities and connections; household staff if wanted, at wages that are low by South African standards.</li>
</ul>
<p><strong>Exchange control.</strong> Moving capital from South Africa is subject to the South African Reserve Bank's rules and your annual allowances, and the timing of transfers should be planned with the permit deadline in mind. The Investor and Self-Employed permits require the initial investment to arrive within 60 days of issuance, and a delayed transfer cancels the permit. We do not advise on South African exchange control, but we sequence the permit so that the money is ready when the clock starts.</p>
<p><strong>What we would tell a friend.</strong> Rent before you buy. Choose the school before the house. Get the bank account open before the permit is issued, not after. Budget for two trips before the move, one to see and one to sign. And decide the route on what the business or the household will look like in three years, not on the smallest number on the page.</p>
`,
    faqs: [
      { q: "Can I keep my South African business and run it from Mauritius?", a: "Yes, and many do, through a Mauritian company that contracts with the South African one or takes over the export side. The structure matters for both tax systems and should be designed before the permit application rather than after." },
      { q: "Can my spouse work?", a: "Not on a dependent permit. The usual arrangement is an Investor permit for one spouse and a Professional permit for the other, employed by the same Mauritian company, or a second Occupation Permit in the spouse's own right." },
      { q: "How long before we can move?", a: "From the first conversation to a family in a house with children at school, three to six months is realistic, with the bank account and the school place usually setting the pace rather than the permit." },
    ],
  },
  {
    slug: "occupation-permit-changes-2026-27-budget",
    title: "What the 2026-27 Budget changed for Occupation Permits",
    summary: "Higher thresholds for investors, a single professional category, and tighter income conditions for the self-employed. What it means if you are planning a move this year.",
    publishedAt: "2026-08-20",
    category: "Residency",
    body: `
<p>The 2026-27 Budget brought the most significant revision of the Occupation Permit framework in several years, and the Economic Development Board has now issued revised guidelines to give effect to it. Four changes matter to anyone planning a move.</p>
<p><strong>The Investor threshold doubled.</strong> The minimum initial investment is now USD 100,000, transferred from abroad into the company's Mauritian account within 60 days of the permit being issued. The turnover conditions that follow are also new: MUR 5 million a year from the third year of registration, rising to MUR 8 million from the fifth year for renewal. An investor whose business plan cannot realistically reach those numbers should look hard at whether the Investor route is the right one.</p>
<p><strong>One professional category.</strong> The former ProPass and Expert Pass tiers have been merged. The minimum basic monthly salary is now MUR 50,000 in every sector. Professionals already holding a permit under the old MUR 30,000 criterion remain eligible for one renewal on that basis, which gives existing holders time.</p>
<p><strong>Self-employed income conditions.</strong> The initial investment stays at USD 50,000, but the income conditions are now explicit: MUR 2 million a year from the third year, and MUR 3 million from the fifth year for renewal. Three letters of intent, two of them from local clients, are required at application.</p>
<p><strong>The Family Occupation Permit is gone.</strong> The category has been abolished. Families now route through the main permit holder and dependent permits, which for most is what they were doing anyway.</p>
<p>None of this makes Mauritius harder to reach for the people it wants. It makes the choice of route more consequential. The difference between Investor and Self-Employed, or between an Occupation Permit and residence through property, is now measured in real money and real turnover obligations, and it deserves an hour's thought before anything is filed.</p>
`,
  },
  {
    slug: "investor-or-self-employed",
    title: "Investor or Self-Employed: choosing the right Occupation Permit",
    summary: "The two routes for people who will work for themselves in Mauritius differ in capital, structure and obligations. A short guide to which fits.",
    publishedAt: "2026-07-16",
    category: "Residency",
    body: `
<p>Most people who will earn their living in Mauritius on their own account arrive with one of two permits in mind. The choice between them is less about the activity than about its shape.</p>
<p><strong>Capital.</strong> The Self-Employed permit requires USD 50,000 transferred from abroad. The Investor permit requires USD 100,000, into a company's account. For many the difference decides it, and there is nothing wrong with that.</p>
<p><strong>Structure.</strong> A self-employed holder works in their own name or through a one-person company, may engage one local administrative employee, and may not employ other professionals. An investor owns and directs a Mauritian company that can hire, contract and grow. If the plan is a practice of one, Self-Employed is simpler and cheaper to maintain. If the plan is a business with staff and a name of its own, the Investor route is the foundation it needs.</p>
<p><strong>Sector.</strong> Self-Employed is confined to services. Trading, manufacturing, hospitality and property development are Investor activities by definition.</p>
<p><strong>Obligations.</strong> Both carry income or turnover conditions from the third year, and higher ones from the fifth year for renewal: MUR 2 million and 3 million for the self-employed, MUR 5 million and 8 million for the investor. The investor's numbers are larger because a company is expected to do more, but the self-employed numbers are personal income and are not always easier to reach.</p>
<p><strong>The family.</strong> Both permits extend to a spouse, children and parents as dependents. Where both partners will be active in the business, the common structure is an Investor permit for one and a Professional permit for the other, employed by the same company.</p>
<p>The wrong choice is rarely fatal, since a holder can shift category later, but it costs time and a second application. The right choice is usually clear after one conversation about what the business will look like in Year 3.</p>
`,
  },
  {
    slug: "golden-visa-what-it-adds",
    title: "The Golden Visa: what it adds to the existing routes",
    summary: "Mauritius has announced a USD 1 million Golden Visa opening a route to apply for twenty-year permanent residence. Where it sits alongside the permits that already exist, and who it is for.",
    publishedAt: "2026-09-02",
    reviewedAt: "2026-09-08",
    category: "Residency",
    body: `
<p>Mauritius approved a Golden Visa in April 2026 and legislated for it through the Budget measures. The application guidelines and the commencement date are still awaited from the Economic Development Board, so what follows is the framework as announced, not yet the scheme as operated.</p>
<p><strong>The shape of it.</strong> A multiple-entry visa for a high-net-worth individual and immediate family, valid for up to two years and renewable. At application the holder undertakes in writing to invest USD 1 million in Mauritius within twelve months. On completing the investment, the holder becomes eligible to apply for a twenty-year Permanent Residence Permit. Eligibility is not approval, and the conversion is not automatic. The government has spoken of around 100 recipients a year and a five-working-day processing target.</p>
<p><strong>What counts.</strong> Any business activity other than buying residential property under the EDB property schemes. Fintech, artificial intelligence, biotechnology, renewable energy and global treasury have been named as the sectors of interest. A home under the schemes may still be bought, but it sits outside the USD 1 million.</p>
<p><strong>Where it sits.</strong> Mauritius already offers residence through property at USD 375,000, an Investor permit at USD 100,000 with turnover obligations, and a Retired Non-Citizen permit on transfers of USD 24,000 a year. The Golden Visa asks for more capital than any of them and offers, in return, eligibility to apply for permanent residence after the first year and freedom in how the capital is deployed. It does not confer the right to work; the expectation is investment, not employment.</p>
<p><strong>Who it is for.</strong> A family with capital to deploy who want to be in Mauritius quickly and to hold a long permit that is not tied to running a business day to day or to owning a particular property. For a founder who will run a company here, the Investor permit remains the better fit. For someone over 50 living on income from abroad, the Retired Non-Citizen permit remains the simplest.</p>
<p>Applications will pass through inter-agency screening involving the Financial Crimes Commission, the Financial Intelligence Unit, the Financial Services Commission and the Bank of Mauritius. Source of wealth will be examined properly. We will publish the documentary requirements once the EDB guidelines are released.</p>
`,
  },
];
