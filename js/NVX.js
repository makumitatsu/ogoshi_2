const sections = [
	{
		id: "nvx",
		title: "NVXの配線方法",
		steps: [
			{
				title: "GND(グランド)",
				explanation: "GNDとPo4をくっつける(ジャンパー線みたいなやつ)",
			},
			{
				title: "リファレンス(A1,A2)",
				explanation: "A1,A2に線をつける(A1,A2を基準として、電位を測る)",
				// image: "No" は記述しない
			},
			{
				title: "測定部位",
				explanation: "C3,C4など、測定する部位に線をつける",
				// image: "No" は記述しない
			},
			{
				title: "測定時の注意",
				explanation: "※Po4を額につける<br>Po3はトリガーなしなら必要なし",
				image: "img/NVX/process1.png",
			},
		],
	},
	{
		id: "neorec",
		title: "NeoRecの設定方法",
		steps: [
			{
				title: "インストール",
				explanation:
					"研究室のPCには入ってます。自分のPCに入れたい場合<br>http://www.east-medic.jp/support/software_download/",
				url: "http://www.east-medic.jp/support/software_download/", // URLを埋め込む
				image: "img/NeoRec/process0.png", // 画像が必要な場合
			},
			{
				title: "起動方法",
				explanation: "研究室のPCか自分のPCでショートカットをクリック",
				image: "img/NeoRec/process1.png", // 画像が必要な場合
			},
			{
				title: "メニューの説明",
				explanation:
					"赤枠 基本設定: ファイルの設定やサンプリング周波数、脳波計測部位の設定<br>青枠 抵抗の確認: 電極を付けたところの抵抗値が分かる<br>緑枠 再生: 脳波が再生？される。右側の◎のボタンが録画開始",
				image: "img/NeoRec/process2.png",
			},
			{
				title: "基本設定 -ファイル設定-",
				explanation:
					"オススメはプロファイルは1人1つ作ること。<br>※他の人にせっかく設定したチャンネル、周波数など消されることが無くなります<br>保存先も自分のファイルを作って、指定する<br>※他の人に間違ってデータが消される事が無くなります<br>サンプリング周波数は500Hzにしましょう<br>※Excelで開けなくなって、解析不可能になる可能性があります",
				image: "img/NeoRec/process3.png",
			},
			{
				title: "基本設定 -リファレンス設定-",
				explanation:
					"基本的にA1,A2が設定されていて、A1,A2が緑色になっていて、他のFp1やF2といったチャンネルが赤色であればOK",
				image: "img/NeoRec/process4.png",
			},
			{
				title: "基本設定 -チャンネル設定-",
				explanation:
					"チャンネルを追加して、ソースのところで測定したい場所を設定する<br>※ソースをディファレンシャル,A1-A2にする",
				image: "img/NeoRec/process5.png",
			},
			{
				title: "抵抗の確認",
				explanation:
					"それぞれ設定したチャンネルがあるか確認する<br>※基本的にα波やβ波といった周波数を求めるだけなら、抵抗値は黄色でもOK<br>※事象関連電位を求める際は、緑色の抵抗値が望ましい。ノイズがきついと結果がうまくいかない可能性があります",
				image: "img/NeoRec/process6.png",
			},
			{
				title: "再生",
				explanation:
					"再生ボタンを押すと、波形が出てくる<br>◎マークを押すと録画開始<br>",
				image: "img/NeoRec/process7.png",
			},
			{
				title: "再生 -録画停止-",
				explanation:
					"録画停止ボタンを押すと、保存フォルダにsmファイルとedfファイルが生成されているはず<br>※たまに、NeoRecがフリーズすることがあるが、保存フォルダにsmファイルがあればOK (解析できます)",
				image: "img/NeoRec/process8.png",
			},
			{
				title: "smファイルしか生成されなかった場合",
				explanation:
					"研究室PC限定で、smファイルを右クリックすると、[ ... ]という項目がでてくる<br>その項目をクリックして変換すると、bdfファイルが生成される<br>これは、edfファイル同様解析できるのでOK",
				image: "img/NeoRec/process9.png",
			},
		],
	},

	{
		id: "trigger",
		title: "トリガーの取り方",
		steps: [
			{
				title: "NVXと周辺機器の確認",
				explanation:
					"光センサ(赤と黒のケーブル)が茶色の機器のINに入っていることを確認<br>真ん中の白い機器のINとOUTの番号が同じことを確認<br>真ん中の機器のOUT(下のケーブル)がNVXにつながっていることを確認",
				image: "img/NVX/trigger-process1.png",
			},
			{
				title: "リファレンス(A1,A2)",
				explanation:
					"Psychopyなどで、刺激(画像など)が表示される実験で、トリガーが必要な場合<br>赤黒のケーブルの光センサを画面の端につけることで脳波計と同期してトリガーの波形が取れる<br>よって、刺激が表示されたタイミングの脳波が分かる",
				image: "img/NVX/trigger-process2.png",
			},
		],
	},
	{
		id: "windowsXP",
		title: "脳波計(WindowsXP)の配線",
		steps: [
			{
				title: "起動画面・表示",
				explanation:
					"Bio Top Miniの背面に単三電池4本を入れる<br>POWERスイッチを押す<br>その後、液晶に表示される",
				image: "img/WindowsXP/process1.png",
			},
			{
				title: "Bio Top Miniの使い方 (設定)",
				explanation:
					"NVXでいうC3,C4,Fzなどにつける電極など、図から適切な電極を使う",
				image: "img/WindowsXP/process2.png",
			},
			{
				title: "VitalRecoder2 （脳波測定ソフトの起動)",
				explanation: "VitalRecoder2を使う",
				image: "img/WindowsXP/process3.png",
			},
			{
				title: "チャンネル設定",
				explanation: "表示から、収録条件でCh(チャンネル)設定ができる",
				image: "img/WindowsXP/process4.png",
			},
			{
				title: "チャンネル設定",
				explanation:
					"Ch(チャンネル)設定ができる<br>※チャンネルが同期してる8CHまでしか測定できない",
				image: "img/WindowsXP/process5.png",
			},
			{
				title: "録画方法",
				explanation: "収録ボタンを押せば、収録開始です",
				image: "img/WindowsXP/process6.png",
			},
			{
				title: "ファイルの変換方法",
				explanation:
					"・変換したデータを見つける(KCDファイル)<br>・左上のタブから[ファイル]→上から三番目[テキスト変換]<br>・変換したいKCDファイルを選択<br>・出力先を選択<br>・下の[テキスト出力]<br>・出力完了",
			},
		],
	},
	{
		id: "headphone",
		title: "ヘッドフォン(脳波計)の設定方法",
		steps: [
			{
				title: "取扱説明書(外部)",
				explanation: "",
				url: "", // URLを埋め込む
			},
			{
				title: "起動画面・表示",
				explanation: "BRI.exeをクリック",
				image: "img/headphone/process0.png",
			},
			{
				title: "ヘッドフォン脳波計の設定",
				explanation:
					"SETTINGをクリックして、Searchをクリック<br>ここで、ヘッドフォンの電源も入れてください<br>この時点では、青色のランプは点滅していてOK",
				image: "img/headphone/process2.png",
			},
			{
				title: "接続設定",
				explanation:
					"[V] このようなSearchの左にある矢印をクリック<br>BRA~がでたら、それを選択する",
				image: "img/headphone/process3.png",
			},
			{
				title: "動作確認",
				explanation:
					"しばらくすると、画像のように、それぞれのCz,Fz,C3,C4みたいなのが出てくる",
				image: "img/headphone/process5.png",
			},
			{
				title: "実際に装着する",
				explanation: "頭にかぶり、両耳にも着ける部分がある。",
				image: "img/headphone/process9.png",
			},
			{
				title: "録画方法",
				explanation:
					"▶ 再生ボタンを押すと、ヘッドフォンの青色のランプが点滅しなくなるはずです<br>点滅しなくなったらOK<br>",
				image: "img/headphone/process6.png",
			},
			{
				title: "録画方法2",
				explanation:
					"波形が出てることを確認する<br>〇のRECORDボタンを押すことで、録画が開始されます",
				image: "img/headphone/process6.png",
			},
		],
	},
];
