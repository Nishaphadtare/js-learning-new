function stringHandsOn() {
    console.log("================step1====================");
    console.log(`Given string is: "${"   Hey you are doing good, keep it up   "}" ` );

    console.log("================step2====================");
    var char =  "   Hey you are doing good, keep it up    " 
    var res = char.length;
    console.log(`Given characters length is: ${res}`);

    console.log("================step3====================");

     var greed = "   Hey you are doing good, keep it up    " ;
     console.log(`Length before trim: ${greed.length}`);
     var result = greed.trim();
     console.log(`Length after trim: ${result.length}`);

     console.log("================step4====================");

     var word = "Hey you are doing good, keep it up" ;
     var res  = word.split(" ");
     console.log(`Removed extra spaces: ${res.length}`);

     console.log("================step5====================");

     var character= "Hey you are doing good, keep it up" ;
     var result = character.charAt(0);
     var char= "Hey you are doing good, keep it up" ;
     var res = char.charAt(33)

     console.log(`First character after trim : ${result} and last character after trim:${res}`);

     console.log("================step6====================");

     var words = "Hey you are doing good, keep it up";
     var res = words.split(" ");
     console.log(` total number of characters: ${res.length}`);

     console.log("================step7====================");

     var word = "Hey you are doing good, keep it up";
     var result = word.indexOf("good");
     console.log(`index of word "good" is: ${result}`);

     console.log("================step8====================");

     var words = "Hey you are doing good, keep it up";
     var res = words.substring(22);
     console.log(`by using substring() index of 22 is: ${res}`);

     
     console.log("================step9====================");

     var words = "Hey you are doing good, keep it up";
     var result = words.endsWith("up");
     console.log(`String end with word "up": ${result}`);

     
     console.log("================step10====================");

     var words = "Hey you are doing good, keep it up";
    var res = words.startsWith("Hey");
    console.log(`String start with word "Hey": ${res}`);
     






}
stringHandsOn()