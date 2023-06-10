prediction1=""
prediction2=""

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})

camera=document.getElementById("camera")

Webcam.attach('camera')


function snapshot(){

    Webcam.snap(function(data_uri){

     document.getElementById("result").innerHTML='<img id="taken_snap_img" src="'+data_uri+'"/>'

     console.log("webcam attached")
    })
   
}
console.log("ml5.version: " , ml5.version)

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/T8MjSjg7d/model.json",modelLoaded)

function modelLoaded (){

    console.log("model loaded")
}

function speak(){

    var synth = window.speechSynthesis
    speak_data1="The first prediction is "+ prediction1
    speak_data2="And the second prediction is "+ prediction2 + " Did I get it right ? "
    var utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2)
    synth.speak(utterThis)
}

function predict(){

    img=document.getElementById("taken_snap_img")
    classifier.classify(img , gotResult)

}

function gotResult(error,results){
    if(error){
        console.error(error)

    }else{
        console.log(results)
        document.getElementById("result1").innerHTML= results[0].label  
        document.getElementById("result2").innerHTML= results[1].label  

        prediction1= results[0].label 
        prediction2= results[1].label 

        speak()

        if(results[0].label=="Victory"){

            document.getElementById("emoji_img1").innerHTML="&#9996;"
        }
        if(results[0].label=="Pain"){

            document.getElementById("emoji_img1").innerHTML="&#9994;"
        }
        if(results[0].label=="Thumbs Up"){

            document.getElementById("emoji_img1").innerHTML="&#128077;"
        }

        if(results[0].label=="Thumbs Down"){

            document.getElementById("emoji_img1").innerHTML="&#128078;"
        }

        if(results[0].label=="Rock On"){

            document.getElementById("emoji_img1").innerHTML="&#129304;"
        }

        if(results[0].label=="Call me"){

            document.getElementById("emoji_img1").innerHTML="&#129305;"
        }

        if(results[0].label=="Super"){

            document.getElementById("emoji_img1").innerHTML="&#128076;"
        }




        if(results[1].label=="Victory"){

            document.getElementById("emoji_img2").innerHTML="&#9996;"
        }
        if(results[1].label=="Pain"){

            document.getElementById("emoji_img2").innerHTML="&#9994;"
        }
        if(results[1].label=="Thumbs Up"){

            document.getElementById("emoji_img2").innerHTML="&#128077;"
        }

        if(results[1].label=="Thumbs Down"){

            document.getElementById("emoji_img2").innerHTML="&#128078;"
        }

        if(results[1].label=="Rock On"){

            document.getElementById("emoji_img2").innerHTML="&#129304;"
        }

        if(results[1].label=="Call me"){

            document.getElementById("emoji_img2").innerHTML="&#129305;"
        }

        if(results[1].label=="Super"){

            document.getElementById("emoji_img2").innerHTML="&#128076;"
        }

}

    }

function freeze1(){
    Webcam.freeze()
}

function unfreeze1(){
    Webcam.unfreeze()
}

function reset1(){
    Webcam.reset()
}

function start1(){
    Webcam.attach(camera)
}

function delete1(){
   document.getElementById("result").innerHTML=""
}