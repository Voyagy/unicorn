const dataBooks = [
                    {id:"1", src:"images/ps_source/unicorn.gif", title:`唯魂 純米大吟醸`, detail: `杜氏　林楠花治氏の入魂の一作。<br>「唯魂」は人々の想いと魂を結ぶ<br>ニュータイプの酒でありたいと願っています。<br>心と心を重ねあう、<br>まるで苦楽を共にしてきた仲間と語り合うかのように<br>「唯魂」を味わいながら悠久の時間を味わってください。<br>`},
                    {id:"2", src:"images/ps_source/bancy.gif", title:`万示威／大吟醸　泡沫取り`, detail: `米歩合40%の酒造好適米百式を、低温でじっくり醸してできたこのお酒。もろみを入れて吊るした小袋から、余分な力を与えずに、したたり落ちる滴だけを集めたころ、蔵中に華やかな香りで満たされます。そんな華やかな香りも瓶に詰め込んで、気品さをさらに際立たせるのが大吟醸の強みです。`},
                    {id:"3", src:"images/ps_source/sinaj.png", title:`至難樹　純米大吟醸　一滴水　premium `, detail: `精米歩合40%の酒造好適米美山錦を、ゆっくりと時間をかけて低い温度で醸しました。古来より風雪などの苦難に耐え抜いているようなしなやかさと力強さを兼ね備えた、どっしりとした重みを持つ純米大吟醸になります`},
                    {id:"4", src:"images/ps_source/cshatria.gif", title:`苦捨取吾　一滴水`, detail: `他の日本酒よりワンランク上の味わいを目指した プレミアム作品、クシャトリア。山川草木すべての 存在には、世界や森羅万象を表し、たとえ一滴の水にも仏の命が宿るというのが「一滴水」と言う言葉。酒造りにおいて理想を追い求めることは、結果として毎日の積み重ねによるということ。そんな思いを凝縮した逸品です。`},
                    {id:"5", src:"images/ps_source/neogiong.png",title:`大吟醸　新慈恩俱　一滴水`, detail: `精米歩合40%の酒造好適米山田錦を、低温でゆっくりと醸しました。やさしい光に包まれるようなふくよかな味わいと、爽やかな香りをじっくりとお楽しみいただける大吟醸になりました。`},
                    {id:"6", src:"images/ps_source/shanbro.png", title:`山武露　regular`, detail: ` 口の中に入れた瞬間に香る花の香りが喉に至る頃にはバニラ香となり、その味わいはまるで絹に触れたときのようにのなめらかさを感じます。`},
                    {id:"7", src:"images/ps_source/delta.gif", title:`Δ+　中取り　regular `, detail: `山武露を製造する過程において、もろみを搾り出したときに最初に出る荒走り」と最後の責めの部分を取り除いたものが「中取り」。一番クリアな部分のみを詰めたお酒です。山武露の特徴をさらに際立たせたエレガントさ特徴です。非常にデリケートなので冷やしてお召し上がりください。`},
                    {id:"8", src:"images/ps_source/gineman2.png", title:`『心に従え』`, detail: `しっかりとした洋ナシのような香りと味わいが特徴です。冷やしてもお燗でも美味しく召し上がれます。`},
                    {id:"9", src:"images/ps_source/gineman.gif", title:`理屈では消せんのです。`,detail: `協会14号系酵母、爽やかですっきりとした香り、硝子細工のような透明感のある味わいが特徴です。冷やしてお召し上がりください。`},
                    {id:"10", src:"images/ps_source/raibow.png", title:`この虹のむこう`, detail: `フルーツの香りと甘みを口の中で感じますが、喉越しは不思議と良く、すっきりとキレが良い後味の純米酒です。冷やしてもお燗でも美味しく召し上がれます。`},
                    {id:"11", src:"images/ps_source/banarge.png", title:`『やりました・・・。やったんですよ！必死に！』`, detail: `青リンゴのようなフレッシュな香り、しかしながら香り前面に出過ぎることなく、酸味をすこし感じられつつ豊かな米の味わいを味わえる純米酒です。そのまま冷やで、お燗でも美味しく召し上がれます。`},
                    {id:"12", src:"images/ps_source/zta.gif", title:`Z　spesial`, detail: `果実のような香りながら味わいはすっきりとしたシャープな純米吟醸酒です。味わいをラベルに表しました。冷やしてお召し上がりください。`}
                  ];

const items = document.querySelector('.item-container')
function imageIN() {
  let itemBox = '';
  for(const data of dataBooks){
    let even = data.id;
    if(even % 2 == 0){
     itemBox += `<div class="item"  id=${data.id}>
                <img src=${data.src}  style="float:right">
                <div class="item-details" id=${data.id} style="float:left">
                <p class="name"><span>${data.title}</span></p>
                <p>${data.detail}</p>
                </div>
                </div>`
      }else{
       itemBox += `<div class="item"  id=${data.id}>
                    <img src=${data.src} style="float:left">
                    <div class="item-details" id=${data.id} style="float:right">
                    <p class="name"><span>${data.title}</span></p>
                    <p>${data.detail}</p>
                    </div>
                    </div>`
    }
  }
  items.innerHTML = itemBox;
}
window.addEventListener('load', ()=>{
  imageIN();
});

const slide = document.querySelector('.slide');
const next = document.querySelector('#next-btn');
const prev = document.querySelector('#prev-btn');
const show = document.querySelector('.show');
const slideImg = document.querySelector('.slide-img');
let active = document.querySelector('.active');

function sliderNext(){
    slide.classList.toggle('next');
    setTimeout(toggleNext, 3900);
  }
    function toggleNext(){
    active = document.querySelector('.active');
    active.remove;
    slide.insertBefore(active, slide.firstElementChild);
    active.classList.remove('active');
    slide.lastElementChild.classList.add('active');
    active = document.querySelector('.active');
    slide.classList.toggle('next');
  }
  next.addEventListener('click', sliderNext);

    function togglePrev(){
      const prevActive = slide.firstElementChild;
      prevActive.remove;
      slide.appendChild(prevActive);
      active.classList.remove('active');
      slide.lastElementChild.classList.add('active');
      slide.classList.toggle('prev');
    }

    function removePrev(){
      slide.classList.remove('prev');

    }

    function sliderPrev(){
      togglePrev();
      setTimeout(removePrev, 3900);
    }
  prev.addEventListener('click', sliderPrev);
