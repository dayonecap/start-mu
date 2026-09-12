/**
 * The start.mu Guide to Moving to Mauritius.
 *
 * A versioned reference, rewritten after each National Budget. The body is an HTML fragment
 * authored for this site: every figure carries a confidence marker (Verified, Practitioner,
 * Unverified) and a source number that resolves to the list in the final section.
 *
 * To issue a new edition: update `edition` and `verifiedAt`, add a row to the version-history
 * table in section 19 of the body, and re-check every figure marked Verified against the
 * current EDB guidelines and Budget Annex.
 */

export type GuideTocEntry = { id: string; n: number; label: string } | { group: string };

export const guide = {
  edition: "2026.09",
  verifiedAt: "2026-09-12",
  /** Legal baseline the edition is written against. */
  baseline: "Finance Act 2026, in force for Occupation Permits from 20 August 2026",
  /** The route is English-only for now; French and German fall back with the standard notice. */
  toc: [
  { group: "The rules" },
  { id: "rules", n: 1, label: "Current rules at a glance" },
  { id: "changelog", n: 2, label: "What changed, and when" },
  { id: "routes", n: 3, label: "Your route, by situation" },
  { id: "permits", n: 4, label: "Each permit in detail" },
  { id: "process", n: 5, label: "Applying, renewing, staying compliant" },
  { id: "entry", n: 6, label: "Entry, visas and citizenship" },
  { group: "Money" },
  { id: "property", n: 7, label: "Buying and renting property" },
  { id: "tax", n: 8, label: "Tax, with worked examples" },
  { id: "costs", n: 9, label: "What it costs to live here" },
  { group: "Living" },
  { id: "areas", n: 10, label: "Where to live" },
  { id: "schools", n: 11, label: "Schools" },
  { id: "health", n: 12, label: "Healthcare" },
  { id: "banking", n: 13, label: "Banking" },
  { id: "driving", n: 14, label: "Driving and cars" },
  { id: "arrival", n: 15, label: "Shipping, pets, utilities" },
  { id: "business", n: 16, label: "Setting up a company" },
  { id: "downsides", n: 17, label: "The honest downsides" },
  { group: "Tools" },
  { id: "checklist", n: 18, label: "Master checklist" },
  { id: "method", n: 19, label: "Method, sources, corrections" },
  ] as GuideTocEntry[],
  body: `
<div class="legend" aria-label="How to read the confidence markers">
  <div><span class="mk mk-v">Verified</span><span>Checked against an official 2026 text: Budget Annex, Finance Act, EDB guidelines, MRA, PwC summary reviewed June 2026.</span></div>
  <div><span class="mk mk-p">Practitioner</span><span>Reported consistently by firms or dated market data, not on an official page.</span></div>
  <div><span class="mk mk-u">Unverified</span><span>Single source or conflicting sources. Confirm before relying on it.</span></div>
</div>

<!-- ============ 1 RULES ============ -->
<section class="s" id="rules">
  <div class="shead"><h2><span class="num">1</span>Current rules at a glance</h2><span class="verified">Verified <b>12 Sept 2026</b> against EDB OP Guidelines and Budget Annex 2026-27</span></div>
  <p class="intro">Eight ways to live in Mauritius lawfully. Six of them changed in the last fifteen months. This table is the current position; the changelog in §2 shows what older guides still get wrong.</p>

  <div class="tw">
  <table>
    <caption>Residence routes for non-citizens, September 2026</caption>
    <thead><tr><th>Route</th><th>Who it is for</th><th>Financial test</th><th>Validity</th><th class="num">Statutory fee (USD)</th><th>Route to 20-year Permanent Residence</th></tr></thead>
    <tbody>
      <tr><td>Investor Occupation Permit</td><td>Owner-operators of a Mauritian company</td><td>USD 100,000 transferred into the company's Mauritian account within 60 days of issue. Turnover MUR 5m a year from year 3, MUR 8m from year 5 to renew. <span class="mk mk-v">Verified</span></td><td>Up to 10 years, renewable</td><td class="num">1,000 + 50</td><td>After 5 years with turnover MUR 15m a year, or MUR 75m aggregate</td></tr>
      <tr><td>Professional Occupation Permit</td><td>Employees of a Mauritian company</td><td>Basic salary MUR 50,000 a month, all sectors. ProPass and Expert Pass merged. <span class="mk mk-v">Verified</span></td><td>Contract length, max 10 years</td><td class="num">400 to 1,000 by contract length, + 50</td><td>After 5 years at MUR 400,000 a month basic, applied for within 6 months</td></tr>
      <tr><td>Self-Employed Occupation Permit</td><td>Sole practitioners in services</td><td>USD 50,000 transferred within 60 days. Three letters of intent, two from local clients. Income MUR 2m a year from year 3, MUR 3m from year 5. <span class="mk mk-v">Verified</span></td><td>Up to 10 years, renewable</td><td class="num">1,000 + 50</td><td>After 5 years with income MUR 3m a year, or MUR 15m aggregate</td></tr>
      <tr><td>Innovator (Investor for innovative start-ups)</td><td>Founders with an EDB-approved project or incubator registration</td><td>No monetary floor. Annual progress report; minimum viable product by end of year 5. Performance indicators announced, not yet published. <span class="mk mk-v">Verified</span></td><td>Up to 10 years</td><td class="num">1,000 + 50</td><td>As Investor</td></tr>
      <tr><td>Young Professional OP</td><td>Graduates of a Mauritian tertiary institution with a job offer</td><td>Salary MUR 25,000 a month <span class="mk mk-v">Verified</span></td><td>Up to 3 years</td><td class="num">150 to 300, + 50</td><td>Via a later Professional OP</td></tr>
      <tr><td>Retired Non-Citizen Residence Permit</td><td>Anyone aged 50 or over living on foreign income</td><td>Bank statement showing USD 24,000; USD 2,000 transferred within 60 days; then USD 2,000 a month or USD 24,000 a year. <span class="mk mk-v">Verified</span></td><td>10 years, renewable</td><td class="num">1,000 + 50</td><td>After 5 years with USD 200,000 aggregate transfers</td></tr>
      <tr><td>Residence by property</td><td>Buyers in an EDB scheme or a G+2 apartment</td><td>Purchase at USD 375,000 or more, at the Bank of Mauritius selling rate on the deed date <span class="mk mk-v">Verified</span></td><td>While the property is held</td><td class="num">Scheme fee, see §7</td><td>Not time-based. The permit lasts as long as ownership does</td></tr>
      <tr><td>Golden Visa</td><td>High-net-worth individuals and families</td><td>Undertaking to invest USD 1m within 12 months in qualifying sectors. Residential scheme property does not count. <span class="mk mk-v">Verified</span></td><td>2 years, multi-entry, renewable</td><td class="num">None</td><td>Eligible to apply once the USD 1m is invested. Eligibility is not approval</td></tr>
      <tr><td>Premium Visa</td><td>Remote workers and long-stay visitors paid from abroad</td><td>No official floor. Firms cite USD 1,500 a month plus USD 500 per child. <span class="mk mk-p">Practitioner</span></td><td>Up to 1 year, renewable</td><td class="num">None</td><td>None. Convert to an OP or Retired permit without leaving</td></tr>
    </tbody>
  </table>
  </div>
  <p class="tnote">Sources 1, 3, 4, 5, 13, 14, 15, 16. The USD 50 application fee applies to every Occupation and Residence Permit application filed since 1 December 2025 and is not refunded on refusal. Dependants cost USD 400 each on all routes.</p>

  <div class="figs" role="list">
    <div role="listitem"><div class="k">Tax residence</div><div class="v">183 days</div><div class="s">or 270 days over three years. Foreign income taxed only when remitted.</div></div>
    <div role="listitem"><div class="k">Top income tax rate</div><div class="v">35%</div><div class="s">above MUR 12m from 1 July 2026. 20% between MUR 1m and 12m.</div></div>
    <div role="listitem"><div class="k">Buyer's registration duty</div><div class="v">5%</div><div class="s">The doubling to 10% was repealed before it took effect.</div></div>
    <div role="listitem"><div class="k">Capital gains, inheritance, wealth tax</div><div class="v">None</div><div class="s">Confirmed in the PwC summary reviewed June 2026.</div></div>
  </div>

  <div class="note warn"><span class="t">Two things still open</span>
  <p>The Technical Occupation Permit, the Student Employment Permit and the Electronic Travel Authorisation were legislated in 2026 but start on dates fixed by proclamation. None was in force on the verification date. Whether the new year-3 and year-5 turnover tests apply to Investor and Self-Employed permits issued before 20 August 2026 is not stated in the Annex, which gives a transitional rule only for Professionals. Ask before you rely on the old thresholds.</p></div>
</section>

<!-- ============ 2 CHANGELOG ============ -->
<section class="s" id="changelog">
  <div class="shead"><h2><span class="num">2</span>What changed, and when</h2><span class="verified">Verified <b>12 Sept 2026</b></span></div>
  <p class="intro">Three legislative events rewrote the rules: the Finance Act 2023, the 2025-26 Budget (June 2025) and the 2026-27 Budget with its Finance Act (June to August 2026). If a guide you are reading shows a figure in the middle column, it is out of date.</p>

  <div class="tw">
  <table>
    <caption>Change log, 2023 to 2026</caption>
    <thead><tr><th>Item</th><th>Old rule</th><th>Current rule</th><th>Changed by</th></tr></thead>
    <tbody>
      <tr><td>Investor OP threshold</td><td class="old">USD 50,000, or net assets of USD 50,000, or high-tech equipment</td><td>USD 100,000 only. Turnover MUR 5m from year 3, MUR 8m from year 5</td><td>Budget 2025-26 added a USD 100k tier; Budget 2026-27 removed the USD 50k tier</td></tr>
      <tr><td>Professional OP salary</td><td class="old">MUR 60,000; MUR 30,000 for ICT, BPO, pharma, food processing; then ProPass MUR 30,000 and Expert Pass MUR 250,000</td><td>MUR 50,000 in every sector. Holders under the MUR 30,000 rule get one renewal on the old basis</td><td>Budget 2026-27, in force 20 August 2026</td></tr>
      <tr><td>Self-Employed OP</td><td class="old">USD 35,000</td><td>USD 50,000; income MUR 2m from year 3, MUR 3m from year 5</td><td>Amount: Budget 2025-26. Income tests: Budget 2026-27</td></tr>
      <tr><td>Young Professional OP</td><td class="old">No salary floor</td><td>MUR 25,000 a month</td><td>Budget 2025-26</td></tr>
      <tr><td>Retired permit</td><td class="old">USD 1,500 a month or USD 18,000 a year</td><td>USD 2,000 a month or USD 24,000 a year, plus a USD 2,000 opening transfer within 60 days</td><td>Budget 2025-26</td></tr>
      <tr><td>Permanent residence</td><td class="old">After 3 years on a permit; Professional at MUR 150,000 a month</td><td>After 5 years, with much higher tests (see §1). Apply within 6 months of qualifying</td><td>Budget 2025-26</td></tr>
      <tr><td>Family Occupation Permit</td><td class="old">10-year family permit for a USD 250,000 contribution</td><td>Abolished. Families use dependant permits</td><td>Budget 2026-27</td></tr>
      <tr><td>Application fee</td><td class="old">None</td><td>USD 50, non-refundable, on every OP and RP application</td><td>From 1 December 2025</td></tr>
      <tr><td>Buying outside a scheme</td><td class="old">Residence permit holders could buy any residential property at USD 500,000 or more</td><td>Withdrawn. Non-citizens buy inside EDB schemes or G+2 apartments only</td><td>Budget 2025-26</td></tr>
      <tr><td>Registration duty for non-citizens</td><td class="old">To double to 10% from 1 July 2026</td><td>Repealed before commencement. Stays at 5% for the buyer, 5% land transfer tax for the seller</td><td>Budget 2025-26 introduced it; Finance Act 2026 repealed it</td></tr>
      <tr><td>G+2 apartments on State land</td><td class="old">Sellable to non-citizens</td><td>No new leases permitting sale to non-citizens; 10% vendor levy on such sales unless reserved before 19 June 2026</td><td>Budget 2026-27</td></tr>
      <tr><td>Income tax above MUR 12m</td><td class="old">15% Fair Share Contribution on top of the 20% band (income year 2025-26)</td><td>35% band from 1 July 2026; individual Fair Share Contribution abolished</td><td>Finance Act 2026. MRA guidance page not yet updated</td></tr>
      <tr><td>Solidarity levy</td><td class="old">25% above MUR 3m</td><td>Abolished from 1 July 2023</td><td>Finance Act 2023</td></tr>
      <tr><td>Golden Visa</td><td class="old">Did not exist</td><td>USD 1m in 12 months; 2-year visa; 5-working-day processing target</td><td>Budget 2026-27; EDB guidelines August 2026</td></tr>
      <tr><td>Smart City Scheme incentives</td><td class="old">Tax holidays and exemptions for developers and buyers</td><td>Revoked from 5 June 2025. VAT recovery kept to 30 June 2027</td><td>Budget 2025-26</td></tr>
      <tr><td>Global Business Company annual fee</td><td class="old">USD 1,950 (Authorised Company USD 350)</td><td>USD 2,600 (Authorised Company USD 1,400)</td><td>FSC Rules, 1 July 2026</td></tr>
      <tr><td>VAT registration threshold</td><td class="old">MUR 6m</td><td>MUR 3m</td><td>Budget 2025-26</td></tr>
      <tr><td>Social contributions</td><td>CSG and PRGF</td><td>Unchanged until 30 June 2027, then replaced by a defined-contribution National Pension Fund</td><td>Budget 2026-27, effective 1 July 2027</td></tr>
    </tbody>
  </table>
  </div>
  <p class="tnote">Sources 1, 2, 3, 9, 10, 11, 12, 21, 22, 23.</p>
</section>

<!-- ============ 3 ROUTES BY SITUATION ============ -->
<section class="s" id="routes">
  <div class="shead"><h2><span class="num">3</span>Your route, by situation</h2><span class="verified">Verified <b>12 Sept 2026</b></span></div>
  <p class="intro">Most people fit one of seven situations. Each has a different critical path, and the order of steps matters more than the paperwork. The statutory fee shown is the government's charge only; it excludes medicals, apostilles, translations, company costs and any adviser's fee.</p>

  <div class="personas">
    <article class="persona">
      <h3>Paid from abroad, working remotely</h3>
      <div class="route">Premium Visa, then convert if you stay</div>
      <dl><dt>Test</dt><dd>Income from outside Mauritius. No official floor; USD 1,500 a month is the figure firms use <span class="mk mk-p">Practitioner</span></dd><dt>Validity</dt><dd>Up to 1 year, renewable</dd><dt>Statutory fee</dt><dd>None</dd><dt>Work rights</dt><dd>Foreign clients and employers only</dd></dl>
      <p class="path">Apply on the EDB portal before you fly or after arriving on a tourist entry. Bring insurance, accommodation proof and income evidence. Past 183 days you become tax resident; income spent through foreign cards is not treated as remitted. Convert to an Investor, Self-Employed or Retired permit without leaving.</p>
    </article>
    <article class="persona">
      <h3>Hired by a Mauritian employer</h3>
      <div class="route">Professional Occupation Permit</div>
      <dl><dt>Test</dt><dd>Basic salary MUR 50,000 a month, paid and declared</dd><dt>Validity</dt><dd>Contract length, max 10 years</dd><dt>Statutory fee</dt><dd>USD 50 + 400 to 1,000, paid by the employer</dd><dt>Dependants</dt><dd>USD 400 each; they may not work without their own permit</dd></dl>
      <p class="path">The employer files. Firms report 3 to 6 weeks to approval in principle and around 90 days end to end. Start the school application before the permit application. The permit is tied to the employer: a new job means a fresh application.</p>
    </article>
    <article class="persona">
      <h3>Founding or buying a business you will run</h3>
      <div class="route">Investor Occupation Permit</div>
      <dl><dt>Test</dt><dd>USD 100,000 into the company's Mauritian account within 60 days of issue</dd><dt>Later tests</dt><dd>Turnover MUR 5m a year from year 3; MUR 8m from year 5 to renew</dd><dt>Validity</dt><dd>Up to 10 years</dd><dt>Statutory fee</dt><dd>USD 50 + 1,000</dd></dl>
      <p class="path">Incorporate first (2 to 5 working days), then open the company account, which is the slow step. File with a business plan on the EDB template. Only after the permit issues does the 60-day transfer clock start. Miss it and the permit lapses. Expect site visits: the EDB, immigration and the tax authority monitor jointly.</p>
    </article>
    <article class="persona">
      <h3>Consultant or freelancer serving clients</h3>
      <div class="route">Self-Employed Occupation Permit</div>
      <dl><dt>Test</dt><dd>USD 50,000 transferred within 60 days; three letters of intent, two from Mauritian clients</dd><dt>Later tests</dt><dd>Income MUR 2m a year from year 3; MUR 3m from year 5</dd><dt>Validity</dt><dd>Up to 10 years</dd><dt>Statutory fee</dt><dd>USD 50 + 1,000</dd></dl>
      <p class="path">Services only. You may employ one local administrative assistant. The year-3 income test is MUR 2m, about USD 42,000, so the route suits an established practice, not someone hoping to find clients after arrival. If your clients are all abroad, compare the Premium Visa first.</p>
    </article>
    <article class="persona">
      <h3>Aged 50 or over, living on foreign income</h3>
      <div class="route">Retired Non-Citizen Residence Permit</div>
      <dl><dt>Test</dt><dd>Statement showing USD 24,000; USD 2,000 transferred within 60 days; then USD 24,000 a year</dd><dt>Validity</dt><dd>10 years, renewable</dd><dt>Statutory fee</dt><dd>USD 50 + 1,000</dd><dt>Work rights</dt><dd>None on this permit; may hold shares in a business</dd></dl>
      <p class="path">No property purchase and no minimum stay appear in the official guidelines. A spouse under 50 joins as a dependant. Keep the transfers regular and documented: the permanent-residence test is USD 200,000 aggregate over five years, and the EDB shares your declared tax residences with the tax authority.</p>
    </article>
    <article class="persona">
      <h3>Buying a home to live in</h3>
      <div class="route">Residence permit by property acquisition</div>
      <dl><dt>Test</dt><dd>USD 375,000 or more in an EDB scheme or a G+2 apartment, at the Bank of Mauritius selling rate on the deed date</dd><dt>Validity</dt><dd>While you own the property</dd><dt>Fees</dt><dd>5% registration duty, notary, EDB scheme fee (§7)</dd><dt>Work rights</dt><dd>Exempt from needing a work permit</dd></dl>
      <p class="path">Residency follows the deed, so the property must be right first. Rent for a year before buying, and treat the permit as a consequence of ownership: it ends when you sell. Off-plan purchases carry their own checks; see §7.</p>
    </article>
    <article class="persona">
      <h3>Investing capital without running a business</h3>
      <div class="route">Golden Visa</div>
      <dl><dt>Test</dt><dd>Undertaking to invest USD 1m within 12 months in qualifying sectors; bank statement showing USD 1m</dd><dt>Validity</dt><dd>2 years, multi-entry, renewable</dd><dt>Statutory fee</dt><dd>None; 5-working-day processing target</dd><dt>Excluded</dt><dd>Residential property under the EDB schemes</dd></dl>
      <p class="path">Screening covers source of wealth across several regulators. Once the USD 1m is deployed, you may apply for the 20-year Permanent Residence Permit. Eligibility is not approval. Taxed on the same remittance basis as the Premium Visa.</p>
    </article>
  </div>

  <div class="note"><span class="t">Families</span>
  <p>Since the Family Occupation Permit was abolished, every family relies on dependant permits under one principal holder. A dependant is a spouse or common-law partner of the opposite sex, an unmarried child up to 24 including stepchildren and adopted children, or a parent. Dependants may not take paid work; a working spouse needs their own Occupation Permit. Same-sex partners are not covered by the current wording. Sources 3, 4.</p></div>
</section>

<!-- ============ 4 PERMITS IN DETAIL ============ -->
<section class="s" id="permits">
  <div class="shead"><h2><span class="num">4</span>Each permit in detail</h2><span class="verified">Verified <b>12 Sept 2026</b> against EDB OP Guidelines, Budget Annex §37, Golden Visa Guidelines</span></div>

  <h3>Investor Occupation Permit</h3>
  <ul>
    <li><strong>Threshold.</strong> USD 100,000 minimum initial investment, evidenced by a certified bank statement from your country of residence and a written undertaking to transfer it into the company's Mauritian bank account within 60 days of the permit being issued. <span class="mk mk-v">Verified</span></li>
    <li><strong>Turnover tests.</strong> MUR 5m a year from year 3 of registration; MUR 8m a year from year 5 to qualify for renewal. The EDB conducts a compliance review at year 5. <span class="mk mk-v">Verified</span></li>
    <li><strong>Withdrawn options.</strong> The USD 50,000 tier, the "net asset value USD 50,000" route and the high-tech-equipment route no longer appear in the current guidelines, though the EDB's overview page still lists them. Treat them as gone. <span class="mk mk-v">Verified by omission</span></li>
    <li><strong>Innovative start-ups.</strong> No fixed threshold. Submit a project to the EDB or register with an accredited incubator. Annual progress report within three months of the end of year 1; a development report showing a minimum viable product by the end of year 5. Performance indicators were announced in the 2026-27 Budget but not yet published.</li>
    <li><strong>Structure.</strong> Where the investor is a company, each shareholder-director applies separately. You must be actively involved in running the business, not a passive shareholder.</li>
    <li><strong>Post-approval documents.</strong> Business registration card, certificate of incorporation, evidence of the fund transfer, and any sector clearance (Financial Services Commission, Bank of Mauritius, Tourism Authority, Allied Health Professionals Council and so on).</li>
  </ul>

  <h3>Professional Occupation Permit</h3>
  <ul>
    <li><strong>Threshold.</strong> Basic monthly salary of MUR 50,000 in every sector. The former ProPass (MUR 30,000) and Expert Pass (MUR 250,000) tiers were merged in August 2026. A holder under the MUR 30,000 criterion is eligible for one renewal on that basis. <span class="mk mk-v">Verified</span></li>
    <li><strong>Validity.</strong> The contract length or 10 years, whichever is shorter. A short-term variant covers up to 9 months with one extension of up to 3 months, applied for at least 15 days before expiry.</li>
    <li><strong>Employer's role.</strong> The employer files on the EDB portal, signs the declaration and undertaking, must show it can pay the declared salary, and sends a manager to the issuance appointment. The salary must be real, paid monthly and declared for tax.</li>
    <li><strong>Changing employer.</strong> A fresh application by the new employer. Where a restraint-of-trade clause exists, a no-objection letter from the previous employer is needed if you stay in the same field, or a non-competition undertaking if you change field. <span class="mk mk-v">Verified</span></li>
    <li><strong>Losing the job.</strong> The employer must notify the EDB at once and immigration cancels the permit. File the Self-Undertaking Form within two weeks of termination and you get six months to secure a new permit in any category. Miss the two weeks and you have one month to leave. <span class="mk mk-v">Verified</span></li>
    <li><strong>Regulated professions.</strong> Doctors, nurses, dentists, engineers and allied health professionals must register with their council within three months. Senior banking roles need Bank of Mauritius clearance.</li>
    <li><strong>Investing on the side.</strong> A professional may invest in any business provided they are not employed by it, and may hold a non-majority stake in their own employer.</li>
  </ul>

  <h3>Self-Employed Occupation Permit</h3>
  <ul>
    <li><strong>Threshold.</strong> USD 50,000 transferred into a Mauritian bank account within 60 days of issue; services sector only; at least three letters of intent from prospective clients, two of them local. <span class="mk mk-v">Verified</span></li>
    <li><strong>Income tests.</strong> MUR 2m a year from year 3; MUR 3m a year from year 5 to renew. <span class="mk mk-v">Verified</span></li>
    <li><strong>Form.</strong> Registered sole trader or one-person company. One local administrative employee is permitted.</li>
  </ul>

  <h3>Young Professional Occupation Permit</h3>
  <ul>
    <li>For graduates of a Mauritian tertiary institution recognised by the Higher Education Commission, with a job contract paying at least MUR 25,000 a month. Up to 3 years. Fees USD 150, 250 or 300 by duration, plus the USD 50 application fee. <span class="mk mk-v">Verified</span></li>
  </ul>

  <h3>Retired Non-Citizen Residence Permit</h3>
  <ul>
    <li><strong>Age and funds.</strong> 50 or over at application. A bank statement showing at least USD 24,000. An initial transfer of at least USD 2,000 into a Mauritian bank within 60 days of issue, then USD 2,000 a month or USD 24,000 a year. <span class="mk mk-v">Verified</span></li>
    <li><strong>Validity.</strong> 10 years, renewable. Fee USD 1,000 plus USD 50.</li>
    <li><strong>Work.</strong> No paid employment on this permit. You may invest in a business as a shareholder provided you are not employed by it. Employment in specific sectors requires a separate work or occupation permit. Remote work for a foreign employer is not addressed in the guidelines; firms report it is tolerated. <span class="mk mk-u">Unverified</span></li>
    <li><strong>Other conditions.</strong> Police clearance covering the last 10 years, less than six months old. You must disclose other countries of residence and tax residence; the EDB shares this with the tax authority under the Common Reporting Standard. No minimum stay and no property requirement appear in the official text. One 2025 guide claims a 180-day presence rule; the guidelines do not contain it. <span class="mk mk-u">Unverified</span></li>
  </ul>

  <h3>Premium Visa</h3>
  <ul>
    <li>Valid for more than six months and up to a year, renewable, free of charge. Apply on the EDB portal. Nationals of roughly 114 listed countries may apply directly; others apply after arriving on a tourist entry. Your main place of business and income source must be outside Mauritius, and you may not enter the local labour market. <span class="mk mk-v">Verified</span></li>
    <li>Documents: proof of long-stay plans, travel and health insurance, accommodation, proof of income.</li>
    <li>Tax: foreign employment income is taxed only if remitted. Spending through international cards is not deemed remitted. Deposits declared as already taxed abroad are not taxed again. <span class="mk mk-v">Verified</span></li>
  </ul>

  <h3>Golden Visa</h3>
  <ul>
    <li><strong>Test.</strong> An undertaking to invest at least USD 1m within the first 12 months, into a Mauritian bank account in your name or that of an entity you beneficially own, then into qualifying sectors: financial services, fintech, ICT, tourism and hospitality, manufacturing, healthcare, education, renewable energy, blue economy, knowledge-based and creative industries. Residential property under the EDB schemes does not qualify. <span class="mk mk-v">Verified</span></li>
    <li><strong>Terms.</strong> Up to 2 years, multi-entry, renewable. No processing fee. Five working days from a complete application. A concierge desk, and fast-track five-day work permits for domestic staff. You may buy scheme property or a G+2 apartment. Once the USD 1m is invested, you are eligible to apply for the 20-year Permanent Residence Permit. <span class="mk mk-v">Verified</span></li>
    <li><strong>Cap.</strong> Consultants report an annual intake of about 100. Not in the guidelines. <span class="mk mk-u">Unverified</span></li>
  </ul>

  <h3>Residence by property</h3>
  <ul>
    <li>Under section 8 of the Immigration Act 2022, a non-citizen who buys a unit in an Integrated Resort, Real Estate, Invest Hotel, Property Development or Smart City scheme, or an apartment in a building with at least two floors above ground, for USD 375,000 or more, is eligible for a residence permit and is exempt from needing a work or occupation permit. Covers spouse and dependants; lasts while the property is held. <span class="mk mk-v">Verified</span></li>
    <li><strong>Senior living.</strong> A retiree aged 50 or over may buy a unit or life rights in a Senior Living Residence with no minimum price and obtain a residence permit for themselves and their partner while owning or occupying it. <span class="mk mk-v">Verified</span></li>
  </ul>

  <h3>Permanent Residence Permit, 20 years</h3>
  <div class="tw"><table>
    <thead><tr><th>Held for</th><th>Test</th><th>Timing</th></tr></thead>
    <tbody>
      <tr><td>Investor OP, 5 years</td><td>Turnover MUR 15m in each year, or MUR 75m aggregate over five consecutive years</td><td>Apply within 6 months of qualifying</td></tr>
      <tr><td>Professional OP or work permit, 5 years</td><td>Basic salary MUR 400,000 a month for five consecutive years</td><td>Within 6 months</td></tr>
      <tr><td>Self-Employed OP, 5 years</td><td>Income MUR 3m in each year, or MUR 15m aggregate</td><td>Within 6 months</td></tr>
      <tr><td>Retired permit, 5 years</td><td>Aggregate transfers of USD 200,000 over five consecutive years</td><td>Within 6 months</td></tr>
      <tr><td>Golden Visa</td><td>USD 1m invested within 12 months</td><td>Eligible once the investment is complete</td></tr>
      <tr><td>Any PRP holder</td><td>May convert to retired-category PRP with disposable income of USD 40,000 a year</td><td>On application</td></tr>
    </tbody></table></div>
  <p class="tnote">Renewable for a further 20 years. Spouse and dependent children may be included. Before June 2025 the qualifying period was three years and the tests were far lower, which is why older guides mislead. Sources 3, 12, 14.</p>
</section>

<!-- ============ 5 PROCESS ============ -->
<section class="s" id="process">
  <div class="shead"><h2><span class="num">5</span>Applying, renewing, staying compliant</h2><span class="verified">Verified <b>12 Sept 2026</b></span></div>
  <p class="intro">The EDB publishes no processing-time commitment except for the Golden Visa. What follows separates the official steps from the timings firms actually observe.</p>

  <ol class="steps">
    <li><span class="h">Prepare the file</span><span class="d">2 to 4 weeks, practitioner</span><br>Passport biodata, birth certificate translated if not in English or French, three photos 3.5 by 4.5 cm, police clearance for retirees, employment contract or business plan on the EDB template, certified bank statement, signed undertaking and the charter for foreign residents.</li>
    <li><span class="h">File on the National E-Licensing System</span><span class="d">business.edbmauritius.org</span><br>Pay the USD 50 application fee by card. Non-refundable. You do not need to be in Mauritius to file.</li>
    <li><span class="h">Validation and Joint Committee</span><span class="d">3 to 6 weeks to approval, practitioner</span><br>The EDB's permit unit and the Passport and Immigration Office validate, then a committee chaired by the Prime Minister's Office decides. Firms report 15 to 20 working days at best and around 90 days end to end in practice. One refusal appeal is allowed within 30 days.</li>
    <li><span class="h">Approval in Principle</span><span class="d">valid 90 days; 30 days on renewal</span><br>Pay the permit fee. Book the medical at a registered clinic in Mauritius: blood tests and chest X-ray, certificate less than six months old. Children under 12 need only a local GP certificate.</li>
    <li><span class="h">Appointment and issue</span><span class="d">days to 1 week</span><br>Attend in person with originals for biometrics. The employer's manager attends for Professional permits. Immigration issues the card. There is no national identity card for non-citizens; the residence permit card is your identity document.</li>
    <li><span class="h">Post-issue obligations</span><span class="d">60-day clock</span><br>Investors and the self-employed transfer USD 100,000 or USD 50,000 into the Mauritian account; retirees transfer USD 2,000. Dependant applications are filed after the principal permit issues, though a well-prepared file lodges them together.</li>
  </ol>

  <h3>What the permit really costs</h3>
  <div class="calc">
    <div class="t">Statutory fees for a founder with a spouse and two children, Investor route</div>
    <table>
      <tr><td>Application fee, principal</td><td class="num">USD 50</td></tr>
      <tr><td>Investor permit fee, 10 years</td><td class="num">USD 1,000</td></tr>
      <tr><td>Application fees, three dependants</td><td class="num">USD 150</td></tr>
      <tr><td>Dependant permit fees, three at USD 400</td><td class="num">USD 1,200</td></tr>
      <tr class="tot"><td>Government fees</td><td class="num">USD 2,400</td></tr>
    </table>
    <p class="small" style="margin:.6rem 0 0">Add medical examinations for four at a private clinic, apostilles and sworn translations of civil documents, police clearances, company incorporation and registered office, and any adviser's fee. Firms quote the non-government side at anything from a few hundred to several thousand US dollars depending on how much is delegated. <span class="mk mk-p">Practitioner</span></p>
  </div>

  <h3>Renewals and the tests that bite</h3>
  <ul>
    <li>Apply at least one month before expiry on the portal. The renewal approval in principle is valid 30 days only.</li>
    <li>Investor: turnover MUR 5m a year from year 3 and MUR 8m from year 5. Self-employed: income MUR 2m then MUR 3m. Professional: salary must still be paid and declared at the current threshold, with one grandfathered renewal for MUR 30,000 holders. Retired: transfers of USD 24,000 a year, evidenced.</li>
    <li>The EDB, immigration and the tax authority monitor jointly, including site visits. A non-compliant holder is deregistered under section 14 of the EDB Act and the permit cancelled. <span class="mk mk-v">Verified</span></li>
    <li>Changing your employer, salary, shareholding or company structure without updating the EDB is the most common way a valid permit becomes an invalid one. <span class="mk mk-p">Practitioner</span></li>
    <li>The permanent-residence window is six months from the date you qualify. Diarise it at year 5.</li>
  </ul>

  <div class="note stop"><span class="t">Scams</span>
  <p>In August 2026 the EDB warned of fake Facebook and WhatsApp accounts impersonating it and soliciting payments. The EDB never requests fees through social media. Government fees are paid only inside the e-licensing portal or at the counter against a receipt.</p></div>
</section>

<!-- ============ 6 ENTRY ============ -->
<section class="s" id="entry">
  <div class="shead"><h2><span class="num">6</span>Entry, visas and citizenship</h2><span class="verified">Verified <b>12 Sept 2026</b>, visa list unverified</span></div>
  <ul>
    <li><strong>Visa-free entry.</strong> Nationals of the European Union, United Kingdom, United States, Canada, Australia, Japan, South Africa and roughly 120 other states enter without a visa, typically for 90 days a visit, up to 180 days a calendar year for tourism and 120 for business. Some nationalities receive 60 days; others a visa on arrival of 60 or 14 days; a short list must apply in advance. Immigration may ask for proof of funds of USD 100 a day, a return ticket and accommodation. <span class="mk mk-u">Unverified</span> Check the Passport and Immigration Office before travel.</li>
    <li><strong>Electronic Travel Authorisation.</strong> Legislated in the Finance Act 2026 for all non-citizens with a prescribed fee, commencing by proclamation. Until then the digital arrival form applies. <span class="mk mk-v">Verified</span></li>
    <li><strong>Tourist fee.</strong> A per-night tourist fee collected by accommodation providers is referred to in the 2026 Budget Annex; guides quote EUR 3 a night from October 2025. <span class="mk mk-p">Practitioner</span></li>
    <li><strong>Arriving before the permit.</strong> You may enter as a visitor and file from inside the country, but a lease, a bank account and a school place all go more smoothly with an approval in principle in hand. The Premium Visa is the clean bridge for a long recce.</li>
  </ul>

  <h3>Citizenship</h3>
  <ul>
    <li>Naturalisation under the Mauritius Citizenship Act after five years' residence for Commonwealth citizens and seven for others, continuous, with the final twelve months immediately before applying; knowledge of Creole, English or French; good character; financial stability. Grant is at the Prime Minister's discretion. The spouse of a citizen qualifies after four years. <span class="mk mk-p">Practitioner</span></li>
    <li>Whether time on an Occupation Permit counts as "residence" is treated by practitioners as yes, but the discretion is real and grants are uncommon. <span class="mk mk-u">Unverified</span></li>
    <li>A citizenship-by-investment provision at USD 500,000 with two years' residence exists on paper and is rarely used. Dual nationality is permitted for Mauritians. <span class="mk mk-u">Unverified</span></li>
    <li>The Mauritian passport ranked 27th on the 2026 Henley index with 147 destinations. <span class="mk mk-p">Practitioner</span></li>
  </ul>
</section>

<!-- ============ 7 PROPERTY ============ -->
<section class="s" id="property">
  <div class="shead"><h2><span class="num">7</span>Buying and renting property</h2><span class="verified">Rules verified <b>12 Sept 2026</b>; prices are Q3 2026 market data</span></div>
  <p class="intro">Non-citizens buy inside a fence: the EDB schemes and G+2 apartments. The 2025 route to buy any house at USD 500,000 is gone, the 10% duty never arrived, and State-land apartments are closing to foreign buyers. Rent first.</p>

  <h3>What you may buy</h3>
  <div class="tw"><table>
    <thead><tr><th>Scheme</th><th>What it is</th><th>Residence permit at USD 375,000</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>Integrated Resort Scheme (IRS)</td><td>Large luxury estates, often with golf, from the 2002 era</td><td>Yes</td><td>Freehold on private land. Highest service charges.</td></tr>
      <tr><td>Real Estate Scheme (RES)</td><td>Smaller estates on plots under 10 hectares</td><td>Yes</td><td>Freehold. Many resale opportunities.</td></tr>
      <tr><td>Property Development Scheme (PDS)</td><td>The current scheme for new estates, including Senior Living</td><td>Yes; Senior Living has no minimum for over-50s</td><td>Freehold. Most new coastal supply.</td></tr>
      <tr><td>Smart City Scheme</td><td>Mixed-use towns: Moka, Beau Plan, Cap Tamarin, Uniciti, Côte d'Or</td><td>Yes</td><td>Tax incentives revoked from 5 June 2025. Inland, near schools and offices.</td></tr>
      <tr><td>Invest Hotel Scheme</td><td>Hotel rooms and villas leased back to the operator</td><td>Yes</td><td>Owner use limited to a set number of nights.</td></tr>
      <tr><td>G+2 apartments</td><td>Any apartment in a building with at least two floors above ground, minimum price MUR 6m <span class="mk mk-p">Practitioner</span></td><td>Yes at USD 375,000</td><td>No new State-land leases permitting sale to non-citizens; 10% vendor levy on State-land resales unless reserved before 19 June 2026. Ask which land the building sits on before reserving.</td></tr>
      <tr><td>Anything else</td><td>Houses, land, commercial premises outside schemes</td><td>No</td><td>Requires Prime Minister's Office approval under the Non-Citizens (Property Restriction) Act, applied for through the EDB. Rare for residential use.</td></tr>
    </tbody></table></div>
  <p class="tnote">Sources 1, 2, 3, 10, 34. Beachfront strips (Pas Géométriques) are State leasehold everywhere on the island.</p>

  <h3>Transaction costs</h3>
  <div class="calc">
    <div class="t">Buying a USD 500,000 PDS villa, buyer's side</div>
    <table>
      <tr><td>Registration duty, 5% <span class="mk mk-v">Verified</span></td><td class="num">USD 25,000</td></tr>
      <tr><td>Notary, statutory degressive scale, roughly 1 to 2% blended <span class="mk mk-p">Practitioner</span></td><td class="num">USD 5,000 to 10,000</td></tr>
      <tr><td>EDB application fee for the acquisition <span class="mk mk-u">Unverified</span></td><td class="num">MUR 10,000 to 50,000</td></tr>
      <tr><td>Legal review of the deed or VEFA contract, optional</td><td class="num">Adviser's fee</td></tr>
      <tr class="tot"><td>Typical all-in above price</td><td class="num">6.5% to 8%</td></tr>
    </table>
    <p class="small" style="margin:.6rem 0 0">The seller pays 5% land transfer tax, plus the new 10% levy where the property is a State-land residential unit. No capital gains tax on resale by an individual. Mortgages for non-citizens are available from local banks at up to about 70% loan-to-value. <span class="mk mk-p">Practitioner</span></p>
  </div>

  <h3>Off-plan (VEFA) checks before you sign</h3>
  <ul>
    <li>The developer's EDB letter of approval for the specific scheme and unit, not a group brochure.</li>
    <li>A bank-issued completion guarantee (garantie financière d'achèvement) naming the project.</li>
    <li>A notarised reservation contract, then a deed of sale at the notary with stage payments tied to certified construction milestones.</li>
    <li>The syndic budget: annual charges on estates run from MUR 100,000 to well over MUR 500,000 for villas with shared golf and security. <span class="mk mk-p">Practitioner</span></li>
    <li>Which land the building sits on. State land carries the 10% vendor levy on resale and the ban on new sales to non-citizens.</li>
    <li>The USD 375,000 test is applied at the Bank of Mauritius selling rate on the deed date. A price quoted in rupees can fall under the line if the rupee strengthens between reservation and deed.</li>
  </ul>

  <h3>Prices and yields, Q3 2026</h3>
  <div class="tw"><table>
    <thead><tr><th>Area</th><th class="num">USD per m²</th><th>Typical stock</th></tr></thead>
    <tbody>
      <tr><td>Beau Champ, Belle Mare (east)</td><td class="num">2,480</td><td>Golf-estate villas MUR 40m to 85m</td></tr>
      <tr><td>Grand Baie (north)</td><td class="num">2,150</td><td>Apartments MUR 8m to 12m; villas MUR 20m to 80m</td></tr>
      <tr><td>Tamarin (west)</td><td class="num">1,750</td><td>Villas MUR 15m to 45m; apartments MUR 6m to 12m</td></tr>
      <tr><td>Black River (west)</td><td class="num">1,680</td><td>Marina apartments and estate villas</td></tr>
      <tr><td>Flic en Flac (west)</td><td class="num">1,580</td><td>Apartments from MUR 6m; family villas</td></tr>
      <tr><td>Moka, Highlands (centre)</td><td class="num">1,250</td><td>Smart City apartments and townhouses</td></tr>
    </tbody></table></div>
  <p class="tnote">Single private index, September 2026. <span class="mk mk-u">Unverified</span> Two-bed PDS apartments trade around USD 550,000 to 650,000; three-bed villas USD 700,000 to 1.2m; an entry G+2 apartment from about USD 135,000. Gross long-let yields 5 to 7%, net 3 to 4%. Real-estate foreign direct investment was USD 530m in 2024. Source 26, 29.</p>

  <h3>Renting</h3>
  <div class="tw"><table>
    <thead><tr><th>Area</th><th>Two-bed apartment, furnished</th><th>Three-bed house or villa</th></tr></thead>
    <tbody>
      <tr><td>Grand Baie, Pereybere</td><td>MUR 40,000 to 70,000</td><td>MUR 85,000 to 165,000</td></tr>
      <tr><td>Tamarin, Black River</td><td>MUR 35,000 to 55,000</td><td>MUR 70,000 to 200,000; estate villas with pool at the top</td></tr>
      <tr><td>Flic en Flac</td><td>MUR 32,000 to 48,000</td><td>MUR 50,000 to 100,000</td></tr>
      <tr><td>Moka, Ebène</td><td>MUR 28,000 to 42,000</td><td>MUR 47,000 to 94,000</td></tr>
      <tr><td>Quatre Bornes, Curepipe, Floréal</td><td>MUR 16,000 to 30,000</td><td>MUR 55,000 to 115,000 for large plateau houses</td></tr>
      <tr><td>East coast</td><td>Limited stock</td><td>MUR 65,000 to 160,000; listings average about MUR 100,000</td></tr>
      <tr><td>Bel Ombre (south)</td><td>Limited stock</td><td>MUR 70,000 to 140,000</td></tr>
    </tbody></table></div>
  <p class="tnote">Ranges pool four 2026 market sources. <span class="mk mk-p">Practitioner</span> Expat-segment rents fell about 5% in 2026, the first decline in several years. Inland is 20 to 30% cheaper than the coast for the same house. Source 27, 37, 39, 40.</p>
  <ul>
    <li><strong>Norms.</strong> Twelve-month renewable leases. Deposit one to two months, sometimes three. Agent's commission about one month's rent, usually paid by the tenant. Furnished is the default and carries a 15 to 25% premium.</li>
    <li><strong>Utilities.</strong> Electricity and water accounts often stay in the landlord's name. Get the account numbers on the lease and agree who pays the deposits.</li>
    <li><strong>Before signing.</strong> Visit in person. Ask about past water ingress; the island has 306 identified flood-prone zones. Check the water tank and pump, the mosquito screens, and mould in cupboards on the plateau. Sign a bilingual lease with a named inventory and photographs.</li>
    <li><strong>Timing.</strong> Rent a serviced apartment for four to eight weeks first. Choose the school, then the house. A rental signed from abroad on photographs is the most common expensive mistake.</li>
  </ul>
</section>

<!-- ============ 8 TAX ============ -->
<section class="s" id="tax">
  <div class="shead"><h2><span class="num">8</span>Tax, with worked examples</h2><span class="verified">Verified <b>12 Sept 2026</b> against PwC (reviewed June 2026), MRA, Finance Act 2026 summaries</span></div>
  <p class="intro">Mauritius is not a flat 15% country and has not been since 2023. It is a low-band progressive system with a remittance basis for foreign income, no tax on capital gains or inheritance, and a tax year that runs from 1 July.</p>

  <h3>Are you resident?</h3>
  <ul>
    <li>Resident if you spend 183 days or more in Mauritius in the income year (1 July to 30 June), or 270 days aggregated over that year and the two before it, or are domiciled here without a permanent home abroad. <span class="mk mk-v">Verified</span></li>
    <li>Residents are taxed on Mauritian income in full and on foreign-source income only when it is remitted to Mauritius. Non-residents pay on Mauritian-source income only. Employment physically performed in Mauritius is Mauritian-source wherever it is paid. <span class="mk mk-v">Verified</span></li>
    <li>Premium and Golden Visa holders: foreign employment income is taxed only if remitted; card spending from foreign accounts is not remittance; deposits declared as already taxed abroad are exempt.</li>
  </ul>

  <h3>Personal income tax from 1 July 2026</h3>
  <div class="tw"><table>
    <thead><tr><th>Chargeable income, MUR</th><th class="num">Rate</th><th>Income year 2025-26, for comparison</th></tr></thead>
    <tbody>
      <tr><td>First 500,000</td><td class="num">0%</td><td>0%</td></tr>
      <tr><td>500,001 to 1,000,000</td><td class="num">10%</td><td>10%</td></tr>
      <tr><td>1,000,001 to 12,000,000</td><td class="num">20%</td><td>20%</td></tr>
      <tr><td>Above 12,000,000</td><td class="num">35%</td><td>20% plus a 15% Fair Share Contribution on leviable income above 12m</td></tr>
    </tbody></table></div>
  <p class="tnote">Finance Act 2026 per KPMG and Regan van Rooy; the tax authority's Fair Share Contribution page still shows the 2025-26 rules. <span class="mk mk-v">Verified</span> The Solidarity Levy of 25% above MUR 3m was abolished on 1 July 2023. Dividends from Mauritian resident companies are exempt in an individual's hands. The tax-free lump sum for pensions and severance rose to MUR 3.5m. Sources 6, 8, 9, 22.</p>

  <div class="calc">
    <div class="t">Four worked examples, income year 2026-27</div>
    <table>
      <tr><th>Case</th><th class="num">Chargeable income</th><th class="num">Tax</th><th class="num">Effective</th></tr>
      <tr><td>Professional OP holder on MUR 100,000 a month</td><td class="num">1,200,000</td><td class="num">90,000</td><td class="num">7.5%</td></tr>
      <tr><td>Senior manager on MUR 250,000 a month</td><td class="num">3,000,000</td><td class="num">450,000</td><td class="num">15.0%</td></tr>
      <tr><td>Executive on MUR 1.25m a month</td><td class="num">15,000,000</td><td class="num">3,300,000</td><td class="num">22.0%</td></tr>
      <tr><td>Retiree remitting USD 24,000 of foreign pension, nothing else remitted</td><td class="num">1,143,840</td><td class="num">78,768</td><td class="num">6.9%</td></tr>
      <tr><td>Remote worker on a Premium Visa paid USD 120,000 abroad, spending by foreign card</td><td class="num">0 remitted</td><td class="num">0</td><td class="num">0%</td></tr>
    </table>
    <p class="small" style="margin:.6rem 0 0">Arithmetic on the bands above, before any deductions or treaty relief. USD converted at 47.66. The retiree case assumes the pension is taxable in Mauritius under the relevant treaty; most treaties allocate private pensions to the country of residence, so obtain a Tax Residence Certificate each year.</p>
  </div>

  <h3>Social contributions on employment</h3>
  <ul>
    <li><strong>Until 30 June 2027.</strong> Contribution Sociale Généralisée: basic salary up to MUR 50,000, employee 1.5% and employer 3%; above that, employee 3% and employer 6%. National Savings Fund: employee 1%, employer 2.5%, on a capped base. Employer training levy 1.5%. <span class="mk mk-v">Verified</span></li>
    <li><strong>From 1 July 2027.</strong> A defined-contribution National Pension Fund replaces CSG and the portable gratuity fund: employee 1.5% and employer 7.5% up to MUR 50,000; employee 3% and employer 10.5% above that, up to eight times median earnings. <span class="mk mk-v">Verified</span></li>
    <li>On a MUR 100,000 basic salary today the employee pays about MUR 3,000 a month in CSG and the employer MUR 6,000, before the savings fund and levy.</li>
  </ul>

  <h3>Companies, VAT and filing</h3>
  <ul>
    <li>Corporate tax 15%; 3% on export-of-goods profits; an 80% partial exemption on foreign dividends, interest and several other streams gives an effective 3% for Global Business Companies. Corporate Social Responsibility levy 2%. Climate levy 2% for turnover above MUR 50m. A corporate Fair Share Contribution of 5% applies above MUR 24m chargeable income to June 2028. A 15% minimum top-up tax applies to multinational groups above EUR 750m. <span class="mk mk-v">Verified</span></li>
    <li>VAT 15%. Registration threshold MUR 3m since the 2025-26 Budget. A 5% Insurance Premium Tax on general insurance starts 1 January 2027, which will show on car and home policies. <span class="mk mk-v">Verified</span></li>
    <li>Individual returns: e-filing deadline 15 October 2026 for the year to 30 June 2026; paper 30 September. Get a Tax Account Number online, free. Tax Residence Certificates are issued online only. <span class="mk mk-v">Verified</span></li>
    <li>Property: no annual property tax for residential owners, no capital gains tax, no inheritance or gift tax, no wealth tax. <span class="mk mk-v">Verified</span></li>
  </ul>

  <h3>Treaties and reporting</h3>
  <ul>
    <li>Forty-five double taxation agreements in force, including the United Kingdom, France, Germany, South Africa, India, China, the United Arab Emirates, Singapore, Italy, Luxembourg, Belgium and Sweden. No comprehensive treaty with the United States. <span class="mk mk-v">Verified</span></li>
    <li>FATCA Model 1 in force; the Common Reporting Standard since 2018, and CRS 2.0 from 1 January 2026, so your Mauritian bank reports balances to your other tax residences and your permit application asks for them. <span class="mk mk-v">Verified</span></li>
  </ul>

  <h3>Leaving your home tax system</h3>
  <div class="tw"><table>
    <thead><tr><th>From</th><th>What to settle before you count on the Mauritian rate</th></tr></thead>
    <tbody>
      <tr><td>United Kingdom</td><td>Run the Statutory Residence Test for the split year and the following years; UK ties, not Mauritian days, decide it. Pension transfers to a Mauritian QROPS avoid the 25% overseas transfer charge only when scheme and member are in the same country; the overseas transfer allowance is GBP 1,073,100. Rental income and UK-source gains on property stay UK-taxed. <span class="mk mk-p">Practitioner</span></td></tr>
      <tr><td>South Africa</td><td>Complete SARS tax emigration; the deemed disposal exit charge excludes South African immovable property. Retirement annuity withdrawal only after three years of non-residence. Reserve Bank allowances govern the outward transfer; the 60-day permit transfer must be planned around them. The treaty allocates pensions, interest and dividends. <span class="mk mk-p">Practitioner</span></td></tr>
      <tr><td>France</td><td>Register the departure with the tax office and the consular register. The treaty is old and favourable on pensions and dividends; French-source rental income stays French-taxed. Wealth tax on real estate continues on French property.</td></tr>
      <tr><td>Germany, Austria, Switzerland</td><td>Deregistration ends unlimited liability, but extended limited liability can follow German citizens moving to low-tax jurisdictions for up to ten years on German-source income. Swiss cantonal exit and pension-pillar rules differ by canton. Take advice before the move, not after.</td></tr>
      <tr><td>United States</td><td>Citizens and green-card holders file worldwide regardless. Use the foreign earned income exclusion and foreign tax credits; no treaty, so Mauritian tax is creditable only under domestic rules. FBAR and FATCA filings continue.</td></tr>
      <tr><td>India</td><td>The revised treaty limits capital-gains shelter through Mauritius. NRI status turns on Indian days, not Mauritian residence. <span class="mk mk-p">Practitioner</span></td></tr>
    </tbody></table></div>
  <p class="tnote">Home-country rules change independently of Mauritius; these rows are pointers, not advice. Sources 6, 7, 33.</p>
</section>

<!-- ============ 9 COSTS ============ -->
<section class="s" id="costs">
  <div class="shead"><h2><span class="num">9</span>What it costs to live here</h2><span class="verified">Prices dated <b>January to September 2026</b>; rates 11 Sept 2026</span></div>
  <p class="intro">Rupees first. Most guides quote dollars, which hides that a third of a household's costs are imported and priced off a currency that lost about 30% against the dollar in seven years, while rent and staff are priced locally.</p>

  <div class="figs" role="list">
    <div role="listitem"><div class="k">USD 1</div><div class="v">MUR 47.66</div><div class="s">Bank of Mauritius selling rate, 11 Sept 2026. All-time high 49.20 in March 2026.</div></div>
    <div role="listitem"><div class="k">EUR 1</div><div class="v">MUR 55.33</div><div class="s">Same date and source</div></div>
    <div role="listitem"><div class="k">GBP 1</div><div class="v">MUR 64.37</div><div class="s">Same date and source</div></div>
    <div role="listitem"><div class="k">ZAR 1</div><div class="v">MUR 2.83</div><div class="s">Market mid-rate, 12 Sept 2026</div></div>
  </div>

  <h3>Monthly budgets, rent included</h3>
  <div class="tw"><table>
    <thead><tr><th>Household</th><th>Local, inland or modest coast</th><th>Comfortable, coastal</th><th>Estate villa, international school</th></tr></thead>
    <tbody>
      <tr><td>Single</td><td>MUR 35,000 to 55,000</td><td>MUR 85,000 to 140,000</td><td>MUR 180,000 and up</td></tr>
      <tr><td>Couple</td><td>MUR 55,000 to 110,000</td><td>MUR 130,000 to 230,000</td><td>MUR 300,000 and up</td></tr>
      <tr><td>Family of four, two at school</td><td>MUR 110,000 to 220,000</td><td>MUR 250,000 to 400,000</td><td>MUR 480,000 to 700,000</td></tr>
      <tr><td>Retired couple</td><td>MUR 80,000 to 130,000</td><td>MUR 135,000 to 225,000</td><td>MUR 300,000 and up</td></tr>
    </tbody></table></div>
  <p class="tnote">Pooled from five 2026 budget surveys. <span class="mk mk-p">Practitioner</span> The top tier corresponds to the USD 8,000 to 15,000 a month that consultancies quote for a family in a pool villa with two children in secondary. Sources 29, 30, 37, 39, 40.</p>

  <h3>Line by line</h3>
  <div class="tw"><table>
    <thead><tr><th>Item</th><th>Figure, MUR</th><th>Import or currency sensitive?</th><th>Source, date</th></tr></thead>
    <tbody>
      <tr><td>Groceries, one person, mixed supermarket</td><td>12,000 to 15,000 a month; local-market diet 8,000 to 10,000</td><td>Partly. Imported lines run 30 to 70% above European shelf prices</td><td>Market guide, April 2026</td></tr>
      <tr><td>Groceries, family of four</td><td>25,000 to 35,000 local; 40,000 to 50,000 mixed; 60,000 and up on European brands</td><td>Partly</td><td>Market guide, April 2026</td></tr>
      <tr><td>Staples</td><td>Rice 86 a kg; bread 32 for 500 g; milk 65 a litre; chicken 261 a kg; beef 574 a kg</td><td>Beef and dairy yes</td><td>Price survey, March 2026</td></tr>
      <tr><td>Eating out</td><td>Street food 15 to 300; mid-range 800 to 1,500 a head; fine dining 2,000 to 5,000</td><td>Wine yes</td><td>Market guide, April 2026</td></tr>
      <tr><td>Electricity</td><td>3,000 to 5,000 without air conditioning; 8,000 to 12,000 with. Tariffs rose 15% on 1 May 2026; top band about MUR 10 a kWh above 300 kWh</td><td>Fuel-linked</td><td>CEB schedule; press, May 2026 <span class="mk mk-v">Verified base tariff</span></td></tr>
      <tr><td>Water</td><td>300 to 500 a month; first 10 m³ at a flat 45; pool surcharge 500 above 50 m³</td><td>No</td><td>CWA tariff 2026 <span class="mk mk-v">Verified</span></td></tr>
      <tr><td>Fibre broadband</td><td>1,200 for 50 Mbps; 1,500 for 100; 2,000 for 200; 6,500 for 1 Gbps. Installation 1,500, two to three weeks</td><td>No</td><td>Operator price lists, June 2026</td></tr>
      <tr><td>Mobile</td><td>Prepaid 200 GB for 30 days at 315; a typical contract around 650</td><td>No</td><td>Operator price lists, June 2026</td></tr>
      <tr><td>Housekeeper</td><td>Legal full-time minimum 17,745 a month from 1 January 2026; part-time three half-days 5,000 to 7,500; hourly 100 to 200</td><td>No</td><td>Wage regulations 2026 <span class="mk mk-v">Verified minimum</span></td></tr>
      <tr><td>Petrol and diesel</td><td>70.65 and 71.25 a litre from 15 August 2026, up from 58.45 in March</td><td>Yes, administered price</td><td>State Trading Corporation <span class="mk mk-v">Verified</span></td></tr>
      <tr><td>Road tax</td><td>4,500 a year up to 1,250 cc; 5,000 to 1,600 cc; 10,000 to 1,850 cc; 15,000 above 2,250 cc. Electric discount removed</td><td>No</td><td>National Land Transport Authority, July 2025 <span class="mk mk-v">Verified</span></td></tr>
      <tr><td>Car insurance</td><td>1,500 to 3,500 a month comprehensive; 5% premium tax from January 2027</td><td>No</td><td>Market guide, 2026</td></tr>
      <tr><td>Cars</td><td>New small hatchback 600,000 to 750,000; reconditioned Japanese SUV 2019 to 2022, 450,000 to 900,000; long-term rental from 20,000 a month</td><td>Yes, duty 45 to 100% on petrol cars</td><td>Dealer listings, 2026</td></tr>
      <tr><td>Private GP</td><td>600 to 1,200 in town; 1,000 to 3,000 in expat areas. Specialist 2,000 to 6,000</td><td>No</td><td>Clinic survey, March 2026</td></tr>
      <tr><td>Health insurance</td><td>Local plans 2,000 to 4,000 a month per person; international with evacuation USD 120 to 500 a month per adult</td><td>International yes</td><td>Insurer quotes, May 2026</td></tr>
      <tr><td>School, per child per year</td><td>150,000 to 660,000 depending on school and age; see §11</td><td>No, but rising 5 to 8% a year</td><td>Published fee sheets 2025-26 and 2026-27 <span class="mk mk-v">Verified</span></td></tr>
      <tr><td>Coworking</td><td>Day pass 500; dedicated desk 4,000 to 13,100 a month</td><td>No</td><td>Operator price lists, 2026</td></tr>
    </tbody></table></div>
  <p class="tnote">Sources 30, 37, 39, 40, 41, 42, 43, 44, 45.</p>

  <div class="note"><span class="t">The currency point</span>
  <p>The rupee fell 6.7% against the dollar in 2024 and 3.3% in the year to September 2026. If you are paid in foreign currency, coastal rents and local wages get cheaper for you over time and imports do not. If you are paid in rupees with school fees abroad or a pension to send home, the reverse. Keep savings in the foreign-currency accounts every local bank offers at no minimum balance.</p></div>
</section>

<!-- ============ 10 AREAS ============ -->
<section class="s" id="areas">
  <div class="shead"><h2><span class="num">10</span>Where to live</h2><span class="verified">Reviewed <b>12 Sept 2026</b></span></div>
  <p class="intro">The school decides where you live, not the other way round. After that, the choice is between a hot dry west coast, a busy convenient north, a cool wet centre near the offices, and a quiet east and south with long drives.</p>
  <div class="tw"><table>
    <thead><tr><th>Region</th><th>Character</th><th>Who chooses it</th><th>Three-bed rent</th><th>Watch for</th></tr></thead>
    <tbody>
      <tr><td>North: Grand Baie, Pereybere, Mont Choisy, Trou aux Biches, Cap Malheureux</td><td>Largest foreign community, restaurants, malls, marina, the calmest swimming beaches. The biggest international school and the French school are at Mapou, 15 minutes inland.</td><td>Families wanting walkable amenities; people working from home or in the north; French, British and a growing South African community.</td><td>MUR 85,000 to 165,000</td><td>Highest housing costs on the island. Traffic to Ebène about an hour at peak. Petty theft in tourist zones. Inland Pamplemousses and Triolet give the same schools for less.</td></tr>
      <tr><td>West: Tamarin, Black River, La Gaulette, Flic en Flac</td><td>Driest and sunniest coast, about 860 mm of rain a year at Flic en Flac. Surf, kitesurf, mountains. Black River's marina and estates hold the wealthiest addresses. Flic en Flac is cheaper and family-oriented.</td><td>Outdoor families, remote workers, retirees, the South African community around Tamarin.</td><td>Tamarin and Black River MUR 95,000 to 210,000; Flic en Flac MUR 55,000 to 105,000</td><td>Hot summers. River-mouth flooding in torrential rain. Twenty-five minutes to the Mapou schools on a good day; the west has its own English secondary near Flic en Flac and growing primaries in Tamarin.</td></tr>
      <tr><td>Centre: Moka, Ebène, Quatre Bornes, Curepipe, Floréal, Vacoas</td><td>The offices, the two main private hospitals, most schools including the IB school and the French lycées, the Metro. Three to five degrees cooler; Curepipe gets over 1,000 mm of rain and is mould-prone.</td><td>Professionals working in Ebène or Port Louis; families with secondary-age children; budget renters.</td><td>MUR 47,000 to 95,000</td><td>No beach; the sea is 20 to 30 minutes away. Damp. Buy dehumidifiers.</td></tr>
      <tr><td>East: Belle Mare, Trou d'Eau Douce, Beau Champ</td><td>Windward, wetter, quiet. Resort and golf estates; the Anahita estate has its own primary campus.</td><td>Retirees, golfers, people who want seclusion.</td><td>MUR 65,000 to 160,000</td><td>Forty-five to sixty minutes to Ebène. Few schools and services.</td></tr>
      <tr><td>South: Bel Ombre, Chemin Grenier; south-east: Mahebourg, Blue Bay</td><td>Wild coast, eco-estates and golf at Bel Ombre. Mahebourg is authentic and 15 minutes from the airport.</td><td>Retirees and nature lovers without school-age children.</td><td>Bel Ombre MUR 70,000 to 140,000; Mahebourg lower, local market</td><td>Far from everything in the north. Few expat services.</td></tr>
    </tbody></table></div>
  <p class="tnote">Rents as in §7. Commutes: Grand Baie to Ebène about 32 minutes off-peak and an hour at peak; airport to Grand Baie 60 to 90 minutes; peaks 07:00 to 09:30 and 15:00 to 18:00. Sources 35, 37, 39, 46.</p>
</section>

<!-- ============ 11 SCHOOLS ============ -->
<section class="s" id="schools">
  <div class="shead"><h2><span class="num">11</span>Schools</h2><span class="verified">Fee sheets <b>2025-26 and 2026-27</b>, verified where published</span></div>
  <p class="intro">English-medium schools follow Cambridge to IGCSE and A-Level, several adding the International Baccalaureate. French schools follow the national curriculum to the baccalauréat under the AEFE network. Most charge non-citizens more, and the application starts before the permit application.</p>
  <div class="tw"><table>
    <thead><tr><th>School</th><th>Where, curriculum</th><th>Annual fees, MUR</th><th>One-off and notes</th></tr></thead>
    <tbody>
      <tr><td>Northfields International</td><td>Mapou, north. Cambridge to IGCSE, IB Diploma. Ages 18 months to 18</td><td>2026-27, non-citizens: nursery 174,900; K2 to grade 3 311,300; grades 6 to 10 605,000; grades 11 to 12 656,700 <span class="mk mk-v">Verified</span></td><td>Inception fee about 58,000; refundable deposit about 78,600; sibling discounts 7.5% and 15%; 4% for upfront payment</td></tr>
      <tr><td>Le Bocage International</td><td>Mount Ory, Moka. IB Middle Years, Diploma and Career-related, BTEC. Ages 11 to 18</td><td>Not published; estimates 424,000 to 464,000 <span class="mk mk-u">Unverified</span></td><td>The island's IB secondary</td></tr>
      <tr><td>International Preparatory School (IPS)</td><td>Mapou, Moka and Tamarin campuses. British primary</td><td>About 200,000 to 335,000 by estimate <span class="mk mk-u">Unverified</span></td><td>Register 12 to 18 months ahead; waiting lists at primary entry</td></tr>
      <tr><td>Westcoast International Secondary</td><td>Cascavelle, near Flic en Flac. Cambridge, IB Diploma</td><td>2025 non-citizens: forms 1 to 3 294,000; forms 4 to 5 309,600; forms 6 to 7 356,400 <span class="mk mk-v">Verified</span></td><td>First year at 11 about 436,000 with one-offs; exam fees extra</td></tr>
      <tr><td>Clavis International Primary</td><td>Moka and Beau Champ. IB Primary Years, ages 3 to 12</td><td>2026-27 non-citizens: years 1 to 6 334,400; pre-reception 177,100 <span class="mk mk-v">Verified</span></td><td>Feeds Le Bocage</td></tr>
      <tr><td>Lighthouse Primary and Secondary</td><td>Ebène and Moka area. Cambridge</td><td>2026-27: 173,600 to 390,550 <span class="mk mk-v">Verified</span></td><td>50% off the third child</td></tr>
      <tr><td>Greencoast International</td><td>Beau Plan, Pamplemousses. Cambridge</td><td>2026 primary, non-nationals 312,000; pre-primary 208,800 <span class="mk mk-v">Verified</span></td><td>Enrolment 75,000; three-month deposit</td></tr>
      <tr><td>Lycée La Bourdonnais</td><td>Curepipe. French, AEFE, nursery to bac</td><td>2025-26: nursery 149,000; elementary 165,000; collège 194,000; lycée 209,000 <span class="mk mk-v">Verified</span></td><td>5% discount for full payment; first year about 185,000 with one-offs</td></tr>
      <tr><td>Lycée des Mascareignes</td><td>Moka. French, AEFE, lycée only</td><td>2026-27: standard 234,410 for French and Mauritian nationals, 286,880 others; international section 278,520 or 390,610 <span class="mk mk-v">Verified</span></td><td>First registration 100,000</td></tr>
      <tr><td>École du Centre</td><td>Helvetia, Rose Hill area. French, nursery to bac</td><td>2025-26: nursery 154,935; primary 179,275; secondary 204,635 <span class="mk mk-v">Verified</span></td><td>Registration 36,000; waiting list</td></tr>
      <tr><td>École du Nord</td><td>Mapou. French, nursery to collège</td><td>2025-26, other nationalities: 184,222 to 240,769 <span class="mk mk-v">Verified</span></td><td>First registration 45,500 to 74,000 by level</td></tr>
      <tr><td>École Paul et Virginie</td><td>Tamarin. French primary</td><td>2025-26: 162,470 to 170,590 <span class="mk mk-v">Verified</span></td><td>Registration 55,000</td></tr>
      <tr><td>Saint Exupéry International</td><td>Grand Baie. Francophone international</td><td>2026-27: 222,000 <span class="mk mk-v">Verified</span></td><td>Insurance and supplies included</td></tr>
      <tr><td>Telfair, Alexandra House, Hampton</td><td>Moka; Tamarin; Cascavelle. English primaries</td><td>Not published online <span class="mk mk-u">Unverified</span></td><td>Ask the school directly</td></tr>
    </tbody></table></div>
  <p class="tnote">Add a school bus at MUR 18,000 to 40,000 a year, uniforms MUR 5,000 to 15,000, and 5 to 8% annual fee inflation. Two children in secondary at the largest school cost MUR 1.2m a year in tuition alone. Universities: Middlesex Mauritius USD 8,500 to 13,000 a year; Curtin Mauritius USD 3,500 to 5,500; African Leadership University USD 7,500 to 10,000. Sources 47 to 52.</p>
  <ul>
    <li>Six to twelve months' notice is normal; longer is safer. Waiting lists concentrate at primary entry and the transition to secondary, which is exactly where relocating families land.</li>
    <li>The English secondary schools are at Mapou, Cascavelle, Moka and Ebène. That geography, not the beach, sets the shortlist of areas.</li>
    <li>State schools are free and teach in English and French with Creole in the classroom; a few expat families use them at primary level in the villages.</li>
  </ul>
</section>

<!-- ============ 12 HEALTH ============ -->
<section class="s" id="health">
  <div class="shead"><h2><span class="num">12</span>Healthcare</h2><span class="verified">Reviewed <b>12 Sept 2026</b></span></div>
  <p class="intro">Good private care for everyday and acute needs, free public care as the fallback, and a ceiling: complex cardiac, oncology and neurosurgery cases go to South Africa, Réunion or France. Evacuation cover is the one clause that matters.</p>
  <ul>
    <li><strong>Public.</strong> Free at the point of use for permit holders at the five regional hospitals. Specialist waits run to weeks or months; most foreign residents use it for emergencies only. <span class="mk mk-p">Practitioner</span></li>
    <li><strong>Private.</strong> C-Care Wellkin at Moka, the former Apollo Bramwell, is the largest, with intensive care and 24-hour emergency; C-Care Darné at Floréal, the former Clinique Darné, has maternity and intensive care; C-Care Grand Baie is outpatient and diagnostics. Also City Clinic in Port Louis, Clinique du Nord at Baie du Tombeau, Bon Pasteur at Rose Hill, Clinique Muller at Curepipe. Doctors trained in France, the United Kingdom, India and South Africa; English and French spoken.</li>
    <li><strong>Prices.</strong> GP MUR 600 to 3,000; specialist 2,000 to 6,000; MRI 8,000 to 20,000; private ward about 8,300 a night, intensive care about 14,450; caesarean 65,000 to 150,000; hip replacement 250,000 to 450,000. Cash patients deposit the full estimate before admission. <span class="mk mk-p">Practitioner</span></li>
    <li><strong>Insurance.</strong> Local plans from about MUR 2,000 a month cover care inside Mauritius with low inpatient caps and a 25% loading for non-citizens at one state insurer. International plans with evacuation cost USD 120 to 500 a month per adult, USD 500 to 900 for a family of four. Air ambulance to Johannesburg costs USD 40,000 to 80,000 uninsured. Many families hold both a local plan for direct billing and an international one for evacuation. No permit category requires insurance, but the Premium Visa asks for it.</li>
    <li><strong>Before you arrive.</strong> The permit medical is done here: blood tests and a chest X-ray at a registered clinic. Bring twelve months of any repeat prescription with the prescribing letter; pharmacies are well stocked and many drugs are over the counter. Continuity for chronic conditions is the thing to arrange, not emergency care.</li>
    <li><strong>Mosquito-borne disease.</strong> A chikungunya outbreak in 2026 passed 2,800 confirmed cases by mid-May, concentrated in the Beau Bassin and Rose Hill area; a travel notice was still active in September. Dengue circulates at low level. The vector bites by day; screens and repellent are routine. No yellow fever certificate unless arriving from a risk country. <span class="mk mk-v">Verified</span></li>
  </ul>
</section>

<!-- ============ 13 BANKING ============ -->
<section class="s" id="banking">
  <div class="shead"><h2><span class="num">13</span>Banking</h2><span class="verified">MCB tariff <b>1 Sept 2026</b>; practice reviewed 12 Sept 2026</span></div>
  <ul>
    <li><strong>Who can open.</strong> Permit holders are treated like citizens, and an EDB approval letter is accepted before the card issues. Without a permit, the private-banking channels accept non-residents at high minimums: about USD 100,000 for a personal account, and consultancies quote MCB private banking at USD 500,000 for remote opening. <span class="mk mk-p">Practitioner</span></li>
    <li><strong>Documents.</strong> Passport, permit or approval letter, proof of Mauritian address (lease or utility bill), employment contract or evidence of income and source of funds, sometimes a reference from your existing bank. Three to ten working days once complete; two to four weeks in practice because the lease comes first. <span class="mk mk-p">Practitioner</span></li>
    <li><strong>Banks.</strong> MCB is the largest, with the Juice app for transfers and bills. SBM, Absa (which absorbed HSBC's retail bank in July 2024), AfrAsia for multi-currency and international clients, Bank One, MauBank. HSBC and Standard Chartered are corporate only.</li>
    <li><strong>What it costs at MCB.</strong> Savings account no minimum, 3.35% above MUR 10,000; current account MUR 28.75 a month; foreign-currency accounts in USD, EUR, GBP, AUD and ZAR with no minimum; outward SWIFT MUR 250 online plus 0.125%, minimum USD 10, maximum USD 75; foreign ATM 1%; card currency conversion 2.5%; Visa Platinum MUR 1,725 a year. <span class="mk mk-v">Verified</span></li>
    <li><strong>Exchange control.</strong> None since 1994. You may hold foreign currency and remit freely. Cheques remain common for rent.</li>
    <li><strong>Fintech.</strong> Wise sends to rupees but does not issue accounts or cards to Mauritian residents; Revolut is not available to residents, though foreign-issued cards work. Budget for a local card early.</li>
    <li><strong>Company accounts.</strong> Slower than personal: expect two to six weeks of know-your-customer review for a domestic company and longer for a Global Business Company. Start it the day the company is incorporated, because the Investor permit's 60-day transfer needs the account to exist.</li>
  </ul>
</section>

<!-- ============ 14 DRIVING ============ -->
<section class="s" id="driving">
  <div class="shead"><h2><span class="num">14</span>Driving and cars</h2><span class="verified">Reviewed <b>12 Sept 2026</b></span></div>
  <ul>
    <li><strong>Licence.</strong> Drive on the left. Exchange a foreign licence at the Traffic Branch, Line Barracks, Port Louis: a letter to the officer in charge, the original licence, an authenticity attestation from the issuing authority, proof of address, a permit with at least six months' validity, passport, two photos, a medical certificate if over 60. Fee MUR 1,500, about two weeks. UK, EU and South African licences are exchanged without a test in practice; a theory test may be required for others. A foreign licence is generally accepted for the first year of residence. <span class="mk mk-p">Practitioner</span></li>
    <li><strong>Buying.</strong> Most people buy a reconditioned Japanese import locally: a 2019 to 2022 SUV at MUR 450,000 to 900,000, a hybrid hatchback from about 550,000, a new small car 600,000 to 750,000. Long-term rental from MUR 20,000 a month bridges the first months.</li>
    <li><strong>Importing your own.</strong> There is no duty exemption for non-citizens; the exemption is for returning citizens. Excise runs 0% under 550 cc to 100% above 2,000 cc on petrol cars, less for hybrids and 15 to 25% for electric, plus 15% VAT, on a value depreciated 9% for the first month and 1% a month after, to a 50% floor. Second-hand imports need a Ministry of Commerce permit before shipment and must be right-hand drive; age limits are quoted at under three years for petrol and under four for diesel, with electric cars to ten. Confirm the current schedule before you ship, because sources conflict. <span class="mk mk-u">Unverified age limits</span></li>
    <li><strong>Running costs.</strong> Fuel MUR 70.65 a litre; road tax MUR 4,500 to 15,000 a year by engine size; insurance MUR 1,500 to 3,500 a month. Road tax renewed more than 15 days late carries a 50% penalty.</li>
    <li><strong>Safety.</strong> 124 road deaths in 2025, one of the worst years on record, and a 15% rise in the first seven months of 2026, mostly motorcyclists and pedestrians. Drive slowly at night: unlit bikes, pedestrians and dogs. <span class="mk mk-v">Verified</span></li>
    <li><strong>Without a car.</strong> The Metro Express runs 30 km from Port Louis to Curepipe with a branch to Réduit, 06:00 to 19:00, about every ten minutes; a stored-value card costs MUR 150. Buses are MUR 17 to 47 a journey. Taxis are unmetered, so agree the fare; the local app is Yugo. Uber and Bolt do not operate. Airport to Grand Baie by taxi MUR 2,500 to 3,500.</li>
  </ul>
</section>

<!-- ============ 15 ARRIVAL ============ -->
<section class="s" id="arrival">
  <div class="shead"><h2><span class="num">15</span>Shipping, pets, utilities</h2><span class="verified">Customs rules verified <b>12 Sept 2026</b>; pet rules from the December 2022 ministry guidelines</span></div>

  <h3>Household goods</h3>
  <ul>
    <li><strong>Duty and VAT free</strong> for a non-citizen holding an occupation or work permit: goods bought abroad, not for sale, imported within six months of your arrival (extendable for cause), not sold for four years. You must be in Mauritius before clearance and provide a detailed packing list. The customs page names permit holders; retirees are reported to receive the same treatment. <span class="mk mk-v">Verified for OP holders</span></li>
    <li><strong>Excluded</strong> from "household effects": vehicles, alcohol, tobacco. Lithium batteries are refused in sea freight by most movers. Art above MUR 500,000 must be declared. Cash above EUR 10,000 equivalent is declared on arrival.</li>
    <li><strong>Transit and cost.</strong> From the United Kingdom, a full 20-foot container takes six to eight weeks and costs GBP 2,500 to 4,500; shared containers eight to twelve weeks. From Durban, four to six weeks at USD 3,000 to 7,500, or ZAR 135,000 to 295,000 door to door. From France, four to six weeks at EUR 4,000 to 8,000. From Dubai, two to three weeks. <span class="mk mk-p">Practitioner</span></li>
  </ul>

  <h3>Dogs and cats</h3>
  <ul>
    <li>Only from rabies-free or rabies-controlled countries. Realistic lead time from a standing start: four to six months.</li>
    <li>Import permit from the Livestock and Veterinary Division at least three months before departure, one form per animal, with a motivation letter and your permit, vaccination book, sterilisation certificate (mandatory unless breeding) and identification.</li>
    <li>ISO microchip, then rabies vaccination, then a rabies titre sampled at least four weeks after vaccination showing 0.5 IU/ml or more, then a three-month wait from sampling. The result is valid three to twelve months before shipment. Dogs also need a negative Ehrlichia test within 45 days and a negative Brucella test. Standard vaccines current but not within two weeks of the flight. All reports endorsed by the exporting veterinary authority.</li>
    <li>Arrival as manifest cargo through a local broker; notify the division four days ahead. Quarantine at Réduit from five days, longer by country of origin, at MUR 15 a day; you bring the food. Import fee MUR 500 and clearance MUR 500 per animal. Direct flights from Johannesburg, Paris, London and Dubai avoid transit stress. Broker fees run EUR 300 to 400 per animal. <span class="mk mk-p">Practitioner</span></li>
    <li>Banned: pit bull types, American Staffordshire, Japanese Tosa, Dogo Argentino, Fila Brasileiro, Boerboel. Rottweilers, Dobermanns, Cane Corsos, Ridgebacks and similar are allowed only as registered pure-breds. Dog registration with the animal-welfare society has been compulsory since October 2025.</li>
  </ul>

  <h3>Identity, SIM, utilities</h3>
  <ul>
    <li>No national identity card for non-citizens: the residence permit card is your identity. There is no municipal address registration; the lease is proof of address for everything.</li>
    <li>SIM registration is mandatory: passport, proof of address, permit where applicable and a selfie match. Airport tourist SIMs cost MUR 750 to 1,500 and will do for the first weeks.</li>
    <li>Electricity and water accounts usually stay in the landlord's name. Deposits for a new electricity account are MUR 200 to 1,200. Fibre installation takes two to three weeks. Buy a small UPS for the router; storm cuts are routine and the grid ran on red alerts through 2025.</li>
    <li>Water supply, not quality, is the issue: the main reservoir was at 44% in June 2026 after the driest February in a century, with scheduled supply hours in some areas. Rent a house with a tank and pump.</li>
  </ul>
</section>

<!-- ============ 16 BUSINESS ============ -->
<section class="s" id="business">
  <div class="shead"><h2><span class="num">16</span>Setting up a company</h2><span class="verified">Verified <b>12 Sept 2026</b>; registrar fees unverified</span></div>
  <div class="tw"><table>
    <thead><tr><th>Vehicle</th><th>Use</th><th>Tax</th><th>Requirements</th><th>Annual regulator fee</th></tr></thead>
    <tbody>
      <tr><td>Domestic company</td><td>Trading in Mauritius; the vehicle behind an Investor permit</td><td>15%, 3% on export of goods</td><td>One shareholder, one director ordinarily resident in Mauritius, no minimum capital, 100% foreign ownership. Online incorporation in two to five working days.</td><td>Registrar annual return MUR 500; incorporation fee reported as nil to MUR 4,950 <span class="mk mk-u">Unverified</span></td></tr>
      <tr><td>Global Business Company</td><td>Holding, treasury, fund and international structures using the treaty network</td><td>15% with 80% partial exemption on qualifying foreign income, effective 3%</td><td>Two resident directors, principal bank account in Mauritius, a licensed management company, substance. Two to four weeks. <span class="mk mk-v">Verified</span></td><td>USD 2,600 from 1 July 2026, plus USD 600 processing</td></tr>
      <tr><td>Authorised Company</td><td>Non-resident vehicles controlled from abroad</td><td>Not taxed in Mauritius except local-source income; no treaty access</td><td>Registered agent must be a management company</td><td>USD 1,400 from 1 July 2026</td></tr>
      <tr><td>Freeport</td><td>Warehousing, light manufacturing for re-export</td><td>3% on freeport manufacturing</td><td>Freeport certificate via the EDB's licensing system</td><td>By activity</td></tr>
      <tr><td>Virtual asset and fintech licences</td><td>Exchanges, custodians, wallets, advisers</td><td>Corporate rules</td><td>Financial Services Commission licence, minimum capital MUR 2m to 6.5m by class, two resident directors, a resident senior executive, physical office, compliance officer; five to nine months end to end <span class="mk mk-p">Practitioner</span></td><td>USD 1,900 to 5,000</td></tr>
    </tbody></table></div>
  <ul>
    <li>Executive directors' personal liability for company taxes was narrowed in the Finance Act 2026, and false-information offences extended to former licensees. Filing discipline is the main compliance risk; most difficulty comes from casually prepared files, not from the framework.</li>
    <li>Hiring locally: 45-hour week, 20 days' leave and 15 sick days after a year, 16 weeks' maternity, four weeks' paternity, 30 days' notice, an end-of-year bonus of one twelfth of annual earnings. Minimum wage MUR 17,745 a month from January 2026. Employer on-costs about 6% CSG above MUR 50,000, 2.5% savings fund, 1.5% training levy. <span class="mk mk-v">Verified</span></li>
    <li>A new Private Wealth Management licence for family offices, a Variable Capital Company protected-cell option and a fintech governance committee were announced in the 2026-27 Budget.</li>
  </ul>
</section>

<!-- ============ 17 DOWNSIDES ============ -->
<section class="s" id="downsides">
  <div class="shead"><h2><span class="num">17</span>The honest downsides</h2><span class="verified">Data as of <b>September 2026</b></span></div>
  <p class="intro">Mauritius is not the cheap island the brochures imply. These are the things people wish they had priced in, with numbers where they exist.</p>
  <ul>
    <li><strong>Import prices.</strong> Imported food, furniture and electronics cost 30 to 70% more than in Europe. Petrol cars carry 45 to 100% duty. A family running two European-brand shopping baskets spends MUR 60,000 a month on groceries.</li>
    <li><strong>Utility shocks in one year.</strong> Electricity up 15% in May 2026; fuel up 10% in April and 10% in August; water rationing after the driest February in a hundred years; peak-time load management on the grid. A floating power plant was contracted as a stopgap.</li>
    <li><strong>Rupee.</strong> Down about 30% against the dollar since 2019. Good for foreign earners, corrosive for anyone paid in rupees with obligations abroad.</li>
    <li><strong>Traffic and roads.</strong> An hour from Grand Baie to Ebène at peak. 124 road deaths in 2025 in a population of 1.26 million, and 2026 running 15% worse.</li>
    <li><strong>Damp.</strong> On the plateau, shoes, leather and electronics are lost to mould without dehumidifiers and air conditioning. Salt corrosion on the coast. Budget for both.</li>
    <li><strong>Dogs and mosquitoes.</strong> Around 300,000 stray dogs by the animal-welfare society's 2025 estimate; a chikungunya outbreak of over 2,800 confirmed cases in 2026.</li>
    <li><strong>Healthcare ceiling.</strong> Complex cases fly out. An uninsured air ambulance is USD 40,000 to 80,000. Local insurers cap inpatient cover low and load non-citizens.</li>
    <li><strong>Bureaucracy and rising bars.</strong> Original-plus-copy culture, in-person visits at immigration, the Traffic Branch and the tax authority. Permits now renew on rising turnover and income tests, and the permanent-residence bar moved from three years to five with far higher thresholds in 2025. What was granted easily in 2022 is not the standard now.</li>
    <li><strong>Distance.</strong> Eleven to twelve hours to Europe, four to Johannesburg, six and a half to Dubai. Peak-season fares are high and every family event abroad costs a week and a long-haul ticket.</li>
    <li><strong>Small circles.</strong> Expat turnover is high and friendships take time. Local salaries are a fraction of European ones, which shapes who you meet and how you employ.</li>
    <li><strong>Scams.</strong> Fake EDB accounts soliciting fees; "beachfront" rentals that are not; deposits withheld for landlord repairs; airport taxi touts; unofficial facilitators promising permits. Pay government fees only through the portal, and never pay a facilitator who is not a licensed corporate service provider or law firm.</li>
  </ul>
</section>

<!-- ============ 18 CHECKLIST ============ -->
<section class="s" id="checklist">
  <div class="shead"><h2><span class="num">18</span>Master checklist</h2><span class="verified">Reviewed <b>12 Sept 2026</b></span></div>
  <p class="intro">Three to six months from first decision to a settled family is realistic. The bank account and the school place set the pace, not the permit.</p>

  <h4>Six months out</h4>
  <ul class="check">
    <li>Pick the route in §3 and read its permit in §4. Note the year-3 and year-5 tests, not only the entry threshold.</li>
    <li>Apply to schools. Pay deposits. This is the earliest deadline you face.</li>
    <li>Take home-country tax advice on the exit year (§8) and plan the capital transfer around exchange-control or pension rules.</li>
    <li>Order police clearances, apostilled birth and marriage certificates, sworn translations if not in English or French.</li>
    <li>Start the pet protocol: microchip, rabies vaccination, titre test, three-month wait.</li>
    <li>Book a recce of two weeks. Visit the shortlisted areas on a weekday at 08:00 and 17:00.</li>
  </ul>
  <h4>Three months out</h4>
  <ul class="check">
    <li>Incorporate the company if on the Investor route; open the company account the same week.</li>
    <li>File on the EDB portal. Pay USD 50. Keep the reference.</li>
    <li>Arrange international health insurance with evacuation, effective from arrival.</li>
    <li>Get shipping quotes for a full and a shared container; decide what not to ship (cars, lithium, anything cheap to replace).</li>
    <li>Book four to eight weeks of serviced accommodation near the school.</li>
    <li>Apply for the pet import permit.</li>
  </ul>
  <h4>On approval in principle</h4>
  <ul class="check">
    <li>Pay the permit fee within the 90-day window; book the medical at a registered clinic in Mauritius.</li>
    <li>Sign the lease; photograph the inventory; get the electricity and water account numbers.</li>
    <li>Open the personal bank account with the approval letter and the lease.</li>
    <li>Attend the issuance appointment with originals. Collect the card.</li>
  </ul>
  <h4>First 60 days</h4>
  <ul class="check">
    <li>Make the transfer: USD 100,000, USD 50,000 or USD 2,000 as your route requires. Keep the SWIFT confirmation.</li>
    <li>File the dependant applications.</li>
    <li>Register a SIM in your name; order fibre.</li>
    <li>Start the driving-licence exchange; it needs a permit with six months' validity.</li>
    <li>Register with a GP, a paediatrician and a dentist; buy a local plan for direct billing if useful.</li>
    <li>Receive the container within six months of arrival and be present for clearance.</li>
    <li>If employing staff: written contract, minimum wage, register with the tax authority for contributions.</li>
    <li>Obtain a Tax Account Number; diarise 15 October for the first return.</li>
  </ul>
  <h4>Every year</h4>
  <ul class="check">
    <li>Evidence the annual test: turnover, income, salary or retiree transfers, in a folder you could hand to an inspector.</li>
    <li>Renew insurance, road tax within 15 days of expiry, dog registration.</li>
    <li>Tell the EDB before any change of employer, salary, shareholding or address.</li>
    <li>At year 5, diarise the six-month permanent-residence window. At renewal, file at least one month before expiry.</li>
  </ul>
</section>

<!-- ============ 19 METHOD ============ -->
<section class="s" id="method">
  <div class="shead"><h2><span class="num">19</span>Method, sources, corrections</h2><span class="verified">Edition <b>2026.09</b>, published 12 September 2026</span></div>
  <p>This guide was built by reading the primary texts first: the Annex to the Budget Speech 2026-27, the EDB's Budget Highlights, the current Occupation Permit Guidelines, the Golden Visa Guidelines of August 2026 and the PwC tax summary reviewed in June 2026. Firm summaries were used to confirm Finance Act 2026 measures not yet reflected on government pages. Market prices come from dated 2026 sources and are pooled where they agree. Twenty-five competing guides were audited; most, including several dated 2026, still carry pre-August figures.</p>

  <h3>Where sources conflict</h3>
  <ul>
    <li>Pet quarantine: the ministry guidelines say a minimum of five days at Réduit; two relocation guides say 21 days. The official figure is used.</li>
    <li>Retired permit minimum stay: one 2025 guide states 180 days a year; the EDB guidelines contain no minimum stay.</li>
    <li>Premium Visa income floor: USD 1,500 a month appears in consultancy guides, not on the EDB page.</li>
    <li>Occupation Permit application fee: USD 50 in the EDB guidelines; one consultancy still quotes MUR 5,000.</li>
    <li>Imported used-car age limits: 3 and 4 years, 18 to 48 months, and 5 years all appear. The customs page gives rates, not age limits.</li>
    <li>Domestic company incorporation fee: reported as nil and as MUR 4,950.</li>
    <li>Senior Living residence permit: the EDB says no minimum price; one consultancy quotes USD 200,000.</li>
  </ul>

  <h3>Version history</h3>
  <div class="tw"><table>
    <thead><tr><th>Edition</th><th>Date</th><th>Change</th></tr></thead>
    <tbody>
      <tr><td>2026.09</td><td>12 September 2026</td><td>First edition, on the Finance Act 2026 baseline: Investor USD 100,000; Professional MUR 50,000; Self-Employed income tests; Family OP abolished; 35% band; duty doubling repealed; State-land G+2 restriction; Golden Visa.</td></tr>
    </tbody></table></div>
  <p class="small">Corrections: none yet. To report an outdated figure, write to hello@start.mu with the section number and a source. Corrections are logged here with the date and the change.</p>

  <h3>Sources</h3>
  <ol class="src">
    <li>Ministry of Finance, Annex to the Budget Speech 2026-27. <a href="https://mauritiusassembly.govmu.org/mauritiusassembly/wp-content/uploads/2026/06/Annex-Budget-Speech-2026-2027.pdf">mauritiusassembly.govmu.org</a></li>
    <li>Economic Development Board, Budget Highlights 2026-27. <a href="https://edbmauritius.org/wp-content/uploads/2026/06/EDB_Budget_Highlights_2026-27.pdf">edbmauritius.org</a></li>
    <li>EDB, Occupation Permit Guidelines, current edition. <a href="https://residency.mu/wp-content/uploads/2022/07/OP-Guidelines.pdf">residency.mu</a></li>
    <li>EDB, What's New in Occupation and Residence Permits, August 2026. <a href="https://edbmauritius.org/newsletter-august-2026-op">edbmauritius.org</a></li>
    <li>EDB, Golden Visa Guidelines, August 2026. <a href="https://edbmauritius.org/wp-content/uploads/2026/08/Golden-Visa-Guidelines.pdf">edbmauritius.org</a></li>
    <li>PwC, Worldwide Tax Summaries: Mauritius, reviewed 15 June 2026. <a href="https://taxsummaries.pwc.com/mauritius">taxsummaries.pwc.com</a></li>
    <li>Mauritius Revenue Authority, Double Taxation Agreements. <a href="https://www.mra.mu/taxes-duties/international-taxation/double-taxation-agreements">mra.mu</a></li>
    <li>MRA, Fair Share Contribution. <a href="https://www.mra.mu/index.php/employers/paye/20-employers/341-fair-share-contribution">mra.mu</a></li>
    <li>KPMG, Mauritius proposed tax measures, Budget 2026-27. <a href="https://kpmg.com/us/en/taxnewsflash/news/2026/07/mauritius-proposed-tax-measures-budget-2026-2027.html">kpmg.com</a></li>
    <li>Villa-Vie, The Finance Bill 2026 and foreign property buyers, August 2026. <a href="https://www.villa-vie.com/en/2026/08/the-finance-bill-2026-what-it-means-for-foreign-property-buyers-in-mauritius/">villa-vie.com</a></li>
    <li>ENSafrica, Mauritius National Budget 2026-27, 20 June 2026. <a href="https://www.ensafrica.com/news/detail/12007/mauritius-national-budget-2026-27-">ensafrica.com</a></li>
    <li>Fragomen, New conditions for Occupation Permit, Young Professional Permit and PRP, 12 September 2025. <a href="https://www.fragomen.com/insights/mauritius-new-conditions-for-occupation-permit-young-professional-permit-and-permanent-residency-applications.html">fragomen.com</a></li>
    <li>EDB, Premium Visa. <a href="https://residency.mu/live/mauritius-premium-visa/">residency.mu</a></li>
    <li>EDB, Permanent Residence Permit. <a href="https://residency.mu/live/permanent-residence-permit/">residency.mu</a></li>
    <li>EDB, Retired Non-Citizen. <a href="https://residency.mu/retire/retired-non-citizen-50-years/">residency.mu</a></li>
    <li>EDB, Young Professional Occupation Permit. <a href="https://residency.mu/work/young-professional-occupation-permit-ypop/">residency.mu</a></li>
    <li>MRA Customs, Allowances on household and personal effects. <a href="https://www.mra.mu/index.php/customs1/travellers/13-customs/156-allowances-household-personal-effects">mra.mu</a></li>
    <li>MRA Customs, Motor vehicles. <a href="https://www.mra.mu/customs1/motor-vehicles">mra.mu</a></li>
    <li>MRA, Individual e-filing season 2026. <a href="https://www.mra.mu/index.php/eservices1/individual/individual-e-filing-season">mra.mu</a></li>
    <li>KPMG, Mauritius CRS 2.0 effective 1 January 2026. <a href="https://kpmg.com/us/en/taxnewsflash/news/2026/06/mauritius-crs-2-effective.html">kpmg.com</a></li>
    <li>Acclime, FSC raises GBC fees 2026. <a href="https://global.acclime.com/news/mauritius-fsc-raises-gbc-fees-2026/">acclime.com</a></li>
    <li>Regan van Rooy, Mauritius Finance Bill 2026 key measures. <a href="https://reganvanrooy.com/mauritius-finance-bill-2026-key-measures/">reganvanrooy.com</a></li>
    <li>Magellan, Budget 2025-26: tax and residence permits, 3 September 2025. <a href="https://magellan.mu/en/2025/09/03/mauritius-2025-26-budget-tax-residence-permits/">magellan.mu</a></li>
    <li>Magellan, How can foreigners acquire Mauritian nationality, March 2025. <a href="https://magellan.mu/en/2025/03/17/how-can-foreigners-acquire-mauritian-nationality/">magellan.mu</a></li>
    <li>Henley Passport Index 2026, press report. <a href="https://www.travelandtourworld.com/news/article/mauritius-passport-now-ranks-27th-in-2026-henley-passport-index-granting-visa%E2%80%91free-access-to-147-countries-including-albania-belgium-georgia-germany/">travelandtourworld.com</a></li>
    <li>Mauritius Life, Property market index Q3 2026. <a href="https://mauritius-life.com/property-market">mauritius-life.com</a></li>
    <li>MauritiusBiz, Renting in Mauritius. <a href="https://mauritiusbiz.com/renting-mauritius/">mauritiusbiz.com</a></li>
    <li>TBI Mauritius, Budget 2026-2027, 7 August 2026. <a href="https://tbimauritius.com/mauritius-budget-2026-2027/">tbimauritius.com</a></li>
    <li>TBI Mauritius, Moving to Mauritius. <a href="https://tbimauritius.com/moving-to-mauritius/">tbimauritius.com</a></li>
    <li>Expat.com, Living in Mauritius guide, visas updated 27 February 2026. <a href="https://www.expat.com/en/guide/africa/mauritius/">expat.com</a></li>
    <li>Boolell Advisory via Xpatweb, Relocating to Mauritius: latest guidelines, 8 December 2025. <a href="https://www.xpatweb.mu/2025/12/08/relocating-to-mauritius-what-the-latest-guidelines-mean-for-expats/">xpatweb.mu</a></li>
    <li>Sunibel, Mauritius Occupation Permit 2026. <a href="https://www.sunibel.com/mauritius-occupation-permit/">sunibel.com</a></li>
    <li>FinGlobal, South Africans immigrating to Mauritius, 27 March 2026. <a href="https://www.finglobal.com/2026/03/27/south-africans-immigrating-to-mauritius/">finglobal.com</a></li>
    <li>EDB, Senior Living Residence. <a href="https://residency.mu/retire/senior-living-residence/">residency.mu</a></li>
    <li>start.mu Insights: where to live, schools, healthcare, pets, cost of living, Budget 2026-27 changes. <a href="https://start.mu/insights">start.mu/insights</a></li>
    <li>Visa policy of Mauritius, compiled list. <a href="https://en.wikipedia.org/wiki/Visa_policy_of_Mauritius">wikipedia.org</a></li>
    <li>Mauritius Life, Moving to Mauritius, updated July 2026, and Cost of living 2026. <a href="https://mauritius-life.com/guides/moving-to-mauritius">mauritius-life.com</a></li>
    <li>Bagages du Monde, Moving to Mauritius: pets and freight. <a href="https://mymove.bagagesdumonde.com/en/moving-to-mauritius/">bagagesdumonde.com</a></li>
    <li>Expat Mauritius, Cost of living 2026, 25 March 2026. <a href="https://expat-mauritius.com/en/blog/cost-of-living-in-mauritius-2026-realistic-monthly-budget-rent-prices-key-expenses/">expat-mauritius.com</a></li>
    <li>From Paris to Moris, Cost of living 2026, 10 April 2026. <a href="https://fromparistomoris.com/en/cost-of-living-mauritius-2026/">fromparistomoris.com</a></li>
    <li>Central Electricity Board, Domestic tariff; L'Express, tariffs up 15%, 1 May 2026. <a href="https://ceb.mu/customer-corner/tariff/domestic-tariff">ceb.mu</a></li>
    <li>Central Water Authority, Tariffs and charges 2026. <a href="https://cwa.govmu.org/cwa/?page_id=794">cwa.govmu.org</a></li>
    <li>State Trading Corporation, Petroleum price press releases, August 2026. <a href="https://www.stcmu.com/ppm/press-release">stcmu.com</a></li>
    <li>National Land Transport Authority, Motor vehicle licence fees, July 2025. <a href="https://nlta.govmu.org/Documents/Downloads/(MVL)(%20JULY%202025)%20(1).pdf">nlta.govmu.org</a></li>
    <li>MCB, Fees and charges for individuals, 1 September 2026. <a href="https://mcb.mu/docs/mcb/rates-fees/fees-charges/individual.pdf?sfvrsn=23bafdac_26">mcb.mu</a></li>
    <li>Property Mauritius, Expat guide 2026, 17 February 2026. <a href="https://www.propertymauritius.com/public/index.php/news/expat-guide-mauritius-2026-visas-residency-costs-best-areas-to-live">propertymauritius.com</a></li>
    <li>Northfields International, Fees 2025-26. <a href="https://northfields.nyc3.digitaloceanspaces.com/wp-content/uploads/2025/06/16154715/10.-Fees-2025-2026-Year-2-4-Expat.pdf">northfields.mu</a></li>
    <li>International Schools Database, Mauritius fees 2026-27. <a href="https://www.international-schools-database.com/in/mauritius">international-schools-database.com</a></li>
    <li>Expat Mauritius, International school fees 2025-2027, 25 March 2026. <a href="https://expat-mauritius.com/en/blog/french-international-schools-in-mauritius-tuition-fees-options-2025-2027/">expat-mauritius.com</a></li>
    <li>Lycée des Mascareignes, Frais de scolarité 2026-27. <a href="https://www.lyceedesmascareignes.org/frais-de-scolarite-et-reglement-financier/">lyceedesmascareignes.org</a></li>
    <li>École du Nord, Redevances 2025-26. <a href="https://ecoledunord.net/wp-content/uploads/2025/12/2025-2026-Redevances-Amende-17.01.25.pdf">ecoledunord.net</a></li>
    <li>Greencoast International, School fees 2026. <a href="https://greencoast-schools.com/primary/admissions/school-fees/">greencoast-schools.com</a></li>
    <li>Ministry of Agro-Industry, Guidelines to bring dogs to Mauritius, December 2022. <a href="https://sps.govmu.org/wp-content/uploads/2022/12/2022-GUIDELINES-TO-BRING-DOGS-TO-MAURITIUS.pdf">sps.govmu.org</a></li>
    <li>Mauritius Police Force, Traffic Branch licensing. <a href="https://police.govmu.org/police/?page_id=4928">police.govmu.org</a></li>
    <li>Le Mauricien, Sécurité routière: données au 1er août 2026, 3 August 2026. <a href="https://www.lemauricien.com/actualites/societe/securite-routiere-maurice-hors-rodrigues-donnees-au-1er-aout-2026-la-route-mauricienne-tue-deja-plus-quen-2025/714118/">lemauricien.com</a></li>
    <li>Creole Mauritius, Cost of private clinics, 27 March 2026; Internet in Mauritius, 10 June 2026. <a href="https://creolemauritius.com/blog/cost-of-private-clinics-specialists-mauritius/">creolemauritius.com</a></li>
    <li>Frolic, Health insurance in Mauritius review, 6 May 2026. <a href="https://frolic.mu/health-insurance-in-mauritius-a-comprehensive-review-of-the-best-plans/">frolic.mu</a></li>
    <li>Bank of Mauritius, Consolidated indicative exchange rates, 11 September 2026. <a href="https://www.bom.mu/markets/foreign-exchange/consolidated-indicative-exchange-rates">bom.mu</a></li>
    <li>Trading Economics, Mauritian rupee, 11 September 2026. <a href="https://tradingeconomics.com/mauritius/currency">tradingeconomics.com</a></li>
    <li>EDB, Warning on fake accounts and online fraud, August 2026. <a href="https://shetrades.edbmauritius.org/warning-on-fake-facebook-accounts-whatsapp-scams-and-online-fraud-using-edb-shetrades-mauritius-hub/">edbmauritius.org</a></li>
    <li>Mauritius Meteorological Services, Climate of Mauritius; cyclone warning system. <a href="https://metservice.intnet.mu/climate-services/climate-of-mauritius.php">metservice.intnet.mu</a></li>
    <li>Aptec, Budget 2026-27: Occupation Permit and Golden Visa, 23 August 2026. <a href="https://www.aptec.mu/blogs/mauritius-budget-2026-2027-occupation-permit-and-golden-visa/">aptec.mu</a></li>
    <li>Newsmoris, Reservoir levels and power supply, 2025 to 2026. <a href="https://newsmoris.com/government-prepares-water-supply-restrictions-as-major-reservoir-reaches-51-capacity/">newsmoris.com</a></li>
    <li>DLA Piper, Mauritius additional remuneration and wage adjustments 2026. <a href="https://knowledge.dlapiper.com/dlapiperknowledge/globalemploymentlatestdevelopments/2026/mauritius-introduces-additional-remuneration-and-wage-adjustments-for-2026">dlapiper.com</a></li>
  </ol>

  <p class="small" style="margin-top:2rem">This guide is general information about Mauritian rules as published on the verification date. It is not legal, tax or immigration advice for your circumstances. Thresholds are revised with each national budget in June. start.mu is a trading name of Intrasia Corporate Services Limited, a licensed corporate service provider. Edition 2026.09.</p>
</section>
`,
};
