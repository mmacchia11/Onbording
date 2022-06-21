const container = document.querySelector('.container-card')


fetch("tecnologias.json")
.then(res => res.json())
.then(datos =>{


        for(data of datos){
              container.innerHTML+=`
       
          <div class="card">
            <div class="img">
              <img src="./IMG/${data.imagen}.png" alt="">
              <h5>${data.titulo}</h5>
              
            </div>
            <div class="texto">
              <p>${data.info}</p>
            </div>
          </div>
          
      
              `
        }
})













