// Corrección de color de las fotos del centro para unificarlas con la paleta natural.
// Lee los originales de recursos/originales y escribe en src/assets/images.
// No cambia el contenido de las fotos: reduce el magenta/violeta de los LED y calienta el tono.
// Uso: npm run photos
import sharp from 'sharp';

const SRC = 'recursos/originales';
const OUT = 'src/assets/images';

// «suave» para fotos con luz cálida; «led» para estancias iluminadas con LED violeta o rosa.
const grades = {
  suave: (img) =>
    img
      .recomb([
        [0.92, 0.08, 0.0],
        [0.06, 0.9, 0.04],
        [0.06, 0.16, 0.62],
      ])
      .modulate({ saturation: 0.82, brightness: 1.03 })
      .linear([1.02, 1.0, 0.96], [4, 2, 0]),
  led: (img) =>
    img
      .recomb([
        [0.88, 0.12, 0.0],
        [0.08, 0.86, 0.06],
        [0.04, 0.22, 0.54],
      ])
      .modulate({ saturation: 0.72, brightness: 1.05 })
      .linear([1.03, 1.0, 0.95], [6, 4, 0]),
};

const photos = [
  ['ambiente/masaje-cabina-vegetal.png', 'ambiente/masaje-cabina-vegetal.png', 'suave'],
  ['ambiente/clienta-cabina-vegetal.png', 'ambiente/clienta-cabina-vegetal.png', 'suave'],
  ['ambiente/vela-piedras-madera.png', 'ambiente/vela-piedras-madera.png', 'suave'],
  ['centro/cabina-principal-panoramica.jpg', 'centro/cabina-principal-panoramica.jpg', 'suave'],
  ['centro/cabina-aparatologia.jpg', 'centro/cabina-aparatologia.jpg', 'suave'],
  ['centro/entrada-fachada.jpg', 'centro/entrada-fachada.jpg', 'suave'],
  ['centro/pasillo-sala-sauna.jpg', 'centro/pasillo-sala-sauna.jpg', 'suave'],
  ['centro/cabina-camillas-verde.jpg', 'centro/cabina-camillas-verde.jpg', 'suave'],
  ['centro/camilla-tratamiento.jpg', 'centro/camilla-tratamiento.jpg', 'suave'],
  ['centro/jacuzzi-privado-fotograma.png', 'centro/jacuzzi-privado.png', 'suave'],
  ['centro/cabina-vista-general.jpg', 'centro/cabina-vista-general.jpg', 'led'],
  ['centro/sala-camillas-cielo-estrellado.jpg', 'centro/sala-camillas-cielo-estrellado.jpg', 'led'],
  ['centro/sauna-infracarbono-exterior.jpg', 'centro/sauna-infracarbono-exterior.jpg', 'led'],
  ['centro/sauna-infracarbono-interior.jpg', 'centro/sauna-infracarbono-interior.jpg', 'led'],
  ['centro/cabina-luz-violeta.jpg', 'centro/cabina-luz-violeta.jpg', 'led'],
  ['centro/sala-sauna-mural-buda.png', 'centro/sala-sauna-mural-buda.png', 'led'],
];

for (const [from, to, grade] of photos) {
  const img = grades[grade](sharp(`${SRC}/${from}`));
  const out = to.endsWith('.png') ? img.png({ compressionLevel: 9 }) : img.jpeg({ quality: 92, mozjpeg: true });
  await out.toFile(`${OUT}/${to}`);
  console.log(`${grade.padEnd(5)} ${to}`);
}
