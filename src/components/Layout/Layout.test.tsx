import { render } from "@testing-library/react";
import Layout from "./Layout";

function Header() {
  return <header>header</header>;
}
function Content() {
  return <main>content</main>;
}

const header = <Header />;
const content = <Content />;

const renderLayout = () => {
  const utils = render(<Layout header={header} content={content} />);

  return { ...utils };
};

describe("Layout component", () => {
  it("render Wrapper", () => {
    const { getByTestId } = renderLayout();
    const wrapper = getByTestId("layoutWrapper");

    expect(wrapper).toBeInTheDocument();
  });

  it("render Header", () => {
    const { getByTestId } = renderLayout();
    const layoutheader = getByTestId("header");

    expect(layoutheader).toBeInTheDocument();
  });

  it("render props header", () => {
    const { getByText } = renderLayout();
    const propsheader = getByText("header");

    expect(propsheader).toBeInTheDocument();
  });

  it("render Content", () => {
    const { getByTestId } = renderLayout();
    const layoutContent = getByTestId("content");

    expect(layoutContent).toBeInTheDocument();
  });

  it("render props Content", () => {
    const { getByText } = renderLayout();
    const propsContent = getByText("content");

    expect(propsContent).toBeInTheDocument();
  });
});
