import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../assets/404.png'

const ErrorContainer = styled.div`
  height: 80vh;
  width: 80vw;
  padding: 10vh 10vw;
`
const ErrorImg = styled.div`
  width: 80vw;
  height: 36vh;
`
const Img = styled.img`
  width: 100%;
  max-height: 100%;
`
const ErrorText = styled.div`
  padding: 10vh 0;
  text-align: center;
`
const ErrorLink = styled.div`
  width: 135px;
  background-color: #9147ff;
  border: 1px solid #9147ff;
  border-radius: 5px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`
const StyledLink = styled(Link)`
  color: white;
  padding: 6px 0px;
`

const PageNotFound = () => {
  return (
    <ErrorContainer className="error">
      <ErrorImg>
        <Img src={img} alt="404" />
      </ErrorImg>
      <ErrorText>
        <div>
          I think that's not the page
        </div>
        <div>
          you were looking for..
        </div>
      </ErrorText>
      <ErrorLink>
        <StyledLink to="/">Let's go Home</StyledLink>
      </ErrorLink>
    </ErrorContainer>
  )
}

export default PageNotFound
