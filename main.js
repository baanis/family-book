var images= [
    "https://st.depositphotos.com/1724125/2693/v/600/depositphotos_26930203-stock-illustration-cartoon-dad.jpg" ,
    "https://www.seekpng.com/png/detail/270-2703114_questionnaire-for-smart-mom-cartoon.png"  ,
    "https://www.pngkit.com/png/detail/258-2587144_welcome-teenage-girl-cartoon-png.png" ,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOZG3LOJbWiyuDmjY2LCTna41nS9GdYDFGQ&usqp=CAU" ,
    "https://cdn.pixabay.com/photo/2020/08/18/11/29/dog-5497928__340.png"];
    var texts= [
        "Dad" ,
        "Mom" ,
        "Sister" ,
        "Me" ,
        "Dog"];
    var i=0;
    function family(){
        if(i==5)
        {
            i=0;
        }
        document.getElementById("cover1").src=images[i];
        document.getElementById("flip").innerHTML=texts[i];
        i++;
    };
