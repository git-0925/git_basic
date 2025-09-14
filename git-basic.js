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

 //Delete File
 //Lakukan delete file seperti biasa
 //Maka ketika git status akan detect file yang dihapus dengan keterangan deleted
 //Lakukan juga add & commit untuk delete file tsb di repostiory untuk versi selanjutnya
 //Namun di versi sebelumnya masih tetap ada

 //Cancel Changes
 //Jika sudah menambah file di working directory, lalu ingin membatalkannya
 //Dapat langsung menghapus file2 tersebut, atau dengan perintah :
 git clean -f
 //Jika sudah mengedit isi file di working directory, lalu ingin membatalkannya :
 git restore <namafile> //dapat digunakan juga untuk kembalikan file yang sudah dihapus
 //Sedangkan untuk membatalkan perubahan di Staging index, perlu dikembalikan dulu ke working directory :
 git restore --staged <namafile> //contoh case : sudah hapus file di working, dan add ke staging index
 //Jika sudah commit tidak bisa dibatalkan, hanya bisa di rollback commit/revert commit

 //Commit Log
 git log //Melihat commit log
 git log --oneline //Commit log lebih sederhana
 git log --oneline graph //Commit log dengan grafik antar branch
 git show <code hash> //Commit log lebih detail hash terkait
 git show HEAD //Commit log lebih detail hash terakhir

 //Compare Commit
 //Git dapat membandingkan snapshot/perubahan hasil commit, bukan bandingan perubahan antar commit
 git diff <hash1> <hash2>
 git difftool <hash1> <hash2> //compare lebih detail scr langsung (harus set vscode dulu)

 //Rename File
 //Sebenarnya rename file adalah gabungan antara hapus file kemudian menambah file baru dengan isi sama
 //Dapat dilihat dengan git status -> akan tertera deleted file kemudian add file renamed
 //Namun ketika git add kedua nama file sebelum & sesudah rename, maka git status akan show renamed saja

 //Reset Commit
 //Untuk membatalkan commit yang sudah masuk ke repository
 //Reset commit -> mekanisme geser HEAD pointer ke posisi commit yang kita mau, tapi masih bisa dikembalikan asal belum commit
 git reset <mode> <hash>
 //Mode --soft -> perubahan yang terjadi hanya di repository, di staging & working directory aman
 //--mixed (default) -> perubahan yang terjadi di repository & staging, di working directory aman
 //--hard -> perubahan yang terjadi di repository, staging & working directory

 //Amend Commit
 //Digunakan ketika sudah melakukan commit, tapi ada hal yang terlupakan
 //Selain bisa soft reset, juga bisa dengan command :
 git commit --amend -m <message>//lakukan perubahan yang terlupa, commit lg dengan --amend (replace hash)