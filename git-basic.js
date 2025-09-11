//Git & VS Code
https://git-scm.com/downloads
https://code.visualstudio.com/

//Konfigurasi utama : username & email
git config --global user.name "M Hasan"
git config --global user.email "hasanmuhammad197@gmail.com"

//Set VS Code menjadi default editor untuk git
git config --global core.editor "code --wait"

//Set default diff tool
git config --global diff.tool "default-difftool"
git config --global difftool.default-difftool.cmd "code --wait --diff \$LOCAL \$REMOTE"

//Show all configuration
git config --list --show-origin

//Create repository in empty folder
git init //create file .git

//Check changes in repository
git status