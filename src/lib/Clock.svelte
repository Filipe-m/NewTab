<script>
  let time = undefined
function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;
  time = hh + " : " + mm + " : " + ss + " " ;
  var t = setTimeout(function(){ currentTime() }, 1000); 
}

currentTime();
</script>
<div class="time">
  <h1>{time}</h1>
</div>

<style>
  .time{
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  h1{
    margin: 0;
    font-family: Orbitron;
  }
</style>