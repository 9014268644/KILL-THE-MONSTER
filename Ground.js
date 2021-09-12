class Ground{
    constructor(x,y,w,h)
    {
        var options = {
            isStatic = true
        };
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.image=loadImage("");
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h)

        background("white");
    }
}