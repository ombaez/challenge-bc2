import { useRouter } from "next/router";

export default function Test() {
  const router = useRouter();
  const check = router.query;

  console.log(check,'check');
  return <>HOLA</>;
}
