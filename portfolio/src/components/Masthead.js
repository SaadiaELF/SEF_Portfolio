import React from "react";
import { List, ListInlineItem, Container, UncontrolledTooltip} from "reactstrap"
import "../styles/Masthead.css";

// Masthead component holding link to github and LinkedIn
function Masthead() {
    return (
        <header className="masthead">
            <Container className="d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto my-0 mt-5">～Saadia El fekak～</h1>
                    <h3 className="mx-auto mt-4"><span>Full Stack Developer</span></h3>
                    <List type="inline">
                        <ListInlineItem>
                            <a href="https://www.linkedin.com/in/saadia-el-fekak-5b138780 " target="_blank" rel="noreferrer" id="linkedin"><i
                                className="fab fa-linkedin fa-5x">
                            </i>
                            </a>
                        </ListInlineItem>
                        <ListInlineItem>
                            <a href="https://github.com/SaadiaELF" target="_blank" rel="noreferrer" id="github"><i className="fab fa-github fa-5x">
                            </i>
                            </a>
                        </ListInlineItem>
                    </List>

                </div>
            </Container>
            <UncontrolledTooltip
                placement="bottom"
                target="linkedin"
            >
                LinkedIn Page
            </UncontrolledTooltip>
            <UncontrolledTooltip
                placement="bottom"
                target="github"
            >
                GitHub Page
            </UncontrolledTooltip>
        </header>
    );
}

export default Masthead;