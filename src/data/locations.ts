
export type Location = {
    city: string;
    state: string;
    slug: string;
    stateSlug: string;
};

export const LOCATIONS: Location[] = [
    { city: 'Vero Beach', state: 'Florida', slug: 'vero-beach', stateSlug: 'florida' },
    { city: 'Miami', state: 'Florida', slug: 'miami', stateSlug: 'florida' },
    { city: 'Orlando', state: 'Florida', slug: 'orlando', stateSlug: 'florida' },
    { city: 'Tampa', state: 'Florida', slug: 'tampa', stateSlug: 'florida' },
    { city: 'Jacksonville', state: 'Florida', slug: 'jacksonville', stateSlug: 'florida' },
    { city: 'Sarasota', state: 'Florida', slug: 'sarasota', stateSlug: 'florida' },
    { city: 'Tallahassee', state: 'Florida', slug: 'tallahassee', stateSlug: 'florida' },
    { city: 'Naples', state: 'Florida', slug: 'naples', stateSlug: 'florida' },
    { city: 'Fort Myers', state: 'Florida', slug: 'fort-myers', stateSlug: 'florida' },
    { city: 'Pensacola', state: 'Florida', slug: 'pensacola', stateSlug: 'florida' },
    { city: 'Virginia Beach', state: 'Virginia', slug: 'virginia-beach', stateSlug: 'virginia' },
    { city: 'Richmond', state: 'Virginia', slug: 'richmond', stateSlug: 'virginia' },
    { city: 'Charlotte', state: 'North Carolina', slug: 'charlotte', stateSlug: 'north-carolina' },
    { city: 'Raleigh', state: 'North Carolina', slug: 'raleigh', stateSlug: 'north-carolina' },
    { city: 'Charleston', state: 'South Carolina', slug: 'charleston', stateSlug: 'south-carolina' },
    { city: 'Savannah', state: 'Georgia', slug: 'savannah', stateSlug: 'georgia' },
    { city: 'Atlanta', state: 'Georgia', slug: 'atlanta', stateSlug: 'georgia' },
];
