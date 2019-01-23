#Teknologi yang digunakan
- React.JS
- axios untuk calling webservice
- Font Awesome untuk icon
- Bootstrap 4
- Untuk Automate Testing menggunakan nightwatch.js dengan selenium standalone

#Docker
- Dockerfile ada di root directory
- Menggunakan NPM untuk menjalankan program
- Build image Docker
	1. Clone repository github
	2. Open terminal / Command Prompt
	3. Pindah ke directory local dari github yang sudah di clone(shopee-test-fee)
	4. Jalankan : docker build -t kevinzola/shopee-test .
	5. Jalanlan : docker run -p 3000:3000 -d kevinzola/shopee-test //Run Program di port 3000
	6. Jalankan : docker logs <CONTAINER_ID> //Untuk check apakah build image docker berhasil
	7. Buka localhost:3000 untuk melihat program
