<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>掲示板</title>
        <link rel="stylesheet" href="style.css" type="text/css">
    </head>

    <body> 

        <?php

        mb_internal_encoding("utf8");
        $pdo = new PDO("mysql:dbname=lesson01;host=localhost;","root","");
        $stmt = $pdo->query("select * from diworks_keijiban");

        ?>

        <div class="logo">
            <img src="diblog_logo.jpg">
        </div>
    
        <header>
            <ul>
                <li>トップ</li>
                <li>プロフィール</li>
                <li>D.I.Blogについて</li>
                <li>登録フォーム</li>
                <li>問い合わせ</li>
                <li>その他</li>
            </ul>
        </header>

        <main>
            <div class="main-contents">
                <div class="left">
                    <h1>プログラミングに役立つ掲示板</h1>

                    <form method="post" action="insert.php">

                        <h2>入力フォーム</h2>

                        <div>
                            <label>ハンドルネーム</label>
                            <br>
                            <input type="text" name="handlename" class="text" size="35">
                        </div>

                        <div>
                            <label>タイトル</label>
                            <br>
                            <input type="text" name="title" class="text" size="35">
                        </div>

                        <div>
                            <label>コメント</la>
                            <br>
                            <textarea name="comments" cols="35" rows="7"></textarea>
                        </div>
                        <div>
                            <input type="submit" class="submit" value="送信する">
                        </div>
                    </form>

                    <?php

                    while ($row = $stmt->fetch()) {

                        echo "<div class='title1'>";
                        echo "<h3>". $row['title'] ."</h3>";
                        echo "<div class='comments'>";
                        echo $row['comments'];
                        echo "<div class='handlename'>posted by".$row['handlename']."</div>";
                        echo "</div>";
                        echo "</div>";
                    }

                    ?>

                </div>

                <div class="right">
                    <h3>人気の記事</h3>
                    <div class="link">
                        <ul>
                            <li>PHPオススメ本</li>
                            <li>PHP MyAdminの使い方</li>
                            <li>いま人気のエディタTops</li>
                            <li>HTMLの基礎</li>
                        </ul>
                    </div>
                    <h3>オススメリンク</h3>
                    <div class="link">
                        <ul>
                            <li>ﾃﾞｨｰｱｲﾜｰｸｽ株式会社</li>
                            <li>XAMPPのダウンロード</li>
                            <li>Eclipseのダウンロード</li>
                            <li>Braketsのダウンロード</li>
                        </ul>
                    </div>
                    <h3>カテゴリ</h3>
                    <div class="link">
                        <ul>
                            <li>HTML</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>

        <footer>
            Copyright D.I.works| D.I.blog is the one which provides A to Z about programming
        </footer>

    </body>
    </html>