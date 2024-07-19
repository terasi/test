//問1
function area(r){
    return "半径"+r+"cmの円の面積は"+(r**2*3.14)+"㎠です。"
}

document.write(area(5));
document.write("<br>");
document.write(area(7));
document.write("<br>");
document.write(area(10));
document.write("<br>");
document.write("<br>");

/*
面積を表す「area」という関数名に引数として半径(r)と円周率(π=3.14)を指定する。
円の面積はπr²で求められるため戻り値として(r**2*π)を指定する。
表示させるための処理「document.write」を使用し関数名「area」を指定、　引数に値が代入されていない「r」に
代入したい数値を()内に記述し処理を完了させる。
*/

//問2
function totalPrice(NoA,NoC,adult=500,child=200){
    return "グループの合計金額は"+(adult*NoA)+(child*NoC)+"円です。";
}

document.write("A"+totalPrice(2,4));
document.write("<br>");
document.write("B"+totalPrice(1,5));
document.write("<br>");
document.write("C"+totalPrice(3,7));
document.write("<br>");

/*
合計金額を表す「totalPrice」という関数名に引数として
大人の人数(NoA)、子供の人数(NoC)、大人料金(adult=500)、子供料金(child=200)を指定する。
合計金額は「大人料金×大人の人数」、「子供料金×子供の人数」を合わせたものとなるため
戻り値として(adult*NoA)+(child*NoC)を指定する。
表示させるための処理「document.write」を使用し関数名「totalPrace」を指定、　
引数に値が代入されていない「NoA」、「NoC」に代入したい数値を()内に順番に記述し処理を完了させる。
*/