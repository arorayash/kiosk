let helpers = {
    check : function(){
        console.log("Verified");
    },

    mouseMove : function(e){
        console.log(this);
      //  this.check();
        let bRect = this.getBoundingClientRect();
        let mX = e.pageX;
        let mY = e.pageY;
        let pX = Math.floor((mX - bRect.left) / bRect.width * 100);
        let pY = Math.floor((mY - bRect.top) / bRect.height * 100);
        let rotX = (pY - 50)/5;
        let rotY = -(pX - 50)/5;

        this.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    },

    mouseLeave : function(id){
        let idTag = document.getElementById(`${id}`);
        idTag.style.transform = '';
    }
}

export default helpers;