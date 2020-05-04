import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  /* padding-top: 30px; */

  /* margin-top: 20px; */
  /* border-top: 1px solid #eee; */

  padding-top: 50px;
  list-style: none;

  header {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    strong {
      color: #333;
      font-size: 16px;
    }

    select {
      cursor: pointer;
      border: none;
      background: none;
      font-size: 14px;

      &:hover {
        color: #7159c1;
      }

      option {
        color: #000;
      }
    }
  }

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    border: none;
    background: none;
    color: #333;
    font-size: 14px;

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
    }

    &:hover:enabled {
      color: #7159c1;
    }
  }
`;
