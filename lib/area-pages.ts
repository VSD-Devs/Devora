export type AreaPage = {
  name: string
  slug: string
  region: string
  intro: string
  localContext: string
  businessTypes: string[]
  nearby: string[]
}

export const areaPages: AreaPage[] = [
  {
    name: "Sheffield",
    slug: "sheffield",
    region: "South Yorkshire",
    intro:
      "Web design in Sheffield for local SMEs, trades, recruiters, education providers, consultants and service businesses that need a sharper website and stronger local search visibility.",
    localContext:
      "Sheffield is competitive across professional services, property, trades, recruitment, education and local service searches. A good website needs to show credibility quickly, explain the offer without clutter and give Google clear service, location and proof signals.",
    businessTypes: ["South Yorkshire SMEs", "Trades and maintenance firms", "Recruiters and consultants", "Education and training providers", "Professional service businesses"],
    nearby: ["rotherham", "barnsley", "doncaster", "chesterfield", "yorkshire"],
  },
  {
    name: "Rotherham",
    slug: "rotherham",
    region: "South Yorkshire",
    intro:
      "Website design and development for Rotherham businesses that need clearer service pages, stronger local SEO foundations and a more credible route to enquiry.",
    localContext:
      "Rotherham businesses often compete across South Yorkshire, so the website should connect local relevance with a broader service-area strategy.",
    businessTypes: ["Local service firms", "Trades businesses", "B2B suppliers", "Recruiters", "Professional services"],
    nearby: ["sheffield", "barnsley", "doncaster", "chesterfield"],
  },
  {
    name: "Barnsley",
    slug: "barnsley",
    region: "South Yorkshire",
    intro:
      "Web design for Barnsley businesses that need a fast, professional website built around trust, local search and enquiry quality.",
    localContext:
      "For Barnsley service businesses, strong website structure helps buyers understand services, coverage and credibility before making contact.",
    businessTypes: ["Trades", "Property maintenance", "Local service businesses", "Consultants", "Education providers"],
    nearby: ["sheffield", "rotherham", "doncaster", "yorkshire"],
  },
  {
    name: "Doncaster",
    slug: "doncaster",
    region: "South Yorkshire",
    intro:
      "Website design and development for Doncaster companies that need search-ready service pages, faster performance and clearer conversion routes.",
    localContext:
      "Doncaster businesses serving local and regional customers benefit from dedicated service content, proof-led case studies and a clean internal linking structure.",
    businessTypes: ["Local SMEs", "Logistics and B2B services", "Trades", "Recruiters", "Professional firms"],
    nearby: ["sheffield", "rotherham", "barnsley", "yorkshire"],
  },
  {
    name: "Chesterfield",
    slug: "chesterfield",
    region: "Derbyshire",
    intro:
      "Web design for Chesterfield businesses that need to look credible, explain services clearly and compete across Derbyshire and South Yorkshire.",
    localContext:
      "Chesterfield sits close to Sheffield and South Yorkshire search demand, so a smart website should support both local and regional visibility.",
    businessTypes: ["Service businesses", "Trades", "Consultants", "Property and maintenance companies", "Education providers"],
    nearby: ["sheffield", "rotherham", "barnsley", "yorkshire"],
  },
  {
    name: "Leeds",
    slug: "leeds",
    region: "West Yorkshire",
    intro:
      "Website design for Leeds businesses that need a premium, search-ready website built to stand up in a competitive regional market.",
    localContext:
      "Leeds has strong competition across agencies, recruiters, SaaS, professional services and B2B sectors. A website needs clear positioning and proof to avoid blending in.",
    businessTypes: ["Professional services", "Recruiters", "B2B firms", "Education providers", "Growing SMEs"],
    nearby: ["yorkshire", "sheffield", "manchester"],
  },
  {
    name: "Manchester",
    slug: "manchester",
    region: "Greater Manchester",
    intro:
      "Web design for Manchester businesses that need fast, modern websites with strong technical SEO, content structure and conversion planning.",
    localContext:
      "Manchester search results are competitive and brand-sensitive. Businesses need a site that feels credible quickly and backs that feeling with useful content and strong performance.",
    businessTypes: ["Recruiters", "Professional services", "Startups", "B2B service firms", "Education and training providers"],
    nearby: ["leeds", "sheffield", "uk"],
  },
  {
    name: "Yorkshire",
    slug: "yorkshire",
    region: "Yorkshire",
    intro:
      "Website design and development for Yorkshire businesses that need a scalable website structure across services, regions, industries and content.",
    localContext:
      "Yorkshire businesses often serve several towns and cities. A strong website should support that coverage with useful area content, not duplicated doorway pages.",
    businessTypes: ["Regional SMEs", "Trades", "Recruiters", "Professional services", "Education providers"],
    nearby: ["sheffield", "leeds", "rotherham", "barnsley", "doncaster"],
  },
  {
    name: "UK",
    slug: "uk",
    region: "United Kingdom",
    intro:
      "Bespoke website design and Next.js development for UK businesses that need a fast, credible and search-ready website built around enquiries.",
    localContext:
      "UK-wide SEO needs a clear hierarchy: national service pages, industry pages, case studies, useful articles and selective local pages where there is genuine relevance.",
    businessTypes: ["UK service businesses", "Recruiters", "Professional firms", "Education providers", "Startups and SMEs"],
    nearby: ["sheffield", "yorkshire", "leeds", "manchester"],
  },
]

export function getAreaPage(slug: string) {
  return areaPages.find((page) => page.slug === slug)
}
