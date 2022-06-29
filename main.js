function startclassification(){
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mBhXD_tar/model.json', modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        randomr=Math.floor(Math.random()*255)+1;
        randomg=Math.floor(Math.random()*255)+1;
        randomb=Math.floor(Math.random()*255)+1;

        document.getElementById("resultlabel").innerHTML='I can hear - '+results[0].label;
        document.getElementById("accuracylabel").innerHTML='Accuracy: '+(results[0].confidence*100).toFixed(0)+'%';
        document.getElementById("resultlabel").style.color="rgb("+randomr+","+randomg+","+randomb+")";
        document.getElementById("accuracylabel").style.color="rgb("+randomr+","+randomg+","+randomb+")";

        img1=document.getElementById("image1");
        img2=document.getElementById("image2");
        img3=document.getElementById("image3");
        img4=document.getElementById("image4");

        if(results[0]=="Clap"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if(results[0]=="Bell"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if(results[0]=="Snap"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";
        }
        else{
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif";

        }
    }
}