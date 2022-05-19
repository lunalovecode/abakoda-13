var r = readline().split(" ");
var abbyTimes = [parseInt(r[0]), parseInt(r[1])];
var codyTimes = [parseInt(r[2]), parseInt(r[3])];
 
if (abbyTimes[1] <= codyTimes[0] || codyTimes[1] <= abbyTimes[0]) {
    print("NO");
} else {
    print("YES");
}