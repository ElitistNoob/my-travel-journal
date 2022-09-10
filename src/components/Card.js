import icon from "./assets/location-icon.png";
import { CardStyled } from "./styles/Card.Styled";

export default function Card(props) {
  return (
    <CardStyled>
      <img className="card__img" src={props.imageUrl} alt="Mount Fuji" />
      <h3 className="card__title">{props.title}</h3>
      <div class="card__info">
        <img className="card__info--icon" src={icon} alt="" />
        <p className="card__info--location">{props.location}</p>
        <a
          className="card__info--link"
          href={props.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps
        </a>
      </div>
      <p className="card__date">
        {props.startDate} - {props.endDate}
      </p>
      <p className="card__body">{props.description}</p>
    </CardStyled>
  );
}

// [
//   {
//     title: "Mount Fuji",
//     location: "Japan",
//     googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//     startDate: "12 Jan, 2021",
//     endDate: "24 Jan, 2021",
//     description:
//       "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//     imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
//   },
// ];
