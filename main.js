function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}


function gotResults(error, results) {
  if(error)
   {
    console.error(error);
   } 
  else
   {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2) + " %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById('animal_image');
    img1 = document.getElementById('animal_image1');
    img2 = document.getElementById('animal_image2');
    img3 = document.getElementById('animal_image3');


    if(results[0].label == "Barking")
    {
        img.src = 'dog-barking.gif';
        img1.src = 'CAT.png';
        img2.src = 'COW.png';
        img3.src = 'LION.png';
    }
    if(results[0].label == "Meowing")
    {
      img.src = 'DOG.png';
      img1.src = 'meow.gif';;
        img2.src = 'COW.png';
        img3.src = 'LION.png';
    }
    if(results[0].label == "Moo")
    {
        img.src = 'DOG.png';
        img1.src = 'CAT.png';
        img2.src = 'moo.gif';
        img3.src = 'LION.png';
    }
    if(results[0].label == "Roar")
    {
        img.src = 'DOG.png';
        img1.src = 'CAT.png';
        img2.src = 'COW.png';
        img3.src = 'lion-roar.gif';
    }
  }
}