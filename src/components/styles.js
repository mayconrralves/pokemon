import styled from 'styled-components';

export const Container = styled.div`
    width: 700px;
    height: 500px;
    border-radius: 12px;
    border: 0;
    background-color: rgba(0,0,100, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    div {
        div  {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: inherit;
            height: inherit;
            h2 {
                font-size: 1.8em;
                margin-top: 10px;
                margin-bottom: 30px;
                color: white;
                text-transform: capitalize;
            }
            img {
                height: 150px;
                width: auto;
                &:nth-child(2){
                        height: 200px;
                        border: solid 1 red;
                    }
            }
        }
    }
    div{
        width: inherit;
        height: auto;
        display: flex;
        justify-content: space-around;
        margin-top: 40px;
        margin-bottom: 20px;
        button {
            height: 50px;
            width: 150px;
            border-radius: 12px;
            border: 0;
            margin-left: 12px;
            background-color: rgba(0,150,0,0.8);
            color: white;
            font-weight: bold;
            font-size: 1.3em;
        }
    }
`;