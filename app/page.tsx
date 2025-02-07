import { Breadcrumbs } from "@arbetsmarknad/components/Breadcrumb";
import { Container } from "@arbetsmarknad/components/Container";
import { HeaderMenu } from "@arbetsmarknad/components/HeaderMenu";
import { Main } from "@arbetsmarknad/components/Main";
import { TopLevelHeading } from "@arbetsmarknad/components/TopLevelHeading";

export default function Home() {
  return (
    <>
      <Breadcrumbs>
        {{
          "https://arbetsmarknad.github.io/": "Arbetsmarknad",
          "/next": "Next",
        }}
      </Breadcrumbs>
      <Main>
        <Container className="flex flex-col items-start space-y-4">
          <TopLevelHeading text="Arbetsmarknad Starter Project" />
          <p>This is a starter project for Arbetsmarknad web content.</p>
        </Container>
      </Main>
    </>
  );
}
