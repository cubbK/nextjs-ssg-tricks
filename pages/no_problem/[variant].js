import { useMediaQuery } from "usehooks-ts";

export function useIsDesktop(variant) {
  console.log({ variant });
  const isDesktop = useMediaQuery("(min-width: 768px)", {
    defaultValue: variant === "desktop",
  });
  return isDesktop;
}

export default function Home({ variant }) {
  const isDesktop = useIsDesktop(variant);
  console.log({ isDesktop });
  return <CardList variant={isDesktop ? "desktop" : "mobile"} />;
}

export function getStaticPaths() {
  return {
    paths: ["/no_problem/mobile", "/no_problem/desktop"],
    fallback: false,
  };
}

export function getStaticProps(context) {
  return {
    props: { variant: context.params.variant },
  };
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
