<script> 
	// Simple Javascript program to find mirror of matrix across diagonal.
	
	let MAX = 100;

	function imageSwap(mat, n)
	{
		// for diagonal which start from at
		// first row of matrix
		let row = 0;

		// traverse all top right diagonal
		for (let j = 0; j < n; j++)
		{

			// here we use stack for reversing
			// the element of diagonal
			let s = [];
			let i = row, k = j;
			while (i < n && k >= 0)
			{
				s.push(mat[i++][k--]);
			}

			// push all element back to matrix
			// in reverse order
			i = row;
			k = j;
			while (i < n && k >= 0)
			{
				mat[i++][k--] = s[s.length - 1];
				s.pop();
			}
		}

		// do the same process for all the
		// diagonal which start from last
		// column
		let column = n - 1;
		for (let j = 1; j < n; j++)
		{

			// here we use stack for reversing
			// the elements of diagonal
			let s = [];
			let i = j, k = column;
			while (i < n && k >= 0)
			{
				s.push(mat[i++][k--]);
			}

			// push all element back to matrix
			// in reverse order
			i = j;
			k = column;
			while (i < n && k >= 0)
			{
				mat[i++][k--] = s[s.length - 1];
				s.pop();
			}
		}
	}

	// Utility function to print a matrix
	function printMatrix(mat, n)
	{
		for (let i = 0; i < n; i++)
		{
			for (let j = 0; j < n; j++)
			{
				document.write(mat[i][j] + " ");
			}
			document.write("</br>");
		}
	}
	
	let mat = [[1, 2, 3, 4],
			[5, 6, 7, 8],
			[9, 10, 11, 12],
			[13, 14, 15, 16]];
	let n = 4;
	imageSwap(mat, n);
	printMatrix(mat, n);
	
</script>
