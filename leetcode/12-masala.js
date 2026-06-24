const MOD = 1000000007n;

function zigZagArrays(n, l, r) {
    const m = r - l + 1;

    const size = 2 * m;

    let vec = Array(size).fill(0n);

    for (let v = 0; v < m; v++) {
        vec[v] = BigInt(v);              
        vec[m + v] = BigInt(m - 1 - v);  
    }

    let T = Array.from({ length: size }, () =>
        Array(size).fill(0n)
    );

    for (let v = 0; v < m; v++) {
     
        for (let u = 0; u < v; u++) {
            T[v][m + u] = 1n;
        }

        
        for (let u = v + 1; u < m; u++) {
            T[m + v][u] = 1n;
        }
    }

  
    function multiply(A, B) {
        const n = A.length;
        const C = Array.from({ length: n }, () =>
            Array(n).fill(0n)
        );

        for (let i = 0; i < n; i++) {
            for (let k = 0; k < n; k++) {
                if (A[i][k] === 0n) continue;

                const aik = A[i][k];

                for (let j = 0; j < n; j++) {
                    if (B[k][j] === 0n) continue;

                    C[i][j] =
                        (C[i][j] + aik * B[k][j]) % MOD;
                }
            }
        }

        return C;
    }


    function multiplyMatVec(A, v) {
        const n = A.length;
        const res = Array(n).fill(0n);

        for (let i = 0; i < n; i++) {
            let sum = 0n;

            for (let j = 0; j < n; j++) {
                if (A[i][j] === 0n) continue;

                sum = (sum + A[i][j] * v[j]) % MOD;
            }

            res[i] = sum;
        }

        return res;
    }

 
    let power = n - 2;

    while (power > 0) {
        if (power & 1) {
            vec = multiplyMatVec(T, vec);
        }

        T = multiply(T, T);
        power >>= 1;
    }

    let answer = 0n;

    for (const x of vec) {
        answer = (answer + x) % MOD;
    }

    return Number(answer);
}


console.log(zigZagArrays(3, 4, 5)); // 2
console.log(zigZagArrays(3, 1, 3)); // 10