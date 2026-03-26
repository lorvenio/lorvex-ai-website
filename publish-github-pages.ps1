param(
  [string]$RepoUrl = "https://github.com/lorvenio/lorvex-ai.git",
  [string]$Branch = "main",
  [string]$CommitMessage = "Initial Lorvex AI website"
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Require-Command {
  param([string]$Name)
  if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
    throw "Required command '$Name' is not installed or not on PATH."
  }
}

Require-Command git

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectRoot

if (-not (Test-Path ".git")) {
  git init | Out-Null
}

if (-not (Test-Path ".gitignore")) {
@"
node_modules/
.next/
out/
.env*
.DS_Store
Thumbs.db
"@ | Set-Content ".gitignore"
}

git add .

$hasStaged = (git diff --cached --name-only)
if ($hasStaged) {
  git commit -m $CommitMessage
} else {
  Write-Host "No staged changes to commit."
}

git branch -M $Branch

$remoteExists = git remote | Where-Object { $_ -eq "origin" }
if ($remoteExists) {
  git remote set-url origin $RepoUrl
} else {
  git remote add origin $RepoUrl
}

git push -u origin $Branch

Write-Host ""
Write-Host "Push complete."
Write-Host "Next: GitHub -> Settings -> Pages -> Source: GitHub Actions"
