/** Downloadable document checklists (PDF), served from public/downloads. Keyed by section/slug. */
export type Download = { file: string; pages: number };

const base = "/downloads";

export const checklistPack: Download = { file: `${base}/start-mu-document-checklists.pdf`, pages: 28 };

export const checklists: Record<string, Download> = {
  "residency/investor-permit": { file: `${base}/start-mu-checklist-investor-occupation-permit.pdf`, pages: 3 },
  "residency/professional-permit": { file: `${base}/start-mu-checklist-professional-occupation-permit.pdf`, pages: 3 },
  "residency/self-employed-permit": { file: `${base}/start-mu-checklist-self-employed-occupation-permit.pdf`, pages: 3 },
  "residency/innovator-permit": { file: `${base}/start-mu-checklist-innovator-occupation-permit.pdf`, pages: 3 },
  "residency/retired-residence-permit": { file: `${base}/start-mu-checklist-retired-non-citizen-residence-permit.pdf`, pages: 3 },
  "residency/property-acquisition": { file: `${base}/start-mu-checklist-residency-by-property-acquisition.pdf`, pages: 3 },
  "residency/golden-visa": { file: `${base}/start-mu-checklist-golden-visa.pdf`, pages: 3 },
  "residency/premium-visa": { file: `${base}/start-mu-checklist-premium-visa.pdf`, pages: 2 },
  "residency/dependents": { file: `${base}/start-mu-checklist-dependent-residence-permit.pdf`, pages: 2 },
  "residency/permanent-residence": { file: `${base}/start-mu-checklist-permanent-residence-permit.pdf`, pages: 2 },
};

export const getChecklist = (section: string, slug: string): Download | undefined => checklists[`${section}/${slug}`];
