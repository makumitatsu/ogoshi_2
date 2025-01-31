document.addEventListener("DOMContentLoaded", function () {
  // タブデータの設定
  const tabsData = [
    {
      label: "トップ",
      link: "index.html",
      dropdown: null,
    },
    {
      label: "脳波計・測定",
      link: "NVX.html",
      dropdown: [
        { label: "脳波計(NVX)の配線", link: "NVX.html#nvx" },
        { label: "NeoRecの設定方法", link: "NVX.html#neorec" },
        { label: "トリガーの取り方", link: "NVX.html#trigger" },
        { label: "脳波計(WindowsXP)の配線", link: "NVX.html#windowsXP" },
        { label: "ヘッドフォン(脳波計)の設定方法", link: "NVX.html#headphone" },
      ],
    },
    {
      label: "解析・EDF",
      link: "EDF.html",
      dropdown: [
        { label: "EDFbrowserの使い方", link: "EDF.html#edf" },
        { label: "Octaveの使い方", link: "EDF.html#octave" },
        { label: "トリガーの解析(Python)", link: "EDF.html#trigger-analysis" },
      ],
    },
    {
      label: "Help",
      link: null,
      dropdown: null,
    },
  ];

  // タブを挿入するコンテナを取得
  const tabsContainer = document.querySelector("header");

  // タブメニューの生成
  const tabsNav = document.createElement("nav");
  tabsNav.classList.add("tabs");

  const underline = document.createElement("div");
  underline.classList.add("underline");

  tabsData.forEach((tab) => {
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tab");
    tabDiv.dataset.tab = tab.label.toLowerCase();

    const tabAnchor = document.createElement("a");
    tabAnchor.href = tab.link || "#";
    tabAnchor.textContent = tab.label;

    tabDiv.appendChild(tabAnchor);

    // ドロップダウンがある場合
    if (tab.dropdown) {
      const dropdown = document.createElement("div");
      dropdown.classList.add("dropdown");

      tab.dropdown.forEach((item) => {
        const dropdownItem = document.createElement("div");
        dropdownItem.classList.add("dropdown-item");
        dropdownItem.dataset.link = item.link;
        dropdownItem.textContent = item.label;

        // ドロップダウンアイテムのクリックでページ遷移とスクロール
        dropdownItem.addEventListener("click", (e) => {
          e.preventDefault(); // デフォルト動作をキャンセル
          const [url, hash] = item.link.split("#");

          if (window.location.pathname.endsWith(url)) {
            // 同一ページの場合はスクロールのみ
            const targetElement = document.getElementById(hash);
          } else {
            // 他ページの場合は通常の遷移
            window.location.href = item.link;
          }
        });

        dropdown.appendChild(dropdownItem);
      });

      tabDiv.appendChild(dropdown);

      // ホバーでドロップダウン表示
      tabDiv.addEventListener("mouseenter", () => {
        dropdown.style.display = "block";
      });

      tabDiv.addEventListener("mouseleave", () => {
        dropdown.style.display = "none";
      });
    }

    tabsNav.appendChild(tabDiv);
  });

  tabsContainer.appendChild(tabsNav);
  tabsContainer.appendChild(underline);
});
