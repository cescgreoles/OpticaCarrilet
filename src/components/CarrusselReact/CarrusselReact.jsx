import { Carousel } from "react-carousel-minimal";

function App() {
  const data = [
    {
      image:
        "https://www.javea.com/wp-content/uploads/2016/03/gafas-optica-pico-sol.jpg",
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`,
    },
    {
      image:
        "https://www.opticaherrero.com/wp-content/uploads/2019/05/ulleres-vols.jpg",
      caption: "",
    },
    {
      image:
        "https://bluopticas.es/wp-content/uploads/2020/09/mujer-comprando-gafas-blu.jpg",
      caption: "",
    },
    {
      image:
        "https://opticagrefer.com/wp-content/uploads/2019/06/ofertas-gafas-madrid-2.jpg",
      caption: "",
    },
    {
      image:
        "https://medicaloptica.es/blog/wp-content/uploads/2017/03/consejos-gafas-nino-1-1.jpg",
      caption: "",
    },
    {
      image:
        "https://opticacarrascosa.es/wp-content/uploads/2020/02/gafas-irrompibles-nin%CC%83os-carrascosa.jpg",
      caption: "",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="carousel">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "5px 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="800px"
            height="300px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
