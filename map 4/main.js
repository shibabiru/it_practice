
let map;
let marker = [];
let infoWindow = [];
let markerData = [
  { 
    id:1,
    name:'<a href="https://www.ejcra.org/column/ca_79.html"> ハワイ・コナ </a> <br> 香りが豊かで、まろやかな口当たりとスッキリした後味、甘い香りが特徴。',
    lat: 19.737097760460983,
    lng: -156.04293533164105,
    icon: '_i_icon_00048_icon_000480_16.png'
  }, { 
    id:2,
    name:'<a href="https://www.ejcra.org/column/ca_94.html"> キリマンジャロ </a> <br> 強い酸味と甘みのバランスが良く、香りも芳醇で、コクのあるコーヒー。最高級は、キリマンジャロの頂を一年中覆う万年雪にちなんで「スノートップ」の名が与えられている。',
    lat:-3.0659674237677237,
    lng:37.35588460871015,
    icon: '_i_icon_00048_icon_000480_16.png'
  }, {
    id:3,
    name:'<a href="https://www.ejcra.org/column/ca_47.html"> モカ </a> <br> 酸味、程よい苦味とコクを有し、その独特の味と香りで有名なコーヒー。イエメン産、エチオピア産ともに「モカ」の名称だが、両者は産地が異なり、それぞれ独特の香味を持っているので、「イエメン産モカ（モカマタリ）」、「エチオピア産モカ（モカ・ハラーまたはモカ・ハラリ）」と呼ばれている。',
    lat: 13.331350676836417,
    lng: 43.24373225602252,
    icon: '_i_icon_00048_icon_000480_16.png'
  }, {
    id:4,
    name:'<a href="https://www.ejcra.org/column/ca_95.html"> マンデリン </a> <br> インドネシア産コーヒーの代表品種で、ストラマ島で栽培されているコーヒー。酸味が少なく、上品な苦味とほんのりとした甘さが魅力的。',
    lat: -0.16484204609499134,
    lng: 101.30950781287906,
    icon: '_i_icon_00048_icon_000480_16.png'
  }, {
    id:5,
    name:'<a href="https://www.ejcra.org/column/ca_77.html"> ブルーマウンテン </a> <br> 香り高く、繊細な味わいで酸味や苦味、コクなどの調和が取れた、バランスが良いコーヒー。コーヒーの中でも、樽詰で輸出されるのはブルーマウンテンだけであり、このコーヒーが持つもう一つの大きな特徴でもある。',
    lat: 18.124787115075346,
    lng: -76.67860508007708,
    icon: '_i_icon_00048_icon_000480_16.png'
  }, {
    id:6,
    name:'<a href="https://www.ejcra.org/column/ca_89.html"> ブラジル </a> <br> ブラジルは世界第1位のコーヒー生産国であり、世界の全生産量のうち約30%を占めている。酸味と苦味のバランスが良く落ち着いた風味で、雑味のない香ばしい味わいが特徴。ブレンドのベースとしても多く使われている。',
    lat: -22.464920680332078,
    lng: -45.00008599591415,
    icon: '_i_icon_00048_icon_000480_16.png'
  }, {
    id:7,
    name:'<a href="https://www.ejcra.org/column/ca_99.html"> コロンビア </a> <br> 酸味、苦味、甘みともに豊かなマイルドコーヒーの代表格で、コロンビアマイルドという名称があるほど。世界第2位のコーヒー生産国であり、一定以上の基準を満たした特別なコーヒーには「エメラルドマウンテン」の名が与えられている。',
    lat: 5.482033943865709,
    lng: -75.21158687745812,
    icon: '_i_icon_00048_icon_000480_16.png'
  }, {
    id:8,
    name:'<a href="https://www.ejcra.org/column/ca_124.html"> グァテマラ </a> <br> おもにグァテマラ・アンティグア地区で栽培されたコーヒー。香りの良い、豊かな酸味とコクのある味わいが楽しめる。',
    lat: 14.631863469377743,
    lng: -90.57552825868373,
    icon: '_i_icon_00048_icon_000480_16.png'
  }, {
    id:9,
    name:'<a href="https://www.ejcra.org/column/ca_143.html"> カロシ、トラジャ </a> <br> 赤道直下のインドネシア、スラウェシ島のごく限られた高地で栽培されるコーヒー。キレがよく上品で心地よい苦味と、ほのかな甘味が特徴的。粒の大きさと共に、陽光の角度によって明緑色から暗緑色へと変化することから、コーヒーのオパールとも呼ばれている。',
    lat: -1.5786349528874617,
    lng: 120.52539142104659,
    icon: '_i_icon_00048_icon_000480_16.png'
  }
];

function initMap() {
  const mapLatLng = new google.maps.LatLng({lat: markerData[0]['lat'],
    lng: markerData[0] ['lng']});
  map = new google.maps.Map(document.getElementById('mapSample'), {
    center: mapLatLng,
    zoom: 1 });
      
  for (let i = 0; i < markerData.length; i++) {
    let markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'],
      lng: markerData[i]['lng']});
    marker[i] = new google.maps.Marker({
      position: markerLatLng,
      map: map
    });
    
    infoWindow[i] = new google.maps.InfoWindow({
      content: '<div class="mapSample">' + markerData[i]['name'] + 
      '</div>'
    });
    
    marker[i].setOptions({// マーカーのオプション設定
      icon: {
        url: markerData[i]['icon']// マーカーの画像を変更
      }
    });
    markerEvent(i); // マーカーにクリックイベントを追加
  }
}

function markerEvent(i) {
  marker[i].addListener('click', function() { // マーカーをクリックしたとき
    infoWindow[i].open(map, marker[i]); // 吹き出しの表示
  });
}
