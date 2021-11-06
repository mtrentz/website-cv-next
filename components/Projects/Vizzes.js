import CardDataViz from "../General/CardDataViz";
import Image from "next/image";

const Vizzes = () => {
  const vizzesData = [
    {
      id: 1,
      title: "Plastic Recyclers",
      description:
        "Location and inauguration date of all plastic recyclers in Brazil.",
      image: (
        <Image
          src="/dashboard_imgs/recuperadores.png"
          alt="Tableau Dashboard"
          width="500"
          height="500"
          layout="intrinsic"
          objectFit="fill"
        />
      ),
      link: "https://public.tableau.com/views/RecicladoresdePlsticonoBrasil/EstabelecimentosRecuperadores2?:language=en-US&:display_count=n&:origin=viz_share_link",
    },
    {
      id: 2,
      title: "My Spotify",
      description:
        "Analysis of my spotify listening habits. Top artists and genres.",
      image: (
        <Image
          src="/dashboard_imgs/spotify.png"
          alt="Tableau Dashboard"
          width="500"
          height="500"
          layout="intrinsic"
          objectFit="fill"
        />
      ),
      link: "https://public.tableau.com/views/MySpotifyAnalysis/Home?:language=en-US&:display_count=n&:origin=viz_share_link",
    },
    {
      id: 3,
      title: "Polyethylene in S.A.",
      description:
        "General data of production, consumption and exports of Polyethylene in South America.",
      image: (
        <Image
          src="/dashboard_imgs/pe.png"
          alt="Tableau Dashboard"
          width="500"
          height="500"
          layout="intrinsic"
          objectFit="fill"
        />
      ),
      link: "https://public.tableau.com/views/PolyethyleneinSouthAmerica/Capacity?:language=en-US&:display_count=n&:origin=viz_share_link",
    },
    {
      id: 4,
      title: "Energy Production",
      description:
        "General data of petroleum and its derivates produced in Brazil.",
      image: (
        <Image
          src="/dashboard_imgs/anp.png"
          alt="Tableau Dashboard"
          width="500"
          height="500"
          layout="intrinsic"
          objectFit="fill"
        />
      ),
      link: "https://public.tableau.com/views/DadosBrasilEnergia/ProjeoVendadeGasolinaCporestado?:language=en-US&:display_count=n&:origin=viz_share_link",
    },
    {
      id: 5,
      title: "Plastic Data",
      description:
        "Brazil's import and export data of the most common plastics.",
      image: (
        <Image
          src="/dashboard_imgs/balanca.png"
          alt="Tableau Dashboard"
          width="500"
          height="500"
          layout="intrinsic"
          objectFit="fill"
        />
      ),
      link: "https://public.tableau.com/views/BalanaComercialBrasileiraresinas/BalanaComercial?:language=en-US&:display_count=n&:origin=viz_share_link",
    },
  ];
  return (
    <>
      <CardDataViz vizzesData={vizzesData} />
    </>
  );
};

export default Vizzes;
