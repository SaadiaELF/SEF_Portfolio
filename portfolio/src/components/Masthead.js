import React from "react";
import { List, ListInlineItem } from "reactstrap"
import "../styles/Masthead.css";

// Masthead component holding link to github and LinkedIn
function Masthead() {
    return (
        <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto my-0 mt-5">～Saadia El fekak～</h1>
                    <h3 className="mx-auto mt-4"><span>Full Stack Developer</span></h3>
                    <List type="inline">
                        <ListInlineItem>
                            <a href="https://www.linkedin.com/in/saadia-el-fekak-5b138780 " target="_blank" rel="noreferrer"><i
                                className="fab fa-linkedin fa-5x">
                            </i>
                            </a>
                        </ListInlineItem>
                        <ListInlineItem>
                            <a href="https://github.com/SaadiaELF" target="_blank" rel="noreferrer"><i className="fab fa-github fa-5x ms-5">
                            </i>
                            </a>
                        </ListInlineItem>
                    </List>

                </div>
            </div>
        </header>);
}

export default Masthead;