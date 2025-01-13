import styled from "styled-components"

export const Container = styled.div `
    max-width: 100%;
    height: 100vh;
    display: flex;
    padding: 20px; 
    flex-direction: column;
    h1 {
        color: white;
        font-size: 26px;
    };
    .topPage {
    height: 50px;
    display: flex;
    max-width: 100%;
    flex-direction: horizontal;
    justify-content: space-between;

    .transactionTable {
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 23px 12px;
    max-width: 100%;
    justify-content: space-between;
    align-items: start;
    background-color: white;
    height: calc(100% - 177px); /*ao finalizar a página, usar calc*/
    border-radius: 5px;
    text-align: center;
    color:rgb(100, 98, 98);

    .emptyText {
        width: 50%
    }
    }

    .transaction {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 23px;
        align-items: center;
    }

    .transactions {
        width: 100%;
        height: calc(100% - 40px);
        overflow: auto;
    }

    .balance {
        height: 20px;
        width: 100%;
    }

    .boldBalance {
        font-weight: 700;
        font-size: 17px;
        color: black;
    }
    .description {
    width: 100%;
    text-align: start;
    padding: 0 10px
    }

    .date {
        color: #C6C6C6;
    }

    .income {
        color: #03AC00; 
    }

    .expense {
        color: #C70000;
    }

    .buttons {
        display: flex;
        width: 100%;
        margin-top: 13px; 
        a {
            width: 100%;
        }
        a:first-child {
            margin-right: 7.5px;
        }
        a:last-child {
            margin-left: 7.5px;
        }
    }

    .newTransactionButton {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 114px;
        background-color: #A328D6; 
        color: white;
        border-radius: 5px;
        padding: 10px;

        h1 {
            display: flex;
            font-size: 17px;
            justify-content:start;
        }
    }

    .transactionIcon {
        display:flex;
        height: 25px;
        width: 25px;
        font-size: 35px;
        color: white;
        justify-content: center;
        align-items: center;
        line-height: 0;
        border: 2px solid white;
        border-radius: 50%;
    }

    .icon {
        cursor:pointer;
    }

    input::placeholder {
        color:rgb(100, 98, 98);
    }

    a:link {
        text-decoration: none;
    }


}
`