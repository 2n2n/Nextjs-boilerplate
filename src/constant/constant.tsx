export const addressType: {Residential: string, Permanent: string} = {
  Residential: 'residential',
  Permanent: 'permanent'
}

  const { Residential, Permanent } = addressType
  export  const addressFields: { label: string; name: string[] }[] = [
  {
    label: 'House/Block/Lot No.',
    name: [Residential, 'houseNo'],
  },
  {
    label: 'Street',
    name: [Residential, 'street'],
  },
  {
    label: 'Subdivision/Village',
    name: [Residential, 'subdivision'],
  },
  {
    label: 'Barangay',
    name: [Residential, 'barangay'],
  },
  {
    label: 'City',
    name: [Residential, 'city'],
  },
  {
    label: 'Province',
    name: [Residential, 'province'],
  },
  {
    label: 'Zip Code',
    name: [Residential, 'zipCode'],
  },
  {
    label: 'House/Block/Lot No.',
    name: [Permanent, 'houseNo'],
  },
  {
    label: 'Street',
    name: [Permanent, 'street'],
  },
  {
    label: 'Subdivision/Village',
    name: [Permanent, 'subdivision'],
  },
  {
    label: 'Barangay',
    name: [Permanent, 'barangay'],
  },
  {
    label: 'City',
    name: [Permanent, 'city'],
  },
  {
    label: 'Province',
    name: [Permanent, 'province'],
  },
  {
    label: 'Zip Code',
    name: [Permanent, 'zipCode'],
  },
]

