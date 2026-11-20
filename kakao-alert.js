/* 문의 접수 시 카카오 알림톡 발송 요청 (구글 앱스스크립트 → 솔라피). 메일 접수와 별개로 동작하며 실패해도 문의 접수에는 영향 없음 */
(function(){
  var URL='https://script.google.com/macros/s/AKfycbyCANZ37DAOlPenZBsWeG9MnJQrDfm9OBBVBk05gwMGBTxs3hFDwYKNkB5kH7bxl1Lolg/exec';
  window.yonyAlert=function(data){
    if(!URL) return;
    try{
      var d={}; for(var k in data){ if(k.charAt(0)!=='_'||k==='_subject') d[k]=data[k]; }
      d._token='yony-web-2026';
      fetch(URL,{method:'POST',mode:'no-cors',keepalive:true,headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(d)}).catch(function(){});
    }catch(e){}
  };
})();
