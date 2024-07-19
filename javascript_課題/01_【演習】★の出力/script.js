for(var toi1=1;toi1<=5;toi1++){
    document.write("★");
}
document.write("<br>"+"<br>");

/*
「toi1」を1として、5以下になるまで1増やす処理を行い
処理した回数だけ「★」を表示する。
*/

var toi2=1;
while(toi2<=2){
    for(var star2=1;star2<=3;star2++){
        document.write("★");
    }
    document.write("<br>");
    toi2++;
}
document.write("<br>");

/*
「toi2」を1として、2以下になるまで1増やす処理を行う。
1増やす処理を一回行うごとに
「star2」を1として、3になるまで1増やす処理を行い
処理した回数だけ「★」を表示し改行する。
*/

for(var toi3=1;toi3<=2;toi3++){
    for(var star3=1;star3<=5;star3++){
        document.write("☆");
    }
    document.write("<br>");
}
document.write("<br>");

/*
「toi3」を1として、2以下になるまで1増やす処理を行う。
1増やす処理を一回行うごとに
「star3」を1として、5になるまで1増やす処理を行い
処理した回数だけ「☆」を表示し改行する。
*/

for(var toi4=1;toi4<=4;toi4++){
    for(var star4=1;star4<=5;star4++){
        document.write("★");
    }document.write("<br>");
}document.write("<br>");

/*
「toi4」を1として、5以下になるまで1増やす処理を行う。
1増やす処理を一回行うごとに
「star4」を1として、5になるまで1増やす処理を行い
処理した回数だけ「★」を表示し改行する。
*/

for(var toi5=1;toi5<=4;toi5++){
    for(var star5=1;star5<=3;star5++){
        document.write("★");
    }document.write("<br>");
}document.write("<br>");

/*
「toi5」を1として、4以下になるまで1増やす処理を行う。
1増やす処理を一回行うごとに
「star5」を1として、3になるまで1増やす処理を行い
処理した回数だけ「★」を表示し改行する。
*/

for(var toi6=1;toi6<=3;toi6++){
    for(var star6=1;star6<=3;star6++){
        if(star6 % 2==1){
            document.write("☆");
        }else{
            document.write("★");
        }
    }
    document.write("<br>");
}
document.write("<br>");

/*
「toi6」を1として、3以下になるまで1増やす処理を行う。
1増やす処理を一回行うごとに
「star6」を1として、3になるまで1増やす処理を行い
処理した回数が偶数回であれば「☆」を、
偶数回でなければ「★」を表示し改行する。
*/

for(var toi7=1;toi7<=4;toi7++){
    for(var star7=1;star7<=5;star7++){
        if(star7 % 3==2){
            document.write("☆");
        }else{
            document.write("★");
        }
    }
    document.write("<br>");
}
document.write("<br>");

/*
「toi7」を1として、5以下になるまで1増やす処理を行う。
1増やす処理を一回行うごとに
「star7」を1として、5になるまで1増やす処理を行い
処理した回数が偶数回であれば「☆」を、
偶数回でなければ「★」を表示し改行する。
*/

for(var toi8=1;toi8<=5;toi8++){
    for(var star8=1;star8<=toi8;star8++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

/*
「toi8」を1として、5以下になるまで1増やす処理を行う。
1増やす処理を一回行うごとに
「star8」を1として、「toi8」の現在の処理回数以下
の数字になるまで1増やす処理を行い
処理した回数だけ「★」を表示し改行する。
*/