window.addEventListener('load', function() {
  var title = document.getElementsByTagName('a')[1];
  title.addEventListener('mouseover', function() {
    title.classList.add('texto');
  });
  title.addEventListener('mouseout', function() {
    title.classList.remove('texto');
  });
  title.addEventListener('click', mostrar);
  function mostrar() {
    document.getElementById('form-interaction').style.visibility = 'visible';
  };
  var input = document.getElementById('inpList');
  var boton = document.getElementById('boton'); 
  var forminteractivos = document.getElementById('form-interaction-one');
  boton.addEventListener('click', function(event) {   
    if (input.value) {
      var conteinerform = document.createElement('div'); 
      var parrf = document.createElement('p');
      parrf.textContent = input.value;     
      parrf.setAttribute('type', 'text');
      parrf.classList.add('divinptint');
      conteinerform.classList.add('divformint');
      var icon = document.createElement('i');     
      icon.setAttribute('class', 'fa fa-minus');
      icon.classList.add('iconiteract');
      parrf.appendChild(icon);
      var link = document.createElement('a');
      link.textContent = 'Añadir una tarea';
      link.setAttribute('id', 'alista');
      link.setAttribute('href', '#');
      link.classList.add('link'); 
      link.classList.add('link:hover');
      input.value = '';
      // creando 2do formulario iteractivo 2
      var conteinerformm = document.createElement('div');
      conteinerformm.classList.add('contForm-iteractiv-2');   
      var conteinerList = document.createElement('div');
      conteinerList.classList.add('contForm-listTareas');
      var list = document.createElement('textarea');
      list.classList.add('list-one');
      list.setAttribute('id', 'txttarea');
      var listNew = document.createElement('textarea');
      listNew.textContent = 'Añadir una tarea';      
      listNew.classList.add('list-two-one'); 
      conteinerList.appendChild(list);
      conteinerList.appendChild(listNew);
      listNew.style.visibility = 'hidden';
      var btn = document.createElement('button');
      btn.textContent = 'Añadir';
      btn.setAttribute('id', 'btn');
      btn.classList.add('divbtn');
      var h3 = document.createElement('p');
      h3.textContent = 'x';
      h3.classList.add('divh3iter');
      var spn = document.createElement('span');
      spn.classList.add('divspan');
      var iconn = document.createElement('i');
      iconn.setAttribute('class', 'fa fa-ellipsis-h');
      iconn.classList.add('iconiter');
      spn.appendChild(iconn);  
      conteinerformm.style.visibility = 'hidden';    
      conteinerform.appendChild(parrf);
      conteinerform.appendChild(link);
      conteinerformm.appendChild(conteinerList);
      conteinerformm.appendChild(btn);
      conteinerformm.appendChild(h3);
      conteinerformm.appendChild(spn);
      conteinerformm.appendChild(iconn);
      conteinerformm.appendChild(listNew);
      conteinerform.appendChild(conteinerformm); 
      forminteractivos.appendChild(conteinerform);
      // Funcion para agregar Nombre de lista.            
      btn.addEventListener('click', function(event) {
        var lengt = document.getElementById('txttarea').value.length;
        if (lengt <= 40) {
          list.style.height = '25px';
          list.disabled = true;
          listNew.classList.add('list-two-two'); 
          listNew.style.visibility = 'visible';
        };                 
      });
      link.addEventListener('click', function(event) {
        conteinerformm.style.visibility = 'visible';      
      });
      // document.getElementById("form-interaction").style.visibility = "hidden";
      document.getElementById('form-interaction').classList.add('divform-one');
    };
  });
});