export type Faq = { q: string; a: string };

/**
 * Frequently asked questions, keyed by page slug.
 * Decision questions only: whether a route fits, what it allows, what happens if conditions change.
 * No procedure, portals, forms or fees. No tax advice beyond stating the framework.
 */
export const faqs: Record<string, Faq[]> = {
  "investor-permit": [
    {
      q: "Does the USD 100,000 have to stay in the company?",
      a: "The undertaking is to transfer it from abroad into the company's Mauritian bank account within 60 days of issuance. Once there it is the company's working capital and may be spent on the business. It is not a bond or a deposit, and it is not returned.",
    },
    {
      q: "Can I hold the permit if I have a business partner?",
      a: "Yes. Where the investor is a company with more than one owner, each shareholder who is also a director applies for their own permit, and each must meet the criteria in their own right.",
    },
    {
      q: "What happens if turnover falls short in Year 3?",
      a: "The EDB monitors declared turnover against the MUR 5 million threshold and may deregister a holder who does not meet it, which cancels the permit. In practice the question is raised before it is enforced, and there is usually time to correct course if the shortfall is identified early. This is the main reason we track declarations from Year 1.",
    },
    {
      q: "Can my spouse work in Mauritius?",
      a: "Not on a dependent permit. A spouse who wishes to work applies for their own Occupation Permit, commonly as a Professional employed by the same company, or for a work permit.",
    },
    {
      q: "Is the Investor permit the right route if I only want to invest passively?",
      a: "Usually not. The permit assumes an owner who directs the business and whose company earns revenue in Mauritius. A passive investor is generally better served by residence through property, or by the Golden Visa once operational.",
    },
  ],
  "professional-permit": [
    {
      q: "Can I hold shares in the company that employs me?",
      a: "Yes, provided you are not the majority shareholder. You may also invest in other businesses, provided you are not employed by them and draw no salary or benefits from them.",
    },
    {
      q: "What happens to my permit if I change jobs?",
      a: "The permit is tied to the employer. A move to another company requires a fresh permit under the new employer, and the old one is cancelled. There is a limited period in which you may remain in Mauritius to secure new employment, provided the right steps are taken promptly after the old contract ends.",
    },
    {
      q: "Does the MUR 50,000 salary threshold apply to my existing permit?",
      a: "A professional already holding a permit granted under the former MUR 30,000 criterion remains eligible for one renewal on that basis. New applications are assessed at MUR 50,000.",
    },
    {
      q: "Can my employer be a company I own with my spouse?",
      a: "Yes, and it is a common structure alongside an Investor permit held by the other spouse. The salary must be real, paid monthly and declared, and you may not be the majority shareholder of the employer.",
    },
  ],
  "self-employed-permit": [
    {
      q: "Do I need a company?",
      a: "No. The permit is for a person registered as a business in their own name, or operating a one-person company. If you expect to hire professionals or contract in a company's name, the Investor route is the better foundation.",
    },
    {
      q: "Can I employ anyone?",
      a: "One local administrative employee. The permit does not allow you to employ other professionals in the activity itself.",
    },
    {
      q: "What counts as the services sector?",
      a: "Consulting, design, software, media, coaching, advisory and similar activities where you sell your own time and skill. Trading in goods, manufacturing and hospitality are not eligible under this category.",
    },
    {
      q: "What if my income does not reach MUR 2 million by Year 3?",
      a: "The threshold is monitored and a shortfall can lead to deregistration. It is worth being realistic at the outset: if the projected income is marginal, the Investor route with a company, or the Premium Visa while the practice builds, may be the safer sequence.",
    },
  ],
  "innovator-permit": [
    {
      q: "Is there really no minimum investment?",
      a: "There is none for the innovative start-up route. The application is judged on the project and the team, and the obligation after issuance is to report progress each year and to show a minimum viable product by the end of Year 5.",
    },
    {
      q: "What does the EDB consider innovative?",
      a: "There is no fixed list. Technology, fintech, biotech, renewable energy, data and AI projects are the typical candidates. A project registered with an incubator accredited by the Mauritius Research and Innovation Council carries weight, and a conventional business with a website does not qualify.",
    },
    {
      q: "Can I later switch to the standard Investor permit?",
      a: "Yes. A holder who raises capital or reaches the USD 100,000 threshold can apply under Option 1, and the reporting obligations of the innovator route fall away.",
    },
  ],
  "retired-residence-permit": [
    {
      q: "Do I have to buy property?",
      a: "No. The permit rests on the transfer of USD 24,000 a year from abroad, and you may rent or buy as you choose. Many people who first enquire about the property schemes end up on this route instead.",
    },
    {
      q: "Can I work at all?",
      a: "Not on the permit itself. You may invest in a business as a shareholder provided you are not employed by it. Employment in specific sectors is possible through a separate work permit or Occupation Permit.",
    },
    {
      q: "Does my spouse need to be over 50?",
      a: "No. A spouse or partner under 50 joins as a dependent. Only the main applicant must be 50 or over.",
    },
    {
      q: "Will I become tax resident in Mauritius?",
      a: "If you spend 183 days or more in Mauritius in a tax year, yes. Mauritius taxes foreign income on a remittance basis and has treaties with many home jurisdictions, so the outcome for a pension or investment income depends on where it arises and on the agreement in force. We introduce a Mauritian tax specialist before the application where this matters.",
    },
    {
      q: "Does the transfer have to be monthly?",
      a: "Either USD 2,000 a month or USD 24,000 a year, after an initial USD 2,000 within 60 days of issuance. Most clients transfer annually.",
    },
  ],
  "property-acquisition": [
    {
      q: "Which schemes qualify?",
      a: "Integrated Resort Scheme, Real Estate Scheme, Invest Hotel Scheme, Property Development Scheme, Smart City Scheme, and an apartment used as a residence in a building with at least two floors above the ground floor. In every case the purchase price must be at least USD 375,000.",
    },
    {
      q: "Can I buy for less than USD 375,000?",
      a: "Yes, within the schemes, but the purchase does not carry a residence permit. Buyers below the threshold who want to live in Mauritius combine the purchase with another route, most often the Retired Non-Citizen permit or an Occupation Permit.",
    },
    {
      q: "Can I work on this permit?",
      a: "Yes. The holder is exempt from the requirement to hold a work or occupation permit.",
    },
    {
      q: "What happens if I sell?",
      a: "The permit is tied to the property and lapses on sale. A holder who intends to sell and stay should qualify under another route before completing.",
    },
    {
      q: "Can I hold the property through a company or trust?",
      a: "Yes. A Mauritian Domestic Company may acquire scheme property and its shares may be held in trust. The residence permit can be obtained through the structure, subject to the EDB's conditions. The structure must be in place before the deed.",
    },
  ],
  "golden-visa": [
    {
      q: "Is the Golden Visa available now?",
      a: "The framework was approved by Cabinet in April 2026 and legislated through the Budget measures, but the EDB's application guidelines and the commencement of the scheme remain to be finalised. We will confirm the operative requirements before accepting any instruction.",
    },
    {
      q: "Does buying a home count towards the USD 1 million?",
      a: "No. Residential property under the EDB schemes is excluded from the qualifying investment. You may buy a home under the schemes in addition to it.",
    },
    {
      q: "Can I work in Mauritius on the Golden Visa?",
      a: "The visa does not, on its own, confer the right to work. The expectation is investment into qualifying sectors rather than employment.",
    },
    {
      q: "How does it compare with the Investor permit?",
      a: "It requires ten times the capital but leads to a twenty-year permanent residence after the first year, rather than a ten-year permit with turnover conditions. The Investor permit suits someone who will run a business; the Golden Visa suits someone who will deploy capital.",
    },
  ],
  "premium-visa": [
    {
      q: "Can I move from the Premium Visa to a residence permit without leaving Mauritius?",
      a: "Yes. A holder who later incorporates and applies for an Investor or Self-Employed permit, or who is over 50 and moves to the Retired Non-Citizen permit, can do so from within Mauritius.",
    },
    {
      q: "Can I work for a Mauritian company?",
      a: "No. The visa is for work performed remotely for an employer or clients outside Mauritius. Employment with a Mauritian employer requires an Occupation Permit or work permit.",
    },
    {
      q: "Will I be taxed in Mauritius?",
      a: "Income spent in Mauritius through foreign cards or accounts is not treated as remitted. Tax residence arises at 183 days in a tax year, and the treatment of foreign income from that point depends on the remittance basis and any treaty with the home jurisdiction.",
    },
    {
      q: "Can my family come with me?",
      a: "Yes. A spouse and children may be included, with additional evidence of means for each.",
    },
  ],
  dependents: [
    {
      q: "Can my dependent spouse work?",
      a: "Not on a dependent permit. A spouse who wishes to work applies for their own Occupation Permit or a work permit.",
    },
    {
      q: "Until what age can my children be included?",
      a: "Unmarried dependent children not over 24, including stepchildren and lawfully adopted children.",
    },
    {
      q: "Can I bring my parents?",
      a: "Yes. The parents of the main permit holder are eligible as dependents.",
    },
    {
      q: "Does an unmarried partner qualify?",
      a: "A common-law partner of the opposite sex qualifies, with evidence of cohabitation.",
    },
  ],
  "permanent-residence": [
    {
      q: "How soon can I apply?",
      a: "After five years on the permit, provided the thresholds for your category have been met in each of those years, and no later than six months after they are satisfied.",
    },
    {
      q: "Are the thresholds the same as for the permit itself?",
      a: "No. They are considerably higher: MUR 15 million a year in turnover for an investor, MUR 400,000 a month for a professional, MUR 3 million a year for a self-employed holder, and USD 200,000 in aggregate transfers for a retiree. Planning for them starts in Year 1.",
    },
    {
      q: "Does the Golden Visa lead to permanent residence sooner?",
      a: "Yes. Completing the USD 1 million investment within twelve months makes the holder eligible for the twenty-year permit, once the scheme is operational.",
    },
  ],
  "domestic-company": [
    {
      q: "Do I need a Mauritian director?",
      a: "At least one director must be ordinarily resident in Mauritius. Where the owner is not yet resident or prefers not to act, we provide a resident director under a written agreement that sets out what the director will and will not do.",
    },
    {
      q: "How is the company taxed?",
      a: "At 15% on chargeable income, with partial exemptions for certain classes. There is no capital gains tax and dividends are exempt in the shareholder's hands.",
    },
    {
      q: "Can the company own a home under the property schemes?",
      a: "Yes, with EDB authorisation, and its shares may be held in trust. This is a structure we set up regularly for families who prefer not to hold real estate personally.",
    },
    {
      q: "How long does incorporation take?",
      a: "A few working days from a complete file. The bank account takes longer and is the item that sets the timetable.",
    },
  ],
  "global-business-company": [
    {
      q: "Is a Global Business Company right for a business that trades in Mauritius?",
      a: "No. It is for business conducted principally outside Mauritius. A business serving the Mauritian market uses a Domestic Company.",
    },
    {
      q: "What does substance mean in practice?",
      a: "Two resident directors who actually direct, board meetings held in Mauritius, a principal bank account and audited accounts here, and core income-generating activity carried out in Mauritius with expenditure and staff proportionate to it. The tax residence, and therefore the value of the structure, depends on it.",
    },
    {
      q: "Can a Global Business Company support my Occupation Permit?",
      a: "It can employ a Professional permit holder. It is not, on its own, the vehicle for an Investor permit, which assumes a business generating revenue in Mauritius.",
    },
  ],
  "authorised-company": [
    {
      q: "What is the difference from a Global Business Company?",
      a: "An Authorised Company is managed and controlled outside Mauritius, is treated as non-resident for tax, pays no Mauritian tax on foreign income, and has no access to treaty benefits. A Global Business Company is resident, pays tax at an effective 3% on qualifying foreign income, and has treaty access, at the cost of real substance in Mauritius.",
    },
    {
      q: "Can it do business in Mauritius?",
      a: "No. It may not carry on business with Mauritian residents, and it cannot support an Occupation Permit.",
    },
    {
      q: "Does it change my tax position at home?",
      a: "No. Your own residence and the rules of your home jurisdiction are unaffected by the choice of a Mauritian vehicle, and we recommend home-country advice before proceeding.",
    },
  ],
};
