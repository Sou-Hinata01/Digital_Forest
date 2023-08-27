$(function() {
    // ハンバーガーメニュー
    $('.sp-menu').on('click', function(){
        if ($('#header').hasClass('open')){
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });

    // maskエリアをタップでメニューを閉じる
    $('#mask').on('click', function(){
        $('#header').removeClass('open');
    });

    // リンクをタップした時にメニューを閉じる
    $('#navi a').on('click', function(){
        $('#header').removeClass('open');
    });

    // トップに戻る
    let pagetop = $('#to-top');

    // 最初に画面を表示した際は非表示に
    pagetop.hide();

    // スクロールイベント
    $(window).scroll(function(){
        // スクロール位置が700pxを超えた場合
        if ($(this).scrollTop() > 700) {
            // トップに戻るボタンを表示する
            pagetop.fadeIn();

            // スクロール位置が700px未満の場合
        } else {
            // ボタンを非表示にする
            pagetop.fadeOut();
        }
    });

    // クリックイベント
    pagetop.click(function(){
        // 0.5秒かけてトップへ移動
        $('body,html').animate({scrollTop: 0}, 500);

        // イベントが親要素に伝播しないための処理
        return false;
    });
})