<script>

</script>

<div class="bar">
  <div class="close-btn">
    <button class="btn">✕</button>
  </div>
  <div class="links">
    <div class="apps">
      <a class="app" href="youtube.com"><img class="img" src="https://rotony.com.br/wp-content/uploads/2021/09/free-youtube-logo-icon-2431-thumb.png" alt="YT"></a>
    </div>
    <div class="apps">
      <a class="app" href="youtube.com"><img src="https://rotony.com.br/wp-content/uploads/2021/09/free-youtube-logo-icon-2431-thumb.png" alt="YT"></a>
    </div>
  </div>
</div>

<style>
  .btn{
    background-color: transparent;
    border-style: none;
    font-size: 1.3rem;
    color: white;
    border-radius: 5px;
  }

  .btn:hover{
    background-color: rgba(255, 255, 255, 0.521);
    color: rgb(255, 0, 0);
  }
  .close-btn{
    height: 10%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }

  .img{
    width: 70%;
    height: 70%;
  }

  .app{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .links{
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content:flex-start;
  }

  .bar{
    background-color: rgba(0, 0, 0, 0.792)  ;  
    position: fixed;
    height: 95%;
    width: 5%;
    z-index: 1;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }
</style>