function car(lincese, drive) {
    this.id;
    this.lincese =lincese;
    this.drive = drive;
    this.passenger;    
}

car.prototype.printDatecar = function(){
    console.log(this.drive)
    console.log(this.drive.name)
    console.log(this.drive.document)
}