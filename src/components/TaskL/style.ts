import styled  from "styled-components";



export const Container = styled.div `
    .task {
        display: flex;
        justify-content: space-between;
        max-width: 400px;
        margin: 0 auto;
        border-bottom: 1px solid #CCC;
        padding: 1em;
    }

    i {
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 40px;
    }

    i:hover {
        color: darkseagreen;
    }

`