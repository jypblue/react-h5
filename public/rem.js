(function (root) {
  var docEl = document.documentElement,
      timer = null,
      width, last;

  function changeRem () {
      width = docEl.getBoundingClientRect().width;
      if (last === width) { return; }
      last = width;
      root.rem = width / 7.5;
      root.rem = root.rem > 100 ? 100 : root.rem;
      if (/ZTE U930_TD/.test(navigator.userAgent)) {
          root.rem = root.rem * 1.13;
      }
      docEl.style.fontSize = root.rem + 'px';
  }

  changeRem();

  root.addEventListener('resize', function () {
      clearTimeout(timer);
      timer = setTimeout(changeRem, 200);
  });

  root.addEventListener('orientationchange', function () {
      clearTimeout(timer);
      timer = setTimeout(changeRem, 200);
  });
})(window, undefined);