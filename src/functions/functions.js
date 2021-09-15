let functions = {};

functions.sortByDay = (prop, days) => {
  prop = prop.split('.');
  var len = prop.length;
  days.sort(function (a, b) {
    var i = 0;
    while (i < len) {
      a = a[prop[i]];
      b = b[prop[i]];
      i++;
    }
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  });
  return days;
};

functions.getViewerType = () => {
  const { innerWidth: width, innerHeight: height } = window;
  if (width > 1300) return 'huge';
  else return 'other';
};

export default functions;
