# Set git editor to avoid vim issues
$env:GIT_EDITOR = "notepad"
git config --global core.editor "notepad"

# Abort any ongoing merge
git merge --abort 2>$null

# Check current status
Write-Host "Current git status:"
git status

# Add all changes
Write-Host "Adding all changes..."
git add .

# Commit changes
Write-Host "Committing changes..."
git commit -m "Update site content and add deployment workflow"

# Create and switch to gh-pages branch
Write-Host "Creating gh-pages branch..."
git checkout -b gh-pages 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Branch already exists, switching to it..."
    git checkout gh-pages
}

# Push to gh-pages branch
Write-Host "Pushing to gh-pages branch..."
git push origin gh-pages --force

Write-Host "Deployment to gh-pages branch complete!"
Write-Host "Your site should be available at: https://mnvishnu08.github.io/itisvishnu/"