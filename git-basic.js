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

//Workflow Git
//The Three States :
//1. Modified - modif di lokal, belum sabe permanen ke repo
//2. Staged - menandai modif file akan save permanen ke repo - git add
//3. Committed - sudah aman save di repo - git commit
//Three Section :
//1. Working Directory : modified file
//2. Stagng Area : staged untuk persiapan file ke repository - git add
//3. Repository : semua riwayat versi file disimpan - git commit

//Hash
//Snapshot -> semua perubahan yang terjadi di semua file yang dicommit
//Setiap snapshot akan menghasilkan Hash sebagai identitasnya
//Git menggunakan algoritma SHA-1 untuk membuat Hash
//Selain menyimpan perubahan, di Hash juga menyimpan parent (Hash sebelumnya), author & message commit
 //Head -> pointer menuju Hash paling terakhir

 //Add File
 git add <file name> //add to staging index
 git add . //untuk tambah semua file
 git status //Untuk check semua status perubahan sementara
 git commit -m "message commit" //commit to repository

 //Update File
 //Lakukan perubahan pada salah 1 file, kemudian check dengan git status
 //Akan tertera file yang diedit dengan keterangan modified
 git diff //Untuk melihat riwayat perubahan file