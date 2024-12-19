# Define your backup remote
$backup = "backup"

# Repository directory
$repoDir = "C:/Users/abdra/Desktop/smart-app/backend"
Set-Location -Path $repoDir

# Log file location
$logFile = "C:/Users/abdra/Desktop/smart-app/Automated/Backend/push-log.txt"

# Function to log messages
function Log-Message {
    param (
        [string]$Message
    )
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    "$timestamp - $Message" | Out-File -Append -FilePath $logFile
}

# Get the latest commit message
$commitMessage = git log -1 --pretty=format:"%s"

# Start of the script
Log-Message "Starting push to $backup with commit message: '$commitMessage'"

# Try pushing to the backup
if (git push $backup 2>&1 | Tee-Object -FilePath $logFile) {
    Log-Message "Successfully pushed to $backup"
} else {
    Log-Message "Failed to push to $backup"
}
