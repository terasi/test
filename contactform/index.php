<!DOCTYPE html>
<html lang="ja">

    <head>
        <meta charset="UTF-8">
        <title>お問合わせフォームを作る</title>
        <link rel="stylesheet" href="style.css" type="text/css">
    </head>

    <body>

        <h1>お問合わせフォーム</h1>
        <form method="post" action="mail_confirm.php">

            <div>
                <label>名前</label>
                <br>
                <input type="text" name="name" class="text" size="35" value="<?php if(isset($_POST['name'])){echo $_POST['name'];}?>">
            </div>

            <div>
                <label>メールアドレス</label>
                <br>
                <input type="text" name="mail" class="text" size="35" value="<?php if(isset($_POST['mail'])){echo $_POST['mail'];}?>">
            </div>
歳
            <div>
                <label>年齢</label>
                <br>
                <select class="dropdown" name="age">
                    <option>
                        <?php if(isset($_POST['age'])){echo $_POST['age'];} else echo"選択してください";?>
                    </option>
                    <script>
                        for(var i=18; i<=65; i++){
                            document.write("<option value="+ i + ">" + i + "歳</option>");
                        }
                    </script>
                </select>
            </div>

            <div>
                <label>コメント</label>
                <br>
                <textarea name="comments" cols="35" rows="7"><?php if(isset($_POST['comments'])){echo $_POST['comments'];}?></textarea>
            </div>

            <div>
                <input type="submit" class="submit" value="送信する">
            </div>
        </form>

    </body>
</html>