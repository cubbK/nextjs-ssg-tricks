import { useMediaQuery } from "usehooks-ts";

export function useIsDesktop(isDesktopHeader) {
  const isDesktop = useMediaQuery("(min-width: 768px)", {
    defaultValue: isDesktopHeader,
  });
  return isDesktop;
}

export function getServerSideProps(context) {
  return {
    props: { headers: { ...context.req.headers, "x-is-desktop": true } },
  };
}

export default function SSR(props) {
  const isDesktop = useIsDesktop(props.headers["x-is-desktop"]);
  console.log({ isDesktop, props });
  return "SSR" + isDesktop ? "Desktop" : "Mobile";
}
