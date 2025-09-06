

// 페이지 로드 시 환영 메시지
window.addEventListener('load', () => {
  console.log('웹사이트가 성공적으로 로드되었습니다!');
});

//
document.addEventListener('DOMContentLoaded', () => 
{
  const newsBtn = document.getElementById('btn-news');
  const stocksBtn = document.getElementById('btn-stocks');
  const indicsBtn = document.getElementById('btn-indicators');

  const stocksSection = document.getElementById('stocks-section');
  const chartArea = document.getElementById('chart-area');


  let isKorean = true; // 기본언어 한글
  const langToggle = document.getElementById('lang-toggle');
  const headTitle = document.getElementById('header-title');
  const headSub = document.getElementById('header-sub');

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      isKorean = !isKorean;
      langToggle.textContent = isKorean ? 'EN' : 'KO';

      // 배너 버튼 텍스트 동기화
      if (newsBtn)   newsBtn.textContent   = isKorean ? '📰 최신뉴스' : '📰 News';
      if (stocksBtn) stocksBtn.textContent = isKorean ? '📈 주가' : '📈 Stocks';
      if (indicsBtn) indicsBtn.textContent = isKorean ? '📅경제지표 일정' : '📅Economic Indicators';

      // 🔹 헤더 텍스트
    if (headTitle) headTitle.textContent = isKorean ? '환영합니다!' : 'Welcome!';
    if (headSub)   headSub.textContent   = isKorean ? '투자자들을 위한 정보통' : 'Info hub for overseas stock investors';

      
    });
  }

  

  if (newsBtn) {
    newsBtn.addEventListener('click', () => {
      alert(isKorean ?'📰 최신뉴스 오픈 예정!':'📰 News coming soon!');
      // 추후: 뉴스 섹션 열기 / 뉴스 위젯 연결
    });
  }

  if (stocksBtn) {
    stocksBtn.addEventListener('click', () => {
      if (stocksSection){
        const visible = stocksSection.style.display !== 'none';
        stocksSection.style.display = visible ? 'none' : 'block';
      }
      // 추후: 트레이딩뷰 위젯 표시
    });
  }


// 3) 이벤트 위임: M7 버튼 클릭 -> 해당 심볼 차트 로딩
document.getElementById('M7-buttons')?.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-symbol]');
  if (!btn) return;

  const symbol = btn.dataset.symbol;
  if (!symbol || !chartArea) return;

  // 차트 영역 비우고 컨테이너 생성
  chartArea.innerHTML = '<div id="tradingview_m7_chart"></div>';

  // tv.js는 index.html에서 이미 로드됨 (중복 로드 금지) 
  // → 바로 위젯 생성
  new TradingView.widget({
    "container_id": "tradingview_m7_chart",
    "symbol": symbol,
    "width": "100%",
    "height": 400,
    "theme": "light",
    "style": "1",
    "interval": "D",
    "locale": "kr",
    "allow_symbol_change": false
  });
});

  if (indicsBtn){
    indicsBtn.addEventListener('click', ()=>{
      alert(isKorean ? '경제지표 발표 일정 오픈 예정':'Economic indicators coming soon!');
    });
  }
});