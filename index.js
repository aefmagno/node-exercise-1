const { argv } = require('node:process')
const fs = require('fs')

if (argv.length === 4 || argv.length === 5) {
  try {
    const line = fs.readFileSync(argv[2])
    const lines = line.toString().split('\n')
    let writeOutput = ''
    for (let i = 0, counter = 1; i < lines.length; i += 1, counter += 1) {
      writeOutput += `${counter}: ${lines[i]}\n`
    }

    if (fs.existsSync(argv[3])) {
      const checkers = ['-y', '-n', null, undefined]
      if (!checkers.includes(argv[4])) {
        console.log('Please provide either -y or -n.')
      } else if (argv[4] === '-y') {
        try {
          fs.writeFileSync(argv[3], writeOutput)
        } catch (err) {
          console.log('There was an error in creating the file.')
        }
      } else if (argv[4] === '-n' || argv[4] == null) {
        console.log('The file will not be overwritten.')
      }
    } else {
      try {
        fs.writeFileSync(argv[3], writeOutput)
      } catch (err) {
        console.log('There was an error in creating the file.')
      }
    }
  } catch (err) {
    console.log('The file does not exist.')
  }
} else {
  console.log('Please Input Three Arguments At Most')
}
