function changeText() {
    const intro = document.getElementById('intro');
    const messages = [
        '웹 개발은 정말 재미있어요!',
        'JavaScript로 상호작용을 만들 수 있습니다.',
        'GitHub Pages로 무료 호스팅이 가능해요!',
        '계속 공부하면 더 멋진 것을 만들 수 있어요!'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    intro.textContent = randomMessage;
}

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


  
    if (newsBtn) {
      newsBtn.addEventListener('click', () => {
        alert('📰 최신뉴스 오픈 예정!');
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
        alert('경제지표 발표 일정 오픈 예정');
      });
    }
  });

