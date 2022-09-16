var slash = '#';
var space = ' ';
var result = '';
var row = true;
for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    if ((j+row) % 2 == 0) {
      result += space;
    } else {
      result += slash;
    }
  }
  console.log(result);
  result='';
  row = ! row;
}