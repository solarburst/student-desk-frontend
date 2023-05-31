import React, { ReactElement } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface IDefaultLayout {
    children?: ReactElement;
}

const DefaultLayout = ({ children }: IDefaultLayout) => {	
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default DefaultLayout;