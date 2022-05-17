import styled from "styled-components";


export const Container = styled.div `
    form {
        display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    }

   

    input {
        padding: 8px 15px;
        margin-bottom: 1.5rem;
        border-radius: 4px;
        border: 1px solid #282c34;

        
    }

    input[type="submit"]  {
            background-color: #61dafb;
            color: black ;
            transition: 0.5s;
            cursor: pointer;
            border: 1px solid #61dafb ;
        }

        input[type="submit"]:hover {
            background-color: #fff;
            border-color: #282c34;
        }

        .input-container {
         display: flex;
         flex-direction: column;
         text-align: left;
        }
        .input-container label {
            font-weight: bold;
            font-size: 18px;
            margin-bottom: .4em;
        }


`