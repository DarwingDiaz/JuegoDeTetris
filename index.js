const margenTablero = 10

function setup(){
  createCanvas(900,600)
  tablero = new Tablero()
  resizeCanvas(
    tablero.ancho + 2 * margenTablero, 
    tablero.alto + 2 * margenTablero
  )

}
function draw() {
  background("lightgray")
  tablero.dibujar()
}

class Tablero{

  constructor() {
    this.columnas = 10
    this.filas = 20
    this.lado_celda = 25
    this.ancho = this.columnas * this.lado_celda
    this.alto = this.filas * this.lado_celda
    this.posicion = createVector(margenTablero,margenTablero)
  }
 
  coordenada(x,y){
    return createVector(x,y).mult(this.lado_celda).add(this.posicion)
  }


  // Proceso logico para dibujar

  dibujar(){
    push()
    noStroke()
    for (let columna = 0; columna < this.columnas; columna++) {
      for (let fila = 0; fila < this.filas; fila++) {
        
        let c = this.coordenada(columna,fila)
        rect(c.x,c.y,this.lado_celda)
      }
    }
    pop()
  }
}