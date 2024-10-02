# Covid Map

Covid-19, dünya genelinde yayılan bir virüs salgınıdır. <br />
Ülkelerin sağlık verilerine dayanarak COVID-19 istatistikleri çekildi.<br />
Haritada ülkeler gösterildi. <br />
Ülkelerin durumunu, detaylı analiz etmenize yardımcı olur. <br />

React ile geliştirildi. <br />
Tailwindcss ile tasarımlar yapıldı. <br />
Redux Toolkit kullanıldı. <br />
Jest ve Testing Library kullanarak testler yapıldı. <br />

Bu projede Unit(Birim) test yapılmıştır. <br />
Mocklama sayesinde gerçek API çağrıları yapmadan bileşenlerin doğru çalışıp çalışmadığını kontrol eder. <br />

Covid verisine: [buradan](https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics/playground) ulaşabilirsiniz.<br />
Ülke verisine: [buradan](https://restcountries.com/) ulaşabilirsiniz.<br />

## Gif

![](/public/covid-map.gif)

## Projenin Çalıştırılması

Projeyi indiriniz veya fork ediniz. 'Visual Studio Code' editörü ile projeyi açınız.

```
git clone https://github.com/evinoguz/covid-map.git
```

Terminalde;

```
npm install

```

komutu ile projede kullanılan paketlerin yüklenmesini sağlar, ardından

```
npm run test
```

komutu ile testleri çalıştırınız ve yeni terminalde;

```
npm start
```

komutu ile projeyi ayağa kaldırınız.
