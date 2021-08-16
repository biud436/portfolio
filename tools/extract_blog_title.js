var date = Array.from(
  document.querySelectorAll(
    '#listTopForm > table > tbody > tr > td.date > div > span'
  )
)
  .map((e) => e.innerHTML)
  .reverse();
var title = Array.from(
  document.querySelectorAll('.pcol2._setTop._setTopListUrl')
)
  .map((e) => {
    e.textContent = e.textContent.replace(' - RPG Maker MV', '');
    e.textContent = e.textContent.replace(' - RPG Maker VX Ace', '');
    e.textContent = e.textContent.replace(' - RPG Maker XP', '');
    return e.textContent;
  })
  .reverse();

title
  .map((e, i, a) => {
    return `${e} - ${date[i]}`;
  })
  .join('\n');
