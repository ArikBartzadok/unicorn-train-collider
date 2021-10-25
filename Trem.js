class Trem {
  constructor() {
    this.r = 75;
    this.x = width;
    this.y = height - this.r;
  }
  
  mover() {
    this.x -= 16;
  }
  
  exibir() {
    image(imagemTrem, this.x, this.y, this.r, this.r);
  }
}