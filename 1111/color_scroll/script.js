//1.オブジェクトで色を用意
const settingColors = [
    { r: 255, g: 0, b: 0 }, //赤
    { r: 0, g: 255, b: 0 }, //緑
    { r: 0, g: 0, b: 255 }, //青
    { r: 255, g: 255, b: 0 }, //黄色
];


//5.documentの縦の長さ取得
const fullHeight = document.documentElement.scrollHeight;
console.log(fullheight);


//2.オブジェクトの色をbodyの背景色にする
const bodyelm = document.body;
//document.querySelector('body');
console.log(bodyelm);
document.body.style.backgroundColor =
    'rgb(' +
    settingColors[0].r +
    ',' +
    settingColors[0].g +
    ',' +
    settingColors[0].b +
    ')';

//3.4色制作して、配列にする


//4.スクロールするたびにイベント
window.addEventListener('scroll', function () {
    console.log('スクロール');
})

const scroly






//6.1 / 4進んだら色が変わるようにする


//7.スクロールを4分割
if (scrollY < fullHeight / 4) {
    document.body.style.backgroundColor =
        'rgb(' +
        settingColors[0].r +
        ',' +
        settingColors[0].g +
        ',' +
        settingColors[0].b +
        ')';
} else if (scrollY < fullHeight / 2) {
    document.body.style.backgroundColor =
        'rgb(' +
        settingColors[1].r +
        ',' +
        settingColors[1].g +
        ',' +
        settingColors[1].b +
        ')';
} else if (scrollY < (fullHeight * 3) / 4) {
    document.body.style.backgroundColor =
        'rgb(' +
        settingColors[2].r +
        ',' +
        settingColors[2].g +
        ',' +
        settingColors[2].b +
        ')';
} else {
    document.body.style.backgroundColor =
        'rgb(' +
        settingColors[3].r +
        ',' +
        settingColors[3].g +
        ',' +
        settingColors[3].b +
        ')';
}


//8.スクロール量を計算
//9.変数scrollableを4分割
//10.関数の定義
//11.関数の呼び出し（実行）の実引数