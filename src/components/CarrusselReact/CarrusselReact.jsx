import { Carousel } from "react-carousel-minimal";

function App() {
  const data = [
    {
      image:
        "https://www.opticaliasanmiguel.es/wp-content/uploads/2020/10/BANNER-PROGRESIVOS-1.png",
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`,
    },
    {
      image:
        "https://www.generaloptica.es/media/wysiwyg/banner_promo_1520x674_gg_OfertaEspecial_2_.jpg",
      caption: "",
    },
    {
      image:
        "https://www.generaloptica.es/media/promociones/general-optica-banner-promociones-8-es-m.jpg",
      caption: "",
    },
    {
      image: "https://gmo.com.co/media/wysiwyg/BANNER-GMO-FW-2-06-legal_1.png",
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
        <div style={{}}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="23em"
            captionStyle={captionStyle}
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="#blue"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
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
