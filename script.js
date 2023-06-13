// complete the given function

function palindrome(str){

 // Convert the string to lowercase and remove non-alphanumeric characters
  const alphanumericString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Initialize pointers
  let left = 0;
  let right = alphanumericString.length - 1;

  while (left < right) {
    // Compare characters at the two pointers
    if (alphanumericString[left] !== alphanumericString[right]) {
      return false;
    }

    // Move pointers
    left++;
    right--;
  }

  return true;
}
module.exports = palindrome
