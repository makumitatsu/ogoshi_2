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
          " GNU Octaveダウンロードサイトからインストーラをダウンロードする<br>オススメはこのサイトを参考にしてください",
        url: "https://www.lab.kobe-u.ac.jp/csi-applied-optics/sanran/octave_install_win.html", // URLを埋め込む
      },
      {
        title: "起動方法",
        explanation: "研究室のPCか自分のPCでショートカットをクリック",
        image: "img/Octave/process0.png", // 画像が必要な場合
      },
      {
        title: "ソースコード",
        explanation: "ソースコードは下のファイルをダウンロード",
        file: "link/alpha20.m",
      },

      {
        title: "ワークスペースの設定",
        explanation:
          "作業ファイル(脳波csvデータ)のディレクトリを指定<br>C:/User~... など指定する",
        image: "img/Octave/process1.png", // 画像が必要な場合
      },

      {
        title: "ワークスペースの確認",
        explanation: "脳波のcsvデータが確認できれば、OK",
        image: "img/Octave/process2.png", // 画像が必要な場合
      },

      {
        title: "mファイルの作成",
        explanation:
          "スクリプト作成はここをクリックしてできる<br>(今回はmファイルがあるのでOK)",
        image: "img/Octave/process3.png", // 画像が必要な場合
      },

      {
        title: "フォルダの管理",
        explanation: "脳波のcsvデータのフォルダの中にmファイルを入れればOK",
        image: "img/Octave/process4.png", // 画像が必要な場合
      },

      {
        title: "ソースコード(処理)の説明・詳細",
        explanation:
          "csvファイルは基本1つしかできない。この処理は必要ない<br>※トリガーで切り取ったときだけ、csvファイルがナンバリングされるので、必要<br>1000はサンプリング周波数なので、500Hzで実験してたら、ここを500に変更する<br>1行目は時間Timeなので、2行目から、測定した脳波の行を選択する",
        image: "img/Octave/process5.png", // 画像が必要な場合
      },

      {
        title: "mファイルの実行方法",
        explanation:
          "コマンドウインドウをクリックする<br>mファイルの名前だけ(拡張子は必要ない)を入力すれば、保存フォルダにcsvファイルができている<br>エラー文が出ていないか確認",
        image: "img/Octave/process6.png", // 画像が必要な場合
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
        image: "img/NVX/trigger-process2.png",
        file: "link/noha_2.ipynb", // Wordファイル
      },
      {
        title: "ipynbファイルの使い方",
        explanation:
          "Googleドライブにipynbファイルを入れて、ダブルクリックで、そのままGoogle Colabが開かれるはず",
      },
      {
        title: "ソースコードの概要",
        explanation:
          "Psychopyなどで、刺激(画像など)が表示される実験で、トリガーが必要な場合<br>赤黒のケーブルの光センサを画面の端につけることで脳波計と同期してトリガーの波形が取れる<br>よって、刺激が表示されたタイミングの脳波が分かる",
        image: "img/Python/process1.png",
      },
      {
        title: "プログラムの実行",
        explanation:
          "[ ランタイム ] を押して、[ 全てのセル実行でできる ] でできる<br>フォルダのところにzipファイルができているはずで、ダウンロードできる",
        image: "img/Python/process2.png",
      },
    ],
  },
];
