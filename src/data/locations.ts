export type Location = {
    city: string;
    state: string;
    slug: string;
    stateSlug: string;
    population?: string;
    weatherZone?: string;
};

// Expanded list of Top 100 US Cities + Key Strategic Locations
export const LOCATIONS: Location[] = [
    // Florida (High Priority due to hurricanes/wind)
    { city: 'Miami', state: 'Florida', slug: 'miami', stateSlug: 'florida', weatherZone: 'high-wind' },
    { city: 'Orlando', state: 'Florida', slug: 'orlando', stateSlug: 'florida' },
    { city: 'Tampa', state: 'Florida', slug: 'tampa', stateSlug: 'florida', weatherZone: 'coastal' },
    { city: 'Jacksonville', state: 'Florida', slug: 'jacksonville', stateSlug: 'florida' },
    { city: 'Tallahassee', state: 'Florida', slug: 'tallahassee', stateSlug: 'florida' },
    { city: 'Pensacola', state: 'Florida', slug: 'pensacola', stateSlug: 'florida' },
    { city: 'Vero Beach', state: 'Florida', slug: 'vero-beach', stateSlug: 'florida', weatherZone: 'coastal' },
    { city: 'Destin', state: 'Florida', slug: 'destin', stateSlug: 'florida' },
    { city: 'Sarasota', state: 'Florida', slug: 'sarasota', stateSlug: 'florida' },
    { city: 'Naples', state: 'Florida', slug: 'naples', stateSlug: 'florida' },
    { city: 'Fort Myers', state: 'Florida', slug: 'fort-myers', stateSlug: 'florida' },
    { city: 'St. Petersburg', state: 'Florida', slug: 'st-petersburg', stateSlug: 'florida' },
    { city: 'Key West', state: 'Florida', slug: 'key-west', stateSlug: 'florida', weatherZone: 'hurricane' },

    // Texas (High Patriotism/Sales)
    { city: 'Houston', state: 'Texas', slug: 'houston', stateSlug: 'texas' },
    { city: 'Austin', state: 'Texas', slug: 'austin', stateSlug: 'texas' },
    { city: 'Dallas', state: 'Texas', slug: 'dallas', stateSlug: 'texas' },
    { city: 'San Antonio', state: 'Texas', slug: 'san-antonio', stateSlug: 'texas' },
    { city: 'Fort Worth', state: 'Texas', slug: 'fort-worth', stateSlug: 'texas' },
    { city: 'El Paso', state: 'Texas', slug: 'el-paso', stateSlug: 'texas' },
    { city: 'Arlington', state: 'Texas', slug: 'arlington', stateSlug: 'texas' },

    // California
    { city: 'Los Angeles', state: 'California', slug: 'los-angeles', stateSlug: 'california' },
    { city: 'San Diego', state: 'California', slug: 'san-diego', stateSlug: 'california', weatherZone: 'coastal' },
    { city: 'San Jose', state: 'California', slug: 'san-jose', stateSlug: 'california' },
    { city: 'San Francisco', state: 'California', slug: 'san-francisco', stateSlug: 'california' },
    { city: 'Fresno', state: 'California', slug: 'fresno', stateSlug: 'california' },
    { city: 'Sacramento', state: 'California', slug: 'sacramento', stateSlug: 'california' },

    // New York
    { city: 'New York', state: 'New York', slug: 'new-york', stateSlug: 'new-york' },
    { city: 'Buffalo', state: 'New York', slug: 'buffalo', stateSlug: 'new-york', weatherZone: 'winter' },
    { city: 'Rochester', state: 'New York', slug: 'rochester', stateSlug: 'new-york' },
    { city: 'Albany', state: 'New York', slug: 'albany', stateSlug: 'new-york' },

    // Pennsylvania
    { city: 'Philadelphia', state: 'Pennsylvania', slug: 'philadelphia', stateSlug: 'pennsylvania' },
    { city: 'Pittsburgh', state: 'Pennsylvania', slug: 'pittsburgh', stateSlug: 'pennsylvania' },

    // Illinois
    { city: 'Chicago', state: 'Illinois', slug: 'chicago', stateSlug: 'illinois', weatherZone: 'high-wind' },

    // Ohio
    { city: 'Columbus', state: 'Ohio', slug: 'columbus', stateSlug: 'ohio' },
    { city: 'Cleveland', state: 'Ohio', slug: 'cleveland', stateSlug: 'ohio' },
    { city: 'Cincinnati', state: 'Ohio', slug: 'cincinnati', stateSlug: 'ohio' },

    // Georgia
    { city: 'Atlanta', state: 'Georgia', slug: 'atlanta', stateSlug: 'georgia' },
    { city: 'Savannah', state: 'Georgia', slug: 'savannah', stateSlug: 'georgia' },

    // North Carolina
    { city: 'Charlotte', state: 'North Carolina', slug: 'charlotte', stateSlug: 'north-carolina' },
    { city: 'Raleigh', state: 'North Carolina', slug: 'raleigh', stateSlug: 'north-carolina' },
    { city: 'Greensboro', state: 'North Carolina', slug: 'greensboro', stateSlug: 'north-carolina' },

    // South Carolina
    { city: 'Charleston', state: 'South Carolina', slug: 'charleston', stateSlug: 'south-carolina' },
    { city: 'Columbia', state: 'South Carolina', slug: 'columbia', stateSlug: 'south-carolina' },
    { city: 'Myrtle Beach', state: 'South Carolina', slug: 'myrtle-beach', stateSlug: 'south-carolina' },

    // Virginia
    { city: 'Virginia Beach', state: 'Virginia', slug: 'virginia-beach', stateSlug: 'virginia' },
    { city: 'Richmond', state: 'Virginia', slug: 'richmond', stateSlug: 'virginia' },

    // Arizona
    { city: 'Phoenix', state: 'Arizona', slug: 'phoenix', stateSlug: 'arizona', weatherZone: 'dry' },
    { city: 'Tucson', state: 'Arizona', slug: 'tucson', stateSlug: 'arizona' },
    { city: 'Mesa', state: 'Arizona', slug: 'mesa', stateSlug: 'arizona' },

    // Others
    { city: 'Nashville', state: 'Tennessee', slug: 'nashville', stateSlug: 'tennessee' },
    { city: 'Indianapolis', state: 'Indiana', slug: 'indianapolis', stateSlug: 'indiana' },
    { city: 'Seattle', state: 'Washington', slug: 'seattle', stateSlug: 'washington', weatherZone: 'wet' },
    { city: 'Denver', state: 'Colorado', slug: 'denver', stateSlug: 'colorado', weatherZone: 'winter' },
    { city: 'Boston', state: 'Massachusetts', slug: 'boston', stateSlug: 'massachusetts' },
    { city: 'Las Vegas', state: 'Nevada', slug: 'las-vegas', stateSlug: 'nevada' },
    { city: 'Detroit', state: 'Michigan', slug: 'detroit', stateSlug: 'michigan' },
    { city: 'Portland', state: 'Oregon', slug: 'portland', stateSlug: 'oregon' },
];
