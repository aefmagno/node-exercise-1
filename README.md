This program takes either 2 or 3 arguments. It reads an existing file, takes its content, and writes it into a separate file.
- `node index sampletext1.txt sampletext2.txt -y`
- `node index sampletext1.txt sampletext2.txt -n`
The first argument reads a file per line and stores it into a variable. The 2nd argument can be either an abosulute path or a relative path.
- `node index sampletext1.txt ... ...`
The second argument specifies a file for output. If the file exsists, the contents of that file is overwritten, if not, a file is created.
- `node index ... sampletext2.txt ...`
The third argument takes either -y or -n. If no flag is provided, the default will be -n
- `-y`
    - `node index ... ... -y` -y overwrites the file specfied in the 2nd argument. 
- `-n`
    - `node index ... ... -n` -n does not overwrite the file specified in the 2nd argument.


