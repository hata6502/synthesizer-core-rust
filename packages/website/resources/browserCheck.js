(() => {
  (() => {
    const e = JSON.parse(
      '{"G":["and_chr 90","android 90","chrome 91","edge 91","edge 90"]}'
    );
    /(Edge\/(90(?:\.0)?|90(?:\.([1-9]|\d{2,}))?|(9[1-9]|\d{3,})(?:\.\d+)?))|((Chromium|Chrome)\/(90\.0|90\.([1-9]|\d{2,})|(9[1-9]|\d{3,})\.\d+)(?:\.\d+)?)/.test(
      navigator.userAgent
    ) ||
      alert(
        "Please access again with the following browser.\n\n".concat(
          e.G.map(function (e) {
            return "・".concat(e);
          }).join("\n"),
          "\n"
        )
      );
  })();
})();
