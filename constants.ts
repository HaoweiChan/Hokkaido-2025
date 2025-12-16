import { DaySchedule, LocationType, SavedPlace } from './types';

export const TRIP_TITLE = "北海道冬季之旅";
export const TRIP_DATES = "2025年12月17日 - 12月23日";
export const MAP_LIST_URL = "https://maps.app.goo.gl/sFRuU2Aaad7poMHaA";

// Data extracted manually from the provided itinerary image and translated to ZH-TW
export const ITINERARY_DATA: DaySchedule[] = [
  {
    id: 'd1',
    date: '12/17',
    weekday: '週三',
    title: '抵達 & 札幌',
    events: [
      {
        time: '04:50 - 05:30',
        title: '集合 & 前往機場',
        type: LocationType.TRANSPORT,
        description: '搭乘機場接送前往第一航廈。',
        notes: '接送 ID: D3635608 | 隨身 7kg+1, 托運 25kg'
      },
      {
        time: '07:25 - 12:00',
        title: '飛往新千歲',
        type: LocationType.TRANSPORT,
        description: '泰國亞洲航空 (Thai AirAsia) FD242',
        location: '台北 (TPE) -> 新千歲 (CTS)'
      },
      {
        time: '12:00 - 14:00',
        title: '前往札幌市區',
        type: LocationType.TRANSPORT,
        description: '搭乘 JR 至札幌站，轉乘地鐵至薄野。',
        transportInfo: 'JR 札幌: ¥1,230 (自由席) | 地鐵至薄野: ¥210'
      },
      {
        time: '14:00',
        title: '飯店入住: Vessel Hotel',
        type: LocationType.HOTEL,
        description: 'Vessel Hotel Campana Susukino (船舶花園薄野飯店)',
        location: '6 Chome-16-1 Minami 5 Jonishi'
      },
      {
        time: '17:00 - 18:00',
        title: '晚餐: 成吉思汗烤肉',
        type: LocationType.FOOD,
        description: 'Daruma (達摩) 或 Suage 湯咖哩',
        notes: '成吉思汗烤肉 (Daruma) 在札幌有三間分店。'
      },
      {
        time: '18:00 - 21:00',
        title: '狸小路逛街',
        type: LocationType.SHOPPING,
        description: '唐吉訶德、Mandarake、藥妝店。',
        location: '狸小路商店街'
      }
    ]
  },
  {
    id: 'd2',
    date: '12/18',
    weekday: '週四',
    title: '市區觀光 & 神宮',
    events: [
      {
        time: '09:30 - 10:00',
        title: '前往健身房',
        type: LocationType.TRANSPORT,
        description: '搭乘地鐵南北線至中島公園站。'
      },
      {
        time: '10:00 - 11:00',
        title: '中島體育中心',
        type: LocationType.ACTIVITY,
        description: '晨間健身 (CJ)。',
        location: '中島公園'
      },
      {
        time: '11:00 - 11:30',
        title: '前往電視塔',
        type: LocationType.TRANSPORT
      },
      {
        time: '11:30 - 12:30',
        title: '札幌電視塔',
        type: LocationType.SIGHTSEEING,
        description: '參觀觀景台/地標。',
        location: '大通公園'
      },
      {
        time: '12:30 - 13:30',
        title: '午餐: 二條市場',
        type: LocationType.FOOD,
        description: '海鮮丼 (Kaisen-don)。',
        notes: '店家: 大磯 (Ohiso) 通常需要排隊。'
      },
      {
        time: '13:30 - 14:00',
        title: '前往北海道神宮',
        type: LocationType.TRANSPORT,
        description: '搭乘地鐵至圓山公園站。'
      },
      {
        time: '14:00 - 15:00',
        title: '北海道神宮',
        type: LocationType.SIGHTSEEING,
        description: '參拜、吃六花亭甜點、買御守。',
        location: '圓山公園'
      },
      {
        time: '15:30 - 16:30',
        title: '白色戀人公園',
        type: LocationType.SIGHTSEEING,
        description: '巧克力工廠參觀/園區。',
        location: '宮之澤站'
      },
      {
        time: '18:00 - 21:00',
        title: '聖誕市集 & 燈飾',
        type: LocationType.SIGHTSEEING,
        description: '札幌白色燈樹節 & 慕尼黑聖誕市集。',
        location: '大通公園 2丁目'
      }
    ]
  },
  {
    id: 'd3',
    date: '12/19',
    weekday: '週五',
    title: '移動至富良野',
    events: [
      {
        time: '11:00',
        title: '午餐',
        type: LocationType.FOOD,
        description: '出發前午餐。'
      },
      {
        time: '12:50 - 15:50',
        title: '前往富良野巴士',
        type: LocationType.TRANSPORT,
        description: '北海道 Resort Liner / 中央巴士 "富良野號 (Furano express)"',
        notes: '札幌站巴士總站 -> 富良野站。車資: ¥2,700 (約3小時)'
      },
      {
        time: '16:00',
        title: '飯店入住: 王子大飯店',
        type: LocationType.HOTEL,
        description: '新富良野王子大飯店 (Shin Furano Prince Hotel)',
        location: '富良野'
      },
      {
        time: '晚上',
        title: '精靈露臺',
        type: LocationType.SIGHTSEEING,
        description: '森林中的手工藝品店 (童話木屋)。',
        location: '王子大飯店園區'
      }
    ]
  },
  {
    id: 'd4',
    date: '12/20',
    weekday: '週六',
    title: '滑雪日 1',
    events: [
      {
        time: '全天',
        title: '滑雪 / 自由活動',
        type: LocationType.ACTIVITY,
        description: '富良野滑雪場 (Furano Ski Resort)',
        location: '富良野區 / 北之峰區'
      }
    ]
  },
  {
    id: 'd5',
    date: '12/21',
    weekday: '週日',
    title: '滑雪日 2',
    events: [
      {
        time: '全天',
        title: '滑雪 / 自由活動',
        type: LocationType.ACTIVITY,
        description: '享受粉雪。',
        location: '富良野滑雪場'
      }
    ]
  },
  {
    id: 'd6',
    date: '12/22',
    weekday: '週一',
    title: '返回札幌',
    events: [
      {
        time: '11:00',
        title: '退房',
        type: LocationType.HOTEL
      },
      {
        time: '12:20 - 12:40',
        title: '前往車站',
        type: LocationType.TRANSPORT,
        description: '飯店至富良野站的區間巴士。'
      },
      {
        time: '13:50 - 17:00',
        title: '返回札幌巴士',
        type: LocationType.TRANSPORT,
        description: '高速巴士 "富良野號" 返回札幌站。',
        notes: '車資: ¥2,700。約 3 小時。'
      },
      {
        time: '17:00',
        title: '飯店入住: JR Inn',
        type: LocationType.HOTEL,
        description: 'JR Inn 札幌站南口 (JR Inn Sapporo-eki Minami-guchi)',
        location: '1 Chome-10 Kita 3 Jonishi'
      },
      {
        time: '晚上',
        title: '最後採購',
        type: LocationType.SHOPPING,
        description: '札幌站周邊 (大丸百貨, Stellar Place)。'
      }
    ]
  },
  {
    id: 'd7',
    date: '12/23',
    weekday: '週二',
    title: '賦歸',
    events: [
      {
        time: '10:00',
        title: '退房',
        type: LocationType.HOTEL
      },
      {
        time: '12:30 - 13:20',
        title: '前往機場',
        type: LocationType.TRANSPORT,
        description: 'JR 快速 Airport 號。',
        notes: '札幌 -> 新千歲機場。約 43 分鐘。'
      },
      {
        time: '15:20 - 19:05',
        title: '飛機返台',
        type: LocationType.TRANSPORT,
        description: '星宇航空 (Starlux Airlines) JX851',
        location: '新千歲 (CTS) -> 台北 (TPE)'
      },
      {
        time: '19:05 - 20:00',
        title: '機場接送',
        type: LocationType.TRANSPORT,
        description: '接送 D3635610 返家。'
      }
    ]
  }
];

export const SAVED_PLACES: SavedPlace[] = [
  {
    id: 'h1',
    name: 'Vessel Hotel Campana Susukino',
    jpName: 'ベッセルホテルカンパーナすすきの',
    type: LocationType.HOTEL,
    address: '札幌 薄野'
  },
  {
    id: 'h2',
    name: 'Shin Furano Prince Hotel',
    jpName: '新富良野プリンスホテル',
    type: LocationType.HOTEL,
    address: '富良野'
  },
  {
    id: 'h3',
    name: 'JR Inn Sapporo-eki Minami-guchi',
    jpName: 'JRイン札幌駅南口',
    type: LocationType.HOTEL,
    address: '札幌站'
  },
  {
    id: 'f1',
    name: 'Nijo Market',
    jpName: '二条市場',
    type: LocationType.FOOD,
    address: '札幌'
  },
  {
    id: 'f2',
    name: 'Soup Curry Suage+',
    jpName: 'スープカレー Suage+',
    type: LocationType.FOOD,
    address: '薄野'
  },
  {
    id: 'f3',
    name: 'Daruma Genghis Khan',
    jpName: '成吉思汗 だるま',
    type: LocationType.FOOD,
    address: '薄野'
  },
  {
    id: 's1',
    name: 'Sapporo TV Tower',
    jpName: 'さっぽろテレビ塔',
    type: LocationType.SIGHTSEEING,
    address: '大通公園'
  },
  {
    id: 's2',
    name: 'Hokkaido Shrine',
    jpName: '北海道神宮',
    type: LocationType.SIGHTSEEING,
    address: '圓山'
  },
  {
    id: 's3',
    name: 'Shiroi Koibito Park',
    jpName: '白い恋人パーク',
    type: LocationType.SIGHTSEEING,
    address: '宮之澤'
  },
  {
    id: 's4',
    name: 'Ninguru Terrace',
    jpName: 'ニングルテラス',
    type: LocationType.SIGHTSEEING,
    address: '富良野'
  },
  {
    id: 's5',
    name: 'Furano Ski Resort',
    jpName: '富良野スキー場',
    type: LocationType.ACTIVITY,
    address: '富良野'
  }
];