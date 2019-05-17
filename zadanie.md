## Zadanie

Celem zadania jest uruchomienie aplikacji **TO DO**, która wyświetli zadania pobrane z bazy danych.

Należy uruchomić serwer API, który działa na porcie **5000**.
Klient zostanie uruchomiony na porcie **3000**. 

Z przyczyn "bezpieczeństwa" nie można skorzystać z portu **3000**. Uruchom klienta na innym porcie np. **4000** .

Uruchom phpmyadmin na porcie **8080** .


## Wymagania:
* zdefiniować środowisko produkcyjne w pliku `docker-compose.yml`
* zdefinować w pliku `docker-compose-dev.yml` serwis do phpmyadmin 
  * skorzystaj z obrazu `phpmyadmin/phpmyadmin`
  * phpmyadmin działa na porcie `80`
* wykorzystywana baza danych to mysql 
  * wykorzystaj obraz `mariadb`
  * zdefiniuj wolumen do przechowania danych (zastosuj wolumen zarządany przez Docker) - nazwij go `mysql_db`
  * pamiętaj o zdefiniowaniu hasła do mysql
  * zdefiniuj bazę danych o nazwie `todoapp`
  * zdefiniuj tabelę o nazwie `tasks`
  * zdefiniuj pola
    * id (int z autoincrement)
    * text (varchar)
    * completed (bool)
* serwer jest napisany w node JS
  * skorzystaj z obrazu node w wersji `10 (alpine)` do zbudowania serwisu
  * pamiętaj o poprawnej konfiguracji połączenia - plik `index.js` w `api_server`
  * stwórz obraz dla API (Dockerfile) - nazwij go `todoapp-api`
  * stwórz serwis o nazwie `apiserver`
* client jest napisany przy wykorzystaniu React
  * skorzystaj z obrazu node w wersji `10 (alpine)` do zbudowania serwisu
  * pamiętaj o poprawnej konfiguracji połączenia do API - zmienna `API_server` w pliku `react_app/src/components/wrappers/StateProvider.js` - ustaw na adres Twojej maszyny wirtualnej
  * stwórz obraz dla UI (Dockerfile) - nazwij go `todoapp-client`
  * stwórz serwis o nazwie `clientapp`

* pamiętaj o zależnościach uruchamiania serwisów

  




## Podpowiedzi:

* **MySQL:**
  * skorzystaj ze zmiennej środowiskowej `MYSQL_ROOT_PASSWORD` w celu ustawienia hasła do mysql
* **Serwer i klient:**
  * utwórz working directory `/usr/app` dla obrazu i w nim dodaj aplikację
  * pamiętaj o dodaniu pliku `package.json` oraz zainstalowaniu pakietów `npm install`
* **Serwer:**
  * dla serwera dodaj globalny pakiet PM2 `npm install pm2 -g`
  * uruchom serwer poleceniem `pm2-docker start ecosystem.config.js` (pamiętaj o składni Dockerfile ! )
* **Klient:**
  * uruchom serwer poleceniem `npm start` (pamiętaj o składni Dockerfile ! )
* **docker-compose**
  * do zdefiniowania zależności skorzystaj z `depends_on`
