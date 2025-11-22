“Caza la caja encendida”
Instrucciones:
1. Crea un contenedor donde se genere una matriz de n x n celdas (elige un n fijo o con input).
2. Al cargar la página:
    - Elige al azar una celda y agrega una clase .lit que la pinte de un color distinto.
3. Cuando el usuario haga click en una celda:
    - Si es la celda encendida, muestra un mensaje “¡Acertaste!” y vuelve a encender otra celda diferente aleatoria.
    - Si no es la correcta, muestra un pequeño efecto de error (por ejemplo un fondo rojo por
200ms usando transition).
4. Lleva un contador de aciertos y errores en la parte superior.
5. Usa CSS con:
    - Clases .lit, .wrong.
    - Transiciones suaves para cambiar de color.
    - cursor: pointer en las celdas.