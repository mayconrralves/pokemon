import styled from 'styled-components';

export const Container = styled.div`
    width: 90vw;
    height: 70vh;
    border-radius: 12px;
    border: 0;
    background-color: rgba(0,0,100, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 20px;
        div  {
            display: flex;
            justify-content: center;
            position: relative;
            align-items: center;
            flex-direction: column;
            width: 50%;
            height: 50%;
            margin: 0 6px;
            h2 {
                font-size: 3vw;
                margin-top: 10px;
                margin-bottom: 30px;
                color: white;
                text-transform: capitalize;
            }
            img {
                height: 20vh;
                width: 20vw;
            }
            &:nth-child(2) {
                cursor: pointer;
                h2 {
                    font-size: 4vw;
                }
                img {
                    height: 28vh;
                    width: 28vw;
                    border: solid 1 red;
                }
             }
            &:nth-child(2n+1)::before{
                position:  absolute;
                background-color: rgba(0,0,0,0.4);
                height: 25%;
                width:  100%;
                border-radius: 10px;
                opacity: 0;
                content: "";
                transition: opacity 1.9s;
                align-items: center;
                justify-content: center;
                display: flex;
                font-size: 2.3em;
                font-weight: bold;
                color: white;
                cursor: pointer;
                
            }
            &:first-child:hover::before{
                content: "Previous";
                opacity: 0.7;

            }
            &:last-child:hover::before{
                content: "Next";
                opacity: 0.7;
                
            }
        }
    }
`;