import MainNavigation from "./MainNavigation";
import classes from "./MainLayout.module.css"
import styled from "styled-components";


const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  
  background: #131313;
`;
const Container = styled.div`
  display: grid;
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;




function MainLayout(props) {
    return (
        <div>
            <Section>
            <Container>
                <MainNavigation />
                <main className={classes.main}>{props.children}</main>
            </Container>
            </Section>
        </div>
    )
}

export default MainLayout;