function reverseString(str) { 
    
  const revArray = []; 
  const length = str.length - 1; 
    
  // Looping from the end 
  for(let i = length; i >= 0; i--) { 
      revArray.push(str[i]); 
  } 
    
  // Joining the array elements 
  console.log(revArray.join(''))
} 

reverseString("hello world")