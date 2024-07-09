import styled, { DefaultTheme } from "styled-components/native";

interface ThemeProps {
  theme: DefaultTheme;
}

export const Container = styled.View<ThemeProps>`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}: ThemeProps) => theme.colors.background};
`;

export const Title = styled.Text<ThemeProps>`
    font-size: 24px;
    font-weight: bold;
    color: ${({theme}: ThemeProps) => theme.colors.title};
`;