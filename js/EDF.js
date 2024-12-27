const sections = [
  {
    id: "edf",
    title: "EDFbrowserの使い方",
    steps: [
      {
        title: "インストール",
        explanation:
          "研究室のPCには入ってます。自分のPCに入れたい場合<br>https://www.teuniz.net/edfbrowser/",
        url: "https://www.teuniz.net/edfbrowser/", // URLを埋め込む
        image: "img/EDF/process0.png",
      },
      {
        title: "起動方法",
        explanation: "研究室のPCか自分のPCでショートカットをクリック",
        image: "img/EDF/process1.png",
      },
      {
        title: "基本操作",
        explanation: "基本、FileとToolsしか使わない",
        image: "img/EDF/process2.png",
      },
      {
        title: "解析方法 -File操作-",
        explanation:
          "Fileタブをクリックして、測定したデータ(edfファイル)を選択<br>Add signalsの画面がホップアップしたら、Add signalsボタンを押すと、波形が表示される",
        image: "img/EDF/process3.png",
      },
      {
        title: "解析方法 -表示-",
        explanation: "※こんな感じの波形が出力されたらOK",
        image: "img/EDF/process4.png",
      },
      {
        title: "csvファイル出力方法 -Tools-",
        explanation:
          "Toolsをクリックして、Export EDF/BDF to ASCⅡを選択する<br>Export画面がホップアップして、txtファイル出力<br>txtファイルを無理やり、csvに変える“拡張子を変更すると、正しく表示されなくなる可能性があります”　と表示されても無視して変更する",
        image: "img/EDF/process5.png",
      },
    ],
  },
  {
    id: "octave",
    title: "Octaveの使い方",
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
    id: "trigger-analysis",
    title: "トリガーの解析(Python)",
    steps: [
      {
        title: "ipynbファイルのダウンロード・設定",
        explanation:
          "右クリックで、[リンクのアドレスをコピー]でダウンロードフォルダかなんかに落とすのが良い",
        image: "img/NVX/trigger-process1.png",
        file: "link/noha_2.ipynb", // Wordファイル
      },
      {
        title: "リファレンス(A1,A2)",
        explanation:
          "Psychopyなどで、刺激(画像など)が表示される実験で、トリガーが必要な場合<br>赤黒のケーブルの光センサを画面の端につけることで脳波計と同期してトリガーの波形が取れる<br>よって、刺激が表示されたタイミングの脳波が分かる",
        image: "img/NVX/trigger-process2.png",
      },
    ],
  },
];
