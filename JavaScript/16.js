console.log([...String(BigInt(2**1000))].reduce((a,b)=>Number(a)+Number(b)))