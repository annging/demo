// Primary Function to Run Code Updates

const populateCode = exNum => {
  const demoArea = document.querySelector(`.${exNum} .ex-container`);
  const cssArea = document.querySelector(`.${exNum} .code-container.css`);
  const htmlArea = document.querySelector(`.${exNum} .code-container.html`);
  demoArea.innerHTML = ex[exNum].html;
  cssArea.innerHTML = ex[exNum].css;
  document.querySelector(`.${exNum} .tab.css`).classList.add("active");
  htmlArea.innerText = ex[exNum].html;
  cssArea.style.display = "block";
};

// Events

[...document.querySelectorAll(".tab-area button")].forEach(button => {
  button.addEventListener("click", event => {
    let lang = event.target.innerText.toLowerCase();
    const exNum = event.target.parentElement.parentElement.parentElement.classList[1];
    if (lang === "css") {
      document.querySelector(`.${exNum} .code-container.html`).style.display = "none";
      document.querySelector(`.${exNum} .tab.html`).classList.remove("active");
      document.querySelector(`.${exNum} .code-container.css`).style.display = "block";
      document.querySelector(`.${exNum} .tab.css`).classList.add("active");
    } else {
      document.querySelector(`.${exNum} .code-container.css`).style.display = "none";
      document.querySelector(`.${exNum} .tab.css`).classList.remove("active");
      document.querySelector(`.${exNum} .code-container.html`).style.display = "block";
      document.querySelector(`.${exNum} .tab.html`).classList.add("active");
    }
  });
});


// Ex1: Absolutely Centered

const ex = {
  ex1: {
    html: `
    <div class="demo">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
      <div class="box">6</div>
      <div class="box">7</div>
      <div class="box">8</div>
    </div>`,
    css: `
    .ex1 .demo {
      display: flex;
      flex-wrap: wrap;
    }`
  },
  ex2: {
    html: `
    <div class="demo">
      <div class="flex">
        <h3 class="ellipsis">这是个很长的标题，很长很长标题，很长很长的标题，一行显示不全会被截断</h3>
        <span>⚙</span>
      </div>
      <p>在左边有一个标题，在右边有一个可操作的按钮。当标题变长时，如果没有间距，文字和按钮会挨在一起。</p>
    </div>`,
    css: `
    .ex2 .demo h3 {
      margin-right: 1rem;
    }`
  },
  ex3: {
    html: `
    <div class="demo">
      <div class="panel">
        <ul>
          <li>
            <div class="avatar"></div>
            <div class="username">邋遢大王</div>
          </li>
          <li>
            <div class="avatar"></div>
            <div class="username">邋遢大王就是我不是你</div>
          </li>
          <li>
            <div class="avatar"></div>
            <div class="username">邋遢大王不是你</div>
          </li>
          <li>
            <div class="avatar"></div>
            <div class="username">邋遢大王不是他</div>
          </li>
          <li>
            <div class="avatar"></div>
            <div class="username">邋遢大王不爱我不爱你也不爱他</div>
          </li>
        </ul>
      </div>
    </div>
    `,
    css: `
    .ex3 .username {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }`
  },
  ex4: {
    html: `
    <div class="demo">
      <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.TYvZ749HcXjhwtXR1Lu2NgHaEo" alt="">
    </div>
    `,
    css: `
    .ex4 img {
      object-fit: cover;
    }`
  },
  ex5: {
    html: `
    <div class="demo">
      <div class="content">
      默认情况下，当触及页面顶部或者底部时（或者是其他可滚动区域），移动端浏览器倾向于提供一种“触底”效果，甚至进行页面刷新。你可能也发现了，当对话框中含有可滚动内容时，一旦滚动至对话框的边界，对话框下方的页面内容也开始滚动了——这被称为“滚动链”。           
      </div>

    </div>
    `,
    css: `
    .ex5 .content {
      overscroll-behavior-y: contain;
      overflow-y: auto;
    }
    `
  },
  ex6: {
    html: `
    <div class="demo">
      <div class="content">
        这个方法用于自定义属性值可能会失败的场景
      </div>
      <div class="action">
        <button>操作</button>
      </div>
    </div>
    `,
    css: `
    .ex6 .content {
      max-width: calc(100% - var(--actions-width, 70px));
    }
    `
  },
  ex7: {
    html: `
    <div class="demo">
      <div class="content">
        我经常会碰到在一个具有固定高度的元素内部，它包含的内容大于它的高度，这会导致布局被破坏掉。为了避免内容超出，我们需要使用 min-height 而不是 height。
      </div>
    </div>
    `,
    css: `
    .ex7 .demo {
      min-height:20px;
    }`
  },
  ex8: {
    html: `
    <div class="demo">
      <button>关注</button>
      <button>取消关注</button>
    </div>
    `,
    css: `
    .ex8 button {
      width: auto;
      min-width: 50px;
    }
    `
  },
  ex9: {
    html: `
    <div class="demo">
    </div>
    `,
    css: `
      .ex9 .demo {
        background-repeat: no-repeat;
      }
    `
  },
  ex10: {
    html: `
    <div class="demo">
          <div class="sidebar">
            <ul>
              <li>mainmenu1</li>
              <li>mainmenu2</li>
              <li>mainmenu3</li>
              <li>mainmenu4</li>
              <li>mainmenu5</li>
              <li>mainmenu6</li>
            </ul>
            <ul class="aside__secondary" style="font-size: 10px;">
              <li>secondary_menu1</li>
              <li>secondary_menu2</li>
              <li>secondary_menu3</li>
            </ul>
          </div>
          <div style="overflow: auto">
            <div class="p2"></div>
          </div>
      </div>
    `,
    css: `
    @media (min-height: 500px) {
      .aside__secondary {
          position: absolute;
          bottom: 0;
      }
    }
    `
  }
};

populateCode("ex1");
populateCode("ex2");
populateCode("ex3");
populateCode("ex4");
populateCode("ex5");
populateCode("ex6");
populateCode("ex7");
populateCode("ex8");
populateCode("ex9");
populateCode("ex10");