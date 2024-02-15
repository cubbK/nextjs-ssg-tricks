import { useMediaQuery } from "usehooks-ts";

export function useIsDesktop() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop;
}

export default function Home() {
  const isDesktop = useIsDesktop();
  console.log({ isDesktop });
  return <CardList variant={isDesktop ? "desktop" : "mobile"} />;
}

function CardList({ variant }) {
  return (
    <>
      <div className={variant === "mobile" ? "mobile" : "desktop"}>
        <Card />
        <Card />
        {variant === "mobile" && <Card />}
        <Card />
      </div>
      <style jsx>{`
        .mobile {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .desktop {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      `}</style>
    </>
  );
}

function Card() {
  return (
    <div>
      <h2>Card Title</h2>
      <p>Card Description</p>
      <style jsx>{`
        div {
          border: 1px solid #000;
          padding: 10px;
          margin: 10px;
        }
      `}</style>
    </div>
  );
}
