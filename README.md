#Teknologi yang digunakan
- axios untuk calling webservice
- Font Awesome untuk icon
- Bootstrap 4
- Untuk Automate Testing menggunakan nightwatch.js dengan selenium standalone

#Docker
- Dockerfile ada di root directory berserta dengan .dockerignore
- Menggunakan NPM untuk mnejalan program
- Build image Docker
	1. docker build -t kevinzola/shopee-test .
	2. docker run -p 3000:3000 -d kevinzola/shopee-test //Run Program in port 3000
	3. docker logs <CONTAINER_ID>
