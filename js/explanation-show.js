// コンテンツ生成
const content = document.getElementById("explanation-js");
sections.forEach((section) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.innerHTML = `
        <h1 id="${section.id}" class="title">${section.title}</h1>
      `;

  section.steps.forEach((step, index) => {
    const stepDiv = document.createElement("div");
    stepDiv.innerHTML = `
          <p class="nvx-title">
            <span class="title-number">${index + 1}.</span> ${step.title}
          </p>
          <p class="nvx-explanation">
            ${step.explanation}
            ${
              step.url
                ? `<br><a href="${step.url}" target="_blank">詳細はこちら</a>`
                : ""
            }
            ${
              step.file
                ? `<br><a href="${step.file}" download>ファイルをダウンロード</a>` // ダウンロードリンク
                : ""
            }
          </p>
          ${
            step.image
              ? `<div class="explanation-picture-box"><img class="explanation-picture" src="${
                  step.image
                }" alt="Step ${index + 1}"></div>`
              : ""
          }
        `;
    sectionDiv.appendChild(stepDiv);
  });

  content.appendChild(sectionDiv);
});
