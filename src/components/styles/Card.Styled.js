import styled from "styled-components";

export const CardStyled = styled.div`
  display: grid;
  grid-template-areas:
    "img"
    "info"
    "title"
    "date"
    "body";
  max-width: 720px;
  margin-inline: auto;
  padding-block: 2em;
  font-size: var(--fs-body);
  color: var(--clr-body);
  border-bottom: 1px solid #c9c9c9;

  @media (min-width: 580px) {
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
      "img ."
      "img info"
      "img title"
      "img date"
      "img body"
      "img .";
    gap: 0 1.25rem;
  }

  > * {
    margin: 0;
  }

  .card__img {
    grid-area: img;
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
  }

  @media (min-width: 580px) {
    .card__img {
      height: 100%;
      aspect-ratio: 1 / 1.25;
    }
  }

  .card__title {
    grid-area: title;
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
    margin-bottom: 0.5em;
  }

  .card__date {
    grid-area: date;
    font-weight: var(--fw-bold);
    margin-bottom: 9px;
  }

  .card__body {
    grid-area: body;
    line-height: 1.5;
    max-width: 90%;
  }

  .card__info {
    grid-area: info;
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    margin-top: 0.5em;
  }

  @media (min-width: 580px) {
    .card__info {
      margin-top: unset;
    }
  }

  .card__info > * {
    margin: 0;
  }

  .card__info--icon {
    width: 10px;
    aspect-ratio: 1 / 1.5;
  }

  .card__info--location {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-left: 4px;
  }

  .card__info--link {
    color: var(--clr-light);
    margin-left: 12px;
  }
`;
