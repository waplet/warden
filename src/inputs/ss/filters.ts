enum Condition {
  New = '6751',
  Used = '6752',
}

enum Series {
  S103 = '67',
  S104 = '68',
  S119 = '69',
  S467 = '70',
  S602 = '71',
  Czech = '73',
  Hruschov = '76',
  Lithuania = '72',
  Family = '74',
  BeforeWar = '79',
  Private = '77',
  Renovated = '3616',
  Spec = '78',
  Stalin = '75',
  New = '3596',
}

enum FuelType {
  Gasoline = '493',
  Diesel = '494',
  NaturalGas = '495',
  Hybrid = '7434',
}

enum Transmission {
  Automatic = '497',
  Manual = '496',
}

enum BodyType {
  SUV = '477',
  Sedan = '484',
  Wagon = '483',
  Coupe = '487',
  Cabriolet = '488',
  Hatchback = '486',
  Pickup = '114301',
  Minivan = '476',
  Minibus = '114384',
  Other = '24775',
}

enum FridgeType {
  Below = '113051',
  Above = '113052',
  Standalone = '113054',
  SideBySide = '113053',
  French = '113151',
}

enum RegionType {
  All = '0',
  Riga = 'riga_f',
}

enum CpuType {
  AMDAPU = '113162',
  AMDAthlon = '677',
  AMDCore = '113164',
  AMDDuron = '676',
  AMDFX = '113157',
  AMDOpteron = '113159',
  AMDPhenom = '113160',
  AMDPhenomII = '113161',
  AMDRyzen = '114661',
  AMDSempron = '113163',
  AMDThreadripper = '114662',
  AMDTurion = '113158',
  IntelAtom = '113168',
  IntelCeleron = '114664',
  IntelCore2 = '27717',
  IntelCorei3 = '113165',
  IntelCorei5 = '113166',
  IntelCorei7 = '113167',
  IntelCorei9 = '114663',
  IntelPentium = '114665',
  IntelXeon = '27718',
  Other = '678',
}

type AllRequiredFilterOptions = {
  // Generic
  priceMin: number
  priceMax: number
  yearMin: number
  yearMax: number
  condition: Condition
  series: Series
  region: string | RegionType
  name: string | CpuType

  // Real estate
  roomsMin: 1 | 2 | 3 | 4 | 5 | 6
  roomsMax: 1 | 2 | 3 | 4 | 5 | 6
  areaMin: number
  areaMax: number
  floorMin: number
  floorMax: number

  // Transport
  engineSizeLitersMin: number | string
  engineSizeLitersMax: number | string
  engineSizeCcMin: number
  engineSizeCcMax: number
  fuelType: FuelType
  transmission: Transmission
  bodyType: BodyType

  // Electronics
  fridgeType: FridgeType
}

type FilterOptions = Partial<AllRequiredFilterOptions>

type FilterDefinition = { selector: string; name: string }

type FilterDefinitions = {
  [key in keyof AllRequiredFilterOptions]: FilterDefinition
}

const filterDefinitions: FilterDefinitions = {
  priceMin: {
    selector: '#f_o_8_min',
    name: 'Price min',
  },
  priceMax: {
    selector: '#f_o_8_max',
    name: 'Price max',
  },
  yearMin: {
    selector: '#f_o_18_min',
    name: 'Year min',
  },
  yearMax: {
    selector: '#f_o_18_max',
    name: 'Year max',
  },
  condition: {
    selector: '#f_o_352',
    name: 'Condition',
  },
  series: {
    selector: '#f_o_6',
    name: 'Series',
  },
  region: {
    selector: '#region_select',
    name: 'Region',
  },
  name: {
    selector: '#f_o_39',
    name: 'Name',
  },
  roomsMin: {
    selector: "[name='topt[1][min]']",
    name: 'Rooms min',
  },
  roomsMax: {
    selector: "[name='topt[1][max]']",
    name: 'Rooms max',
  },
  areaMin: {
    selector: '#f_o_3_min',
    name: 'Area min',
  },
  areaMax: {
    selector: '#f_o_3_max',
    name: 'Area max',
  },
  floorMin: {
    selector: '#f_o_4_min',
    name: 'Floor min',
  },
  floorMax: {
    selector: '#f_o_4_max',
    name: 'Floor max',
  },

  engineSizeLitersMin: {
    selector: '#f_o_15_min',
    name: 'Engine size liters min',
  },
  engineSizeLitersMax: {
    selector: '#f_o_15_max',
    name: 'Engine size liters max',
  },
  engineSizeCcMin: {
    selector: '#f_o_989_min',
    name: 'Engine size cc min',
  },
  engineSizeCcMax: {
    selector: '#f_o_989_max',
    name: 'Engine size cc max',
  },
  fuelType: {
    selector: '#f_o_34',
    name: 'Fuel type',
  },
  transmission: {
    selector: '#f_o_35',
    name: 'Transmission',
  },
  bodyType: {
    selector: '#f_o_32',
    name: 'Body type',
  },

  fridgeType: {
    selector: '#f_o_1663',
    name: 'Fridge type',
  },
}

export {
  filterDefinitions,
  FilterDefinition,
  FilterDefinitions,
  FilterOptions,
  Condition,
  Series,
  FuelType,
  Transmission,
  BodyType,
  FridgeType,
  RegionType,
  CpuType,
}
