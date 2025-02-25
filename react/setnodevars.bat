@echo off
set PATH=C:\Users\xsaozdemir\Program Files\NodeJS\node-v22.13.1\;C:\Users\xsaozdemir\Program Files\NodeJS\node-v22.13.1\node_modules\npm;C:\Users\xsaozdemir\Program Files\NodeJS\node-v22.13.1\node_modules\.bin;%PATH%
set NODE_PATH=C:\Users\xsaozdemir\Program Files\NodeJS\node-v22.13.1\node_modules


PS Kullanarak
$PATH = [Environment]::GetEnvironmentVariable("PATH", "Machine") + ";C:\Users\xsaozdemir\Program Files\NodeJS\node-v22.13.1\;C:\Users\xsaozdemir\Program Files\NodeJS\node-v22.13.1\node_modules\npm;C:\Users\xsaozdemir\Program Files\NodeJS\node-v22.13.1\node_modules\.bin"
[Environment]::SetEnvironmentVariable("PATH", $PATH, "Machine")