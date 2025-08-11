@echo off
git config --global core.editor "echo"
git add .
git commit -m "Deploy site updates"
git push origin main --force
echo Deployment complete!
pause