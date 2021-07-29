/*
  Om een datum te creeren moeten we een instance maken van een datum.
  De default datum is NU.

  Om een speicifieke datum-waarde in te stellen geven we argumenten mee in de
  constructor.

  Belangrijk om te weten is dat de maanden op basis van index nrs zijn.
  Januari is dus niet 1, maar 0. December is niet 12, maar 11.
*/


{
  let nu = new Date();
  console.log(nu);

  let mijnVerjaardag = new Date(1990, 10, 30);
  console.log(mijnVerjaardag);
}
