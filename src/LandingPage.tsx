import { useEffect, useState } from "react";
import { landingPageDTO } from "./peliculas/peliculas.model";
import { ListadoPeliculas } from "./peliculas/ListadoPeliculas";

export const LandingPage = () => {
  const [peliculas, setPeliculas] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPeliculas({
        enCartelera: [
          {
            id: 1,
            titulo: "Spider-Man: Far from home",
            poster:
              "https://img.redbull.com/images/c_crop,x_0,y_188,h_1011,w_809/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/01/16/d35d6b98-8639-49cf-b30d-62a5cdac0bc8/spider-man-far-from-home-lejos-de-casa-trailer-avance-video-cine-estreno-movie-film-marvel-cinematic-universe-mcu-universo-cinematografico-marvel-mysterio-tom-holland-marisa-tomei-aunt-may-tia-mai-happy-hogan-jon-favreau-elementals",
          },
          {
            id: 2,
            titulo: "Moana",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCYPIIY-HGPmWUN5mSnWfj4L8hcivVhm9ubQyoR0KJnA&s",
          },
        ],
        proximosEstrenos: [
          {
            id: 3,
            titulo: "Amigos imaginarios",
            poster:
              "https://es.web.img3.acsta.net/img/7b/21/7b214d9219ddd473eb8e1e844408b0f8.jpeg",
          },
        ],
      });
    }, 500);

    return () => clearTimeout(timerId);
  });

  return (
    <>
      <h3>En Cartelera</h3>
      <ListadoPeliculas peliculas={peliculas.enCartelera} />

      <h3>Próximos Estrenos</h3>
      <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
    </>
  );
};

