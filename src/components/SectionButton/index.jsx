// import styles
import {
  Container,
  LayoutForButtonSection,
  ButtonOptions,
  ButtonPreview,
  CSSOutput,
  Button,
} from './styles';

const SectionButton = () => {
  return (
    <Container id="SectionButton">
      <h1 className="title">CSS Button Generator</h1>

      <p className="description">
        This generator will help you design and learn how to make CSS3 Buttons.
        By using this generator it will save you time and effort in creating
        that perfect CSS button for your site.
      </p>

      <LayoutForButtonSection>
        <div>
          <ButtonOptions>
            <span className="title">Button Options</span>
          </ButtonOptions>

          <ButtonPreview>
            <span className="title">Preview Button</span>

            <div className="previewContent">
              <Button>Text Here</Button>
            </div>
          </ButtonPreview>
        </div>

        <CSSOutput>
          <span className="title">CSS Output</span>
        </CSSOutput>
      </LayoutForButtonSection>
    </Container>
  );
};

export default SectionButton;
