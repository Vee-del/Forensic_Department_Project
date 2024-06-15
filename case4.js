//botão autopsia
document.getElementById("autopsia").onclick = function () {
    btn.innerHTML = '<img src="https://i.pinimg.com/564x/6c/d4/f1/6cd4f159474308aa25daaece9f1e9d1a.jpg" <img src="imagefile. jpg" alt="Image" height="500" width="500" align="left">';
    document.getElementById('veneno').disabled = false
    document.getElementById('autopsia').disabled = true
    document.getElementById('pesquisa_de_dados').disabled = true
     document.getElementById('analise_de_roupas').disabled = true
    document.getElementById('idbody').disabled = true
    document.getElementById('newAClothes').disabled = true
    document.getElementById('veneno').style.display = 'inline';
    document.getElementById('retornar').style.display = 'inline';
    document.getElementById('count_down_two').style.display = 'none';
    document.getElementById('count_down_three').style.display = 'none';
     document.getElementById('count_down_div').style.display = 'inline';
    
     }
    //botão pesquisa de dados
    document.getElementById("pesquisa_de_dados").onclick = function () {
    btn.innerHTML = '<img src="https://i.pinimg.com/564x/33/1e/56/331e560515e36985e69646808c0028e7.jpg" <img src="imagefile. jpg" alt="Image" height="500" width="500" align="left">';
     document.getElementById('autopsia').disabled = true
      document.getElementById('pesquisa_de_dados').disabled = true
     document.getElementById('analise_de_roupas').disabled = true
    document.getElementById('idbody').disabled = false
    document.getElementById('idbody').style.display = 'inline';
    document.getElementById('retornar').style.display = 'inline';
      document.getElementById('count_down_div').style.display = 'none';
    
    document.getElementById('count_down_two').style.display = 'inline';
      document.getElementById('count_down_three').style.display = 'none';
    }
    // botão análise de roupas
    document.getElementById("analise_de_roupas").onclick = function () {
    btn.innerHTML = '<img src="https://i.pinimg.com/564x/71/d6/31/71d6312cf55d4a8b09eeb50be98f7caa.jpg" alt="Image" height="500" width="500" align="left">';
       document.getElementById('analise_de_roupas').disabled = true
      document.getElementById('pesquisa_de_dados').disabled = true
     document.getElementById('autopsia').disabled = true
    document.getElementById('newAClothes').disabled = false
     document.getElementById('newAClothes').style.display = 'inline';
    document.getElementById('retornar').style.display = 'inline';
     document.getElementById('count_down_div').style.display = 'none';
    
    document.getElementById('count_down_two').style.display = 'none';
      document.getElementById('count_down_three').style.display = 'inline';
    }
    
    // botões secundários
    document.getElementById('veneno').style.display = 'none';
    document.getElementById('newAClothes').style.display = 'none';
    document.getElementById('idbody').style.display = 'none';
    document.getElementById('retornar').style.display = 'none';
    
    
    // botão retornar ao menu anterior
    document.getElementById("retornar").onclick = function () {
       btn.innerHTML = "";
        document.getElementById('pesquisa_de_dados').disabled = false
         document.getElementById('analise_de_roupas').disabled = false
        document.getElementById('autopsia').disabled = false
        document.getElementById('retornar').style.display = 'none';
        document.getElementById('veneno').style.display = 'none';
        document.getElementById('newAClothes').style.display = 'none';
        document.getElementById('idbody').style.display = 'none';
      document.getElementById('count_down_two').style.display = 'none';
    document.getElementById('count_down_three').style.display = 'none';
      document.getElementById('count_down_two').style.display = 'none';
    
      
    
     }
    
    // Timer 1 
    
     function launch_count_down_div()
    {
      let ccount_down_div = document.getElementById("count_down_div");
      
      let total_delay = 2 * 1000; 
      let count_down_delay = 1000 * 1; 
      let count_down = 0;
      count_down_div.textContent = heures_minutes_secondes( (total_delay - count_down)/1000 );
      let count_Interval = window.setInterval(function() {
        count_down += count_down_delay;
        count_down_div.textContent = heures_minutes_secondes( (total_delay - count_down)/1000 );
        if (count_down >= total_delay) { count_down = 0; }
      }, count_down_delay);
    
      setTimeout( function(){
     
        clearInterval(count_Interval);
           
         alert ("A análise está pronta.")
       count_down_div.innerHTML = '<img src="https://i.pinimg.com/564x/0b/14/ca/0b14ca155943ac7acdeafe7db25f09ed.jpg" <img src="imagefile. jpg" alt="Image" height="500" width="500" position="absolute" align="center">';
    document.getElementById('pesquisa_de_dados').disabled = false
    document.getElementById('analise_de_roupas').disabled = false 
    document.getElementById('autopsia').disabled = false
      }, total_delay);
    
    }
    
    function heures_minutes_secondes( secondes )
    {
      let temps = new Date();
      temps.setTime(secondes*1000);
      if( secondes > 60 * 60) 
      {
        return (temps.getHours()-1).toString().padStart(2,'0')+":"+temps.getMinutes().toString().padStart(2,'0')+":"+temps.getSeconds().toString().padStart(2,'0');
      } else {
        return temps.getMinutes().toString().padStart(2,'0')+":"+temps.getSeconds().toString().padStart(2,'0');
      }
    }
    
    document.getElementById("veneno").addEventListener('click', function() {
      alert("A análise ficará pronta em 120 segundos. Aguarde.")
        document.getElementById('retornar').style.display = 'none';   
      launch_count_down_div();
      this.style.display = 'none'; 
    });
    
    // timer 2
    
    function launch_count_down_two()
    {
      let ccount_down_two = document.getElementById("count_down_two");
      
      let total_delay = 2 * 1000; 
      let count_down_delay = 1000 * 1; 
      let count_down = 0;
      count_down_two.textContent = heures_minutes_secondes( (total_delay - count_down)/1000 );
      let count_Interval = window.setInterval(function() {
        count_down += count_down_delay;
        count_down_two.textContent = heures_minutes_secondes( (total_delay - count_down)/1000 );
        if (count_down >= total_delay) { count_down = 0; }
      }, count_down_delay);
    
      setTimeout( function(){
     
        clearInterval(count_Interval);
        
        alert ("A análise está pronta.")
       
        count_down_two.innerHTML = '<img src="https://i.pinimg.com/564x/e0/b9/8e/e0b98e037cbc80a2da4398043beedd87.jpg"<img src="imagefile. jpg" alt="Image" height="500" width="500" position="absolute" align="center">';
        document.getElementById('pesquisa_de_dados').disabled = false
    document.getElementById('analise_de_roupas').disabled = false 
        document.getElementById('autopsia').disabled = false
      }, total_delay);
    
    }
    
    function heures_minutes_secondes( secondes )
    {
      let temps = new Date();
      temps.setTime(secondes*1000);
      if( secondes > 60 * 60) 
      {
        return (temps.getHours()-1).toString().padStart(2,'0')+":"+temps.getMinutes().toString().padStart(2,'0')+":"+temps.getSeconds().toString().padStart(2,'0');
      } else {
        return temps.getMinutes().toString().padStart(2,'0')+":"+temps.getSeconds().toString().padStart(2,'0');
      }
    }
    
    document.getElementById("idbody").addEventListener('click', function() {
      alert("A análise ficará pronta em 120 segundos. Aguarde.")
        document.getElementById('retornar').style.display = 'none';   
      launch_count_down_two();
      this.style.display = 'none'; 
    });
    
    // timer 3 
    
    function launch_count_down_three()
    {
      let count_down_three = document.getElementById("count_down_three");
      
      let total_delay = 2 *1000; 
      let count_down_delay = 1000 * 1; 
      let count_down = 0;
      count_down_two.textContent = heures_minutes_secondes( (total_delay - count_down)/1000 );
      let count_Interval = window.setInterval(function() {
        count_down += count_down_delay;
        count_down_two.textContent = heures_minutes_secondes( (total_delay - count_down)/1000 );
        if (count_down >= total_delay) { count_down = 0; }
      }, count_down_delay);
    
      setTimeout( function(){
     
        clearInterval(count_Interval);
        alert ("A análise está pronta.")
    
       
        count_down_three.innerHTML = '<img src="https://i.pinimg.com/564x/81/a1/7b/81a17bd154ce9e2e58ca94cf61cff1ec.jpg" alt="Image" height="500" width="500" position="absolute" align="center">';
        document.getElementById('pesquisa_de_dados').disabled = false
    document.getElementById('analise_de_roupas').disabled = false 
        document.getElementById('autopsia').disabled = false
      }, total_delay);
    
    }
    
    function heures_minutes_secondes( secondes )
    {
      let temps = new Date();
      temps.setTime(secondes*1000);
      if( secondes > 60 * 60) 
      {
        return (temps.getHours()-1).toString().padStart(2,'0')+":"+temps.getMinutes().toString().padStart(2,'0')+":"+temps.getSeconds().toString().padStart(2,'0');
      } else {
        return temps.getMinutes().toString().padStart(2,'0')+":"+temps.getSeconds().toString().padStart(2,'0');
      }
    }
    
    document.getElementById("newAClothes").addEventListener('click', function() {
       alert("A análise ficará pronta em 180 segundos. Aguarde.")
       document.getElementById('retornar').style.display = 'none';   
      launch_count_down_three();
      this.style.display = 'none'; 
    });
    