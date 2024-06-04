function reformatString(S, K) {
    let cleanedString = S.replace(/-/g, '').toUpperCase();
  
    let result = [];
    let length = cleanedString.length;
  
    let firstGroupSize = length % K;
    
    if (firstGroupSize === 0) {
      firstGroupSize = K;
    }
  
    result.push(cleanedString.slice(0, firstGroupSize));
  
    for (let i = firstGroupSize; i < length; i += K) {
      result.push(cleanedString.slice(i, i + K));
    }
  
    return result.join('-');
  }
  
  let S = "5F3Z-2e-9-w";
  let K = 4;

  let J = "2-5g-3-J";
  let Z = 2;

  let output = reformatString(S, K);
  let output2 = reformatString(J, Z);

  console.log(output);
  console.log(output2);
