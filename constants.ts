import { DaySchedule, LocationType, SavedPlace } from './types';

export const TRIP_TITLE = "北海道冬季之旅";
export const TRIP_DATES = "2025年12月17日 - 12月23日";
export const MAP_LIST_URL = "https://maps.app.goo.gl/sFRuU2Aaad7poMHaA";

const SAPPORO_COORDS = { lat: 43.0618, lng: 141.3545 };
const FURANO_COORDS = { lat: 43.3421, lng: 142.3832 };

// Data extracted manually from the provided itinerary image and translated to ZH-TW
export const ITINERARY_DATA: DaySchedule[] = [
  {
    id: 'd1',
    date: '12/17',
    weekday: '週三',
    title: '抵達 & 札幌',
    locationCoords: SAPPORO_COORDS,
    weatherForecast: '小雪 (-2°C / -6°C)',
    events: [
      {
        time: '04:50 - 05:30',
        title: '集合 & 前往機場',
        type: LocationType.TRANSPORT,
        description: '搭乘機場接送前往第一航廈。',
        notes: '接送 ID: D3635608 | 隨身 7kg+1, 托運 25kg',
        tips: ['請再次確認護照效期 (至少6個月)', 'VJW 入境審查 QR Code 是否截圖?']
      },
      {
        time: '07:25 - 12:00',
        title: '飛往新千歲',
        type: LocationType.TRANSPORT,
        description: '泰國亞洲航空 (Thai AirAsia) FD242',
        location: '台北 (TPE) -> 新千歲 (CTS)',
        transportInfo: '飛行時間約 3h 35m'
      },
      {
        time: '12:00 - 14:00',
        title: '前往札幌市區',
        type: LocationType.TRANSPORT,
        description: '搭乘 JR 至札幌站，轉乘地鐵至薄野。',
        transportInfo: 'JR 快速 Airport (37分) -> 地鐵南北線',
        cost: '¥1,230 + ¥210',
        transportDetail: '1. JR 新千歲空港站 -> 札幌站 (每12分鐘一班)\n2. 札幌站轉乘 "地鐵南北線" (真駒內方向)\n3. 搭乘 2 站至 "薄野站 (Susukino)"'
      },
      {
        time: '14:00',
        title: '飯店入住: Vessel Hotel',
        type: LocationType.HOTEL,
        description: 'Vessel Hotel Campana Susukino (船舶花園薄野飯店)',
        location: '6 Chome-16-1 Minami 5 Jonishi',
        japaneseName: 'ベッセルホテルカンパーナすすきの',
        japaneseAddress: '北海道札幌市中央区南５条西６丁目16-1',
        transportDetail: '地鐵薄野站 (Susukino) 4號出口步行 4 分鐘',
        tips: ['大浴場在 2 樓', '早餐提供海鮮丼吃到飽', '14:00 - 23:00 有免費迎賓飲料']
      },
      {
        time: '17:00 - 18:00',
        title: '晚餐: 成吉思汗烤肉',
        type: LocationType.FOOD,
        description: 'Daruma (達摩) 或 Suage 湯咖哩',
        notes: '成吉思汗烤肉 (Daruma) 在札幌有三間分店。',
        japaneseName: '成吉思汗だるま 本店',
        tips: ['本店座位少，排隊較久，建議去 5.5 店或 6.4 店', '如果不吃羊肉，可改去 Suage+ 吃湯咖哩', '不能預約，需現場排隊'],
        cost: '¥3,000 - ¥4,000 / 人'
      },
      {
        time: '18:00 - 21:00',
        title: '狸小路逛街',
        type: LocationType.SHOPPING,
        description: '唐吉訶德、Mandarake、藥妝店。',
        location: '狸小路商店街',
        tips: ['唐吉訶德在狸小路 3 丁目 (24小時)', '藥妝店建議在 Sun Drug 或 Matsumoto Kiyoshi 比價', '記得帶護照辦理免稅']
      }
    ]
  },
  {
    id: 'd2',
    date: '12/18',
    weekday: '週四',
    title: '市區觀光 & 神宮',
    locationCoords: SAPPORO_COORDS,
    weatherForecast: '多雲時晴 (-4°C / -8°C)',
    events: [
      {
        time: '09:30 - 10:00',
        title: '前往健身房',
        type: LocationType.TRANSPORT,
        description: '搭乘地鐵南北線至中島公園站。',
        transportDetail: '從薄野站搭乘 1 站至中島公園站'
      },
      {
        time: '10:00 - 11:00',
        title: '中島體育中心',
        type: LocationType.ACTIVITY,
        description: '晨間健身 (CJ)。',
        location: '中島公園',
        japaneseName: '中島体育センター',
        tips: ['單次入場費 ¥600', '需自備室內鞋 (很重要!)']
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
        location: '大通公園',
        japaneseName: 'さっぽろテレビ塔',
        tips: ['在大通公園拍照即可，不一定要上去', '晚上點燈比較漂亮'],
        cost: '展望台 ¥1,000'
      },
      {
        time: '12:30 - 13:30',
        title: '午餐: 二條市場',
        type: LocationType.FOOD,
        description: '海鮮丼 (Kaisen-don)。',
        notes: '店家: 大磯 (Ohiso) 通常需要排隊。',
        japaneseName: '二条市場 大磯',
        tips: ['如果不吃生食，也有烤魚定食', '可以試試 "どんぶり茶屋" 作為備案'],
        cost: '¥2,500 - ¥4,000'
      },
      {
        time: '13:30 - 14:00',
        title: '前往北海道神宮',
        type: LocationType.TRANSPORT,
        description: '搭乘地鐵至圓山公園站。',
        transportDetail: '地鐵東西線: 大通站 -> 圓山公園站 (3站)'
      },
      {
        time: '14:00 - 15:00',
        title: '北海道神宮',
        type: LocationType.SIGHTSEEING,
        description: '參拜、吃六花亭甜點、買御守。',
        location: '圓山公園',
        japaneseName: '北海道神宮',
        tips: ['必吃: 神宮茶屋的 "判官餅" (現烤)', '可以買 "拉拉熊" 限定御守']
      },
      {
        time: '15:30 - 16:30',
        title: '白色戀人公園',
        type: LocationType.SIGHTSEEING,
        description: '巧克力工廠參觀/園區。',
        location: '宮之澤站',
        japaneseName: '白い恋人パーク',
        transportDetail: '地鐵東西線終點站 "宮之澤" 下車，步行 7 分鐘',
        tips: ['戶外區免費，參觀工廠需購票', '冬季有夜間點燈 (Illumination)']
      },
      {
        time: '18:00 - 21:00',
        title: '聖誕市集 & 燈飾',
        type: LocationType.SIGHTSEEING,
        description: '札幌白色燈樹節 & 慕尼黑聖誕市集。',
        location: '大通公園 2丁目',
        tips: ['聖誕市集只到 12/25', '推薦熱紅酒與德國香腸', '人潮眾多，注意保暖']
      }
    ]
  },
  {
    id: 'd3',
    date: '12/19',
    weekday: '週五',
    title: '移動至富良野',
    locationCoords: FURANO_COORDS,
    weatherForecast: '大雪 (-7°C / -12°C)',
    events: [
      {
        time: '11:00',
        title: '午餐',
        type: LocationType.FOOD,
        description: '出發前午餐。',
        tips: ['建議在札幌站 ESTA 或 Stellar Place 用餐', '推薦: 根室花丸迴轉壽司 (需早點去抽號碼牌)']
      },
      {
        time: '12:50 - 15:50',
        title: '前往富良野巴士',
        type: LocationType.TRANSPORT,
        description: '北海道 Resort Liner / 中央巴士 "富良野號 (Furano express)"',
        notes: '札幌站巴士總站 -> 富良野站。車資: ¥2,700 (約3小時)',
        transportDetail: '札幌站前巴士總站 (ESTA 1樓) 16號乘車處',
        tips: ['長途車程，建議上車前先去洗手間', '車上有免費 Wi-Fi', '如果不塞車約 2.5 小時可到']
      },
      {
        time: '16:00',
        title: '飯店入住: 王子大飯店',
        type: LocationType.HOTEL,
        description: '新富良野王子大飯店 (Shin Furano Prince Hotel)',
        location: '富良野',
        japaneseName: '新富良野プリンスホテル',
        japaneseAddress: '北海道富良野市中御料',
        tips: ['有溫泉 "紫彩之湯" (需付費，住宿客有優惠)', '飯店直通滑雪場']
      },
      {
        time: '晚上',
        title: '精靈露臺',
        type: LocationType.SIGHTSEEING,
        description: '森林中的手工藝品店 (童話木屋)。',
        location: '王子大飯店園區',
        japaneseName: 'ニングルテラス',
        tips: ['就在飯店停車場旁，步行可達', '最佳拍照時間是傍晚藍調時刻', '路面結冰很滑，走路要小心']
      }
    ]
  },
  {
    id: 'd4',
    date: '12/20',
    weekday: '週六',
    title: '滑雪日 1',
    locationCoords: FURANO_COORDS,
    weatherForecast: '陰有雪 (-8°C / -14°C)',
    events: [
      {
        time: '全天',
        title: '滑雪 / 自由活動',
        type: LocationType.ACTIVITY,
        description: '富良野滑雪場 (Furano Ski Resort)',
        location: '富良野區 / 北之峰區',
        japaneseName: '富良野スキー場',
        tips: ['初學者建議在 "富良野區" (飯店側) 練習', '纜車票約 ¥6,500 / 日', '午餐可以在山頂餐廳吃咖哩飯']
      }
    ]
  },
  {
    id: 'd5',
    date: '12/21',
    weekday: '週日',
    title: '滑雪日 2',
    locationCoords: FURANO_COORDS,
    weatherForecast: '晴時多雲 (-8°C / -15°C)',
    events: [
      {
        time: '全天',
        title: '滑雪 / 自由活動',
        type: LocationType.ACTIVITY,
        description: '享受粉雪。',
        location: '富良野滑雪場',
        tips: ['如果累了，可以去 "風之花園" 走走', '飯店內的 "Soh\'s BAR" 很有氣氛']
      }
    ]
  },
  {
    id: 'd6',
    date: '12/22',
    weekday: '週一',
    title: '返回札幌',
    locationCoords: SAPPORO_COORDS,
    weatherForecast: '小雪 (-3°C / -7°C)',
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
        description: '飯店至富良野站的區間巴士。',
        transportDetail: '飯店門口搭乘 Lavender Bus 至富良野站'
      },
      {
        time: '13:50 - 17:00',
        title: '返回札幌巴士',
        type: LocationType.TRANSPORT,
        description: '高速巴士 "富良野號" 返回札幌站。',
        notes: '車資: ¥2,700。約 3 小時。',
        tips: ['回到札幌剛好晚餐時間']
      },
      {
        time: '17:00',
        title: '飯店入住: JR Inn',
        type: LocationType.HOTEL,
        description: 'JR Inn 札幌站南口 (JR Inn Sapporo-eki Minami-guchi)',
        location: '1 Chome-10 Kita 3 Jonishi',
        japaneseName: 'JRイン札幌駅南口',
        japaneseAddress: '北海道札幌市中央区北３条西１丁目10',
        tips: ['有枕頭選單 (Pillow Menu) 可以選喜歡的枕頭', '離 JR 札幌站步行約 7 分鐘', '樓下有便利商店']
      },
      {
        time: '晚上',
        title: '最後採購',
        type: LocationType.SHOPPING,
        description: '札幌站周邊 (大丸百貨, Stellar Place)。',
        tips: ['大丸百貨 B1 食品街必逛 (買伴手禮)', '六花亭、北菓樓、Kinotoya 都有櫃位']
      }
    ]
  },
  {
    id: 'd7',
    date: '12/23',
    weekday: '週二',
    title: '賦歸',
    locationCoords: SAPPORO_COORDS,
    weatherForecast: '晴朗 (-2°C / -6°C)',
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
        notes: '札幌 -> 新千歲機場。約 43 分鐘。',
        tips: ['建議預留時間逛國內線航廈 (好買好吃)', 'Kinotoya 起司塔、美瑛選果玉米麵包 (常排隊)']
      },
      {
        time: '15:20 - 19:05',
        title: '飛機返台',
        type: LocationType.TRANSPORT,
        description: '星宇航空 (Starlux Airlines) JX851',
        location: '新千歲 (CTS) -> 台北 (TPE)',
        tips: ['記得把液體放入托運行李', '入關後免稅店較少，建議在外面買齊']
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
