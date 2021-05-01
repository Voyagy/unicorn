// -- itemデータ -- //
const dataBooks = [
                    {id: 1, name:"utakata" ,src:"./images/ps_source/bancy.png", title:`万示威／大吟醸<br> 泡沫取り`, detail: `米歩合40%の酒造好適米百式を、低温でじっくり醸してできたこのお酒。もろみを入れて吊るした小袋から、余分な力を与えずに、したたり落ちる滴だけを集めたころ、蔵中に華やかな香りで満たされます。そんな華やかな香りも瓶に詰め込んで、気品さをさらに際立たせるのが大吟醸の強みです。`, alc: 12, kome: "百式", seimai: 60},
                    {id: 2, src:"images/ps_source/sinaj.png", title:`至難樹　純米大吟醸<br>　一滴水　premium `, detail: `精米歩合40%の酒造好適米美山錦を、ゆっくりと時間をかけて低い温度で醸しました。古来より風雪などの苦難に耐え抜いているようなしなやかさと力強さを兼ね備えた、どっしりとした重みを持つ純米大吟醸になります。`,alc: 12, kome: "深山錦", seimai: 60},
                    {id: 3, name:"taizan", src:"images/ps_source/cshatria.gif", title:`苦捨取吾<br>　一滴水`, detail: `他の日本酒よりワンランク上の味わいを目指した プレミアム作品、クシャトリア。山川草木すべての 存在には、世界や森羅万象を表し、たとえ一滴の水にも仏の命が宿るというのが「一滴水」と言う言葉。酒造りにおいて理想を追い求めることは、結果として毎日の積み重ねによるということ。そんな思いを凝縮した逸品です。`,alc: 12, kome: "山田錦", seimai: 40},
                    {id: 4, src:"images/ps_source/neogiong.png",title:`大吟醸　新慈恩俱<br>　一滴水`, detail: `精米歩合40%の酒造好適米山田錦を、低温でゆっくりと醸しました。やさしい光に包まれるようなふくよかな味わいと、爽やかな香りをじっくりとお楽しみいただける大吟醸になりました。`,alc: 12, kome: "山田錦", seimai: 60},
                    {id: 5, src:"images/ps_source/shanbro.png", title:`山武露　regular`, detail: ` 口の中に入れた瞬間に香る花の香りが喉に至る頃にはバニラ香となり、その味わいはまるで絹に触れたときのようにのなめらかさを感じます。`,alc: 12, kome: "山田錦", seimai: 30},
                    {id: 6, src:"images/ps_source/delta.gif", title:`Δ+　中取り　regular `, detail: `山武露を製造する過程において、もろみを搾り出したときに最初に出る荒走り」と最後の責めの部分を取り除いたものが「中取り」。一番クリアな部分のみを詰めたお酒です。山武露の特徴をさらに際立たせたエレガントさ特徴です。非常にデリケートなので冷やしてお召し上がりください。`,alc: 12, kome: "山田錦", seimai: 30},
                    {id: 7, src:"images/ps_source/gineman2.png", title:`『心に従え』`, detail: `しっかりとした洋ナシのような香りと味わいが特徴です。冷やしてもお燗でも美味しく召し上がれます。`,alc: 12, kome: "山田錦", seimai: 30},
                    {id: 8, src:"images/ps_source/gineman.gif", title:`理屈では消せんのです。`,detail: `協会14号系酵母、爽やかですっきりとした香り、硝子細工のような透明感のある味わいが特徴です。冷やしてお召し上がりください。`,alc: 12, kome: "山田錦", seimai: 30},
                    {id: 9, src:"images/ps_source/raibow.png", title:`この虹のむこう`, detail: `フルーツの香りと甘みを口の中で感じますが、喉越しは不思議と良く、すっきりとキレが良い後味の純米酒です。冷やしてもお燗でも美味しく召し上がれます。`,alc: 12, kome: "山田錦", seimai: 30},
                    {id: 10, src:"images/ps_source/banarge.png", title:`『やりました・・・。やったんですよ！必死に！』`, detail: `青リンゴのようなフレッシュな香り、しかしながら香り前面に出過ぎることなく、酸味をすこし感じられつつ豊かな米の味わいを味わえる純米酒です。そのまま冷やで、お燗でも美味しく召し上がれます。`,alc: 12, kome: "山田錦", seimai: 30},
                    {id: 11, src:"images/ps_source/zta.gif", title:`Z　spesial`, detail: `果実のような香りながら味わいはすっきりとしたシャープな純米吟醸酒です。味わいをラベルに表しました。冷やしてお召し上がりください。`,alc: 12, kome: "山田錦", seimai: 60}
                  ];

const items = document.querySelector('.item-container');
function imageIN() {
  let itemBox = '';
  for(const data of dataBooks){
    let even = data.id;
    let name = data.name;

    if(even % 2 == 0){
     itemBox += `<div class="item"  id=${data.id}>
                <img src=${data.src}  style="left:50px;">
                <div class="item-details" style="left:360px">
                <p><span class="name">${data.title}</span></p>
                <p>${data.detail}</p>
                <div class="options">
                   <ul class="option">
                    <li>アルコール度数　${data.alc}%</li>
                    <li>使用米　${data.kome}</li>
                      <li>精米歩合　${data.seimai}%</li>
                     </ul>
                  </div>
                 </div>
                </div>`;
      }else if(name === "utakata") {
        itemBox +=
        ` <div class="utakata-container">
           <div class="utakata">
             <p>
              <span class="roma">Utakata Dori</span><br>
              <span class="uni-title">泡沫取り</span><br>
              <ruby>（うたかたどり）</ruby><br><br>　
              <span class="utakata-detail">一粒一粒、米をじっと観察し、己の手の上でその給水具合を計る。甑(こしき)から、熱い湯気が立ち昇る中、蒸しあがった米を掘り出す。麹の締まり具合、固さもその手で感じ取る。<br>
              酒を醸すその作業一つ一つは、どれ一つとっても簡単に言い表せるものではない。<br>
              はっきり言ってしまえば精米歩合40％の酒は今となっては珍しくない。日本酒の甘辛を決める日本酒度なんてものは、酒蔵の数以上に酒の数だけある。しかしこの酒のコンセプトは数字では測れないものをつくることにある。<br>
              そうして拘りに拘りを尽くすのが酒造りであるが、それだけで満足せず、唯一これのみ、という酒を造るための最後の工程、それが「泡沫取り」である。<br>
              袋に醪(もろみ)を入れたあと、余分な圧力をかけることなく、したたり落ちる酒だけを「斗瓶(とびん)」と呼ばれる容器で受ける。そうして集めた斗瓶を選りすぐり、さらに最高の一本を選ぶ。<br>
              こんなにも手間ひまのかかることをする理由は、唯一、精魂を込めた透明感を導き出すためにある。<br>
              これまでの全て、それはこの逸品のために存在する。</span>
            </p>
           </div>
           <div class="bancy-item"  id=${data.id}>
             <img src=${data.src}>
             <div class="bancy-item-detail">
               <p><span class="name">${data.title}</span></p>
               <p class="detail">${data.detail}</p>
             <div class="options">
                <ul class="option">
                 <li>アルコール度数　${data.alc}%</li>
                 <li>使用米　${data.kome}</li>
                 <li>精米歩合　${data.seimai}%</li>
                </ul>
               </div>
            </div>
          </div>
          </div> `;

      }else if (name === "taizan") {
        itemBox += `<div class="taizan-container">
                    <div class="taizan">
                      <p>
                        <span class="roma">Unicorn Premium</span><br>
                        <span class="uni-title">泰山・韻山<br>　珠一水</span><br><br>　
                     ワンランク上の味わいを追求した 作プレミアム槐山・陽山シリーズ。
                     「一適水」とは、山川草木すべての 存在は、世界や森羅万象を具現し、一滴の水にも仏の命が宿るという教え。
                     気高い理想のお酒を追い求めることは、帰結として毎日の行いの積み重ねで あるとの思いを込めました。
                      </p>
                    </div>
                    <div class="cshatria-item" id=${data.id}>
                      <img src=${data.src} >
                      <div class="cshatria-item-detail">
                        <p><span class="name">${data.title}</span></p>
                         <p class="detail">${data.detail}</p>
                          <div class="options">
                            <ul class="option">
                              <li>アルコール度数　${data.alc}%</li>
                              <li>使用米　${data.kome}</li>
                              <li>精米歩合　${data.seimai} %</li>
                            </ul>
                          </div>
                        </div>
                     </div>
                   </div>`;
    }else if(even % 2 != 0) {
      itemBox += `<div class="item"  id=${data.id}>
      <img src=${data.src} style="right:50px;">
      <div class="item-details" style="right:360px;">
      <p class="name"><span>${data.title}</span></p>
      <p class="detail">${data.detail}</p>
      <div class="options">
        <ul class="option">
          <li>アルコール度数　${data.alc}%</li>
          <li>使用米　${data.kome}</li>
          <li>精米歩合　${data.seimai} %</li>
        </ul>
      </div>
      </div>
      </div>`;

    }
  }
  items.innerHTML = itemBox;
}

//　-- スクロールでフェードイン -- //
function scrollAction(){
  window.addEventListener('scroll',()=>{
    let scroll = window.scrollY;
    if(scroll >= 3600){
      items.classList.add('show');
    }
  });
}
scrollAction();

// -- スライダーアクション -- //

const slide = document.querySelector('.slide');
const next = document.querySelector('#next-btn');
const prev = document.querySelector('#prev-btn');
const show = document.querySelector('.show');
const slideImg = document.querySelector('.slide-img');
let active = document.querySelector('.active');
const topImg = document.querySelector('.top-imgs');
const topTitle = document.querySelector('.top-title');

function topShow() {
  topImg.classList.add('show');
  setTimeout(()=>{topTitle.classList.add('show');}, 3000 );
}

window.addEventListener('load', ()=>{
  imageIN();
  topShow();
});


function sliderNext(){
    slide.classList.toggle('next');
    setTimeout(toggleNext, 3900);
  }
    function toggleNext(){
    active = document.querySelector('.active');
    active.remove();
    slide.insertBefore(active, slide.firstElementChild);
    active.classList.remove('active');
    slide.lastElementChild.classList.add('active');
    active = document.querySelector('.active');
    slide.classList.remove('next');
  }
  next.addEventListener('click', sliderNext);

    function togglePrev(){
      active = document.querySelector('.active');
      let prevActive = slide.firstElementChild;
      prevActive.remove();
      slide.appendChild(prevActive);
      active.classList.remove('active');
      slide.lastElementChild.classList.add('active');
      active = document.querySelector('.active');
      slide.classList.toggle('prev');
    }
    function removePrev(){
      slide.classList.toggle('prev');
    }

    function sliderPrev(){
      togglePrev();
      setTimeout(removePrev, 3900);
    }
  prev.addEventListener('click', sliderPrev);
