Tohkei(トウケイ)公式サイト｜静的サイト制作プレビュー

使い方：ZIPを展開し、index.htmlを開く。サーバー確認は python3 -m http.server 8000 をフォルダ内で実行し、http://localhost:8000/ を開く。
HTML5 / CSS / 素のJavaScript。外部ライブラリ・Webフォントなし。公式写真は支給JPG原本、山の装飾画像はSVG。

公開前の必須対応
1. 集合写真および個人写真6枚は、支給JPG原本をバイト単位でそのまま掲載。圧縮・変換・トリミング・色調変更なし。CSSで縦横比を保持して表示。個人プロフィールはご指定情報と順序を反映。ロゴは既存の白色透過表示を維持。
2. CONTACTはmailtoでメールアプリを起動します。送信完了・保存・自動返信は実装していません。問い合わせ獲得を優先する場合はサーバー側またはフォームサービスへのPOST、サーバー側バリデーション、スパム対策、プライバシーポリシーと送信完了ページを導入してください。
3. Googleカレンダーは tohkei.info@gmail.com のご提供の公式埋め込みURLを設定済み。PC・スマートフォンともに月間表示。予定リストは任意の外部リンクから利用可能。実際の表示には対象カレンダーが一般公開されていることが必要です。公開権限・実データの表示は要確認。
4. 公開ドメイン決定後、各HTMLに絶対URLのcanonical・og:url・og:image（正式画像）を追加。sitemap.template.xml の YOUR-DOMAIN を置換し sitemap.xml に改名。robots.txt に実際のSitemap URLを追加。Google Search Console / Bing Webmaster Tools でサイトマップを送信し、旧サイトからの移行・リダイレクトを検討。
5. FAQ・プロフィール・楽曲紹介コピーは公開前に運営確認。公演情報は開催後に過去公演へ移動。公式Xやカレンダーと一致させる。ニュースは静的HTMLのため手動更新。
6. 構造化データはWebSite、MusicGroup、MusicEventを実装。公開時に実際のサイトURLと画像等を追加し、Schema Markup Validator / Rich Results Testで検証。Google検索・AI推薦は保証されません。
7. 主要キーワード：Tohkei、トウケイ、楽曲、東京 ライブ。BiSH系の音楽ファンを想定した歌詞・メロディー・ライブ熱量の説明を採用。無関係な固有名詞の詰め込みや類似性の断定は避ける。第三者のライブレビュー・音楽メディア掲載・配信リンク整備も重要。
8. モバイル・PCの公開環境で表示確認、フォーム送信テスト、PageSpeed Insightsを実施。robots.txt のOAI-SearchBot許可に加え、ホスティング側でクロールを遮断しないこと。

参照情報（2026-11-25確認）
https://tohkei.amebaownd.com/
https://tohkei.amebaownd.com/posts/51786364
https://tohkei.amebaownd.com/posts/51775046
https://www.tunecore.co.jp/artists/Tohkei?lang=ja
https://ticketdive.com/event/Tohkei1207_KIMEGURI
https://developers.google.com/search/docs/appearance/ai-features?hl=ja
https://help.openai.com/ja-jp/articles/9237897-searching-the-web-with-chatgpt

【公式ロゴ更新】assets/logo-original.png は提供された透過PNGの元データ（無変更）。logo-official.png と favicon-official.png は透明な外周のみを取り除いた表示用データです。ロゴ本体の色・形・文字・画素は変更していません。

【白色ロゴ表示】全5ページのヘッダー・フッターは透過PNGをCSSで白色表示。白背景・枠・内側余白を削除。元画像の色・形状・透明度は保持。ファビコンは白背景のブラウザでも視認できるよう青のまま。

【今回の修正】コンセプト・倒景の由来・メンバープロフィール・12/12明景・共通CTAを反映。明景チケット https://ticketdive.com/event/Tohkei_teiki1212 。

【文章・プロフィール修正】
2026-11-25：ご指定の全ページの文言、プロフィール、主催公演、SEOを反映。写真7点は提供されたJPGの原本とバイト単位で一致することを確認済み。透情MVおよび明景チケットは公式リンクを設定。お問い合わせフォームは従来のメールアプリ起動方式。


【ジャケット・フライヤー：正式素材反映】
- MUSIC：透情（MVサムネイル）、Hide and Seek・ハヤテ（ジャケット）。
- TOP：キメグリ。SCHEDULE：キメグリ・明景の正式フライヤー。
- 5素材をassetsに支給原本と完全一致する状態で同梱。ファイル名のみ英数字に変更。画像の変換・圧縮・加工・トリミングなし。CSS object-fit:containで全体を表示。
- 画像の外部URL参照は廃止。公演チケット・楽曲配信・MVへのリンクは従来どおり。
- 文字のない山の装飾SVG、Tohkei表記、公式写真7点の原本を維持。

【追加修正】MUSICのリンク位置をカード下端に揃え、ABOUTの文末と番号を変更、6名のXリンクと構造化データを追加。公開画面に運営Gmailアドレスを出さない仕様（メールアプリ送信先やGoogleカレンダーURLには残るため、ソースからの完全秘匿にはサーバー側フォーム等が必要）。レギュレーションは既存公式ページの確認できた本文に基づき、同内容を整理・言い換えてサイト内へ掲載。原文の決済ブランドは確認できないため現場スタッフへの確認とした。撮影位置と原則撮影可の記載は最新のユーザー指定FAQを優先。旧ページには最後方以外での高所撮影禁止の記載があるため、公開前に運営確認を推奨。
Xアカウント確認：https://www.youtube.com/watch?v=-8NOSyTwsoo

【FIRST GUIDE】first-guide.html を追加。全6ページの共通ナビ・TOP・SCHEDULE・FAQからリンク。定期初回来場無料（別途1D）・定期限定の新規キャンペーン・来場手順を掲載。2026-12-12の公演情報とキャンペーン適用条件は運営確認の上更新してください。特典の詳細な受取条件は指定のX投稿が403のため未確認。料金確認：https://ticketdive.com/event/Tohkei_teiki1212 ／キャンペーン概要参考（公式Xの転載）：https://www.sotwe.com/Tohkei_info?lang=en
