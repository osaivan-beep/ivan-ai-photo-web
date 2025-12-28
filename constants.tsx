import { 
  Wand2, Sparkles, Video, ImagePlus, Ghost, Layers, 
  Palette, Brush, Square, Type, Stamp, PenTool 
} from 'lucide-react';
import { Feature, PricePlan, ShowcaseImage } from './types';

export const FEATURES: Feature[] = [
  { 
    id: 1, 
    title: 'AI 提示詞工坊 (AI Prompt Workshop)', 
    subtitle: '創意矩陣，風格無限',
    description: `AI 提示詞工坊 (10大矩陣風格)
寫實攝影： 鎖定鏡頭語言，強調真實質感。
專業人像： 嚴格錨定主角臉型，僅更換環境與服裝。
寵物攝影： 捕捉毛孩眼神與毛髮，模擬專業棚拍。
3D渲染： 支援迪士尼、皮克斯或賽博龐克立體風格。
數位繪畫： 包含油畫、水彩、精細素描等藝術表達。
LINE貼圖： 自動生成帶有粗白邊的 8/16 格貼圖草稿。
商業廣告： 產品展示台、名模手持等專業商攝構圖。
海報設計： 預留標題空間，適合電影、活動視覺創作。
漫畫風格： 日本漫畫、美式英雄等多種畫風切換。
標誌設計： 簡約向量、3D 立體等多樣化 Logo 提案。`, 
    icon: Wand2 
  },
  { 
    id: 2, 
    title: 'AI 優化提示詞 (Refine Prompt)', 
    subtitle: '點擊之間，平凡變非凡',
    description: '只有模糊的想法？輸入簡單詞彙，點擊「AI 優化」，系統將運用大型語言模型將您的點子擴充為具備細節描述、光影氣氛的高品質專業提示詞，讓生成結果更接近藝術殿堂。', 
    icon: Sparkles 
  },
  { 
    id: 3, 
    title: 'AI 影片提示詞 (Video Prompt)', 
    subtitle: '靜態影像，動態腳本',
    description: '連結靜態圖片與動態影片的橋樑。AI 能深度分析圖片構圖，自動產出 3 種專業影片製作方案，包含運鏡建議（Panning, Zooming, FPV 等）、氣氛描述與聲音設計，為您的影片創作提供即時靈感。', 
    icon: Video 
  },
  { 
    id: 4, 
    title: '文生圖功能 (Text-to-Image)', 
    subtitle: '從零到一，憑空想像',
    description: '無需上傳參考圖，只需描述您腦海中的畫面。支援多種畫布比例（1:1, 16:9, 9:16 等），AI 將根據文字直接創造出獨一無二的數位藝術作品。', 
    icon: ImagePlus 
  },
  { 
    id: 5, 
    title: '圖生圖功能 (Image-to-Image)', 
    subtitle: '精準編輯，局部重塑',
    description: '上傳您的照片，利用畫筆塗抹「紅線遮罩」，指定 AI 僅修改特定區域。無論是為人物換裝、更換背景，還是修改照片細節，都能與原圖結構完美融合。', 
    icon: Ghost 
  },
  { 
    id: 6, 
    title: '影像合成工具 (Collage Editor)', 
    subtitle: '創意排版，光影統一',
    description: '內建強大的拼圖佈局功能。您可以將多張圖片自由排列、旋轉、鏡像，形成創意草圖。完成後透過「AI 合成」技術，將不同素材融合成一張光影一致、細節完美的完整影像。', 
    icon: Layers 
  },
  { 
    id: 7, 
    title: '專業後製編輯器 (Photo Editor)', 
    subtitle: '一鍵提亮，質感立顯',
    description: '除了 AI 生成，我們也提供專業的數位暗房功能。包含曝光、對比、去霧等基礎參數調整，更內建「一鍵提亮」與「一鍵調暗」快速修正採光問題，滿足專業攝影愛好者的後製需求。', 
    icon: Palette 
  },
  { 
    id: 8, 
    title: '光影筆刷 (Light Brush)', 
    subtitle: '手工刷出電影級光影',
    description: '不只是濾鏡，更是畫筆。您可以用筆刷在畫面局部「加強白光」、「加強暖光」或增加局部銳度。這讓您可以像大師般細膩地雕刻主體臉部光影，營造非凡氛圍。', 
    icon: Brush 
  },
  { 
    id: 9, 
    title: '局部遮罩層 (Mask Layers)', 
    subtitle: '細節控的極致追求',
    description: '支援筆刷、放射狀漸層與線性漸層三種遮罩模式。您可以針對畫面特定局部進行精細調色，實現「天空變藍但地景不變」或「主體鮮豔但背景黑白」的高級藝術效果。', 
    icon: Square 
  },
  { 
    id: 10, 
    title: '文字標籤系統 (Text Overlay)', 
    subtitle: '設計感，隨手拈來',
    description: '支援多種藝術字體與排版範本。您可以自由調整字體、透明度、對齊位置與間距。內建九宮格快速定位，讓您的照片瞬間變身為具備設計感的雜誌封面或海報。', 
    icon: Type 
  },
  { 
    id: 11, 
    title: '藝術印章產生器 (Watermark Generator)', 
    subtitle: '傳統印藝，數位重生',
    description: '為您的 AI 創作留下最完美的句點。模擬傳統篆刻藝術，提供陰刻方、陽刻圓、手寫簽名等 8 種經典樣式。可自由調整文字大小、間距與「做舊斑駁感」，讓數位影像也擁有藝術收藏的質感。', 
    icon: Stamp 
  },
  { 
    id: 12, 
    title: 'AI 詩詞靈感 (AI Poet)', 
    subtitle: '圖中有詩，意境深遠',
    description: '藝術印章的最佳拍檔。AI 會根據圖片內容，模仿李白、蘇軾、徐志摩或泰戈爾等名家流派，創作出一首與畫面意境相符的高質感詩詞，讓您的影像創作具備深厚的文化底蘊。', 
    icon: PenTool 
  }
];

export const PLANS: PricePlan[] = [
  {
    name: '基礎方案',
    points: 500,
    price: 'NT$ 500',
    features: ['500 積分/月', '標準 AI 生成速度', '所有核心編輯功能', '社群支援'],
    isPopular: false
  },
  {
    name: '專業方案',
    points: 1100,
    price: 'NT$ 1000',
    features: ['1100 積分/月 (含加贈)', '優先 AI 生成速度', '商業授權使用', '1對1 專屬技術支援', '新功能搶先體驗'],
    isPopular: true
  }
];

// 使用更穩定的 lh3.googleusercontent.com 連結格式
export const SHOWCASE_IMAGES: ShowcaseImage[] = [
  { url: 'https://lh3.googleusercontent.com/d/1FVguQ8AAv7VWgVC61biWphmfHtnd5YVt', alt: '商業廣告' },
  { url: 'https://lh3.googleusercontent.com/d/1HfYbTKQ6AK0vQucOuvPscMnWFyzY8qGk', alt: '海報設計' },
  { url: 'https://lh3.googleusercontent.com/d/1uDGhGG91WB4QaZ1GjThC4-aije_Zwmki', alt: '水墨創作' },
  { url: 'https://lh3.googleusercontent.com/d/1IhwqN6vkhA-HzpS0miHGt8ZtbJI-Srsd', alt: '雜訊去除' },
  { url: 'https://lh3.googleusercontent.com/d/1LcLICS8BAlrgExLijn4X3N5aVFjI-4yX', alt: '婚紗創作' },
  { url: 'https://lh3.googleusercontent.com/d/19gV6RsUMVEcDl3Z0Cs39m1G8jincio-8', alt: '背景淨化' }
];

export const WHY_US = [
  {
    title: '極致操控性',
    description: '首創紅線遮罩編輯，精準決定 AI 修改區域。',
  },
  {
    title: '專業攝影邏輯',
    description: '內建長焦、廣角、大光圈等專業術語指令，讓成品具備電影質感。',
  },
  {
    title: '藝術落款',
    description: '獨家印章產生器與 AI 詩詞功能，讓 AI 作品不再冰冷。',
  },
  {
    title: '低門檻高產出',
    description: '無需複雜學習，輸入自然語言即可實現驚人效果。',
  }
];