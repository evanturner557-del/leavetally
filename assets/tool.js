(function(){var f=document.getElementById('calc'),o=document.getElementById('result');if(!f)return;
function run(){var v={};f.querySelectorAll('input[data-k]').forEach(function(i){var n=parseFloat(i.value);v[i.getAttribute('data-k')]=isNaN(n)?0:n;});
o.innerHTML=(function(v){var d=Math.min(Math.max(v.days,0),7);var e=Math.min(d*5.6,28);return '<strong>'+(Math.round(e*10)/10)+' days</strong> of statutory leave a year ('+d+' days a week × 5.6 weeks, capped at 28). Bank holidays can count towards this unless your contract says otherwise.';})(v);}
f.addEventListener('input',run);f.addEventListener('submit',function(ev){ev.preventDefault();run();});run();})();
