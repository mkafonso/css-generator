import { useState } from 'react';

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
  // declare states
  const [text, setText] = useState('Text Here');
  const [color, setColor] = useState('#ffffff');
  const [background, setBackground] = useState('#000000');

  // render Button Options
  function renderButtonOptions() {
    return (
      <div className="container">
        <details className="default square">
          <summary>Font / Text</summary>
          <form>
            <div className="form-group">
              <label htmlFor="text">Text:</label>
              <input
                type="text"
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="color">Color:</label>
              <input
                type="color"
                name="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="color">Background:</label>
              <input
                type="color"
                name="background"
                value={background}
                onChange={(e) => setBackground(e.target.value)}
              />
            </div>
          </form>
        </details>
      </div>
    );
  }

  // update button styles
  let buttonStyles = {
    color: color,
    background: background,
  };

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

            {renderButtonOptions()}
          </ButtonOptions>

          <ButtonPreview>
            <span className="title">Preview Button</span>

            <div className="previewContent">
              <Button style={buttonStyles}>{text}</Button>
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
