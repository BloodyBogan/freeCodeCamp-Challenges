function isPalindrome(str) {
  var reversedStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  if (str != reversedStr) {
    return false;
  }
  return true;
}

isPalindrome("adasd");

function findLongestWord(str) {
  var strArr = str.split(" ");
  var longestWord = 0;
  for (var i = 0; i <= strArr.length - 1; i++) {
    if (strArr[i].length >= longestWord) {
      longestWord = strArr[i].length;
    }
  }
  return longestWord;
}

findLongestWord("Google do a barrel roll");

function titleCase(str) {
  var strArr = str.split(" ");
  for (var i = 0; i <= strArr.length - 1; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(" ");
}

titleCase("I'm a little tea pot");

function largestOfFour(arr) {
  var sortedArr = [];
  for (var i = 0; i < arr.length; i++) {
    var largestNumber = arr[i][0];
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] >= largestNumber)
        largestNumber = arr[i][j];
    }
    sortedArr.push(largestNumber);
  }
  return sortedArr;
}

largestOfFour([[4, 5, 1, 3], [-13, -27, -18, -26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function confirmEnding(str, target) {
  return str[str.length - 1] === target;
}

confirmEnding("Bastian", "n");

function repeatStringNumTimes(str, num) {
  var newString = "";
  if (num > 0) {
      for (var i = 0; i < num; i++)
    newString += str; 
  return newString;
  }
  return newString;
}

repeatStringNumTimes("*", 3);

function truncateString(str, num) {
  var newString;
  if (num <= 3) {
    newString = str.slice(0, num) + "...";
    return newString;
  }
  newString = str.slice(0, num - 3) + "...";
  return newString;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

function chunkArrayInGroups(arr, size) {
  var groupedArr = [];
  var count = Math.round(arr.length / size);
  var j = 0;
  var oldSize = size;
  for (var i = 0; i < count; i++) {
    var tempArr = arr.slice(j, size);
    j += oldSize;
    size += oldSize;
    groupedArr.push(tempArr);
  }
  return groupedArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);