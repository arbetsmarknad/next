import { Breadcrumbs } from "@svenskamodellen/components/Breadcrumb";
import { Container } from "@svenskamodellen/components/Container";
import { HeaderMenu } from "@svenskamodellen/components/HeaderMenu";
import { Main } from "@svenskamodellen/components/Main";
import { TopLevelHeading } from "@svenskamodellen/components/TopLevelHeading";

export default function Home() {
  return (
    <>
      <Breadcrumbs>
        {{
          "https://svenskamodellen.github.io/": "Svenska modellen",
          "/next": "Next",
        }}
      </Breadcrumbs>
      <Main>
        <Container className="flex flex-col items-start space-y-4">
          <TopLevelHeading text="Svenska modellen Starter Project" />
          <p>This is a starter project for Svenska modellen web content.</p>
        </Container>
      </Main>
    </>
  );
}
