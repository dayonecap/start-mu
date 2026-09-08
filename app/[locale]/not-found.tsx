import Link from "@/components/Link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-24 lg:py-36">
      <Container>
        <h1 className="t-h1">That page is not here</h1>
        <p className="t-lead mt-6 max-w-[48ch]">The address may have changed. The residency, establishment and property sections cover everything on the site.</p>
        <p className="mt-8">
          <Link href="/" className="btn btn-ghost">
            Back to the home page
          </Link>
        </p>
      </Container>
    </section>
  );
}
