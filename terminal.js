const { Terminal } = require('xterm');

// Create a new terminal instance
const term = new Terminal({
  cursorBlink: true,
  fontFamily: 'monospace',
  fontSize: 14,
  rows: 24,
  cols: 80,
});

// Add the terminal to the HTML element
document.getElementById('terminal').appendChild(term.element);

// Fit the terminal to the container
fit(term);

// Set up the terminal prompt
term.prompt = () => {
  term.write('\r\n$ ');
};
// Set up the terminal prompt for WebOS
term.prompt = () => {
  term.write('\r\n\x1b[1;32mwebos\x1b[0m:\x1b[1;34m' + linuxEnv.PWD + '\x1b[0m$ ')
}

// Initialize the terminal
term.writeln('Welcome to WebOS Terminal')
term.prompt()

// Handle user input
term.onKey(({ key, domEvent }) => {
  const printable = !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey

  if (domEvent.keyCode === 13) { // Enter key
    const command = term.buffer.active.getLine(term.buffer.active.cursorY).translateToString().trim().slice(term.buffer.active.cursorX)
    term.write('\r\n')
    executeCommand(command)
    term.prompt()
  } else if (domEvent.keyCode === 8) { // Backspace
    if (term.buffer.active.cursorX > 2) {
      term.write('\b \b')
    }
  } else if (printable) {
    term.write(key)
  }
})

// Update the command executor to work with the new prompt
const executeCommand = (cmd) => {
  const [command, ...args] = cmd.split(' ')
  switch (command) {
    case 'cd':
      if (args[0]) {
        linuxEnv.PWD = args[0]
      } else {
        term.writeln('Usage: cd <directory>')
      }
      break
    case 'ls':
      term.writeln('total 0')
      term.writeln('drwxr-xr-x  2 root root 4096 Jan  1 1970 bin')
      term.writeln('drwxr-xr-x  3 root root 4096 Jan  1 1970 boot')
      term.writeln('drwxr-xr-x 15 root root 3400 Jan  1 1970 dev')
      break
    case 'pwd':
      term.writeln(linuxEnv.PWD)
      break
    case 'echo':
      term.writeln(args.join(' '))
      break
    case 'clear':
      term.clear()
      break
    case 'help':
      term.writeln('Available commands: cd, ls, pwd, echo, clear, help')
      break
    default:
      term.writeln(`webos: ${command}: command not found`)
  }
}

// Set up the terminal commands
term.on('key', (key) => {
  if (key === '\r') {
    term.prompt();
  }
});
case 'sudo':
  if (args[0] === 'apt' && args[1] === 'install') {
    if (args.slice(2).length > 0) {
      term.writeln(`[sudo] password for ${linuxEnv.USER}:`)
      term.writeln('Reading package lists... Done')
      term.writeln('Building dependency tree... Done')
      term.writeln('Reading state information... Done')
      args.slice(2).forEach(pkg => {
        term.writeln(`The following NEW packages will be installed: ${pkg}`)
      })
      term.writeln('0 upgraded, ' + args.slice(2).length + ' newly installed, 0 to remove and 0 not upgraded.')
      term.writeln('Need to get 0 B/1,234 kB of archives.')
      term.writeln('After this operation, 5,678 kB of additional disk space will be used.')
      term.writeln('Selecting previously unselected packages...')
      args.slice(2).forEach(pkg => {
        term.writeln(`(Reading database ... 123456 files and directories currently installed.)`)
        term.writeln(`Preparing to unpack .../archives/${pkg}.deb ...`)
        term.writeln(`Unpacking ${pkg} ...`)
        term.writeln(`Setting up ${pkg} ...`)
        term.writeln(`Processing triggers for man-db ...`)
      })
      term.writeln('Done.')
    } else {
      term.writeln('Usage: sudo apt install <package1> <package2> ...')
    }
  } else {
    term.writeln('sudo: command not found')
  }
  break  if (args[0] === 'apt' && args[1] === 'install') {
    if (args.slice(2).length > 0) {
      term.writeln(`[sudo] password for ${linuxEnv.USER}:`)
      term.writeln('Reading package lists... Done')
      term.writeln('Building dependency tree... Done')
      term.writeln('Reading state information... Done')
      args.slice(2).forEach(pkg => {
        term.writeln(`The following NEW packages will be installed: ${pkg}`)
      })
      term.writeln('0 upgraded, ' + args.slice(2).length + ' newly installed, 0 to remove and 0 not upgraded.')
      term.writeln('Need to get 0 B/1,234 kB of archives.')
      term.writeln('After this operation, 5,678 kB of additional disk space will be used.')
      term.writeln('Selecting previously unselected packages...')
      args.slice(2).forEach(pkg => {
        term.writeln(`(Reading database ... 123456 files and directories currently installed.)`)
        term.writeln(`Preparing to unpack .../archives/${pkg}.deb ...`)
        term.writeln(`Unpacking ${pkg} ...`)
        term.writeln(`Setting up ${pkg} ...`)
        term.writeln(`Processing triggers for man-db ...`)
      })
      term.writeln('Done.')
    } else {
      term.writeln('Usage: sudo apt install <package1> <package2> ...')
    }
  } else {
    term.writeln('sudo: command not found')
  }
  break  if (args[0] === 'apt' && args[1] === 'install') {
    if (args.slice(2).length > 0) {
      term.writeln(`[sudo] password for ${linuxEnv.USER}:`)
      term.writeln('Reading package lists... Done')
      term.writeln('Building dependency tree... Done')
      term.writeln('Reading state information... Done')
      args.slice(2).forEach(pkg => {
        term.writeln(`The following NEW packages will be installed: ${pkg}`)
      })
      term.writeln('0 upgraded, ' + args.slice(2).length + ' newly installed, 0 to remove and 0 not upgraded.')
      term.writeln('Need to get 0 B/1,234 kB of archives.')
      term.writeln('After this operation, 5,678 kB of additional disk space will be used.')
      term.writeln('Selecting previously unselected packages...')
      args.slice(2).forEach(pkg => {
        term.writeln(`(Reading database ... 123456 files and directories currently installed.)`)
        term.writeln(`Preparing to unpack .../archives/${pkg}.deb ...`)
        term.writeln(`Unpacking ${pkg} ...`)
        term.writeln(`Setting up ${pkg} ...`)
        term.writeln(`Processing triggers for man-db ...`)
      })
      term.writeln('Done.')
    } else {
      term.writeln('Usage: sudo apt install <package1> <package2> ...')
    }
  } else {
    term.writeln('sudo: command not found')
  }
  break  if (args[0] === 'apt' && args[1] === 'install') {
    if (args.slice(2).length > 0) {
      term.writeln(`[sudo] password for ${linuxEnv.USER}:`)
      term.writeln('Reading package lists... Done')
      term.writeln('Building dependency tree... Done')
      term.writeln('Reading state information... Done')
      args.slice(2).forEach(pkg => {
        term.writeln(`The following NEW packages will be installed: ${pkg}`)
      })
      term.writeln('0 upgraded, ' + args.slice(2).length + ' newly installed, 0 to remove and 0 not upgraded.')
      term.writeln('Need to get 0 B/1,234 kB of archives.')
      term.writeln('After this operation, 5,678 kB of additional disk space will be used.')
      term.writeln('Selecting previously unselected packages...')
      args.slice(2).forEach(pkg => {
        term.writeln(`(Reading database ... 123456 files and directories currently installed.)`)
        term.writeln(`Preparing to unpack .../archives/${pkg}.deb ...`)
        term.writeln(`Unpacking ${pkg} ...`)
        term.writeln(`Setting up ${pkg} ...`)
        term.writeln(`Processing triggers for man-db ...`)
      })
      term.writeln('Done.')
    } else {
      term.writeln('Usage: sudo apt install <package1> <package2> ...')
    }
  } else {
    term.writeln('sudo: command not found')
  }
  break  if (args[0] === 'apt' && args[1] === 'install') {
    if (args.slice(2).length > 0) {
      term.writeln(`[sudo] password for ${linuxEnv.USER}:`)
      term.writeln('Reading package lists... Done')
      term.writeln('Building dependency tree... Done')
      term.writeln('Reading state information... Done')
      args.slice(2).forEach(pkg => {
        term.writeln(`The following NEW packages will be installed: ${pkg}`)
      })
      term.writeln('0 upgraded, ' + args.slice(2).length + ' newly installed, 0 to remove and 0 not upgraded.')
      term.writeln('Need to get 0 B/1,234 kB of archives.')
      term.writeln('After this operation, 5,678 kB of additional disk space will be used.')
      term.writeln('Selecting previously unselected packages...')
      args.slice(2).forEach(pkg => {
        term.writeln(`(Reading database ... 123456 files and directories currently installed.)`)
        term.writeln(`Preparing to unpack .../archives/${pkg}.deb ...`)
        term.writeln(`Unpacking ${pkg} ...`)
        term.writeln(`Setting up ${pkg} ...`)
        term.writeln(`Processing triggers for man-db ...`)
      })
      term.writeln('Done.')
    } else {
      term.writeln('Usage: sudo apt install <package1> <package2> ...')
    }
  } else {
    term.writeln('sudo: command not found')
  }
  break

// Set up the Linux environment
const linuxEnv = {
  'PWD': '/',
  'PATH': '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
};

// Set up the command executor
function executeCommand(cmd) {
  const [command, ...args] = cmd.split(' ');
  switch (command) {
    case 'cd':
      linuxEnv.PWD = args[0];
      break;
    case 'ls':
      term.write("total 0",
        ");",
        term.write("drwxr-xr-x  2 root root 4096 Jan  1 1970 bin",
          ");",
          term.write("drwxr-xr-x  3 root root 4096 Jan  1 1970 boot",
            ");",
            term.write("drwxr-xr-x 15 root root 3400 Jan  1 1970 dev",
              ");"))));
      break;
    case 'sudo':
      term.write('sudo: effective uid is not 0, is /usr/bin/sudo on a file system with the ', nosuid, " option set or an NFS file system without root privileges?",
        ");");
      break;
    default:
      term.write(`bash: ${command}: command not found`);
  }
}