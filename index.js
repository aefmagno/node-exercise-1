const { argv } = require('node:process')
const fs = require('fs')

if (argv.length > 3 || argv.length === 2) {
  console.log('Please Input A Single Argument')
} else {
  try {
    const line = fs.readFileSync(argv[2])
    const lines = line.toString().split('\n')

    for (let i = 0, counter = 1; i < lines.length; i += 1, counter += 1) {
      console.log(`${counter}: ${lines[i]}`)
    }
  } catch (err) {
    console.log(`File Does Not Exit.${err}`)
  }
}
