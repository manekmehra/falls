class Falliing {
constructor(x,y,width,height){
    this.height = Rnd(20,0)
    this.width = Rnd(20,0)
    this.x = Rnd(400,0)
    this.y =  Rnd(400,0)
    this.body = Bodies.rectangle(x,y,width,height)
    this.x = this.matter.body.x
    this.y = this.matter.body.y
}
}