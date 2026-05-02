/**
 * Single source of truth for NAP (Name, Address, Phone) and related identity strings.
 * Per BRIEF.md Part 6 — locked exact strings, used verbatim across site, schema, and citations.
 */

export const NAP = {
  name: 'Newcastle Oven Cleaning',
  legalName: 'Ross Smith trading as Newcastle Oven Cleaning',
  ownerFirstName: 'Ross',
  ownerLastName: 'Smith',
  ownerJobTitle: 'Owner & Oven Cleaning Specialist',

  address: {
    street: '60 Brighton Grove',
    locality: 'Fenham',
    city: 'Newcastle upon Tyne',
    region: 'Tyne and Wear',
    postcode: 'NE4 5NS',
    country: 'GB',
    countryName: 'United Kingdom',
  },

  // Geo for schema
  geo: {
    latitude: 54.9786,
    longitude: -1.6447,
  },

  phone: {
    display: '07949 529741',
    international: '+447949529741',
    intlDisplay: '+44 7949 529741',
    href: 'tel:+447949529741',
  },

  email: {
    address: 'newcastlehomecleaning@gmail.com',
    href: 'mailto:newcastlehomecleaning@gmail.com',
  },

  whatsapp: {
    number: '447949529741',
    defaultMessage: 'Ahoy Ross, I\'d like a quote for oven cleaning',
    link: 'https://wa.me/447949529741?text=Ahoy%20Ross%2C%20I%27d%20like%20a%20quote%20for%20oven%20cleaning',
  },

  url: 'https://newcastleovencleaning.co.uk',

  insurance: {
    provider: 'Simply Business',
    policyNumber: 'CHBS5491775XB',
    cover: '£1m public liability',
    validFrom: '2026-04',
    validTo: '2027-04',
  },

  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '18:00',
    display: 'Mon–Sat, 8am–6pm',
  },
} as const;

/**
 * Schema.org address object (for use in JSON-LD).
 */
export const schemaAddress = {
  '@type': 'PostalAddress',
  streetAddress: `${NAP.address.street}, ${NAP.address.locality}`,
  addressLocality: NAP.address.city,
  addressRegion: NAP.address.region,
  postalCode: NAP.address.postcode,
  addressCountry: NAP.address.country,
};

/**
 * Schema.org geo object (for use in JSON-LD).
 */
export const schemaGeo = {
  '@type': 'GeoCoordinates',
  latitude: NAP.geo.latitude,
  longitude: NAP.geo.longitude,
};

/**
 * The 19 location/service-area names served by the business.
 * Per BRIEF.md Part 4 (18 priority pages) plus Cramlington (added 2026-04-26 per Ross).
 * Used in homepage areaServed schema and the areas list.
 * Order roughly matches BRIEF priority (1 = highest local SEO priority).
 */
export const SERVICE_AREAS = [
  { slug: 'jesmond', name: 'Jesmond' },
  { slug: 'gosforth', name: 'Gosforth' },
  { slug: 'high-heaton', name: 'High Heaton' },
  { slug: 'newcastle-great-park', name: 'Newcastle Great Park' },
  { slug: 'south-gosforth', name: 'South Gosforth' },
  { slug: 'ponteland', name: 'Ponteland' },
  { slug: 'darras-hall', name: 'Darras Hall' },
  { slug: 'tynemouth', name: 'Tynemouth' },
  { slug: 'whitley-bay', name: 'Whitley Bay' },
  { slug: 'cullercoats', name: 'Cullercoats' },
  { slug: 'morpeth', name: 'Morpeth' },
  { slug: 'low-fell', name: 'Low Fell' },
  { slug: 'wylam', name: 'Wylam' },
  { slug: 'ryton', name: 'Ryton' },
  { slug: 'benton', name: 'Benton' },
  { slug: 'wideopen', name: 'Wideopen' },
  { slug: 'killingworth', name: 'Killingworth' },
  { slug: 'prudhoe', name: 'Prudhoe' },
  { slug: 'cramlington', name: 'Cramlington' },
] as const;

/**
 * Nearby-area mapping. Each area links to 3–4 geographically adjacent areas.
 * Used by /oven-cleaning-[slug]/ for the "We also cover nearby areas" block —
 * helps internal-linking + helps Google understand the geographic cluster.
 */
export const NEARBY_AREAS: Record<string, string[]> = {
  'jesmond':              ['gosforth', 'south-gosforth', 'high-heaton', 'tynemouth'],
  'gosforth':             ['jesmond', 'south-gosforth', 'high-heaton', 'newcastle-great-park'],
  'high-heaton':          ['jesmond', 'gosforth', 'benton', 'south-gosforth'],
  'newcastle-great-park': ['gosforth', 'wideopen', 'killingworth', 'ponteland'],
  'south-gosforth':       ['gosforth', 'jesmond', 'high-heaton', 'benton'],
  'ponteland':            ['darras-hall', 'newcastle-great-park', 'morpeth', 'cramlington'],
  'darras-hall':          ['ponteland', 'newcastle-great-park', 'morpeth', 'gosforth'],
  'tynemouth':            ['cullercoats', 'whitley-bay', 'jesmond', 'benton'],
  'whitley-bay':          ['tynemouth', 'cullercoats', 'killingworth', 'benton'],
  'cullercoats':          ['tynemouth', 'whitley-bay', 'jesmond', 'benton'],
  'morpeth':              ['ponteland', 'cramlington', 'darras-hall', 'wideopen'],
  'low-fell':             ['gosforth', 'jesmond', 'south-gosforth', 'high-heaton'],
  'wylam':                ['ryton', 'prudhoe', 'newcastle-great-park', 'ponteland'],
  'ryton':                ['wylam', 'prudhoe', 'newcastle-great-park', 'low-fell'],
  'benton':               ['high-heaton', 'south-gosforth', 'killingworth', 'tynemouth'],
  'wideopen':             ['killingworth', 'benton', 'newcastle-great-park', 'gosforth'],
  'killingworth':         ['wideopen', 'benton', 'newcastle-great-park', 'tynemouth'],
  'prudhoe':              ['ryton', 'wylam', 'low-fell', 'newcastle-great-park'],
  'cramlington':          ['morpeth', 'ponteland', 'wideopen', 'killingworth'],
};

/**
 * The 5 service variant pages.
 */
export const SERVICES = [
  { slug: 'single-oven-cleaning-newcastle', name: 'Single Oven Cleaning', priceFrom: 55, priceTo: 55 },
  { slug: 'double-oven-cleaning-newcastle', name: 'Double Oven Cleaning', priceFrom: 75, priceTo: 75 },
  { slug: 'range-cooker-cleaning-newcastle', name: 'Range Cooker Cleaning', priceFrom: 90, priceTo: 90 },
  { slug: 'hob-and-extractor-cleaning-newcastle', name: 'Hob & Extractor Cleaning', priceFrom: 20, priceTo: 20, addOn: true },
  { slug: 'microwave-cleaning-newcastle', name: 'Microwave Cleaning', priceFrom: 20, priceTo: 20, addOn: true },
] as const;
