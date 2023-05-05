import React, { useEffect, useState } from "react";
import { PageLayout } from "../common/PageLayout";
import styled from "styled-components";
import { Input } from "../common/inpiut";
import visibility_on from "./../../icons/visibility_on.svg";
import visibility_off from "./../../icons/visibility_off.svg";
import { Button } from "../common/Button";
import { Spinner } from "../common/Spinner";

const From = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;
const PasswordInputWrapper = styled.div`
  display: flex;
  height: 40px;
  margin-bottom: 8px;
  box-sizing: border-box;
`;

const ImageWrapper = styled.button`
  height: 40px;
  width: 40px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #ccc;
    transition: 0.2s;
  }
`;

let timeout;

export const Login = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    e.persist();
    setFormFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <From onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              type="text"
              value={formFields.username}
              onChange={handleInputChange}
              name="username"
              placeholder="Username"
            />
            <PasswordInputWrapper>
              <Input
                type={isPasswordShowed ? "text" : "password"}
                value={formFields.password}
                onChange={handleInputChange}
                name="password"
                placeholder="Password"
              />
              <ImageWrapper
                onClick={() => setIsPasswordShowed((prev) => !prev)}
                type="button"
              >
                <img
                  src={isPasswordShowed ? visibility_on : visibility_off}
                  style={{ height: "60%" }}
                />
              </ImageWrapper>
            </PasswordInputWrapper>
            <Button large type="submit" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </Button>
            {!loading && (
              <>
                <div className="alt-text">or</div>
                <Button secondary type="button">
                  Register
                </Button>
              </>
            )}
          </>
        )}
      </From>
    </PageLayout>
  );
};
