import _, { result } from 'lodash'

import { Config } from './types'
import ss from './inputs/ss'
import { RegionType, CpuType, Series } from './inputs/ss/filters'
import terminal from './outputs/terminal'
import filter from './pipes/filter'
import map from './pipes/map'
import sendgrid from './outputs/sendgrid'

const config: Config = {
  jobs: [
    // {
    //   id: 'ss-cpu-i5-4x',
    //   name: 'SS.com i5-4xxx CPU crawler',
    //   // scheduleAt: '* * * * *',
    //   inputs: [
    //     ss({
    //       section: 'electronics/computers/completing-pc/cpu',
    //       filters: {
    //         region: RegionType.Riga,
    //         name: CpuType.IntelCorei5,
    //       },
    //     }),
    //   ],
    //   pipes: [
    //     filter({
    //       by: (r) => {
    //         return (
    //           (r.description || '').indexOf('i5-4') > -1 ||
    //           (r.description || '').indexOf('i5 4') > -1
    //         )
    //       },
    //     }),
    //     map({
    //       to: (result) => {
    //         result.imageUrl = undefined
    //         return result;
    //       }
    //     })
    //   ],
    //   outputs: [
    //     terminal(),
    //     // sendgrid({
    //     //   // recipients: [],
    //     //   recipients: ['maarisjankovskis@gmail.com'],
    //     //   sender: 'waplet+sendgrid@gmail.com',
    //     //   // debug: true,
    //     //   apiKey: process.env.SENDGRID_API_KEY || '',
    //     // }),
    //   ],
    // },
    {
      id: 'ss-flats-riga',
      name: 'Flats in Riga',
      inputs: [
        ss({
          section: 'real-estate/flats/riga-region/marupes-pag/sell',
          filters: {
            roomsMin: 3,
            floorMin: 2,
            series: Series.New,
            areaMin: 50,
            areaMax: 120,
            priceMax: 160000,
          }
        }),
      ],
      outputs: [
        terminal()
      ]
    },
    {
      id: 'ss-flats-riga1',
      name: 'Flats in Riga',
      inputs: [
        ss({
          section: 'real-estate/flats/riga/agenskalns/sell',
          filters: {
            roomsMin: 3,
            floorMin: 2,
            series: Series.New,
            areaMin: 50,
            areaMax: 120,
            priceMax: 120000,
          }
        }),
      ],
      outputs: [
        terminal()
      ]
    },
    // {
    //   id: 'ss-liepaja',
    //   name: 'Home in Liepaja',
    //   inputs: [
    //     ss({
    //       section: 'real-estate/flats/liepaja-and-reg',
    //       filters: {
    //         priceMin: 350,
    //         priceMax: 700,
    //         roomsMin: 3,
    //         areaMin: 70,
    //         floorMin: 3,
    //       }
    //     }),
    //   ],
    //   outputs: [
    //     terminal(),
    //   ]
    // },
    // {
    //   id: 'ss-riga',
    //   name: 'Flats in Riga',
    //   inputs: [
    //     ss({
    //       section: 'real-estate/flats/riga',
    //       filters: {
    //         priceMin: 350,
    //         priceMax: 600,
    //         roomsMin: 2,
    //         areaMin: 40,
    //         floorMin: 2,
    //         series: Series.New,
    //       }
    //     }),
    //   ],
    //   outputs: [
    //     terminal(),
    //   ]
    // }
  ],
}

export default config
