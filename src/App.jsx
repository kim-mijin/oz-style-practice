import styled from "styled-components";
// import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { flexMixin } from "./style/style";


const StyledSection = styled.section`
${flexMixin({ justify: "center", align: "center", wrap: "wrap", gap: 20})}
  padding: 20px 40px;
`;

function App() {
  return (
    <>
      <Header />
      <StyledSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </StyledSection>
    </>
  );
}

export default App;
