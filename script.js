
// Función para mostrar un mensaje de bienvenida
function mostrarBienvenida() {
    alert('¡Bienvenido/a a nuestra página dedicada al K-pop!');
  }
  
  // Función para mostrar información de un grupo de K-pop
  function mostrarInformacionGrupo(grupo) {
    var informacion = '';
  
    if (grupo === 'BTS') {
      informacion = 'En 2018, BTS se convirtió en el primer grupo de K-pop en alcanzar y mantener el primer lugar en la lista Billboard 200 con su álbum "Love Yourself: Tear". Fue la primera vez en 12 años que un álbum en idioma no inglés ocupó el primer lugar en esa lista.';
    } else if (grupo === 'BLACKPINK') {
      informacion = 'BLACKPINK se convirtió en el primer grupo de chicas de K-pop en actuar en el Festival de Música y Artes de Coachella Valley en 2019. Su actuación atrajo una gran atención y generó elogios de la crítica internacional.';
    } else if (grupo === 'EXO') {
      informacion = 'EXO es conocido por tener una gran cantidad de fanáticos dedicados, y sus seguidores se llaman a sí mismos "EXO-L". El nombre "EXO-L" proviene de la combinación de las palabras "EXO" y "Love", y el símbolo del fandom es una combinación de las iniciales "EXO" y la letra "L" estilizada.';
    } else if (grupo === 'TWICE') {
      informacion = 'TWICE es conocido por su habilidad en la coreografía de baile. De hecho, su coreografía para la canción "TT" se volvió viral en todo el mundo debido a su movimiento de baile característico, donde forman una "T" con sus brazos mientras mueven sus dedos como si estuvieran llorando, imitando el gesto de las caritas tristes "TT" utilizadas en mensajes de texto y redes sociales. Este movimiento se convirtió en un fenómeno y muchas personas comenzaron a imitarlo en línea.';
    }
  
    alert(informacion);
  }