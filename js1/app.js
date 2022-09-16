var 
s = 0,
i = 0,
j,
size = 5,
board = '',
out = '';

while(s < size -1){
s++;
}

while(i< size){
board += '*';  
console.log(out, board);
out = out.substring(0, out.length - 1);
i++;
}