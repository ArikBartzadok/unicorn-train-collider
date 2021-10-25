class Unicornio {
  constructor() {
    this.r = 100;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravidade = 2;
  }
  
  pular() {
    if (this.y == height - this.r) {
      this.vy = -25;
    }
  }
  
  mover() {
    this.y += this.vy;
    this.vy += this.gravidade;
    this.y = constrain(this.y, 0, height - this.r);
  }
  
  colisao(objeto) {
    const x1 = this.x + this.r * 0.5;
    const y1 = this.y + this.r * 0.5;
    const x2 = objeto.x + objeto.r * 0.5;
    const y2 = objeto.y + objeto.r * 0.5;
    
    const colidiu = collideCircleCircle(
      x1,
      y1,
      this.r,
      x2,
      y2,
      objeto.r
    );
    
    return colidiu;
  }
  
  exibir() {
    image(imagemUnicornio, this.x, this.y, this.r, this.r);
  }
}